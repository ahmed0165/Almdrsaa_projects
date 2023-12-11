import random

attempets_list =[]

attempets = 0
rand_number = random.randint(1,10)


def showScore ():
    if not attempets_list:
        print("there is no currently a score start playing!")
    else :
        print(f"the current high score is {min(attempets_list)} attempets")

print("Hello welcome to the guessing game")

player_name = input("what is your name? ")
wanna_play = input(f'Hi, {player_name} would you like to play the guessing game? '
                   '(Enter  Yes/No)'
                   ).lower()

if(wanna_play == "no") :
    print("That is cool , thanks")
    exit()
else:
    showScore()

while wanna_play == "yes" :
    try:
        guess = int(input("Pick a number between 1 and 10: "))

        if(guess < 1 or guess >10):
            raise ValueError("Please guess a number within the given range")
        
        attempets+=1

        if(guess == rand_number):
            print("Nice ,you got it")
            print(f"it took you {attempets} attempets!")
            wanna_play = input("Would you like  to play again (Enter Yes/No): ").lower()
            attempets_list.append(attempets)

            if wanna_play == "no" :
                print("thats is cool have a good day")
            else:
                attempets = 0
                rand_number= random.randint(1,10)
                showScore()
                continue
        elif (guess > rand_number):
            print("it is lower")
        else:
            print("it is higher")
    except ValueError as error:
        print(error)
