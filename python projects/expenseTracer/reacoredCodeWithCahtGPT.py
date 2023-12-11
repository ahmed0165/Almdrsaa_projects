import tkinter as tk
from tkinter import ttk
from ttkthemes import ThemedTk

# Create a ThemedTk instance with the "radiance" theme
window = ThemedTk(theme="radiance")
window.title("Expense Tracer")
window.geometry("1000x600")
window.configure(background="#E6E6FA")  # Set a light purple background

# Global variables to store expenses
Lst = []
text_area_amount = None  # Declare text_area_amount as a global variable

# Function to add an expense
def addExpense():
    # Get the values from the widgets
    amount_value = text_area_amount.get("1.0", "end-1c")
    currency_value = currencySelectBox.get()
    category_value = categorySelectBox.get()
    payment_value = paymentSelectBox.get()

    # Append the values to the list
    new_expense = (amount_value, currency_value, category_value, payment_value)
    Lst.append(new_expense)

    # Update the treeview
    t.tree.insert("", "end", values=new_expense)

# GUI setup
window.title("Expense Tracer")
window.geometry("1000x600")
window.configure(background="#E6E6FA")

# Labels and Entry Widgets
labels_and_entries = [
    ("Amount:", 15, 500, 15),
    ("Currency:", 45, 500, 45),
    ("Category:", 75, 500, 75),
    ("Payment Method:", 105, 500, 105),
    ("Date:", 135, 500, 135),
]

for label_text, label_y, entry_x, entry_y in labels_and_entries:
    label = tk.Label(window, text=label_text, font=("Arial", 14))
    label.place(x=20, y=label_y)

    entry = tk.Text(window, height=1, width=15)  # Change entry_height to 15 (integer)
    entry.place(x=entry_x, y=entry_y)
    if label_text == "Amount:":
        text_area_amount = entry  # Assign text_area_amount

# Comboboxes
currencySelectBox = ttk.Combobox(window, width=44, state="readonly")
currencySelectBox['values'] = ('EGP', 'USD', 'GBP')
currencySelectBox.place(x=500, y=45)

categorySelectBox = ttk.Combobox(window, width=44, state="readonly")
categorySelectBox['values'] = ('life expenses', 'electricity', 'gas', 'rental', 'grocery', 'savings', 'education', 'charity')
categorySelectBox.place(x=500, y=75)

paymentSelectBox = ttk.Combobox(window, width=44, state="readonly")
paymentSelectBox['values'] = ('cash', 'Credit Card', 'PayPal')
paymentSelectBox.place(x=500, y=105)

# Add Expense Button
btn_add = tk.Button(window, text="Add Expense", command=addExpense, bg="#4CAF50", fg="white", font=("Arial", 14))
btn_add.place(x=700, y=160)

# Table
class Table:
    def __init__(self, window, data, headers):
        self.tree = ttk.Treeview(window, columns=headers, show="headings", height=5)
        self.tree.place(x=100, y=220)

        for header in headers:
            self.tree.heading(header, text=header)

        for row in data:
            self.tree.insert("", "end", values=row)

# Example data and headers
headers = ['Amount', 'Currency', 'Category', 'Payment Method']

# Create the table
t = Table(window, Lst, headers)

# Start the Tkinter event loop
window.mainloop()
