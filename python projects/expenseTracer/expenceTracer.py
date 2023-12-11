import tkinter as tk
from tkinter import ttk
from tkinter import *
from ttkthemes import ThemedTk


#*************************GUI******************************
# window = tk.Tk()
window = ThemedTk(theme="radiance")
window.title("Expense Tracer")
window.geometry("1000x600")
window.configure(background="#E6E6FA")


#********************** amount************** 
amountLabel = tk.Label(window,text="Amount:",font=34)
amountLabel.place(x=20,y=15) 
text_area_amount = tk.Text(window,height=1,width=35)
text_area_amount.place(x=500,y=15)

# ********************currency*******************
currencyLabel = tk.Label(window,text="Currency:",font=34)
currencyLabel.place(x=20,y=45)
n = tk.StringVar()
currencySelectBox = ttk.Combobox(window,width=44,textvariable=n)
currencySelectBox['values']=('EGP','USD','GBP')
currencySelectBox.place(x=500,y=45)

# *****************category*****************
categoryLabel = tk.Label(window,text="Category",font=34)
categoryLabel.place(x=20,y=75) 
x = tk.StringVar()
categorySelectBox = ttk.Combobox(window,width=44,textvariable=x)
categorySelectBox['values']=('life expenses','electricity','gas','rental','grocery','savings','education','charity')
categorySelectBox.place(x=500,y=75)

# ********************payment***************************
paymentLabel = tk.Label(window,text="Payment Method:",font=34)
paymentLabel.place(x=20,y=105) 
y = tk.StringVar()
paymentSelectBox = ttk.Combobox(window,width=44,textvariable=y)
paymentSelectBox['values']=('cash','Credit Card','PayPal')
paymentSelectBox.place(x=500,y=105)

# ******************date***********************
DateLabel = tk.Label(window,text="Date:",font=34)
DateLabel.place(x=20,y=135)
text_area_date = tk.Text(window,height=1,width=35)
text_area_date.place(x=500,y=135)

# ******************button*********
def addExpense():
     # Get the values from the widgets
    amount_value = text_area_amount.get("1.0", "end-1c")
    currency_value = currencySelectBox.get()
    category_value = categorySelectBox.get()
    payment_value = paymentSelectBox.get()
    date_value = text_area_date.get("1.0", "end-1c")

    #  Append the values to the list
    new_expense = (amount_value, currency_value, category_value, payment_value)
    Lst.append(new_expense)
    t.tree.insert("", "end", values=new_expense)

btn_add = tk.Button(window,text="Add Expense",command=addExpense, bg="#4CAF50", fg="white")
btn_add.place(x=700,y=160)



# *******************table****************

class Table:
    def __init__(self, window, data, headers):
        self.tree = ttk.Treeview(window, columns=headers, show="headings", height=5)
        self.tree.place(x=100, y=220)

        for header in headers:
            self.tree.heading(header, text=header)

        for row in data:
            self.tree.insert("", "end", values=row)

# Example data and headers
Lst = []

headers = ['Amount', 'Currency', 'Category', 'Payment Method']

# Create the table
t = Table(window, Lst, headers)


window.mainloop()