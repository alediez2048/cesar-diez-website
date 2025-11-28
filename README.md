# Cesar Diez - Personal Website

A minimalist, MoMA-inspired personal website for Cesar Diez, showcasing expertise in Credit Risk Strategy, Finance, and Data Analytics.

## Live Demo
[https://jorgealejandrodiez.github.io/cesar-diez-website/](https://jorgealejandrodiez.github.io/cesar-diez-website/)

## Technologies
- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 (Custom MoMA Design System)
- **Deployment**: GitHub Pages

## Design Philosophy
The design is inspired by the Museum of Modern Art (MoMA), focusing on:
- **Minimalism**: Lots of whitespace and clean lines.
- **Typography**: Bold, sans-serif fonts as the primary visual element.
- **Monochrome**: Strict black and white color palette with subtle grays.
- **Content-First**: The design serves to highlight the professional content without distraction.

## Development

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Installation
```bash
git clone https://github.com/jorgealejandrodiez/cesar-diez-website.git
cd cesar-diez-website
npm install
```

### Run Locally
```bash
npm run dev
```

### Build & Deploy
To deploy to GitHub Pages:
```bash
npm run deploy
```
This command will build the project and push the `dist` folder to the `gh-pages` branch.

## Project Structure
```
src/
├── components/       # React components
│   ├── Hero.jsx      # Landing section
│   ├── About.jsx     # Professional bio
│   ├── Experience.jsx # Work history
│   ├── Projects.jsx  # Portfolio projects
│   ├── Skills.jsx    # Technical skills
│   └── Contact.jsx   # Contact info and footer
├── styles/           # CSS files
│   ├── components/   # Component-specific styles
│   └── index.css     # Global styles and variables
├── App.jsx           # Main application component
└── main.jsx          # Entry point
```

## License
All rights reserved.
