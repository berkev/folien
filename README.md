# Vorlesung Web-Engineering 1

Dieses Projekt enthält die Vorlesungsfolien für die Vorlesungen
Web-Engineering 1

an der Dualen Hochschule Baden-Württemberg Karlsruhe.
[karlsruhe.dhbw.de/](https://www.karlsruhe.dhbw.de/startseite.html)

Die Folien sind mit [Reveal.js](https://revealjs.com/) erstellt. Ein einfaches
öffnen der jeweiligen "index.html" stellt die Folien im Browser dar.

## Lokal

Um auch die Code-Beispiel nutzen zu können, müssen die Folien zwingend von
einem Webserver ausgeliefert werden. Dafür ist das npm Projekt vorgesehen:

```bash
$ npm ci
$ npm start
```

Damit sind die Folien unter [localhost:3000](http://localhost:3000) aufrufbar.
Wichtig ist der abschließende "/" am Ende der Url: `http://localhost:3000/TINF22B2/html/`.

## Gitlab Pages

Additionally the pages are hosted on GitLab Pages:

[https://chr1shaefn3r-dhbw.gitlab.io/vorlesung-webeng1/TINF22B2/](https://chr1shaefn3r-dhbw.gitlab.io/vorlesung-webeng1/TINF22B2/)

## Update reveal.js

 * Download latest Reavel.js version from [Github](https://github.com/hakimel/reveal.js/releases)
 * Copy over dist and plugin folder

```bash
cp -rv ~/Downloads/reveal.js-*/{dist,plugin} ./
```
