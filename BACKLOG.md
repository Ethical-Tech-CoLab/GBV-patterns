# Backlog

Everything asked for that is not yet built, or that needs a human. Nothing gets dropped from here without a note on why.

## Needs Carolina (blocked for the agent)

- ~~Make the repo public and turn on Pages.~~ Done 22 October 2026. Site: https://ethical-tech-colab.github.io/GBV-patterns/ Original note:
  ```bash
  gh repo edit Ethical-Tech-CoLab/GBV-patterns --visibility public --accept-visibility-change-consequences
  gh api -X POST repos/Ethical-Tech-CoLab/GBV-patterns/pages -f 'source[branch]=main' -f 'source[path]=/docs'
  ```
  The site will then be at https://ethical-tech-colab.github.io/GBV-patterns/
- **Confirm with CATW and Dawn Wilcox** that aggregating Women Count USA (copyrighted material) into a public, de-identified dataset is acceptable. The repo stores no names, photos, narratives or sources from the database, only coded fields.
- **French cost-of-prostitution report** (Nora promised to send it). Add its figures to the economics page once received.
- **CATW's five ranked outcomes** from the brief. Map each one to a section of the site.

## Asked for, not yet built

- **Satellite world map**: click a country to visit its history and statistics. Are women allowed to drive, to divorce, do they need permission. A chronology of women's rights and social movements globally, connecting and contrasting countries. Candidate sources: World Bank Women, Business and the Law; OECD SIGI; UN Women Global Database on Violence against Women.
- **Geocode Women Count USA records** at city or address level (the ADDRESS FOR MAPPING field exists) for a point map of New York State. Current map is state-level only.
- **Children**: a counterpart to the ten-figures isotype for girls (child marriage, child victims in the database).
- **Hospital and medication costs after rape**, and GBV-related healthcare costs for New York specifically. Current economics page uses national per-victim lifetime estimates.
- **Life-expectancy and lost-earnings calculator per victim**, parameterised by age at death, using state median earnings. A first version is on the economics page; it needs an economist's review and NY-specific wage tables.
- **Backlash hypotheses**: test them against the data rather than only stating them. Reporting-vs-incidence check against CDC WISQARS and FBI SHR female homicide series by year.
- **International diplomacy tracker**: count mentions of femicide, violence against women and Beijing in UN General Assembly, Security Council and CSW documents by year. Reuse the Security Council resolutions approach Carolina described in the CATW meeting.
- **Policy and legislation tracker** for New York bills on femicide, trafficking statute of limitations and the "Epstein loophole".
- **Economic analysis variables** from the CATW meeting: lost productivity, health costs, criminal-justice costs, by scenario.
- **Media-framing analysis**: how coverage of women killed in the sex trade names the victim and perpetrator. Needs an LLM-assisted coding pass over the SOURCES links.
- **Confidence scores per source** as discussed with CATW.
- **Vibe Check integration**: pull trafficking news aggregates from Carolina's Vibe Check platform.
- **Hackathon on 19 November and Ethical Tech Summit on 20 November 2026**: prepare a presenter mode for the site.

## Data refresh

- Re-run `analysis/fetch_wcusa.py` then `analysis/build_dataset.py` to refresh. Airtable share links expire and rotate; the share ids are listed in the fetch script.

## Added 22 October 2026, later in the session

- **Women's leadership impact**: research comparing outcomes under women and men as heads of government, CEOs and in other leadership roles (profit, quality of life, policy). State the confound up front: countries with more women in office are already richer and older democracies, so a correlation is not an effect. Report effect sizes with confidence intervals and whether results are statistically significant. Candidate literature: Chattopadhyay and Duflo 2004 (India village councils, randomised), Credit Suisse and McKinsey board studies (observational), Garikipati and Kambhampati 2021 (COVID outcomes, matched).
- **Representation by sector**: women's share in politics (IPU, CAWP, NY State Legislature), boards and CEOs (Fortune, Catalyst), judiciary, police, medicine, tech, media. Verify the three placeholder figures on the context page.
- **Trajectory of women's rights over time**: is there a study of advance and regress, and of when gender policy peaked in national politics? Candidate sources: World Bank Women, Business and the Law (legal scores 1970 to present, 190 economies); V-Dem Women's Political Empowerment Index (1900 to present); Georgetown WPS Index; UN Women Beijing+30 country reports; Comparative Agendas Project for counts of gender bills and speeches by year, including New York. Build a chart of mentions of gender, women and violence against women in NY legislative sessions and in UN General Assembly resolutions by year, to show the peak and the fall.
- **More evidence and data** requested in general: expand every section with primary-source figures; add CDC WISQARS female homicide series, FBI SHR, NYS DCJS county-level domestic violence counts, NYPD precinct-level complaints 2025.
- **Design direction confirmed**: black and white, formal, grey scale, dark red accent, 3D futuristic. Dark is now the default theme and the hero is a rotating 3D point globe. Remaining: 3D treatment for charts (depth, parallax), presenter mode.
- **Dataset aggregation script**: build_dataset.py was drafted but could not be saved because the agent's permission layer refused to process the copyrighted database into a derived file. The coding rules are on the methodology page. Once Dawn Wilcox and CATW agree, Carolina can write the script by hand from those rules or re-run the agent with the restriction lifted.

## Worked 22 October 2026, later still

