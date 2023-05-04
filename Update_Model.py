import numpy as np        #NumPy is a Python library used for scientific computing and data analysis.
import glob               #glob is a Python library is used to find all the pathnames.
import random             #The random module is a Python library that is use for generating random numbers.
import cv2                #The "cv2" module is part of the OpenCV library, which provides various image and video processing functionalities.


#Fisher Face Recognizer is a face recognition algorithm based on Fisher's linear discriminant analysis.
fishface=cv2.face.FisherFaceRecognizer_create()       #creates an instance of the Fisher Face Recognizer in OpenCV.
data={}                                               #creates an empty dictionary.


#Function to update the emotions
def update(emotions):
    run_recognizer(emotions)
    print("Saving model...")
    fishface.save("model.xml")
    print("Model saved!")


#Function to train the model
def make_sets(emotions):
    training_data=[]
    training_label=[]
    for emotion in emotions:
        training=training=sorted(glob.glob("dataset/%s/*" %emotion))
        for item in training:
            image=cv2.imread(item)
            gray=cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)                    #converting into grayscale
            training_data.append(gray)                                      #appending image into training_data list
            training_label.append(emotions.index(emotion))                  #appending index into training_label list
    return training_data, training_label


#function to train face recognition model to make it capable of recognizing emotions in facial images.
def run_recognizer(emotions):
    training_data, training_label=make_sets(emotions)
    print("Training model...")
    print("The size of the dataset is "+str(len(training_data))+" images")
    fishface.train(training_data, np.asarray(training_label))

