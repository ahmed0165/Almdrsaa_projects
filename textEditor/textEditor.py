import tkinter as tk
from tkinter.filedialog import askopenfilename,asksaveasfilename

def openFile():
    filePath= askopenfilename(filetypes=[("text file",".txt"),("All files",".*")])
    if not filePath :
        return
    
    text_editor.delete(1.0,tk.END)

    with open(filePath,"r") as input_file:
        text = input_file.read()
        text_editor.insert(tk.END,text)
    
    window.title(f"text editor - {filePath}")


def saveFile():
    filePath= asksaveasfilename(
        defaultextension="txt",
        filetypes=[("text file",".txt"),("All files",".*")])
    if not filePath :
        return
    
    with open(filePath,"w") as output_file:
        text = text_editor.get(1.0,tk.END)
        output_file.write(text)
    
    window.title(f"text editor - {filePath}")



window = tk.Tk()
window.title("Text Editor")
window.rowconfigure(0,minsize=600)
window.columnconfigure(1,minsize=800)


text_editor = tk.Text(window)
frame_buttons = tk.Frame(window,relief=tk.RAISED)
btn_open = tk.Button(frame_buttons,text="open file",command=openFile)
btn_save = tk.Button(frame_buttons,text="save As",command=saveFile)

btn_open.grid(column=0,row=0,sticky="ew",padx=5,pady=5)
btn_save.grid(column=0,row=1,sticky="ew",padx=5)

frame_buttons.grid(column=0,row=0,sticky="ns")
text_editor.grid(column=1,row=0,sticky="nsew")


window.mainloop()