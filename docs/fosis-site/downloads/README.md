# downloads/

Empty on purpose.

The live site at https://fosis.org.uk links **no** PDF, DOC, DOCX, XLS, XLSX, PPTX, ZIP or other
downloadable document anywhere on any of its 146 pages. Every candidate was checked by scanning
all `<a href>` values across the crawl for those extensions; none matched.

Two places advertise downloads that do not exist, both on `/isoc-essentials/leadership/`:

- `Constitution Template`
- `Minutes Template`
- `Handover Checklist`
- `How to Run an ISoc`

All four are anchors with `href="#"`, so they scroll to the top of the page and nothing more.
`Learn how to Lead here` and `Click here to start planning your Freshers' Week` behave the same
way. If a rebuild needs these resources, they have to be written from scratch; there is nothing
to migrate.

See `../links.md` for the full link inventory.
