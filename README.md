# QA Engineer Portfolio

A clean, minimal personal portfolio website.

## Folder Structure

```
portfolio/
├── index.html          ← Main page structure
├── style.css           ← All styles (edit CSS variables at top)
├── script.js           ← Interactions & project data
├── assets/
│   ├── images/
│   │   ├── profile.jpg         ← Replace with your profile photo
│   │   ├── banner.jpg          ← Replace with your cover/banner image
│   │   ├── proj-selenium-1.jpg ← Project 1 screenshot
│   │   ├── proj-selenium-2.jpg ← Project 2 screenshot
│   │   ├── proj-playwright-1.jpg
│   │   └── proj-playwright-2.jpg
│   └── cv/
│       └── cv.pdf              ← Replace with your actual CV
└── README.md
```

## How to Edit

### Change your name, bio, contact info
→ Open `index.html` and search for `✏️` comments

### Change project info & demo videos
→ Open `script.js` and edit the `PROJECT_DATA` object at the top

### Change colors
→ Open `style.css` and edit the CSS variables in the `:root` block

### Add a profile photo
→ Drop your photo into `assets/images/profile.jpg`

### Add your CV
→ Drop your PDF into `assets/cv/cv.pdf`

## Opening in PyCharm
1. Open PyCharm → File → Open → select this `portfolio/` folder
2. Right-click `index.html` → Open In → Browser
