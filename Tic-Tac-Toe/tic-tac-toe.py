import random
import tkinter as tk

counter = 0
board_values = [[' ' for _ in range(3)] for _ in range(3)]
player_score = 0
computer_score = 0

def cell_clicked(row, col, button):
    global counter
    global player_score
    global computer_score

    if counter % 2 == 0:
        # player turn
        print(f"Clicked on cell ({row + 1}, {col + 1})")
        button.config(text="X", state=tk.DISABLED)
        board_values[row][col] = 'X'
        if check_winner('X'):
            print("Player X wins!")
            player_score += 1
            update_scores()
            update_winner_label("Player X wins!")
            restart_game()
        elif check_tie():
            print("It's a tie!")
            update_winner_label("It's a tie!")
            restart_game()
        else:
            # pc turn
            make_computer_move()

    print_board_values()

def make_computer_move():
    global computer_score  # Add this line to declare computer_score as a global variable
    available_moves = [(i, j) for i in range(3) for j in range(3) if board_values[i][j] == ' ']
    if available_moves:
        row, col = random.choice(available_moves)
        button = grid_frame.grid_slaves(row=row, column=col)[0]
        button.config(text="O", state=tk.DISABLED)
        board_values[row][col] = 'O'
        if check_winner('O'):
            print("Player O wins!")
            computer_score += 1
            update_scores()
            update_winner_label("Player O wins!")
            restart_game()
        elif check_tie():
            print("It's a tie!")
            update_winner_label("It's a tie!")
            restart_game()
def check_winner(player):
    # Check rows, columns, and diagonals for a win
    for i in range(3):
        if all(board_values[i][j] == player for j in range(3)) or \
           all(board_values[j][i] == player for j in range(3)):
            return True
    if all(board_values[i][i] == player for i in range(3)) or \
       all(board_values[i][2-i] == player for i in range(3)):
        return True
    return False

def check_tie():
    return all(board_values[i][j] != ' ' for i in range(3) for j in range(3))

def print_board_values():
    print("Current Board Values:")
    for row in board_values:
        print(row)
    print()

def update_scores():
    userArea.config(text=str(player_score))
    pcArea.config(text=str(computer_score))

def update_winner_label(message):
    winner_label.config(text=message)

def restart_game():
    global counter
    global board_values

    counter = 0
    board_values = [[' ' for _ in range(3)] for _ in range(3)]

    # Enable all buttons
    for button in grid_frame.winfo_children():
        button.config(text=" ", state=tk.NORMAL)

    

# Create the main window
window = tk.Tk()
window.title("Tic-Tac-Toe")
window.geometry("450x300")

# Restart button
btn_restart = tk.Button(window, text="Restart", font=("Arial", 14), command=restart_game)
btn_restart.place(x=180, y=60)

# Labels
user = tk.Label(window, text="You:", font=("Arial", 16))
user.place(x=50, y=20)
userArea = tk.Label(window, text="0", font=("Arial", 16))
userArea.place(x=150, y=20)

pc = tk.Label(window, text="Computer:", font=("Arial", 16))
pc.place(x=250, y=20)
pcArea = tk.Label(window, text="0", font=("Arial", 16))
pcArea.place(x=350, y=20)

# Winner Label
winner_label = tk.Label(window, text="", font=("Arial", 16))
winner_label.place(x=30, y=70)

# Create a frame for the 3x3 grid of buttons
grid_frame = tk.Frame(window)
grid_frame.place(relx=0.5, rely=0.7, anchor="center")

# Create a 3x3 grid of buttons within the frame
for i in range(3):
    for j in range(3):
        button = tk.Button(grid_frame, text=" ", width=10, height=3)
        button.grid(row=i, column=j)
        button.config(command=lambda row=i, col=j, btn=button: cell_clicked(row, col, btn))

# Run the Tkinter event loop
window.mainloop()
