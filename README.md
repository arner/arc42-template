# Architecture document template

## Tooling

- [arc42](about/About_arc42.md) for the structure
- docsify to generate a website
  - Zoom plugin
  - Edit on GitHub plugin
  - Docsify to PDF
- plantuml for diagrams
- architectural decision records (ADR) for decisions

## Getting started

- Fork or clone this repository.
- Change the name and description of your project in the `docs/package.json`.
- Add the name of your project and the git repository in `docs/index.html`.
- Optionally change the ADR template in `lib/adr_template.md`.
- Run `npm install` from the `docs` directory.
- Do `npm run serve` to view the docsify website.

## How to use

- Edit the contents of the files in the 'docs' directory.
- Diagrams are in 'docs/diagrams'.
- Add an ADR with npm run adr "Name of decision"
- After editing a diagram or adding an ADR, do `npm run update` to generate the table of contents and diagrams.
- To generate a PDF, do `npm run pdf`. It will be created in the `output` directory. See settings in `.docsifytopdfrc.js`.
