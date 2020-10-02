from flask import Flask, render_template, url_for
from flask_assets import Environment, Bundle
import os
import json

app = Flask(__name__)

assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('home.scss', 'about.scss', 'footer.scss', 'header.scss', 'main.scss', 'project.scss', filters='pyscss', output='all.css')
assets.register('scss_all', scss)

session = {} 
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/projects")
def projects():

    projectsText = []
    for filename in os.listdir("templates/projectsTpl/"):
        if filename.split('.')[-1] == 'tpl':
            projectsText.append(filename.split('.')[0])

    return render_template("projects.html", projects=projectsText)

@app.route("/projects/<name>")
def project(name):
    return render_template("projectsTpl/"+name)

@app.route("/Gallery")
def gallery():
    return render_template("gallery.html")

@app.route("/about")
def about():
    with open("static/database/personnel.json", 'r') as file:
        personnel = json.load(file)

    for x in personnel:
        if x["middleName"] == None:
            x["middleName"] = ""

    return render_template("about.html", personnel=personnel)

if __name__ == 'app':
    os.chdir("/srv/github/HellulandWebSite/")
    app.run(debug=True)
    app.testing = True
    app.debug = True