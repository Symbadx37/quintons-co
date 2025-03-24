# Quinton's Burgers & Fries
*Welcome to Quinton's Burgers & Fries! We're  booming start-up fast food chain based in southern California where nothing ever goes ~~right~~ wrong! Come visit us today, and we promise you'll have a totally regrettable experience!*
## Purpose
This repository is an on-going side project for learning and practicing HTML, CSS, and eventually JavaScript (and potentially other backend languages). The website is hosted
using GitHub pages and is a satirical website for a fictional fast food chain, [Quinton's Burgers & Fries](https://symbadx37.github.io/). This project was first started back in April 2024 and was later moved to GitHub in early October. If you would like to contribute, feel free to fork the repo and/or make a pull request.
# Version History
The full changelogs for all release versions are listed below in addition to the original commit date. Since I'm using GitHub pages instead of using the built-in 'Releases' feature (since this repository is pure HTML and CSS), this README is the primary way I'm documenting development changes.
## Patch v0.2.0.3
**Commit Date:** March 24th, 2025
- Added an upscaled version (from 96x96 to 384x384) of the Quinton's favicon to the source code for future use.
- Added a new folder `form` to the `pgs` subdirectory for containing form related redirection pages.
- Created a new redirect page called `submission.html` for displaying after submitting a form.
- Updated form settings in `contact.html` and `ratings.html` to redirect to `submission.html`.
- Setup webhook in Quinton's Co. discord server for displaying repository actions and changes.
- Updated `README.md` to reflect `v0.2.0.3` changes.
## Patch v0.2.0.2
**Commit Date:** March 23rd, 2025
- Minor code refactoring to `index.html`.
- Removed unused @import queries from `styles.css`.
- Moved local @font-face query to the top of the `styles.css` file.
- Added new customer review to the `ratings.html` page.
- Further optimized all background image assets to improve loading times.
- Removed unused image assets from source code.
- Increased height of form input containers on the `contact.html` page to prevent text clipping within the select field.
- Updated `README.md` to reflect `v0.2.0.2` changes.
## Patch v0.2.0.1
**Commit Date:** March 19th, 2025
- Fixed minor grammatical errors on `sandwiches.html` and `condiments.html`.
- Added anchor links for the sitewide navbar to `404.html` page.
- Removed menu items `Ketchup Bottle` and `Special Sauce` from the `condiments.html` page. They will be added back in a minor update.
- Updated `README.md` to reflect `v0.2.0.1` changes.
## Release v0.2.0
**Commit Date:** March 19th, 2025
### General Changes
- Updated sitewide navbar. Reduced the size of the logo, increased the spacing between words, and added new page anchors: `Locations`, `Ratings`, `My Quinton's`, and a shopping cart icon. Changed the background color and removed the bottom border.
- Added sitewide infobars to all major pages.
- Updated sitewide sidebar. Added `Who We Are` and `Contact Us` sections to the sidebar. Updated text content of `Our Hours` section. Removed `Contact Us` section from the `contact.html` page to avoid redundancy.
- Updated sitewide footer. Changed the primary background color. Added sections for website title, info, and social media; as well as services, company, and business anchors. Added bottom border and centered copyright text within the border.
- Added `ratings.html` page. Added `Customer Ratings ` section. Added `Write A Review` form section. Added backend support to form via a [third-party](https://formsubmit.co/) hoster. 
- Added `503.html` page.
- Updated `404.html` page. Headings and text content were added.
- Added five separate sub-menu pages: `beverages.html`, `condiments.html`, `fries.html`, `hamburgers.html`, and `sandwiches.html`.
- Updated `README.md` to reflect `v0.2.0` changes.
- Converted all large image files from `.png` to `.webp` to reduce overall file size.
### Directory Changes
- Added `fnt` folder to contain `.ttf` files. Added `ShantellSans-VariableFont.ttf`and  `ShantellSans-Italic-VariableFont.ttf`. Added offline references to the `styles.css` file to both fonts.
- Added `pgs` folder to root.
- Added `sub-menu` and `err` folders within the `pgs` folder for containing all sub-pages.
- Added `bgs`, `icons`, and `menu` folders within the `img` for organizing and containing all images.
- Added `select` folder within the `menu` folder for containing all images used in the menu navbar.
### Code Changes
- Updated HTML `<title>` tags for all pages.
- Added and set HTML language attributes to English for all pages.
- Updated and added comments for labeling major sections within every HTML file.
- All IDs are now directly embedded within their respective HTML file instead of the external stylesheet.
- Improved and/or replaced code structure for numerous HTML and CSS elements. Grid elements are now used for the majority of complex page elements instead of the prior, more primitive styling methods.
- Added new `@media` viewports for handling menu image containers to the `styles.css` file.
- Updated home backsplash. Increased the size of the background image. Changed the text content of the tagline and increased its font size and weight. Added a paragraph below the tagline. Changed the text content of the link button and its anchor link.
### Page Changes - "Home"
- Added four page separators: `Welcome to Quinton's`, `Contact Quinton's`, `Health & Nutrition`, and `Legal Nonsense`.
- Updated `Who We Are` and `How We Operate` item areas.
- Added `Customer Complaints`, `Company Disclaimer`, and `Corporate Health Policy` item areas.
- Added four new backsplashes: `Eat At Quinton's`, `Quinton's Meal Deals`, `Work At Quinton's`, and `Nutrition Facts`.
### Page Changes - "Menu"
- Adapted all viable menu content to the new menu layout and removed any unusable content from the page.
- Added `Quinton's Menu` section.
- Added a navbar for linking each sub-menu page.
### Page Changes - "About Us"
- Renamed `about-us.html` to `about.html`.
- Updated all references to redirect to `503.html` instead as it is still undergoing development changes. It will be completed and re-added in a later update.
- Moved the `Testimonials` section to the `ratings.html` page.
### Page Changes - "Contact Us"
- Renamed `contact-us.html` to `contact.html`.
- Added new `Contact Quinton's` section.
- Updated `Contact` section. Renamed heading from `Contact` to `Contact Info`. Added subheadings. Added new phone numbers and business emails. 
- Updated `Location` section. Renamed heading from `Location` to `Our Locations`. Added subheadings. Added new restaurant locations and corporate office. Added addresses and phone numbers for all listed items.
- Added new `Customer Complaints` section.
- Updated `File A Complaint` form section. Renamed heading from `File A Complaint` to `Complaint Form`. Added subheading. Improved form field layout and styling. Added new `Reason` select field and pre-determined options. Tweaked styling and text content. Added 'required' paragraph below form. Added backend support to form via a [third-party](https://formsubmit.co/) hoster.
## Release v0.1.6
**Commit Date:** March 10th, 2025
- Added new error page `404.html` for displaying when attempting to view unavailable pages.
- Added new folders to root.
- Deleted `menu-exp.html` from root.
- Added new CSS properties, `display: inline-block` and `min-width: 100%`, to `styles.css` to ensure proper element responsiveness.
- Updated `README.md` to reflect `v0.1.6` changes.
## Release v0.1.5
**Commit Date:** March 7th, 2025
- Added backend support via a [third-party](https://formsubmit.co/) hoster. Form submissions now work when submitting a 'Customer Complaint' on the `contact-us.html` page.
- Updated the styling for the 'Submit' button on the `contact-us.html` page.
- Merged prior commits, added new descriptions, and created new tags to setup a proper versioning system going forward.
- Setup new `dev` branch for pushing local dev builds to archival purposes.
- Updated `README.md`. Removed `Potential Features` and `Note` sections. Added new `Purpose` and `Version History` sections. Also added a funny tagline below the main title.
## Release v0.1.4
**Commit Date:** February 27th, 2025
- Major code refactoring and changes to `styles.css` and several .html files.
- Added a custom favicon to every .html page.
- Made new pull request and setup `exp` branch.
## Release v0.1.3
**Commit Date:** February 26th, 2025
- Overhauled customer review structure and styling. Reviews now consist of a `review-title`, `review-rating`, `review-description`, `review-name`, and a `review-date` instead of just a `review-name` and `review-description`.
- New customer reviews were added to the `about-us.html` page.
- Minor changes and tweaks were also made to several `.html` files.
- Updated `README.md` to include the `Potential Features` and `Note` sections.
## Release v0.1.2
**Commit Date:** February 11th, 2025
- Updated the redirect link for the 'Apply Now' button on the index.html page.
- Added a new customer review to the `about-us.html` page.
- Added new heading 'See what our customers say about us!' under the 'Testimonials' heading to the `about-us.html` page.
- Fixed typos and added new heading to the `about-us.html` page.
## Release v0.1.1
**Commit Date:** December 5th, 2024
- Fixed broken link for 'Apply Now' button on the `index.html` page.
- Added new customer review to the `about-us.html` page.
## Release v0.1.0
**Commit Date:** October 7th, 2024
- Created `main` branch and setup GitHub pages for the repository.
- Uploaded source code files `index.html`, `menu.html`, `about-us.html`, `contact-us.html`, and `styles.css`.
- Uploaded folders `css` and `img` for containing the external stylesheet and image assets respectively.

