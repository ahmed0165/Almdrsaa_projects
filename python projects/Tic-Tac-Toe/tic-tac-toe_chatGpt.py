import tkinter as tk
from tkinter import messagebox
import random

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic Tac Toe")

        self.player_score = 0
        self.pc_score = 0

        self.current_player = "X"
        self.board = [""] * 9

        self.label_player_score = tk.Label(root, text="Player: 0", font=("Helvetica", 12))
        self.label_player_score.grid(row=0, column=0)

        self.label_pc_score = tk.Label(root, text="PC: 0", font=("Helvetica", 12))
        self.label_pc_score.grid(row=0, column=1)

        self.label_winner = tk.Label(root, text="", font=("Helvetica", 12))
        self.label_winner.grid(row=1, column=0, columnspan=2)

        self.buttons = []
        for i in range(3):
            for j in range(3):
                button = tk.Button(root, text="", font=("Helvetica", 24), width=5, height=2,
                                   command=lambda row=i, col=j: self.on_button_click(row, col))
                button.grid(row=i + 2, column=j)
                self.buttons.append(button)

        self.reset_button = tk.Button(root, text="Reset", font=("Helvetica", 12), command=self.reset_game)
        self.reset_button.grid(row=5, column=0, columnspan=2)

    def on_button_click(self, row, col):
        index = 3 * row + col
        if self.board[index] == "":
            self.board[index] = self.current_player
            self.buttons[index].config(text=self.current_player)
            if self.check_winner():
                self.label_winner.config(text=f"{self.current_player} wins!")
                if self.current_player == "X":
                    self.player_score += 1
                    self.label_player_score.config(text=f"Player: {self.player_score}")
                else:
                    self.pc_score += 1
                    self.label_pc_score.config(text=f"PC: {self.pc_score}")
                self.disable_buttons()
            elif "" not in self.board:
                self.label_winner.config(text="It's a draw!")
                self.disable_buttons()
            else:
                self.current_player = "O" if self.current_player == "X" else "X"
                self.label_winner.config(text="")

                if self.current_player == "O":
                    self.pc_play()

    def check_winner(self):
        winning_combinations = [(0, 1, 2), (3, 4, 5), (6, 7, 8),
                                (0, 3, 6), (1, 4, 7), (2, 5, 8),
                                (0, 4, 8), (2, 4, 6)]

        for combo in winning_combinations:
            if self.board[combo[0]] == self.board[combo[1]] == self.board[combo[2]] != "":
                return True
        return False

    def disable_buttons(self):
        for button in self.buttons:
            button.config(state=tk.DISABLED)

    def enable_buttons(self):
        for button in self.buttons:
            button.config(state=tk.NORMAL)

    def pc_play(self):
        available_moves = [i for i, value in enumerate(self.board) if value == ""]
        if available_moves:
            move = random.choice(available_moves)
            self.on_button_click(move // 3, move % 3)

    def reset_game(self):
        self.current_player = "X"
        self.board = [""] * 9
        for button in self.buttons:
            button.config(text="", state=tk.NORMAL)
        self.label_winner.config(text="")
        self.enable_buttons()


if __name__ == "__main__":
    root = tk.Tk()
    game = TicTacToe(root)
    root.mainloop()
