from flask import Flask, render_template
app = Flask(__name__)


@app.route('/index.html')
def home():
   return render_template('index.html')

@app.route('/about.html')
def about():
   return render_template('about.html')

@app.route('/works.html')
def work():
   return render_template('works.html')

@app.route('/components.html')
def components():
   return render_template('components.html')

@app.route('/contact.html')
def contact_me():
   return render_template('contact.html')