# Architecture document template

A template for documenting IT architecture.

## Goal

Architecture documents should be more easily:

- accessible
- searchable
- reusable
- versionable.

With git, you automatically get a detailed history and change log of any document. It aligns well with the way of working of the development team, and more and more that of operations (see GitOps, Infrastructure as Code, Configuration as Code). Maintaining everything in adjacent git repos ensures better versioning and visibility.

## Tooling

- [arc42](https://arc42.org/overview/) for the structure
- [docsify](https://docsify.js.org/#/) to generate a website
  - [Zoom plugin](https://docsify.now.sh/plugins?id=zoom-image)
  - [Edit on GitHub plugin]()
  - [Docsify to PDF](https://docsify.now.sh/plugins?id=edit-on-github)
- [plantuml](https://plantuml.com/) for diagrams
- architectural decision records ([ADR](https://adr.github.io/)) for decisions

## Getting started

- Fork or clone this repository.
- Change the name and description of your project in the `docs/package.json`.
- Add the name of your project and the git repository in `docs/index.html`.
- Optionally change the ADR template in `lib/adr_template.md`.
- Run `npm install` from the `docs` directory.
- Do `npm run serve` to view the docsify website.

## How to use

- Edit the contents of the files in the `docs` directory.
- Diagrams are in `docs/diagrams`.
- Add an ADR with `npm run adr "Name of decision"`
- After editing a diagram or adding an ADR, do `npm run update` to generate the table of contents and diagrams.
- To generate a PDF, do `npm run pdf`. It will be created in the `output` directory. See settings in `.docsifytopdfrc.js`.
- To show the docsified pages in your browser, do `npm run serve`.

## Credits

© We acknowledge that this document uses material from the arc 42
architecture template, <http://www.arc42.de>. Created by Dr. Peter
Hruschka & Dr. Gernot Starke.
