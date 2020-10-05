<article class="header">
    <div class="logo">
        <a href="{{ url_for('home') }}"><img src="/static/pictures/HL_Whole.png" alt="Logo" width="70" height="70"></a>
        <a class="logoText" href="{{ url_for('home') }}"><img src="/static/pictures/texti_PR_shade.png" alt="Logo" width="140" height=auto></a>
    </div>
    <div>
        <p><a>/ / /</a></p>
        <p><a class="interface" href="{{ url_for('home') }}">Helluland</a></p>
        <p><a class="interface" href="{{ url_for('projects') }}">Verkefni</a></p>
        <p><a class="interface" href="{{ url_for('gallery') }}">Gallery</a></p>
        <p><a class="interface" href="{{ url_for('about') }}">Um okkur</a></p>
        <script src="/static/scripts/viewing.js"></script>
    </div>
</article>