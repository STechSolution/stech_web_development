#!/usr/bin/python

from guizero import *

def say_hello():
    info("Interface", "Press this button I dare you!")

app = App(title="Snider Technical Solutions", height=200)
button = PushButton(app, text="Execute", command=say_hello)

app.display()
