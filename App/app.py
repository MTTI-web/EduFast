from ocr import ocr
from tkinter import *
import sys
from tkinter.filedialog import askopenfilename 
WIN = Tk()
Label(WIN,text="EduFast",font=("Arial",30),fg="orange",bg="white").pack(pady=10)

def exit():
    sys.exit()
def openfile():
    filename = askopenfilename(initialdir="/Pictures", filetypes =[('jpeg files', '*.jpg'),("png files","*.png"),("all files","*.*")]) 	
    path = filename
    text = ocr(path)
    file1 = open("recognized.txt", "w+") 
    file1.write("") 
    file1.close() 
    file1 = open("recognized.txt", "a") 
    file1.write(text) 
    file1.write("\n") 

open_b = Button(WIN,text="Open image",fg="white",bg="green",command=openfile)
open_b.pack(pady=5)
exit_b = Button(WIN,text="Exit",fg="white",bg="green",command=exit)
exit_b.pack(ipadx=23)
WIN.mainloop()