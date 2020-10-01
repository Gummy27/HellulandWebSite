<main class="project">
    {% for project in projects %}
        <div>
            <img src="/static/pictures/{{project}}.jpg", width=200, height=300> 
        </div>
        <div class="projectsText">
            {% include "projectsTpl/"+project+".tpl" %}
            <a><h3>Nánar</h3></a>
        </div>
    {% endfor %}
</main>