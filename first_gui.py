#!/usr/bin/python

from guizero import *


def error_handler():
    info("Interface, ", "Press this button, I dare you!")


app = App(title="Snider Technical Solutions", height=200)
button = PushButton(app, text="Execute", command=error_handler)

app.display()
