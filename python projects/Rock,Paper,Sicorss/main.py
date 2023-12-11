import random
#start the project
#Ask the player to make a move
user = input('Make your move :"r" for "Rock" ,"P" for "Paper","S" for "Scissors"\n ')
print("User Played " + user)
#pc make move randomly
pc = random.choice(['r','p','s'])
print("pc played " + pc)

#pc == player = tie
if(user == pc):
    print("its a TIE")
#(player=p and pc =rock) or (player = r and pc s) or (player = s and pc = p) the user win
elif(user=="p" and pc=="r") or (user == "r" and pc== "s") or (user == "s" and pc == "p"):
    print("you win")
#else pc won
else:
    print("you lost")

