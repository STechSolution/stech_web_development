#!/usr/bin/python
import requests
from random import choice
import pyfiglet
from termcolor import colored

header = pyfiglet.figlet_format("Snider Tech Joke Generator!")
colored(header, color='magenta')

print(header)
url = "https://icanhazdadjoke.com/search"
user_input = input("What kind of joke would you like to search? ")
res = requests.get(
    url,
    headers={"Accept": "application/json"},
    params={"term": user_input}
).json()

results = res["results"]
num_jokes = res["total_jokes"]

if num_jokes > 1:
    print(f"I found {num_jokes} jokes about {user_input}!")
    print(choice(results)['joke'])
elif num_jokes == 1:
    print(f"There is one joke on {user_input}.")
    print(results[0]['joke'])
else:
    print("Sorry, couldn't find any jokes..")
