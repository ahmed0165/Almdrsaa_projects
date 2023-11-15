import random

def guessing_game():
    print("Welcome to the Number Guessing Game!")
    print("You need to pick a number between 1 and 10.")

    play_again = True

    while play_again:
        # Get the player's number
        player_number = int(input("Enter your number: "))

        # Validate the player's number
        if player_number < 1 or player_number > 10:
            print("Invalid input. Please pick a number between 1 and 10.")
            continue

        # Generate a random number between 1 and 10
        computer_number = random.randint(1, 10)
        attempts = 0

        print("\nGreat! Let's see if you can guess the computer's number.")

        while True:
            try:
                # Get the player's guess
                guess = int(input("Enter your guess: "))
                attempts += 1

                # Check if the guess is correct
                if guess == computer_number:
                    print(f"Congratulations! You guessed the number in {attempts} attempts.")
                    break
                elif guess == player_number:
                    print("Wow! You picked the same number as the computer!")
                elif guess < computer_number:
                    print("Too low. Try again.")
                else:
                    print("Too high. Try again.")
            except ValueError:
                print("Invalid input. Please enter a valid number.")

        # Display the minimum number of attempts
        if attempts == 1:
            print("You guessed it in 1 attempt! That's impressive!")
        else:
            print(f"The minimum number of attempts is {attempts}.")

        # Ask the player if they want to play again
        play_again_input = input("Do you want to play again? (yes/no): ").lower()
        play_again = play_again_input == 'yes'

if __name__ == "__main__":
    guessing_game()
