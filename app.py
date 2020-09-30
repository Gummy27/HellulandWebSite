from flask import Flask, render_template
from flask_assets import Environment, Bundle

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
    return render_template("projects.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)
    app.testing = True
    app.debug = True