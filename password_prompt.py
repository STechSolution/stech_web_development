import getpass

username = input("What would you like your username to be?: ")

# Prompting the user for their password with getpass hides it from view while typing
password = getpass.getpass(
    prompt="What would you like your password to be?: ", stream=None)

# Set up our password length variable
pass_length = len(password)

# Cool way to display the password, without displaying it
encrypted_pass = "*" * len(password)

# Print message to screen
print(f"{username}, your password {encrypted_pass}, is {pass_length} characters long.")
