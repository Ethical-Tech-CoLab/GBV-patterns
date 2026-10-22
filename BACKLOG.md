# Backlog

Everything asked for that is not yet built, or that needs a human. Nothing gets dropped from here without a note on why.

## Needs Carolina (blocked for the agent)

- **Make the repo public and turn on Pages.** Both were refused by the permission classifier. Run:
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
