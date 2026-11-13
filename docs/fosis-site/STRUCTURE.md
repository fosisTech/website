# STRUCTURE

FOSIS public website (https://fosis.org.uk). Crawled 12 November 2026 with `curl` and parsed
with Python (`beautifulsoup4` + `lxml`). This document describes the sitemap, the global
header and footer, each page's ordered section stack, per-page metadata, the design tokens
taken from the theme stylesheet, and the tech stack the site runs on.

Section names below are taken from the real CSS class names on each `<section>` so a
reimplementation can map one-to-one. Copy is not repeated here; see `content/<page-slug>.md`.

## 1. Pages found

No XML sitemap is published. `/sitemap.xml` returns a 301 to `/wp-sitemap.xml`, which is a
404 page. `/robots.txt` exists but lists no sitemap. Pages were therefore discovered by
crawling the homepage, both nav menus, the footer, in-page links, pagination, and the
WordPress REST API (`/wp-json/wp/v2/pages`, `/posts`, and the custom post types `isoc`,
`nec_member`, `regional_chair`, `fosis_jobs`).

| # | URL | Type | Title | Page slug |
| --- | --- | --- | --- | --- |
| 1 | https://fosis.org.uk/ | page | FOSIS | `home` |
| 2 | https://fosis.org.uk/about-us/ | page | About Us – FOSIS | `about-us` |
| 3 | https://fosis.org.uk/fosis-history/ | page | FOSIS History – FOSIS | `fosis-history` |
| 4 | https://fosis.org.uk/find-your-isoc/ | page | Find Your ISoc – FOSIS | `find-your-isoc` |
| 5 | https://fosis.org.uk/events/ | page | Events – FOSIS | `events` |
| 6 | https://fosis.org.uk/ihsaan-careers/ | page | Ihsaan Careers – FOSIS | `ihsaan-careers` |
| 7 | https://fosis.org.uk/fosis-report/ | page | FOSIS Report – FOSIS | `fosis-report` |
| 8 | https://fosis.org.uk/islamic-resources/ | page | Islamic Resources – FOSIS | `islamic-resources` |
| 9 | https://fosis.org.uk/isoc-affiliations/ | page | ISoc Affiliations – FOSIS | `isoc-affiliations` |
| 10 | https://fosis.org.uk/isoc-essentials/ | page | ISoc Essentials – FOSIS | `isoc-essentials` |
| 11 | https://fosis.org.uk/isoc-essentials/leadership/ | page | Leadership – FOSIS | `isoc-essentials-leadership` |
| 12 | https://fosis.org.uk/join-team-fosis/ | page | Join Team FOSIS – FOSIS | `join-team-fosis` |
| 13 | https://fosis.org.uk/support-us/ | page | Support Us – FOSIS | `support-us` |
| 14 | https://fosis.org.uk/book-islamophobia-training/ | page | Book Islamophobia Training – FOSIS | `book-islamophobia-training` |
| 15 | https://fosis.org.uk/sabbatical-officer-network/ | page | Sabbatical Officer Network – FOSIS | `sabbatical-officer-network` |
| 16 | https://fosis.org.uk/contact-us/ | page | Contact Us – FOSIS | `contact-us` |
| 17 | https://fosis.org.uk/articles/ | page | Articles – FOSIS | `articles` |
| 18 | https://fosis.org.uk/articles/page/2/ | page | Articles – Page 2 – FOSIS | `articles-page-2` |
| 19 | https://fosis.org.uk/fosis-services/ | page | FOSIS Services – FOSIS | `fosis-services` |
| 20 | https://fosis.org.uk/day-of-arafat/ | page | The Day of Arafat, A Companion Guide | `day-of-arafat` |
| 21 | https://fosis.org.uk/khutbah-library/ | page | FOSIS Khutbah Library | `khutbah-library` |
| 22 | https://fosis.org.uk/2026/04/16/towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025/ | post | Towards an Ummatic Vision: Lessons from FOSIS Annual Conference 2025 – FOSIS | `article-towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025` |
| 23 | https://fosis.org.uk/2026/04/16/the-new-face-of-islamophobia-in-britain/ | post | The New Face of Islamophobia in Britain. – FOSIS | `article-the-new-face-of-islamophobia-in-britain` |
| 24 | https://fosis.org.uk/2026/04/16/4-surprising-truths-about-power-protest-and-a-generation-reawakened/ | post | 4 Surprising Truths About Power, Protest, and a Generation Reawakened – FOSIS | `article-4-surprising-truths-about-power-protest-and-a-generation-reawakened` |
| 25 | https://fosis.org.uk/2026/04/16/when-tyranny-falls-lessons-from-syria-for-todays-students/ | post | When Tyranny Falls: Lessons from Syria for Today’s Students – FOSIS | `article-when-tyranny-falls-lessons-from-syria-for-todays-students` |
| 26 | https://fosis.org.uk/2026/04/16/narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest/ | post | Narrative Warfare and ‘Intifada’: Freedom of Expression and the Policing of Protest – FOSIS | `article-narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest` |
| 27 | https://fosis.org.uk/2026/04/16/the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal/ | post | The Spiritual Cost of Modern Education and a Muslim Vision for Renewal – FOSIS | `article-the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal` |
| 28 | https://fosis.org.uk/2026/04/15/hello-world/ | post | Hello World! – FOSIS | `article-hello-world` |
| 29 | https://fosis.org.uk/2024/11/15/ihsaan-2024-how-3000-muslim-graduates-found-their-path/ | post | IHSAAN 2024: How 3,000 Muslim Graduates Found Their Path – FOSIS | `article-ihsaan-2024-how-3000-muslim-graduates-found-their-path` |
| 30 | https://fosis.org.uk/2024/10/02/islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it/ | post | Islamophobia on Campus: What the Data Tells Us, and What We’re Doing About It – FOSIS | `article-islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it` |
| 31 | https://fosis.org.uk/2024/09/05/how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies/ | post | How to Build a Thriving ISoc: 10 Lessons from the UK’s Best Islamic Societies – FOSIS | `article-how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies` |
| 32 | https://fosis.org.uk/2024/03/10/ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders/ | post | Ramadan at University: A Complete Guide for Students and ISoc Leaders – FOSIS | `article-ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders` |
| 33 | https://fosis.org.uk/2024/01/18/faith-identity-and-the-british-muslim-graduate/ | post | Faith, Identity and the British Muslim Graduate – FOSIS | `article-faith-identity-and-the-british-muslim-graduate` |
| 34 | https://fosis.org.uk/2023/11/22/why-muslim-students-need-a-national-voice-more-than-ever/ | post | Why Muslim Students Need a National Voice More Than Ever – FOSIS | `article-why-muslim-students-need-a-national-voice-more-than-ever` |
| 35 | https://fosis.org.uk/isoc/royal-veterinary-college-rvc-islamic-society/ | isoc | Royal Veterinary College (RVC) Islamic Society – FOSIS | `isoc-royal-veterinary-college-rvc-islamic-society` |
| 36 | https://fosis.org.uk/isoc/barts-and-the-london-islamic-society-blisoc/ | isoc | Barts and The London Islamic Society (BLISoc) – FOSIS | `isoc-barts-and-the-london-islamic-society-blisoc` |
| 37 | https://fosis.org.uk/isoc/solent-university-islamic-society-southampton/ | isoc | Solent University Islamic Society (Southampton) – FOSIS | `isoc-solent-university-islamic-society-southampton` |
| 38 | https://fosis.org.uk/isoc/bucks-new-university-islamic-society/ | isoc | Bucks New University Islamic Society – FOSIS | `isoc-bucks-new-university-islamic-society` |
| 39 | https://fosis.org.uk/isoc/hertfordshire-university-islamic-society/ | isoc | Hertfordshire University Islamic Society – FOSIS | `isoc-hertfordshire-university-islamic-society` |
| 40 | https://fosis.org.uk/isoc/london-south-bank-university-lsbu-islamic-society/ | isoc | London South Bank University (LSBU) Islamic Society – FOSIS | `isoc-london-south-bank-university-lsbu-islamic-society` |
| 41 | https://fosis.org.uk/isoc/university-of-the-arts-london-ual-islamic-society/ | isoc | University of the Arts London (UAL) Islamic Society – FOSIS | `isoc-university-of-the-arts-london-ual-islamic-society` |
| 42 | https://fosis.org.uk/isoc/university-of-west-london-uwl-islamic-society/ | isoc | University of West London (UWL) Islamic Society – FOSIS | `isoc-university-of-west-london-uwl-islamic-society` |
| 43 | https://fosis.org.uk/isoc/london-metropolitan-university-islamic-society/ | isoc | London Metropolitan University Islamic Society – FOSIS | `isoc-london-metropolitan-university-islamic-society` |
| 44 | https://fosis.org.uk/isoc/roehampton-university-islamic-society/ | isoc | Roehampton University Islamic Society – FOSIS | `isoc-roehampton-university-islamic-society` |
| 45 | https://fosis.org.uk/isoc/kingston-university-islamic-society/ | isoc | Kingston University Islamic Society – FOSIS | `isoc-kingston-university-islamic-society` |
| 46 | https://fosis.org.uk/isoc/st-georges-university-of-london-islamic-society/ | isoc | St George’s, University of London Islamic Society – FOSIS | `isoc-st-georges-university-of-london-islamic-society` |
| 47 | https://fosis.org.uk/isoc/staffordshire-university-islamic-society/ | isoc | Staffordshire University Islamic Society – FOSIS | `isoc-staffordshire-university-islamic-society` |
| 48 | https://fosis.org.uk/isoc/newman-university-islamic-society/ | isoc | Newman University Islamic Society – FOSIS | `isoc-newman-university-islamic-society` |
| 49 | https://fosis.org.uk/isoc/university-of-derby-islamic-society/ | isoc | University of Derby Islamic Society – FOSIS | `isoc-university-of-derby-islamic-society` |
| 50 | https://fosis.org.uk/isoc/university-of-gloucestershire-islamic-society/ | isoc | University of Gloucestershire Islamic Society – FOSIS | `isoc-university-of-gloucestershire-islamic-society` |
| 51 | https://fosis.org.uk/isoc/bangor-university-islamic-society/ | isoc | Bangor University Islamic Society – FOSIS | `isoc-bangor-university-islamic-society` |
| 52 | https://fosis.org.uk/isoc/university-of-the-west-of-england-uwe-islamic-society-bristol/ | isoc | University of the West of England (UWE) Islamic Society — Bristol – FOSIS | `isoc-university-of-the-west-of-england-uwe-islamic-society-bristol` |
| 53 | https://fosis.org.uk/isoc/university-of-plymouth-islamic-society/ | isoc | University of Plymouth Islamic Society – FOSIS | `isoc-university-of-plymouth-islamic-society` |
| 54 | https://fosis.org.uk/isoc/university-of-south-wales-usw-islamic-society/ | isoc | University of South Wales (USW) Islamic Society – FOSIS | `isoc-university-of-south-wales-usw-islamic-society` |
| 55 | https://fosis.org.uk/isoc/cardiff-metropolitan-university-islamic-society/ | isoc | Cardiff Metropolitan University Islamic Society – FOSIS | `isoc-cardiff-metropolitan-university-islamic-society` |
| 56 | https://fosis.org.uk/isoc/bolton-university-islamic-society/ | isoc | Bolton University Islamic Society – FOSIS | `isoc-bolton-university-islamic-society` |
| 57 | https://fosis.org.uk/isoc/leeds-trinity-university-islamic-society/ | isoc | Leeds Trinity University Islamic Society – FOSIS | `isoc-leeds-trinity-university-islamic-society` |
| 58 | https://fosis.org.uk/isoc/york-st-john-university-islamic-society/ | isoc | York St John University Islamic Society – FOSIS | `isoc-york-st-john-university-islamic-society` |
| 59 | https://fosis.org.uk/isoc/university-of-chester-islamic-society/ | isoc | University of Chester Islamic Society – FOSIS | `isoc-university-of-chester-islamic-society` |
| 60 | https://fosis.org.uk/isoc/university-of-central-lancashire-uclan-islamic-society/ | isoc | University of Central Lancashire (UCLan) Islamic Society – FOSIS | `isoc-university-of-central-lancashire-uclan-islamic-society` |
| 61 | https://fosis.org.uk/isoc/university-college-cork-ucc-islamic-society/ | isoc | University College Cork (UCC) Islamic Society – FOSIS | `isoc-university-college-cork-ucc-islamic-society` |
| 62 | https://fosis.org.uk/isoc/university-of-galway-islamic-society/ | isoc | University of Galway Islamic Society – FOSIS | `isoc-university-of-galway-islamic-society` |
| 63 | https://fosis.org.uk/isoc/dublin-city-university-dcu-islamic-society/ | isoc | Dublin City University (DCU) Islamic Society – FOSIS | `isoc-dublin-city-university-dcu-islamic-society` |
| 64 | https://fosis.org.uk/isoc/royal-college-of-surgeons-in-ireland-rcsi-islamic-society/ | isoc | Royal College of Surgeons in Ireland (RCSI) Islamic Society – FOSIS | `isoc-royal-college-of-surgeons-in-ireland-rcsi-islamic-society` |
| 65 | https://fosis.org.uk/isoc/university-college-dublin-ucd-islamic-society/ | isoc | University College Dublin (UCD) Islamic Society – FOSIS | `isoc-university-college-dublin-ucd-islamic-society` |
| 66 | https://fosis.org.uk/isoc/trinity-college-dublin-muslim-student-association/ | isoc | Trinity College Dublin Muslim Student Association – FOSIS | `isoc-trinity-college-dublin-muslim-student-association` |
| 67 | https://fosis.org.uk/isoc/robert-gordon-university-rgu-islamic-society/ | isoc | Robert Gordon University (RGU) Islamic Society – FOSIS | `isoc-robert-gordon-university-rgu-islamic-society` |
| 68 | https://fosis.org.uk/isoc/university-of-the-west-of-scotland-uws-islamic-society/ | isoc | University of the West of Scotland (UWS) Islamic Society – FOSIS | `isoc-university-of-the-west-of-scotland-uws-islamic-society` |
| 69 | https://fosis.org.uk/isoc/glasgow-caledonian-university-muslim-students-association-cisa/ | isoc | Glasgow Caledonian University Muslim Students Association (CISA) – FOSIS | `isoc-glasgow-caledonian-university-muslim-students-association-cisa` |
| 70 | https://fosis.org.uk/isoc/abertay-university-islamic-society/ | isoc | Abertay University Islamic Society – FOSIS | `isoc-abertay-university-islamic-society` |
| 71 | https://fosis.org.uk/isoc/islamic-medical-society-birmingham/ | isoc | Islamic Medical Society (Birmingham) – FOSIS | `isoc-islamic-medical-society-birmingham` |
| 72 | https://fosis.org.uk/isoc/ulster-university-islamic-society/ | isoc | Ulster University Islamic Society – FOSIS | `isoc-ulster-university-islamic-society` |
| 73 | https://fosis.org.uk/isoc/queens-university-belfast-islamic-society/ | isoc | Queen’s University Belfast Islamic Society – FOSIS | `isoc-queens-university-belfast-islamic-society` |
| 74 | https://fosis.org.uk/isoc/university-of-st-andrews-islamic-society/ | isoc | University of St Andrews Islamic Society – FOSIS | `isoc-university-of-st-andrews-islamic-society` |
| 75 | https://fosis.org.uk/isoc/university-of-stirling-islamic-society/ | isoc | University of Stirling Islamic Society – FOSIS | `isoc-university-of-stirling-islamic-society` |
| 76 | https://fosis.org.uk/isoc/university-of-aberdeen-islamic-society/ | isoc | University of Aberdeen Islamic Society – FOSIS | `isoc-university-of-aberdeen-islamic-society` |
| 77 | https://fosis.org.uk/isoc/university-of-dundee-islamic-society/ | isoc | University of Dundee Islamic Society – FOSIS | `isoc-university-of-dundee-islamic-society` |
| 78 | https://fosis.org.uk/isoc/heriot-watt-university-islamic-society/ | isoc | Heriot-Watt University Islamic Society – FOSIS | `isoc-heriot-watt-university-islamic-society` |
| 79 | https://fosis.org.uk/isoc/strathclyde-university-muslim-students-association/ | isoc | Strathclyde University Muslim Students Association – FOSIS | `isoc-strathclyde-university-muslim-students-association` |
| 80 | https://fosis.org.uk/isoc/university-of-sunderland-islamic-society/ | isoc | University of Sunderland Islamic Society – FOSIS | `isoc-university-of-sunderland-islamic-society` |
| 81 | https://fosis.org.uk/isoc/teesside-university-islamic-society/ | isoc | Teesside University Islamic Society – FOSIS | `isoc-teesside-university-islamic-society` |
| 82 | https://fosis.org.uk/isoc/northumbria-university-islamic-society/ | isoc | Northumbria University Islamic Society – FOSIS | `isoc-northumbria-university-islamic-society` |
| 83 | https://fosis.org.uk/isoc/durham-university-islamic-society/ | isoc | Durham University Islamic Society – FOSIS | `isoc-durham-university-islamic-society` |
| 84 | https://fosis.org.uk/isoc/newcastle-university-islamic-society/ | isoc | Newcastle University Islamic Society – FOSIS | `isoc-newcastle-university-islamic-society` |
| 85 | https://fosis.org.uk/isoc/university-of-york-islamic-society/ | isoc | University of York Islamic Society – FOSIS | `isoc-university-of-york-islamic-society` |
| 86 | https://fosis.org.uk/isoc/sheffield-hallam-university-islamic-society/ | isoc | Sheffield Hallam University Islamic Society – FOSIS | `isoc-sheffield-hallam-university-islamic-society` |
| 87 | https://fosis.org.uk/isoc/university-of-huddersfield-islamic-society/ | isoc | University of Huddersfield Islamic Society – FOSIS | `isoc-university-of-huddersfield-islamic-society` |
| 88 | https://fosis.org.uk/isoc/leeds-beckett-university-islamic-society/ | isoc | Leeds Beckett University Islamic Society – FOSIS | `isoc-leeds-beckett-university-islamic-society` |
| 89 | https://fosis.org.uk/isoc/university-of-hull-islamic-society/ | isoc | University of Hull Islamic Society – FOSIS | `isoc-university-of-hull-islamic-society` |
| 90 | https://fosis.org.uk/isoc/edge-hill-university-islamic-society/ | isoc | Edge Hill University Islamic Society – FOSIS | `isoc-edge-hill-university-islamic-society` |
| 91 | https://fosis.org.uk/isoc/university-of-salford-islamic-society/ | isoc | University of Salford Islamic Society – FOSIS | `isoc-university-of-salford-islamic-society` |
| 92 | https://fosis.org.uk/isoc/lancaster-university-islamic-society/ | isoc | Lancaster University Islamic Society – FOSIS | `isoc-lancaster-university-islamic-society` |
| 93 | https://fosis.org.uk/isoc/liverpool-john-moores-university-islamic-society/ | isoc | Liverpool John Moores University Islamic Society – FOSIS | `isoc-liverpool-john-moores-university-islamic-society` |
| 94 | https://fosis.org.uk/isoc/university-of-wolverhampton-islamic-society/ | isoc | University of Wolverhampton Islamic Society – FOSIS | `isoc-university-of-wolverhampton-islamic-society` |
| 95 | https://fosis.org.uk/isoc/keele-university-islamic-society/ | isoc | Keele University Islamic Society – FOSIS | `isoc-keele-university-islamic-society` |
| 96 | https://fosis.org.uk/isoc/coventry-university-islamic-society/ | isoc | Coventry University Islamic Society – FOSIS | `isoc-coventry-university-islamic-society` |
| 97 | https://fosis.org.uk/isoc/birmingham-city-university-islamic-society/ | isoc | Birmingham City University Islamic Society – FOSIS | `isoc-birmingham-city-university-islamic-society` |
| 98 | https://fosis.org.uk/isoc/warwick-university-islamic-society/ | isoc | Warwick University Islamic Society – FOSIS | `isoc-warwick-university-islamic-society` |
| 99 | https://fosis.org.uk/isoc/university-of-lincoln-islamic-society/ | isoc | University of Lincoln Islamic Society – FOSIS | `isoc-university-of-lincoln-islamic-society` |
| 100 | https://fosis.org.uk/isoc/loughborough-university-islamic-society/ | isoc | Loughborough University Islamic Society – FOSIS | `isoc-loughborough-university-islamic-society` |
| 101 | https://fosis.org.uk/isoc/de-montfort-university-islamic-society/ | isoc | De Montfort University Islamic Society – FOSIS | `isoc-de-montfort-university-islamic-society` |
| 102 | https://fosis.org.uk/isoc/university-of-glasgow-islamic-society/ | isoc | University of Glasgow Islamic Society – FOSIS | `isoc-university-of-glasgow-islamic-society` |
| 103 | https://fosis.org.uk/isoc/university-of-edinburgh-islamic-society/ | isoc | University of Edinburgh Islamic Society – FOSIS | `isoc-university-of-edinburgh-islamic-society` |
| 104 | https://fosis.org.uk/isoc/university-of-bradford-islamic-society/ | isoc | University of Bradford Islamic Society – FOSIS | `isoc-university-of-bradford-islamic-society` |
| 105 | https://fosis.org.uk/isoc/university-of-sheffield-islamic-society/ | isoc | University of Sheffield Islamic Society – FOSIS | `isoc-university-of-sheffield-islamic-society` |
| 106 | https://fosis.org.uk/isoc/university-of-leeds-islamic-society/ | isoc | University of Leeds Islamic Society – FOSIS | `isoc-university-of-leeds-islamic-society` |
| 107 | https://fosis.org.uk/isoc/university-of-liverpool-islamic-society/ | isoc | University of Liverpool Islamic Society – FOSIS | `isoc-university-of-liverpool-islamic-society` |
| 108 | https://fosis.org.uk/isoc/manchester-metropolitan-university-islamic-society/ | isoc | Manchester Metropolitan University Islamic Society – FOSIS | `isoc-manchester-metropolitan-university-islamic-society` |
| 109 | https://fosis.org.uk/isoc/university-of-manchester-islamic-society/ | isoc | University of Manchester Islamic Society – FOSIS | `isoc-university-of-manchester-islamic-society` |
| 110 | https://fosis.org.uk/isoc/aston-university-islamic-society/ | isoc | Aston University Islamic Society – FOSIS | `isoc-aston-university-islamic-society` |
| 111 | https://fosis.org.uk/isoc/university-of-birmingham-islamic-society/ | isoc | University of Birmingham Islamic Society – FOSIS | `isoc-university-of-birmingham-islamic-society` |
| 112 | https://fosis.org.uk/isoc/nottingham-trent-university-islamic-society/ | isoc | Nottingham Trent University Islamic Society – FOSIS | `isoc-nottingham-trent-university-islamic-society` |
| 113 | https://fosis.org.uk/isoc/anglia-ruskin-university-islamic-society/ | isoc | Anglia Ruskin University Islamic Society – FOSIS | `isoc-anglia-ruskin-university-islamic-society` |
| 114 | https://fosis.org.uk/isoc/university-of-essex-islamic-society/ | isoc | University of Essex Islamic Society – FOSIS | `isoc-university-of-essex-islamic-society` |
| 115 | https://fosis.org.uk/isoc/aberystwyth-university-islamic-society/ | isoc | Aberystwyth University Islamic Society – FOSIS | `isoc-aberystwyth-university-islamic-society` |
| 116 | https://fosis.org.uk/isoc/swansea-university-islamic-society/ | isoc | Swansea University Islamic Society – FOSIS | `isoc-swansea-university-islamic-society` |
| 117 | https://fosis.org.uk/isoc/cardiff-university-islamic-society/ | isoc | Cardiff University Islamic Society – FOSIS | `isoc-cardiff-university-islamic-society` |
| 118 | https://fosis.org.uk/isoc/university-of-exeter-islamic-society/ | isoc | University of Exeter Islamic Society – FOSIS | `isoc-university-of-exeter-islamic-society` |
| 119 | https://fosis.org.uk/isoc/university-of-bristol-islamic-society/ | isoc | University of Bristol Islamic Society – FOSIS | `isoc-university-of-bristol-islamic-society` |
| 120 | https://fosis.org.uk/isoc/university-of-bath-islamic-society/ | isoc | University of Bath Islamic Society – FOSIS | `isoc-university-of-bath-islamic-society` |
| 121 | https://fosis.org.uk/isoc/university-of-brighton-islamic-society/ | isoc | University of Brighton Islamic Society – FOSIS | `isoc-university-of-brighton-islamic-society` |
| 122 | https://fosis.org.uk/isoc/university-of-reading-islamic-society/ | isoc | University of Reading Islamic Society – FOSIS | `isoc-university-of-reading-islamic-society` |
| 123 | https://fosis.org.uk/isoc/university-of-kent-islamic-society/ | isoc | University of Kent Islamic Society – FOSIS | `isoc-university-of-kent-islamic-society` |
| 124 | https://fosis.org.uk/isoc/university-of-portsmouth-islamic-society/ | isoc | University of Portsmouth Islamic Society – FOSIS | `isoc-university-of-portsmouth-islamic-society` |
| 125 | https://fosis.org.uk/isoc/university-of-surrey-islamic-society/ | isoc | University of Surrey Islamic Society – FOSIS | `isoc-university-of-surrey-islamic-society` |
| 126 | https://fosis.org.uk/isoc/university-of-sussex-islamic-society/ | isoc | University of Sussex Islamic Society – FOSIS | `isoc-university-of-sussex-islamic-society` |
| 127 | https://fosis.org.uk/isoc/birkbeck-islamic-society/ | isoc | Birkbeck Islamic Society – FOSIS | `isoc-birkbeck-islamic-society` |
| 128 | https://fosis.org.uk/isoc/goldsmiths-islamic-society/ | isoc | Goldsmiths Islamic Society – FOSIS | `isoc-goldsmiths-islamic-society` |
| 129 | https://fosis.org.uk/isoc/royal-holloway-islamic-society/ | isoc | Royal Holloway Islamic Society – FOSIS | `isoc-royal-holloway-islamic-society` |
| 130 | https://fosis.org.uk/isoc/middlesex-university-islamic-society/ | isoc | Middlesex University Islamic Society – FOSIS | `isoc-middlesex-university-islamic-society` |
| 131 | https://fosis.org.uk/isoc/university-of-east-london-islamic-society/ | isoc | University of East London Islamic Society – FOSIS | `isoc-university-of-east-london-islamic-society` |
| 132 | https://fosis.org.uk/isoc/university-of-westminster-islamic-society/ | isoc | University of Westminster Islamic Society – FOSIS | `isoc-university-of-westminster-islamic-society` |
| 133 | https://fosis.org.uk/isoc/city-university-of-london-islamic-society/ | isoc | City, University of London Islamic Society – FOSIS | `isoc-city-university-of-london-islamic-society` |
| 134 | https://fosis.org.uk/isoc/university-of-greenwich-islamic-society/ | isoc | University of Greenwich Islamic Society – FOSIS | `isoc-university-of-greenwich-islamic-society` |
| 135 | https://fosis.org.uk/isoc/brunel-university-islamic-society/ | isoc | Brunel University Islamic Society – FOSIS | `isoc-brunel-university-islamic-society` |
| 136 | https://fosis.org.uk/isoc/soas-islamic-society/ | isoc | SOAS Islamic Society – FOSIS | `isoc-soas-islamic-society` |
| 137 | https://fosis.org.uk/isoc/cambridge-university-islamic-society/ | isoc | Cambridge University Islamic Society – FOSIS | `isoc-cambridge-university-islamic-society` |
| 138 | https://fosis.org.uk/isoc/oxford-university-islamic-society/ | isoc | Oxford University Islamic Society – FOSIS | `isoc-oxford-university-islamic-society` |
| 139 | https://fosis.org.uk/isoc/university-of-southampton-islamic-society/ | isoc | University of Southampton Islamic Society – FOSIS | `isoc-university-of-southampton-islamic-society` |
| 140 | https://fosis.org.uk/isoc/university-of-nottingham-islamic-society/ | isoc | University of Nottingham Islamic Society – FOSIS | `isoc-university-of-nottingham-islamic-society` |
| 141 | https://fosis.org.uk/isoc/university-of-leicester-islamic-society/ | isoc | University of Leicester Islamic Society – FOSIS | `isoc-university-of-leicester-islamic-society` |
| 142 | https://fosis.org.uk/isoc/lse-islamic-society/ | isoc | LSE Islamic Society – FOSIS | `isoc-lse-islamic-society` |
| 143 | https://fosis.org.uk/isoc/queen-mary-university-of-london-islamic-society/ | isoc | Queen Mary University of London Islamic Society – FOSIS | `isoc-queen-mary-university-of-london-islamic-society` |
| 144 | https://fosis.org.uk/isoc/imperial-college-london-islamic-society/ | isoc | Imperial College London Islamic Society – FOSIS | `isoc-imperial-college-london-islamic-society` |
| 145 | https://fosis.org.uk/isoc/kings-college-london-islamic-society/ | isoc | King’s College London Islamic Society – FOSIS | `isoc-kings-college-london-islamic-society` |
| 146 | https://fosis.org.uk/isoc/ucl-islamic-society/ | isoc | UCL Islamic Society – FOSIS | `isoc-ucl-islamic-society` |

Total: **146 pages** (21 WordPress pages, 13 blog posts, 112 ISoc profile pages).

### Pages that exist but could not be read

| URL | HTTP status | Note |
| --- | --- | --- |
| https://fosis.org.uk/isoc-essentials/finance/ | 404 | Linked from the ISoc Essentials dashboard card 03. |
| https://fosis.org.uk/isoc-essentials/advocacy/ | 404 | Linked from the ISoc Essentials dashboard card 04. |
| https://fosis.org.uk/isoc-essentials/tarbiyyah/ | 404 | Linked from the ISoc Essentials dashboard card 05. |
| https://fosis.org.uk/fosis_jobs/divestment-lead/ | 301 to `/` | WP REST lists 15 `fosis_jobs` entries but every one redirects to the homepage. Content is not reachable. |
| https://fosis.org.uk/fosis_jobs/ (all 15 URLs) | 301 to `/` | Same as above. |
| https://fosis.org.uk/nec_member/ (all 8 URLs) | 301 to `/` | WP REST lists 8 NEC member entries; all redirect to the homepage. |
| https://fosis.org.uk/regional_chair/ (all 7 URLs) | 301 to `/` | WP REST lists 7 regional chair entries; all redirect to the homepage. |
| https://fosis.org.uk/sitemap.xml | 301 to `/wp-sitemap.xml` (404) | No sitemap published. |
| https://fosis.org.uk/wp-sitemap.xml | 404 | No sitemap published. |
| https://fosis.org.uk/site.webmanifest | 404 | No web app manifest. |

## 2. Global header and navigation

The header is `header.fosis-header` wrapping `.fosis-header-inner`, containing a logo block
(`.fosis-logo` with `.custom-logo-link`), the primary nav (`nav.fosis-nav[aria-label="Primary Navigation"]`
holding `ul#menu-fosis.fosis-menu`), and a hamburger button (`.fosis-hamburger`) that opens a
mobile drawer.

Logo: `cropped-Federation-of-Student-Islamic-Societies-Instagram-Post-2-1.png`, 512 x 464,
rendered at 512 x 464 with alt text `FOSIS`, linking to `/`.

Primary nav, in order (top level items are `.fosis-nav-top`, sub items are `.fosis-nav-sub`;
items with children get a `.fosis-dropdown-arrow` chevron glyph `▼`):

| Order | Label | Links to | Children (in order) |
| --- | --- | --- | --- |
| 1 | Home | `/` | none |
| 2 | What's FOSIS? | `/about-us/` | About Us (`/about-us/`), FOSIS History (`/fosis-history/`) |
| 3 | For Students | `#` (no destination) | Find Your ISoc (`/find-your-isoc/`), Events (`/events/`), Career Help (`/ihsaan-careers/`), FOSIS Report (`/fosis-report/`), Islamic Resources (`/islamic-resources/`) |
| 4 | For ISocs | `#` (no destination) | ISoc Affiliations (`/isoc-affiliations/`), ISoc Resources (`/isoc-essentials/`), FOSIS Services (`/fosis-services/`), Events (`/events/`) |
| 5 | For Student Unions | `#` (no destination) | Book Islamophobia Training (`/book-islamophobia-training/`), Sabbatical Officer Network (`/sabbatical-officer-network/`) |
| 6 | Articles | `/articles/` | none |
| 7 | Explore FOSIS Projects | `/join-team-fosis/` | none |
| 8 | Contact Us | `/contact-us/` | none |
| 9 | Support Us | `/support-us/` | none |

The three `#` parents are hover/click dropdown triggers only; three of the nav labels point at
pages whose menu title differs from the page title (Career Help to Ihsaan Careers, ISoc
Resources to ISoc Essentials, Explore FOSIS Projects to Join Team FOSIS).

Header CTA buttons: **none in the desktop header.** The header has no button element apart
from the hamburger. Two call-to-action surfaces sit outside the header proper:

- A sticky donate pill, `a.fosis-donate-pill#fosis-donate-pill`, fixed to the viewport and
  revealed after scrolling past the hero. Label `Support Us` plus a right arrow SVG,
  `aria-label="Support FOSIS"`, linking to `/support-us/`.
- A skip link, `a.fosis-skip-link`, label `Skip to main content`, targeting `#main-content`.

Mobile drawer (`div.fosis-drawer#fosis-drawer`, `role="dialog"`, `aria-modal="true"`):

- Header row: brand link, logo, and a close button (`button.fosis-drawer-close` with an X SVG).
- Body: `nav.fosis-mobile-nav` holding `ul.fosis-mobile-menu.menu-fosis-1` with the same nine
  items and dropdowns as the desktop menu, rendered as expandable accordions.
- Footer: `div.fosis-drawer-footer` with one gold button, label `Affiliate Your ISoc`, to
  `/isoc-affiliations/`, full width.

## 3. Global footer

`footer.fosis-footer` (`role="contentinfo"`). Four stacked bands: brand, link columns, socials,
legal bar.

**Band 1, brand** (`.fosis-footer-brand`): logo image (512 x 464, alt `FOSIS`, links to `/`),
tagline `The Federation of Student Islamic Societies` with `Est. 1963` on a second line, then
the description `The UK's national body representing Muslim students in higher and further education.`

**Band 2, link columns** (`.fosis-footer-links`, three `.fosis-footer-col`; each heading is an `h4.fosis-footer-heading`):

| Column heading | Items (in order) |
| --- | --- |
| For Students | Career Help (`/ihsaan-careers/`), Islamic Resources (`/islamic-resources/`), FOSIS Report (`/fosis-report/`) |
| For ISocs | ISoc Affiliations (`/isoc-affiliations/`), FOSIS Services (`/fosis-services/`), ISoc Resources (`/isoc-essentials/`) |
| Organisation | About Us (`/about-us/`), Explore Our Projects (`/join-team-fosis/`), Events (`/events/`), Articles (`/articles/`), Contact Us (`/contact-us/`), Support Us (`/support-us/`) |

**Band 3, socials** (`.fosis-footer-social`, three `.fosis-footer-social-link` anchors, each an
inline SVG icon plus a text label, all `target="_blank"` `rel="noopener noreferrer"`):

| Label | `aria-label` | URL |
| --- | --- | --- |
| X / Twitter | FOSIS on X (Twitter) | https://x.com/fosischannel |
| LinkedIn | FOSIS on LinkedIn | https://uk.linkedin.com/company/federation-of-student-islamic-societies |
| Events (Luma) | FOSIS on Luma | https://luma.com/calendar/cal-U05Qd0a3Ri06jpT |

**Band 4, legal bar** (`.fosis-footer-bottom` inside `.fosis-footer-bottom-inner`):

- `© 2026 FOSIS. All rights reserved.` (year is server-side rendered, not scripted)
- `.fosis-footer-credit`: `Representing **350,000** Muslim Students Nationwide`
- There are **no** privacy policy, terms, cookie notice, charity-number, or company-number
  links anywhere in the footer. That is a compliance gap on the live site, noted here so it is
  not silently reproduced as if it were intended.

There are seven distinct ticker strings across the site. The DOM duplicates each run so the
marquee loops; the list below is the de-duplicated run.

| Ticker run | Pages |
| --- | --- |
| `Est. 1963 · 350,000 Students · 100+ Affiliated ISocs · UK's Largest Muslim Student Organisation` | home |
| `Est. 1963 · 350,000 Students · 100+ Affiliated ISocs · UK & Ireland` | about-us, find-your-isoc, events, ihsaan-careers, fosis-report, join-team-fosis, fosis-services, support-us, book-islamophobia-training, sabbatical-officer-network, contact-us (and every page with the standard page hero) |
| `FOSIS ISoc Directory · 100+ Affiliated ISocs · UK & Ireland · Est. 1963` | isoc-affiliations and all 112 ISoc profiles |
| `FOSIS News · Est. 1963 · Muslim Student Voices · Careers · Welfare · Identity · Advocacy` | articles, articles/page/2 |
| `FOSIS Articles · Est. 1963 · Muslim Student Voices · UK & Ireland` | all 13 articles |
| `Islamic Resources · For Students · Spiritual Guides · FOSIS` | islamic-resources |
| (no ticker at all) | fosis-history, isoc-essentials, isoc-essentials/leadership, day-of-arafat, khutbah-library |

### Sitemap tree

```
https://fosis.org.uk/                                  home (front page)
├── /about-us/                                        About Us
│   └── /fosis-history/                               FOSIS History  (also a top-level nav child)
├── /find-your-isoc/                                  Find Your ISoc (full 112-card directory)
│   └── /isoc/<institution-slug>/                     x112 ISoc profile pages (all listed above)
├── /isoc-affiliations/                               ISoc Affiliations
│   └── ?isoc_region=<north|midlands|south|london|wales|scotland|ireland>   x7 filtered views, same template
├── /isoc-essentials/                                 ISoc Essentials hub
│   └── /isoc-essentials/leadership/                  Leadership & Planning
│       (cards 02..05 link to /events/ plus 404s, see gaps table)
├── /fosis-services/                                  FOSIS Services
├── /events/                                          Events (Luma calendar embed)
├── /articles/                                        Articles index, page 1
│   └── /articles/page/2/                             Articles index, page 2 (last page)
├── /2023/11/22/why-muslim-students-need-a-national-voice-more-than-ever/
├── /2024/01/18/faith-identity-and-the-british-muslim-graduate/
├── /2024/03/10/ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders/
├── /2024/09/05/how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies/
├── /2024/10/02/islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it/
├── /2024/11/15/ihsaan-2024-how-3000-muslim-graduates-found-their-path/
├── /2026/04/15/hello-world/                          WordPress default first post
├── /2026/04/16/4-surprising-truths-about-power-protest-and-a-generation-reawakened/
├── /2026/04/16/narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest/
├── /2026/04/16/the-new-face-of-islamophobia-in-britain/
├── /2026/04/16/the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal/
├── /2026/04/16/towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025/
├── /2026/04/16/when-tyranny-falls-lessons-from-syria-for-todays-students/
├── /ihsaan-careers/                                  Ihsaan Careers (nav label: Career Help)
├── /fosis-report/                                    FOSIS Report (Tally embed)
├── /islamic-resources/                               Islamic Resources
│   ├── /day-of-arafat/                               The Day of Arafat, A Companion Guide (standalone app page)
│   └── /khutbah-library/                             FOSIS Khutbah Library (standalone single-file app)
├── /join-team-fosis/                                 Join Team FOSIS (nav label: Explore FOSIS Projects)
├── /support-us/                                      Support Us (donations via Zeffy)
├── /book-islamophobia-training/                      Book Islamophobia Training (Jetpack form)
├── /sabbatical-officer-network/                      Sabbatical Officer Network (Jetpack form)
└── /contact-us/                                      Contact Us
```

## 4. Per-page section stacks

Each page is `main#main-content.fosis-main`. Sections are listed in document order with the
real class names. "Container" widths are `.fosis-container` (720px content column, 900px
max-width), `.fosis-container-wide` (1280px) and `.fosis-container-narrow` (720px).

### `home`

- URL: https://fosis.org.uk/
- Title tag: `FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/
- H1: `Empowering Muslim Students. Enriching Society.`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-hero fosis-hero-full` | eyebrow "Est. 1963, The Federation of Student Islamic Societies"; heading "Empowering Muslim Students. Enriching Society."; 2 CTA buttons |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-section fosis-section-light` | eyebrow "Our Mission"; heading "We have been serving Muslim students since 1963."; 1 CTA button |
| 4 | `fosis-section fosis-section-dark fosis-stats-section` | eyebrow "By The Numbers"; 4-up stat grid |
| 5 | `fosis-section fosis-section-offwhite` | eyebrow "What We Do"; heading "Three Pillars of Our Work"; 3-up card grid |
| 6 | `fosis-section fosis-section-light fosis-affiliates-section` | eyebrow "Our Network"; heading "Affiliated ISocs"; 2 CTA buttons |
| 7 | `fosis-section fosis-section-dark fosis-cta-section` | eyebrow "Get Involved"; heading "There Is a Place For You Here."; 1 CTA button |

### `about-us`

- URL: https://fosis.org.uk/about-us/
- Title tag: `About Us – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/about-us/
- H1: `About FOSIS`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header fosis-about-hero` | eyebrow "Est. 1963"; heading "About FOSIS" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-about-split fosis-about-split-light` | eyebrow "Our Mission"; heading "Serving Muslim Students Since 1963"; 1 CTA button |
| 4 | `fosis-about-split fosis-about-split-dark` | eyebrow "Our Story"; heading "A Legacy of Leadership"; 1 CTA button |
| 5 | `fosis-about-bento-section fosis-section-offwhite` | eyebrow "What Guides Us"; heading "Our Core Values" |
| 6 | `fosis-about-nec-section fosis-section-light` | eyebrow "Leadership"; heading "National Executive Committee"; 5 images |
| 7 | `fosis-about-chairs-section fosis-section-offwhite` | eyebrow "Regional Leadership"; heading "Regional Chairs"; 1 image |
| 8 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "There Is a Place For You Here."; 2 CTA buttons |

### `fosis-history`

- URL: https://fosis.org.uk/fosis-history/
- Title tag: `FOSIS History – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/fosis-history/
- H1: `Our Story`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fhis-hero` | heading "Our Story" |
| 2 | `fosis-section fhis-origin` | eyebrow "The Beginning"; heading "A Meeting that Changed Muslim Student Life in Britain" |
| 3 | `fhis-timeline-section` | eyebrow "Six Decades of History"; heading "The FOSIS Timeline" |
| 4 | `fosis-section fhis-legacy` | eyebrow "Defining Moments"; heading "Chapters that Shaped History" |
| 5 | `fosis-section fhis-people` | eyebrow "The Founders & Pioneers"; heading "People Who Built FOSIS" |
| 6 | `fosis-section fhis-global` | eyebrow "A Global Legacy"; heading "Born in Britain, Built for the World" |
| 7 | `fosis-section fhis-today` | eyebrow "Then & Now"; heading "The Mission Continues" |
| 8 | `fosis-section` | eyebrow "The Story Continues"; heading "Be Part of the Next Chapter"; 2 CTA buttons |

### `find-your-isoc`

- URL: https://fosis.org.uk/find-your-isoc/
- Title tag: `Find Your ISoc – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/find-your-isoc/
- H1: `Find Your ISoc`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Find Your ISoc" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "Your ISoc Is Waiting For You"; 109 images; searchable card grid |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `events`

- URL: https://fosis.org.uk/events/
- Title tag: `Events – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/events/
- H1: `Events`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Events" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "FOSIS Events Across the UK"; iframe embed |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `ihsaan-careers`

- URL: https://fosis.org.uk/ihsaan-careers/
- Title tag: `Ihsaan Careers – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/ihsaan-careers/
- H1: `Ihsaan Careers`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Ihsaan Careers" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "What is Ihsaan?"; 4 images |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `fosis-report`

- URL: https://fosis.org.uk/fosis-report/
- Title tag: `FOSIS Report – FOSIS`
- Meta description: A reporting portal for ISocs and Muslim students to submit incidents regarding ISoc issues, SU problems, or Islamophobia.
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/fosis-report/
- H1: `FOSIS Report`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "FOSIS Report" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "What Can I Report?"; iframe embed |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `islamic-resources`

- URL: https://fosis.org.uk/islamic-resources/
- Title tag: `Islamic Resources – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/islamic-resources/
- H1: `Islamic Resources`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header fosis-ir-hero` | eyebrow "For Students"; heading "Islamic Resources" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-section fosis-section-offwhite fosis-ir-section` | eyebrow "Resource Library"; heading "Curated for Muslim Students" |
| 4 | `fosis-section fosis-section-dark fosis-cta-section` | eyebrow "Got a Suggestion?"; heading "Help Us Grow This Library."; 1 CTA button |

### `isoc-affiliations`

- URL: https://fosis.org.uk/isoc-affiliations/
- Title tag: `ISoc Affiliations – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/isoc-affiliations/
- H1: `ISoc Affiliations`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header fosis-affil-hero` | eyebrow "For ISocs"; heading "ISoc Affiliations" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-affil-cta-banner` | heading "Ready to Affiliate Your ISoc?"; 1 CTA button |
| 4 | `fosis-page-body fosis-affil-regions-section` | eyebrow "Our Network"; heading "Explore by Region"; 7 CTA buttons; 7 region flip cards |
| 5 | `fosis-page-body fosis-affil-directory-section` | eyebrow "Directory"; heading "Find Your ISoc" |

### `isoc-essentials`

- URL: https://fosis.org.uk/isoc-essentials/
- Title tag: `ISoc Essentials – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/isoc-essentials/
- H1: `ISoc Essentials Hub`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `ieh-hero` | eyebrow "The National Standard"; heading "ISoc Essentials Hub" |
| 2 | `fosis-section ieh-welcome` | eyebrow "Curated with Ihsaan · Lead with Barakah"; heading "Welcome to the IE Hub" |
| 3 | `fosis-section ieh-dashboard` | eyebrow "Your Starting Point"; heading "Dashboard" |
| 4 | `fosis-section ieh-legacy` | eyebrow "A Shared History"; heading "The Legacy" |
| 5 | `fosis-section ieh-pillars` | eyebrow "The Pillars"; heading "Institutional Foundation" |
| 6 | `fosis-section ieh-vision` | eyebrow "Mission & Purpose"; heading "The Vision" |
| 7 | `fosis-section ieh-ftcta` | eyebrow "FOSIS Vision"; 1 CTA button |

### `isoc-essentials-leadership`

- URL: https://fosis.org.uk/isoc-essentials/leadership/
- Title tag: `Leadership – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/isoc-essentials/leadership/
- H1: `Leadership & Planning`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `ilp-hero` | heading "Leadership & Planning" |
| 2 | `fosis-section ilp-quicklinks` | heading "Quick Links & Templates" |
| 3 | `fosis-section ilp-committee` | heading "Building Your Committee" |
| 4 | `ilp-lessons` | heading "Lessons in Leadership" |
| 5 | `fosis-section ilp-handover` | heading "Key Handover Documentation" |

### `join-team-fosis`

- URL: https://fosis.org.uk/join-team-fosis/
- Title tag: `Join Team FOSIS – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/join-team-fosis/
- H1: `Join Team FOSIS`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Join Team FOSIS" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "Be Part of Something Bigger"; 1 CTA button |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `support-us`

- URL: https://fosis.org.uk/support-us/
- Title tag: `Support Us – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/support-us/
- H1: `Support FOSIS`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero fosis-section-dark` | eyebrow "Make a Difference"; heading "Support FOSIS"; 1 CTA button |
| 2 | `fosis-section fosis-section-light` | eyebrow "Your Impact"; heading "What Your Support Enables"; 3-up card grid |
| 3 | `fosis-section fosis-section-offwhite fosis-donate-section` | eyebrow "Give Today"; heading "Choose How You Give"; 3 CTA buttons; 3-card donation grid |
| 4 | `fosis-section fosis-section-dark fosis-stats-section` | eyebrow "Our Reach"; 4-up stat grid |
| 5 | `fosis-section fosis-section-light` | eyebrow "Transparency & Trust"; heading "A Registered Charity You Can Trust"; 1 CTA button |

### `book-islamophobia-training`

- URL: https://fosis.org.uk/book-islamophobia-training/
- Title tag: `Book Islamophobia Training – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/book-islamophobia-training/
- H1: `Book Islamophobia Training`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Book Islamophobia Training" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "Making Campuses Safer for Muslim Students"; 2 images; form |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `sabbatical-officer-network`

- URL: https://fosis.org.uk/sabbatical-officer-network/
- Title tag: `Sabbatical Officer Network – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/sabbatical-officer-network/
- H1: `Sabbatical Officer Network`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Sabbatical Officer Network" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "Muslim Students Are Shaping Student Unions"; 2 images; form |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `contact-us`

- URL: https://fosis.org.uk/contact-us/
- Title tag: `Contact Us – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/contact-us/
- H1: `Contact Us`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "Contact Us" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "Send Us a Message" |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `articles`

- URL: https://fosis.org.uk/articles/
- Title tag: `Articles – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: `(tag absent)`
- H1: `News & Updates`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | eyebrow "FOSIS Publications"; heading "News & Updates" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-section fosis-articles-page-section` | heading "Towards an Ummatic Vision: Lessons from FOSIS Annual Conference 2025"; 3 images |
| 4 | `fosis-page-cta-strip` | eyebrow "Stay Informed"; heading "Follow FOSIS for the latest updates."; 2 CTA buttons |

### `articles-page-2`

- URL: https://fosis.org.uk/articles/page/2/
- Title tag: `Articles – Page 2 – FOSIS`
- Meta description: `(present but an empty string)`
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: `(tag absent)`
- H1: `News & Updates`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | eyebrow "FOSIS Publications"; heading "News & Updates" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-section fosis-articles-page-section` | heading "Ramadan at University: A Complete Guide for Students and ISoc Leaders" |
| 4 | `fosis-page-cta-strip` | eyebrow "Stay Informed"; heading "Follow FOSIS for the latest updates."; 2 CTA buttons |

### `fosis-services`

- URL: https://fosis.org.uk/fosis-services/
- Title tag: `FOSIS Services – FOSIS`
- Meta description: One affiliation, everything your Islamic Society needs to thrive: training, advocacy, resources, and a national network of 110+ ISocs behind you.
- OG image: https://fosis.org.uk/wp-content/themes/fosis/assets/images/og-default.jpg
- Canonical: https://fosis.org.uk/fosis-services/
- H1: `FOSIS Services`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header` | heading "FOSIS Services" |
| 2 | `fosis-ticker` | marquee ticker |
| 3 | `fosis-page-body` | heading "What every affiliated ISoc receives"; 2 CTA buttons |
| 4 | `fosis-page-cta-strip` | eyebrow "Get Involved"; heading "Have a question or want to work with us?"; 2 CTA buttons |

### `day-of-arafat`

- URL: https://fosis.org.uk/day-of-arafat/
- Title tag: `The Day of Arafat, A Companion Guide`
- Meta description: `(tag absent)`
- OG image: MISSING
- Canonical: `(tag absent)`
- H1: none in `<main>`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `callout` | static block |
| 2 | `block` | heading "Virtues of the Day" |
| 3 | `block` | heading "Preparing for the Day"; form |
| 4 | `block` | heading "A Suggested Timetable" |
| 5 | `block` | heading "Useful Links" |

### `khutbah-library`

- URL: https://fosis.org.uk/khutbah-library/
- Title tag: `FOSIS Khutbah Library`
- Meta description: `(tag absent)`
- OG image: MISSING
- Canonical: `(tag absent)`
- H1: `Khutbah Library FOSIS • Further Education`

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `topbar` | heading "Khutbah Library FOSIS • Further Education" |
| 2 | `screen active` | heading "Khutbah Library" |
| 3 | `screen` | static block |

### `day-of-arafat`

This page does **not** use the WordPress theme. It is a standalone static page served through
WordPress: no `header.fosis-header`, no `footer.fosis-footer`, no theme CSS, no ticker, no
`fosis-*` classes at all. Its own chrome is a fixed progress bar, a `header.hero`, and a
`footer` with an Arabic dua. A rebuild should treat it as its own mini-app, not as a page
template.

Sections in document order:

| # | Element | Layout |
| --- | --- | --- |
| 1 | `div.progress-bar` | sticky bar: label `Your day`, progress track, counter `0 / 0`, `Reset` button (title `Reset all checkboxes`) |
| 2 | `header.hero` | eyebrow `A Companion Guide`, centred h1 `The Day of Arafat` (the word Arafat is `<em>`), subtitle, ornamental star rule |
| 3 | `main.container` | a `.callout` disclaimer block, then four numbered `section.block` groups: `i. Virtues of the Day`, `ii. Preparing for the Day`, `iii. A Suggested Timetable`, `iv. Useful Links` |
| 4 | `footer` | Arabic dua `تَقَبَّلَ ٱللَّٰهُ مِنَّا وَمِنْكُمْ` plus the English `May Allah accept from us, and from you.` |

Every checklist item is a `label.check-item` wrapping a checkbox input and a `.text` span,
keyed by `data-id` (for example `prep-1`). State persists in `localStorage` under
`arafat-companion-v1`, and the user-added to-dos under `arafat-companion-custom-v1`.

### `khutbah-library`

Also standalone: a single HTML file with inline CSS, inline JS and no WordPress theme wrapper.
Its entire corpus sits in a `const APP = {...}` JSON object. Structure is a top bar plus two
screens:

| # | Element | Layout |
| --- | --- | --- |
| 1 | `div.topbar` | sticky navy bar, h1 `Khutbah Library` with `<small>FOSIS • Further Education</small>`, `A−` and `A+` font buttons (hidden until a khutbah is open), `‹ Library` back button |
| 2 | `div#home.screen.active` | hero card `Khutbah Library` + one-line description, search input, horizontally scrolling pack chips, then a list of khutbah cards grouped by pack |
| 3 | `div#reader.screen` | filled by JS: reader head with tag, h2 title and pack theme, then numbered sections for the Arabic opening, first English khutbah, Arabic close, pause banner, Arabic second opening, second English khutbah, and closing duas, then `‹ Previous` / `Next ›` |
| 4 | `footer` (inside reader) | `Federation of Student Islamic Societies • FOSIS` and the care notice about the Names of Allah and Qur'anic Ayat |

The Arabic passages are base64 PNG images injected as `<img class="ar-img" alt="Arabic">`, not
text. Everything else, all 36 khutbahs in four packs of 10, 10, 6 and 10, is in
`content/khutbah-library.md`.

### Article pages (13 posts)

All posts share one template. Sections in order:

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header fosis-article-hero` | centred hero, eyebrow is the post date (`16 April 2026`), h1 is the post title, byline `By {author} · Reading time loading…` (the read time is filled by JS, so the literal string `Reading time loading…` is what ships in HTML) |
| 2 | `fosis-read-progress` (div) | thin fixed reading-progress bar, no text |
| 3 | `fosis-ticker` | marquee strip: `FOSIS Articles · Est. 1963 · Muslim Student Voices · UK & Ireland` |
| 4 | `article.fosis-article-body` | `.fosis-container-narrow` holding, in order: `figure.fosis-article-featured-img`, `div.fosis-article-content` (Gutenberg body), `div.fosis-article-share` (label `Share this article` plus X and LinkedIn icon buttons), `nav.fosis-single-nav` (ghost `← Previous` and dark `Next →` buttons) |
| 5 | `fosis-section fosis-section-offwhite fosis-related-section` | eyebrow `Continue Reading`, h2 `More from FOSIS`, 3-card `.fosis-articles-grid` |

Jetpack also injects a hidden-by-default `div.sharedaddy` (X, Facebook, Like) between the article content and the theme share block; it renders as `### Share this:` / `### Like this:` headings in the captured copy.
Post list with URL, date, title and author:

| Date | Title | URL |
| --- | --- | --- |
| 2026-04-16 | Towards an Ummatic Vision: Lessons from FOSIS Annual Conference 2025 – FOSIS | https://fosis.org.uk/2026/04/16/towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025/ |
| 2026-04-16 | The New Face of Islamophobia in Britain. – FOSIS | https://fosis.org.uk/2026/04/16/the-new-face-of-islamophobia-in-britain/ |
| 2026-04-16 | 4 Surprising Truths About Power, Protest, and a Generation Reawakened – FOSIS | https://fosis.org.uk/2026/04/16/4-surprising-truths-about-power-protest-and-a-generation-reawakened/ |
| 2026-04-16 | When Tyranny Falls: Lessons from Syria for Today’s Students – FOSIS | https://fosis.org.uk/2026/04/16/when-tyranny-falls-lessons-from-syria-for-todays-students/ |
| 2026-04-16 | Narrative Warfare and ‘Intifada’: Freedom of Expression and the Policing of Protest – FOSIS | https://fosis.org.uk/2026/04/16/narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest/ |
| 2026-04-16 | The Spiritual Cost of Modern Education and a Muslim Vision for Renewal – FOSIS | https://fosis.org.uk/2026/04/16/the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal/ |
| 2026-04-15 | Hello World! – FOSIS | https://fosis.org.uk/2026/04/15/hello-world/ |
| 2024-11-15 | IHSAAN 2024: How 3,000 Muslim Graduates Found Their Path – FOSIS | https://fosis.org.uk/2024/11/15/ihsaan-2024-how-3000-muslim-graduates-found-their-path/ |
| 2024-10-02 | Islamophobia on Campus: What the Data Tells Us, and What We’re Doing About It – FOSIS | https://fosis.org.uk/2024/10/02/islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it/ |
| 2024-09-05 | How to Build a Thriving ISoc: 10 Lessons from the UK’s Best Islamic Societies – FOSIS | https://fosis.org.uk/2024/09/05/how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies/ |
| 2024-03-10 | Ramadan at University: A Complete Guide for Students and ISoc Leaders – FOSIS | https://fosis.org.uk/2024/03/10/ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders/ |
| 2024-01-18 | Faith, Identity and the British Muslim Graduate – FOSIS | https://fosis.org.uk/2024/01/18/faith-identity-and-the-british-muslim-graduate/ |
| 2023-11-22 | Why Muslim Students Need a National Voice More Than Ever – FOSIS | https://fosis.org.uk/2023/11/22/why-muslim-students-need-a-national-voice-more-than-ever/ |

### ISoc profile pages (112)

Template, in order:

| # | Section classes | Layout |
| --- | --- | --- |
| 1 | `fosis-page-hero-header fosis-isoc-hero` | eyebrow `Islamic Society Profile`, h1 is the ISoc name, subtitle is the institution name |
| 2 | `fosis-ticker` | `FOSIS ISoc Directory · 100+ Affiliated ISocs · UK & Ireland · Est. 1963` |
| 3 | `fosis-isoc-profile-section` | two-column: left sidebar (circular logo, name, institution, social links, `← All ISocs` button), right content (navy info bar with `Region` and `Institution`, then optional Gutenberg body) |
| 4 | `fosis-page-cta-strip` | eyebrow `Get Involved`, heading `Is your ISoc not listed here?`, buttons `Affiliate Your ISoc →` and `Contact Us` |

The full list of 112 ISoc URLs and their per-page copy is in the `content/isoc-*.md` files.

## 5. Design tokens (from `wp-content/themes/fosis/assets/css/main.css`)

The theme stylesheet is a single hand-written file (192 KB, unminified, with box-drawing
comment banners). All tokens are declared in `:root`.

| Token | Value | Used for |
| --- | --- | --- |
| `--navy` | `#0a2240` | body background, dark sections, button text on gold |
| `--navy-mid` | `#112d54` | dark section depth, hover states |
| `--navy-light` | `#1a4a7a` | gradient stop in the page hero |
| `--gold` | `#c9a84c` | eyebrow labels, ticker bar, primary buttons, accent rules |
| `--gold-dark` | `#a8872a` | gold hover state |
| `--gold-light` | `#dfc06a` | gold highlight |
| `--white` | `#ffffff` | light sections, text on navy |
| `--off-white` | `#f4f2ec` | alternate light section background |
| `--grey-light` | `#e8e6de` | borders and rules on light sections |
| `--text-muted` | `#6b7f96` | secondary text on dark |
| `--text-dim` | `#3d4f63` | secondary text on light |
| `--text-dark` | `#111827` | body text on light sections |
| `--font` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | everything |
| `--nav-height` | `100px` | header offset and hero top padding |
| `--radius` | `0px` | the whole site is square-cornered except circular avatars and pills |
| `--transition` | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` | hovers |
| `--transition-slow` | `0.6s cubic-bezier(0.4, 0, 0.2, 1)` | scroll reveals |
| `--container` | `1280px` | `.fosis-container-wide` |
| `--container-mid` | `900px` | `.fosis-container` |
| `--container-narrow` | `720px` | `.fosis-container-narrow` |

Other colours that appear literally in the stylesheet and are worth carrying over: footer
background `#061526`; page-hero gradient `linear-gradient(150deg, #0a2240 0%, #143a6b 55%, #1a4a7a 100%)`;
blog/body accents `#001A3D`, `#C6A050`, `#D4AF37`, `#EEF1F6`, `#8A94A6`; the region flip cards
use per-card custom properties `--firc-bg` set inline in the HTML (`#3d0a0a` North, `#142b25`
Midlands, and so on).

Type scale in practice: hero h1 `clamp(2.8rem, 5.5vw, 5rem)` / weight 900 / `line-height: 1.0` /
`letter-spacing: -2px` / uppercase; section titles around 2.2rem at weight 900 with
`letter-spacing: -0.5px`; eyebrows are 0.72rem at weight 700 with 5px letter spacing and
uppercase. Body copy sits at 1.05rem with `line-height: 1.9` inside Gutenberg blocks.

## 6. Fonts

One family: **Inter**, loaded from WordPress.com's font CDN as
`https://fonts-api.wp.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap`.
Weights 300 through 900 in use; 900 for display headings, 700 for labels and buttons, 400/500
for body. Fallback stack is `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

Two pages load extra typefaces:

- `khutbah-library`: Google Fonts `Scheherazade New` (400, 500, 700) and `Amiri`, with
  `"Traditional Arabic", "Geeza Pro", serif` fallbacks, for Arabic text.
- `day-of-arafat` and `isoc-essentials` render Qur'anic Arabic at large sizes using the same
  serif Arabic stack declared locally.

## 7. Tech stack and CMS

- **CMS: WordPress** running on **WordPress.com Atomic** hosting (`x-hacker` response header,
  `wpcomsh` plugin namespace in the REST API, `s0.wp.com` scripts, Jetpack stats with blog id
  254188810). Batcache is in front of PHP (`generated in 0.246 seconds`, `batcached for 300 seconds`).
- **Theme:** a bespoke classic PHP theme, `fosis` (`wp-content/themes/fosis`), with one
  stylesheet and one script, both cache-busted by `?m=1786182877`.
- **Plugins in evidence:** Jetpack (carousel, tiled gallery, sharing, likes, stats, forms),
  Gutenberg (core block styles), Akismet (comment spam), Crowdsignal Forms, wpcomsh.
- **Page building:** Gutenberg block markup inside `div.fosis-page-content`, blended with
  bespoke section partials per template (`page.php`, `front-page.php`, `single.php`,
  `single-isoc.php`, `page-isoc-affiliations.php`, `page-isoc-essentials.php`, and so on).
- **Custom post types:** `isoc`, `nec_member`, `regional_chair`, `fosis_jobs`, `jetpack_form`.
- **Forms:** Jetpack Contact Form (server-rendered markup with `data-wp-interactive="jetpack/form"`)
  on `/book-islamophobia-training/` and `/sabbatical-officer-network/`; Tally.so embeds on
  `/fosis-report/` (`iframe`); a Google Forms link for ISoc affiliation.
- **Embedded third parties:** Luma calendar (`https://luma.com/embed/calendar/cal-U05Qd0a3Ri06jpT/events`),
  Tally (`https://tally.so/embed/w5QE4d`), Zeffy donation modals (`data-zeffy-url` on the donate
  buttons, loaded in a dialog by `main.js`), X/Twitter widget assets.
- **Images:** WordPress.com Photon CDN in front of `wp-content/uploads` (`i0.wp.com`), with
  `?fit=`, `?resize=`, `?w=` query transforms. Originals are still reachable by dropping the query.
- **Analytics:** Jetpack Stats (`stats.wp.com/e-202646.js`) and WordPress.com `bilmur.min.js`.
- **Comments:** Jetpack comment form rendered on every page (hidden until a post is viewed).
- **No** page builder plugin (no Elementor, Divi or WPBakery), **no** WooCommerce, **no** SEO
  plugin: the `<head>` carries a hand-written meta block whose own comment reads
  `<!-- ── Meta description fallback (overridden by Yoast/RankMath if active) ── -->`, and the
  meta description is an empty string on 136 of 146 pages.

## 8. Head metadata pattern

Every theme page ships this pattern:

```html
<meta name="description" content="">            <!-- empty on most pages -->
<meta property="og:type" content="website">
<meta property="og:url" content="{permalink}">
<meta property="og:site_name" content="FOSIS">
<meta property="og:title" content="{title}">
<meta property="og:image" content="/wp-content/themes/fosis/assets/images/og-default.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@FOSISChannel">
```

Posts and ISoc pages then emit a **second** set of `og:` tags from Jetpack further down the
`<head>`, so the file contains duplicate `og:url`, `og:title`, `og:image` and `description`
tags. Browsers and crawlers take the last one. The canonical link is emitted for
`wp-singular` templates but is **absent** on `/articles/`, `/articles/page/2/`,
`/day-of-arafat/` and `/khutbah-library/`.

Favicons/head icons: `rel="icon"` 32x32 and 192x192 plus `rel="apple-touch-icon"` 180x180, all
built from `wp-content/uploads/2026/05/cropped-Fosis-Logo.png` through Photon. See `images.md`.

## 9. Interaction and motion notes

Carried behaviour a rebuild has to reproduce, all driven by `assets/js/main.js` or inline JS:

- Hero background slideshow with three photographic slides, cross-faded, with dot controls
  (`.fosis-hero-bg-dots`) and `aria-label="Slide 1..3"`.
- Scroll-triggered reveal animation: elements with `.fosis-reveal` and `.fosis-fade-up` start
  offset and fade in; `.fosis-reveal-delay-1..3` and `.fosis-delay-1..3` stagger them.
- Infinite marquee ticker (`.fosis-ticker-track`), decorative and `aria-hidden="true"`; the
  item list is duplicated in the DOM for a seamless loop.
- NEC carousel on `/about-us/`: horizontal scroll viewport with fixed arrows and a pause/play
  button (`.fosis-nec-pause`) for WCAG 2.2.1/2.2.2 compliance.
- Sticky donate pill that appears after the hero.
- ISoc directory on `/find-your-isoc/`: live search input, region pill filters, and accordion
  cards whose panels carry `aria-expanded`, `aria-controls` and `hidden`.
- Region flip cards on `/isoc-affiliations/`: CSS 3D flip, `role="button"`, `aria-pressed`,
  keyboard-activated.
- Reading progress bar and auto-computed read time on article pages.
- Zeffy donation modal opened from `button.fosis-zeffy-trigger[data-zeffy-url]`.
- `khutbah-library` is a completely separate single-page app with its own router, font-size
  controls, checklist-free reader, and pack filter chips.
- `day-of-arafat` keeps checklist state in `localStorage` and shows a progress counter.
