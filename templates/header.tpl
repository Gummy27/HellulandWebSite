<article class="header">
    <div class="logo">
        <a href="{{ url_for('home') }}"><img src="/static/pictures/HL_Whole.png" alt="Logo" width="70" height="70"></a>
        <a class="logoText" href="{{ url_for('home') }}"><img src="/static/pictures/texti_PR_shade.png" alt="Logo" width="140" height=auto></a>
    </div>
    <div class="valmynd">
        <nav class="mainValmynd">
            <a>/ / /</a>
            <a class="interface" href="{{ url_for('home') }}">Helluland</a>
            <div class="dropdownActivate">
                <aclass="interface" href="{{ url_for('projects', media='shortMovies') }}">Verkefni</a>
                    <nav id="dropdown" class="dropdown">
                        <a>Stuttmyndir</a>
                        <a>Tónlist</a>
                        <a>Hlaðvörp</a>
                        <a>Væntanlegt</a>
                    </nav>
                    <script src="/static/scripts/dynamicDropDown.js">resizeDropDown();</script>
            </div>
            <a class="interface" href="{{ url_for('gallery') }}">Gallery</a>
            <a class="interface" href="{{ url_for('about') }}">Um okkur</a>
            <script src="/static/scripts/viewing.js"></script>
        </nav>
    </div>
</article>