import tkinter as tk                             #libraries for building a graphical user interface
import cv2                                       #for working with images using OpenCV
from PIL import Image, ImageTk                   #Python Imaging Library package for working with images
#Image class for creating and manipulating image objects, 
#ImageTk module for displaying images in tkinter GUIs.


# Define constants for the GUI window
WINDOW_TITLE = "Camera App"
width, height = 800, 600
cap = cv2.VideoCapture(0)                        #captures video frames from the default camera
cap.set(cv2.CAP_PROP_FRAME_WIDTH, width)         #set the width of the frame
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, height)       #set the height of the frame


# Create the GUI window and label widget
root = tk.Tk()
root.title(WINDOW_TITLE)
root.bind('<Escape>', lambda e: root.quit())
lmain = tk.Label(root)
lmain.pack()

# Define a function to display the video feed in the GUI window
def show_frame():
    _, frame = cap.read()
    frame = cv2.flip(frame, 1)
    cv2image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)
    img = Image.fromarray(cv2image)
    imgtk = ImageTk.PhotoImage(image=img)
    lmain.imgtk = imgtk
    lmain.configure(image=imgtk)
    lmain.after(10, show_frame)

show_frame()
root.mainloop()