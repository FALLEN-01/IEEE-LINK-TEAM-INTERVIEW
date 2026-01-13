# LINK CAMP 2025 - IEEE LINK

![IEEE LINK](https://img.shields.io/badge/IEEE-LINK-00629B?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)

A modern, responsive website for LINK CAMP 2025 - IEEE LINK's flagship annual event bringing together students, professionals, and technology enthusiasts for an immersive two-day learning experience.

## 🌟 Overview

LINK CAMP 2025 is designed to bridge the gap between academic learning and industry requirements through interactive workshops, technical sessions, and networking opportunities. This website serves as the primary information hub and registration platform for the event.

## 🚀 Features

- **Modern Design**: Stunning UI with IEEE branding, gradient backgrounds, and glassmorphism effects
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Smooth Animations**: Engaging user experience with CSS animations and transitions
- **Interactive Components**: 
  - Sticky navigation with smooth scrolling
  - Mobile hamburger menu
  - Interactive schedule with day tabs
  - Registration form with validation
- **SEO Optimized**: Comprehensive meta tags for search engines and social media
- **Accessible**: Semantic HTML and WCAG compliance

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Vanilla CSS with custom properties
- **Fonts**: Google Fonts (Inter, Outfit)
- **Icons**: Custom SVG icons
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/link-camp-task-by-jeffin-basil.git
   cd link-camp-task-by-jeffin-basil
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   The production-ready files will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
link-camp-task-by-jeffin-basil/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Schedule.jsx
│   │   ├── Schedule.css
│   │   ├── Registration.jsx
│   │   ├── Registration.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx           # Main application component
│   ├── App.css           # App-level styles
│   ├── index.css         # Global styles and design system
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## 🎨 Design System

The website uses a comprehensive design system with:
- **IEEE Brand Colors**: Primary blue (#00629B), accent colors
- **Typography**: Inter (body), Outfit (headings)
- **Spacing**: Consistent spacing scale
- **Components**: Reusable buttons, cards, and form elements
- **Animations**: Smooth transitions and entrance animations

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js` with your repository name:
   ```javascript
   export default defineConfig({
     base: '/link-camp-task-by-jeffin-basil/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   gh-pages -d dist
   ```

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

**IEEE LINK**
- Email: link@ieee.org
- Phone: +91 12345 67890

## 🙏 Acknowledgments

- IEEE for brand guidelines and support
- React and Vite communities
- All contributors and participants

---

**Note**: This website was created as part of the IEEE LINK team recruitment task. For actual event details and registration, please contact IEEE LINK directly.
