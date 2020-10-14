from flask import Flask, render_template, url_for
from flask_assets import Environment, Bundle
import os
import json

app = Flask(__name__)
assets = Environment(app)

assets.append_path('static/scss')

scss = Bundle('home.scss', 'about.scss', 'footer.scss', 'header.scss', 'main.scss', 'project.scss', filters='pyscss', output='all.css')
assets.register('scss_all', scss)

session = {} 
@app.route("/")
def home():
    slideshowPics = []
    for filename in os.listdir("static/pictures/slideShow"):
        slideshowPics.append(f"/static/pictures/slideShow/{filename}")

    return render_template("home.html", slideshowPics=slideshowPics)

# Í þessum beini koma fram öll verkefni í ákveðnum miðli s.s. stuttmyndir
@app.route("/projects/<media>")
def projects(media):
    projectsText = []
    for filename in os.listdir("templates/projects/"+media):
        if filename.split('.')[-1] == 'tpl':
            projectsText.append(filename.split('.')[0])

    mediaTranslation = {
        "shortMovies": "Stuttmyndir",
        "music": "Tónlist",
        "podcasts": "Hlaðvörp",
        "comingSoon": "Væntanlegt"
    }

    return render_template("projects.html", projects=projectsText, media=media, displayMedia=mediaTranslation[media])

# Aðgengi að þessum beini er í gegnum projects. Þarna fær heilt verkefni eina síðu útaf fyrir sig
@app.route("/projects/<media>/<name>")
def project(media, name):
    return render_template("project.html", media=media, name=name)

@app.route("/Gallery")
def gallery():
    
    return render_template("gallery.html")

@app.route("/about")
def about():
    with open("static/database/personnel.json", 'r', encoding="utf-8") as file:
        personnel = json.load(file)

    for x in personnel:
        if x["middleName"] == None:
            x["middleName"] = ""

    return render_template("about.html", personnel=personnel)

@app.errorhandler(404)
def error(error):
	return render_template("error404.html")

if __name__ == 'app':
    try:
        os.chdir("/srv/github/HellulandWebSite/")
    except:
        try:
            os.chdir("Desktop/Projects/HellulandWebSite/")
        except:
            pass