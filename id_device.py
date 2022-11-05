import socket

server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server.connect(("8.8.8.8", 80))
my_ip = server.getsockname()[0]
print("Hello User")
print(f"This device's IP Address is: {my_ip}")
right_IP = input("Would you like to change this? Y or N: ")
if right_IP == "N" or right_IP == "n":
    print(f"Ok, this device's ID will stay: {my_ip}")
else:
    right_ip = input("What would you like the new IP to be? ")
    print(f"Ok, this device now has an IP of {right_ip}")