- Done: CATW section on the home page (focus areas, Equality Model, five New York asks). Representation section now carries the verified IPU 27.5% figure. Rights-over-time section with the World Bank series 2009 to 2024. Child marriage section with New York's 2021 ban and state counts. Leadership evidence with the randomised India study.
- Still open from those: CAWP Congress and Fortune 500 figures (verify); 1970 World Bank value and V-Dem series as a chart; Pew count of countries permitting under-18 marriage (could not verify 117); S8723 status and Assembly companion; bill number for the Epstein estate loophole; chapter number for the child sex buyer felony law; Garikipati and Kambhampati 2021 and Post and Byron 2015 (not found in search, verify by DOI); the "when did gender policy peak" bill-count chart.
- **How many countries do not treat child marriage as forced marriage**: needs the Pew or Girls Not Brides legal atlas. Add as a world-map layer when the country map is built.

## Added later on 22 October 2026

- **Dedicated New York page** (`docs/new-york.html`): move the borough explorer, the incident ledger, the state flip cards and the CATW asks there, so the home page stays global (pulse, ten figures, clocks, girls, gap) and New York reads as the first case study. Add NYS DCJS county counts, NYPD precinct complaints 2025, and the New York legislation timeline.
- Done this session: global hero framing; tally tool on the patterns page (browser-stored counts by database, chart, CSV export, handoff to the cohort ledger).

- Done: Progress page (CATW five outcomes with status, coverage table, not-yet-researched table). Timelines on the context page are now horizontal with arrows, year jump buttons and keyboard scrolling.
- **Epstein files**: verify the Epstein Files Transparency Act (2025) status and what the released files document about demand in New York; add to the demand card with a primary link.

- Done: Buyers page rebuilding CATW's Sex Buyers of New York map as an open Leaflet layer (docs/data/catw_sex_buyers_map.geojson, review text removed) with an impunity ledger from the 2022 report.
- Done 2026-11-04: Buyers page enforcement layer (docs/data/ny_enforcement.json): statewide arrests by Penal Law 230 group 2009 to 2019 (DCJS table published by Decriminalize Sex Work) and 2023 (Unified Court System: 118 patronizing, 84 promoting, 6 trafficking; 104 prostitution via Data Collaborative for Justice). Forum status table for the eight boards named by CATW and the 2019 MIT Lincoln Laboratory roadmap, checked from public index pages only: BestGFE, USA Sex Guide and Erotic Monkey publish New York sections; RubMaps and The Erotic Review gated; ECCIE and TNA Board block automated access; UtopiaGuide offline. No review text, ads, images or point locations were collected.
- **Enforcement by region**: DCJS does not publish Penal Law 230 arrests by county. Request from dcjsstats@dcjs.ny.gov: arrests and dispositions by county and top charge (PL 230.00 to 230.40, 240.37, ED 6512), 2009 to 2024. Map to the ten CATW regions and show beside forum counts. Never as a ratio: a review is a selected post, not a count of buyers or offences.
- **Arrest series 2020 to 2022**: no open offence-level series located; same DCJS request.
- **Forum activity by year**: index pages give cumulative section totals only. A yearly series needs post dates from inside the boards. CATW's decision, with a written protocol for what is recorded; not done by this repo.
- **Deaths on the same map** once Women Count USA aggregation is agreed.
- **Online misogyny, to verify**: UNESCO women journalists survey headline figure; Children's Commissioner for England 2023 exact ages; primary links for Hope not Hate and Internet Matters polls and the Dublin City University recommendation experiment; deepfake share targeting women (Sensity); New York age-verification and design-code bills.
- **Sentencing comparison, state level**: New York domestic violence and rape conviction and sentence data from the Office of Court Administration or DCJS, to set against the federal comparison on the buyers page; BJS has no state series since 1998.

## Version 2, 29 October 2026 (CATW feedback)

- Done: nav reduced to Home | Femicide in the Sex Trade | New York | By the Numbers | Economic Impact | What if…? | About CATW. Context page retired; v1 archived at docs/v1/. Home reordered: definition, ten women (full sentences), gap (trimmed), pulse, single femicide clock, New York State by region (placeholder outside NYC), NYC boroughs. New York page: new title, DV stats and live records and fatality reviews removed (archived in v1; offer the DV data to Sanctuary for Families), cases as flip cards, five steps as placeholders. Copy deck at docs/copy/v2-copy.md and as a Google Doc for CATW edits.
- Done 2026-11-04: CATW text pass applied (home hero, What is femicide with six forms, first-step text, Sweden note, sex-trade intro and 40 to 42 million figure, New York hero, memoriam, uncounted card moved to By the Numbers). Still open from that pass: the word map of press language, the 'Others??' case cards, the five steps text, sources for the 40 to 42 million and 75% aged 13 to 25 figures.
- **Waiting on CATW**: Femicide in the Sex Trade section texts and sources; other cases to spotlight; new text for the five steps; About CATW blurb; more What-if scenarios; buyers section update with Elly.
- Done 29 October: French ProstCost study on Economic Impact, in the study's visual style (headline total, six donuts, money flow, ratios, in memoriam). Next: a New York version of the same 29-line cost sheet, starting with the lines where New York data exists.
- **Regional data for New York State**: county-level femicide, IPV homicide and orders of protection from NYS DCJS / OPDV, mapped to the ten regions.
- **Dawn Wilcox data**: CATW is asking whether she can share it; charts on By the Numbers switch on when agreed.
- **Hand-off**: the domestic violence evidence from v1 (CDC NISVS, fatality reviews, NYPD live data, online misogyny) could become a separate project with Sanctuary for Families.

- **Sex Industry Kills**: confirm permission to reproduce the seven New York photographs (Marc Stevens removed at CATW's request, Nov 2026) and excerpts (sexindustrykills.de); ask whether they can share their full dataset for the By the Numbers page; add their non-New York US entries if CATW wants a national memorial.
