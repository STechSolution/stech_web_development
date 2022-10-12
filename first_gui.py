#!/usr/bin/python

from guizero import *

def say_hello():
    info("An Alert", "Please don't press this button again!")

app = App(title="Snider Technical Solutions", height=200)
button = PushButton(app, text="Execute", command=say_hello)

app.display()
