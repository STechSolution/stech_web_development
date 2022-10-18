#!/usr/bin/python

noises = {
	"dog": "woof",
	"pig": "oink",
	"duck": "quack",
	"cat": "meow",
}

def speak(animal="dog"):
	noise = noises.get(animal)
	if noise:
		return noise
	return "?"

print (speak())
print (speak("duck"))
print (speak("cat"))

def last_element(list):
	return list.pop()
	if list.pop() == None:
		print (None)
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
weeks = []

print (last_element(days))
print (last_element(weeks))
