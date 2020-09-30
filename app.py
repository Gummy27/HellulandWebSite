from flask import Flask, render_template

app = Flask(__name__)

session = {}
 
@app.route("/")
def home():
    return render_template("home.html")

    if request.method == 'POST':
        session['name'] = request.form.get('Name')
        session['email'] = request.form.get('Email')
        session['subject'] = request.form.get('Subject')
        session['messege'] = request.form.get('Messege')
        print(session)  

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/about")
def about():
    return render_template("about.html")

app.run(debug=True)