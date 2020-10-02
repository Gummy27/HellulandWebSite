<main class="project">
    {% for project in projects %}
        <div>
            <img src="/static/pictures/shortMovies/{{project}}.jpg", width=200, height=300> 
        </div>
        <div class="projectsText">
            {% include "projectsTpl/"+project+".tpl" %}
            <a href="/projects/{{ project }}.html"><h3>Nánar</h3></a>
        </div>
    {% endfor %}
</main>