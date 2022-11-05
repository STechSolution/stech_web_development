import pyfiglet
from termcolor import colored 

valid_colors = ("red", "blue", "green", "yellow", "magenta", "cyan")

msg = input("What would you like to print? ")
color = input("What color would you want it? ")

if color not in valid_colors:
	color = "cyan"

ascii_art = pyfiglet.figlet_format(msg)
colored_ascii = colored(ascii_art, color=color)
print(colored_ascii)