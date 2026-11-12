# GBV Patterns

**Live site:** https://ethical-tech-colab.github.io/GBV-patterns/

An advocacy and research platform on femicide and gender-based violence, built by the [Ethical Tech CoLab](https://github.com/Ethical-Tech-CoLab) at NYU with the [Coalition Against Trafficking in Women](https://www.catwinternational.org/) (CATW). It looks at the world and lands on New York, which has the data, the courts and the advocates to become the first US state to name femicide in law, including the killing of women in the sex trade.

The platform exists because of a gap. About three dozen countries define femicide in their criminal codes. No US state does. New York counts domestic violence homicides by borough and relationship, but a woman killed by a buyer, a pimp or a trafficker has no category to be counted in. The number of such deaths is unknown, not zero. The platform makes the gap visible, puts the surrounding evidence on one screen, and argues for closing it.

First shown at the Ethical Tech Summit, 20 November 2026.

## What is on the site

| Page | What it holds |
|---|---|
| **Home** | A hero with silhouettes of women and men drifting through the globe; the UN femicide definition and the six forms the NYC Coalition to End Femicide names; the pace dots (the countdown clock was removed at CATW's request); a world map of the countries whose law names femicide, by year; New York City's homicides and incident reports by borough for 2023 and 2024, with the uncounted sex-trade line in the ledger; the state dashboard; the gap and the demand evidence; "Of every ten women" figures; CATW's work and its asks of New York. |
| **New York** | The case for the law. Live charts from NYPD domestic violence records on NYC Open Data (about 484,000 incidents, 2020 to 2021): victim and suspect age, borough, race, suspect sex, rapes by relationship. A decade of fatality reviews. Three real cases from the sex trade and how each was named. CATW's sex buyers map embedded. Five steps the state can take, in order of cost. |
| **New York › Buyers** | CATW's 2022 map of 141 geolocated sex-buyer reviews across ten regions, rebuilt as an open layer with region notes, plus CATW's original map. An enforcement layer: statewide arrests of people sold, buyers, pimps and traffickers, 2009 to 2023, and a status check of the eight buyer forums from their public index pages. Impunity in numbers: Brooklyn's patronizing arrests falling from 279 to 28, Manhattan against Nashville, and federal sentences for sex crimes against tax fraud. |
| **New York › Buyers › Method** | The German Invisible Men method adapted to New York: forums then and now, reviews by region against population, the 26-theme coding sheet, the lineage, and the collection protocol CATW signs before any board is read. |
| **The Corridor** | A backlit hall. Silhouettes walk toward the viewer; click one for a memorial entry, a New York case or a buyers-map region. No generated faces. |
| **Patterns** | All fifteen Women Count USA databases, 1950s to 2026, embedded from Dawn Wilcox's own share links. A tally tool to log counts from filtered tables, chart them by year, export them and send the total to the lost-earnings ledger. The six analysis questions and the columns that answer them. |
| **Context** | Clocks; the evidence so far; girls (UNICEF 2024); rape and sexual violence (CDC 2023/24, RAINN, NYPD); age at first rape; domestic violence measured by survey, with New York's row; misogyny online and children's exposure to pornography; five hypotheses about the backlash; three horizontal timelines (UN diplomacy 1979 to 2026, politics 2017 to 2026, CATW and the Equality Model 1988 to 2026); why the Security Council does not address femicide and why it should; the lost-life and lost-earnings ledger; country cost comparisons; representation and leadership; rights over time; child marriage law. |
| **Methodology** | Scope, source table, coding rules for the case-level data, ten limitations ranked by severity, ethics. |
| **Sources** | Every figure with the document it comes from and a link to verify it. Figures quoted from secondary summaries are flagged. |
| **Progress** | CATW's five desired outcomes scored built, partial or not started, with what is on the platform, what is missing and the blocker for each; a coverage table of every section; a table of what has not been researched. |

## Data

- `docs/data/nypd_dv_snapshot.json`: aggregates from NYC Open Data dataset [2rb7-7eqa](https://data.cityofnewyork.us/Public-Safety/ENDGBV-The-Intersection-of-Domestic-Violence-Race-/2rb7-7eqa), used as a fallback when the city API is unavailable. The New York page queries the API live first.
- `docs/data/catw_sex_buyers_map.geojson`: region polygons and review point locations from CATW's Google My Maps layer. Review text and images are deliberately excluded.
- `docs/data/femicide_laws.json`: the 23 countries that name femicide as a crime (18 in Latin America per ECLAC; Cyprus, Malta, North Macedonia, Croatia, Italy) plus Belgium's framework law, with years, for the home page map.
- `docs/data/invisible_men_ny.json`: reviews by region against population share, the 26 themes, forum tables. `analysis/INVISIBLE_MEN_NY_PROTOCOL.md` is the collection protocol.
- `docs/data/corridor_stories.json`: the Corridor's stories, drawn from the memorial, the cases and the buyers-map regions.
- `docs/data/ny_enforcement.json`: statewide prostitution-related arrests by Penal Law section and by group (people sold, buyers, pimps and premises, traffickers), 2009 to 2019 from a DCJS data request published by Decriminalize Sex Work, and 2023 from the Unified Court System. County-level counts are not published; see `BACKLOG.md`.
- `analysis/fetch_wcusa.py`: reads the Women Count USA shared Airtable views and bases into a raw directory. Raw exports contain names, photos, narratives and sources and are never committed.

Women Count USA is copyrighted material built by one person. The site shows it only through her published share links. Aggregating it into charts needs written agreement from Dawn Wilcox and CATW; the coding rules are on the methodology page so they can be reviewed first.

## Principles

- Every number traces to a public source, and the sources page says which.
- Patterns, not profiles. No victim or perpetrator is named by this site; case-level data appears only through its owner's own views.
- Unknown is not zero. Where no count exists, the site says so.
- Nothing asked for is dropped. `BACKLOG.md` holds everything not yet built, with what each item needs.

## Repository layout

```
docs/          the site, served by GitHub Pages
docs/data/     snapshot and map data files
analysis/      data access scripts
BACKLOG.md     everything not yet built, and what it needs
```

## Team

Ethical Tech CoLab at NYU: Carolina Moron, Yorke Rhodes. CATW: Taina Bien-Aimé, Nora Hennick, Giorgia Piantanida, Catherine Hidalgo Jara, Mia.

If you or someone you know needs help: New York City 24-hour HOPE hotline 1-800-621-4673; National Domestic Violence Hotline 1-800-799-7233; [CATW's global resource list](https://catwinternational.org/get-help/).
