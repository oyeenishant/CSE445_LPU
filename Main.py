import cv2 #OpenCV library, which is a popular computer vision library used for image and video processing.
import argparse #argparse library, which is a built-in library in Python used for parsing command-line arguments.
import time #time library
import os #os library, which provides a way to interact with the file system in Python.
import Update_Model #Update_Model, which likely contains functions for updating a machine learning model.
import glob #glob library, which is used for finding files and directories that match a certain pattern.
import random #random library, which provides various functions for generating random numbers and sequences.
import eel #eel library, which is a Python library that allows for creating desktop GUI applications using web technologies such as HTML, CSS, and JavaScript.
import winsound #Winsound library,which provides access to sound-playing functions for Windows systems.

frequency=2500
duration=1000

eel.init('WD_INNOVATIVE')  #for GUI application
emotions=["angry", "happy", "sad", "neutral"] #initializes a list of emotions with the emotions
fishface = cv2.face.FisherFaceRecognizer_create() #for facial recognition
font = cv2.FONT_HERSHEY_SIMPLEX #used for rendering text on the output


parser=argparse.ArgumentParser(description="Options for emotions based music player(Updating the model)")
parser.add_argument("--update", help="Call for taking new images and retraining the model.", action="store_true")
args=parser.parse_args()    
facedict={}
video_capture=cv2.VideoCapture(0)
facecascade=cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

#this function is used to crop and resize faces CLAHE preprocessing
def crop(clahe_image, face):
    for (x, y, w, h) in face:
        faceslice=clahe_image[y:y+h, x:x+w]
        faceslice=cv2.resize(faceslice, (350, 350))
        facedict["face%s" %(len(facedict)+1)]=faceslice
    return faceslice

#this function is used to capture frames from a video stream, save them
#and helps to enhance the images.
def grab_face():
    ret, frame=video_capture.read()
    
    cv2.imwrite('test.jpg', frame)
    cv2.imwrite("images/main%s.jpg" %count, frame)
    gray=cv2.imread('test.jpg',0)
    
    clahe=cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    clahe_image=clahe.apply(gray)
    return clahe_image

# this function is used to detect and extract faces from an images 
def detect_face():
    clahe_image=grab_face()
    face=facecascade.detectMultiScale(clahe_image, scaleFactor=1.1, minNeighbors=15, minSize=(10, 10), flags=cv2.CASCADE_SCALE_IMAGE)
    if len(face)>=1:
        faceslice=crop(clahe_image, face)
    else:
        print("No/Multiple faces detected!!, passing over the frame")

#this function is used to capture and save face images with a specific emotion
# to a dataset directory for training a machine learning model to recognize human emotions.
def save_face(emotion):
    print("\n\nLook "+emotion+" untill the timer expires and keep the same emotion for some time.")
    winsound.Beep(frequency, duration)
    print('\a')    
    for i in range(0, 5):
        print(5-i)
        time.sleep(1)
    
    while len(facedict.keys())<16:
        detect_face()

    for i in facedict.keys():
        path, dirs, files = next(os.walk("dataset/%s" %emotion))
        file_count = len(files)+1
        cv2.imwrite("dataset/%s/%s.jpg" %(emotion, (file_count)), facedict[i])
    facedict.clear()

#this function is used to updating a ML model to recognize human emotions based on a dataset of labeled face images. 
def update_model(emotions):
    print("Update mode for model is ready")
    checkForFolders(emotions)
    
    for i in range(0, len(emotions)):
        save_face(emotions[i])
    print("Collected the images, looking nice! Now updating the model...")
    Update_Model.update(emotions)
    print("Model train successful!!")

#this function is used to ensure that a directory exists for each emotion specified in a list
# otherwise it creates any missing
def checkForFolders(emotions):
    for emotion in emotions:
        if os.path.exists("dataset/%s" %emotion):
            pass
        else:
            os.makedirs("dataset/%s" %emotion)

def identify_emotions():
    prediction=[]
    confidence=[]
    for i in facedict.keys():
        pred, conf=fishface.predict(facedict[i])
        cv2.imwrite("images/%s.jpg" %i, facedict[i])
        prediction.append(pred)
        confidence.append(conf)
    output=emotions[max(set(prediction), key=prediction.count)]    
    print("You seem to be %s" %output) 
    facedict.clear()
    return output;

count=0

@eel.expose #Python decorator that is used in conjunction with the Eel library to expose Python functions to the frontend.

#this function is used to detects faces and recognizes emotions 
# until either the model is updated or 10 iterations are completed.
def getEmotion():
    count=0
    while True:
        count=count+1
        detect_face()
        if args.update:
            update_model(emotions)
            break
        elif count==10:
            fishface.read("model.xml")
            return identify_emotions()
            break

eel.start('main.html') #to start a graphical user interface



