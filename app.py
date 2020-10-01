from flask import Flask, render_template, url_for
from flask_assets import Environment, Bundle
import os

app = Flask(__name__)

assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('footer.scss', 'header.scss', 'main.scss', 'project.scss', filters='pyscss', output='all.css')
assets.register('scss_all', scss)

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
    projectsText = []
    for filename in os.listdir("templates/projectsTpl/"):
        if filename.split('.')[-1] == 'tpl':
            projectsText.append(filename.split('.')[0])
    return render_template("projects.html", projects=projectsText)

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == '__main__':
    os.chdir("/srv/github/")
    app.run(debug=True)
    app.testing = True
    app.debug = True