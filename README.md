# Beyond Limits - Online Learning Hub

A modern, responsive multilingual website for Beyond Limits Online Tuition Classes serving students from Classes 6 to 12.

## 🌟 Features

- **Multi-language Support**: English, Hindi (हिन्दी), Tamil (தமிழ்)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean design with smooth animations and transitions
- **WhatsApp Integration**: Direct contact via WhatsApp for quick responses
- **Comprehensive Coverage**: All subjects for Classes 6-12
- **Competitive Exam Prep**: JEE, NEET, and Olympiad coaching
- **Sticky Navigation**: Easy access to all sections while scrolling
- **Professional Contact Cards**: Detailed educator information

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, custom properties, and smooth animations
- **Vanilla JavaScript**: Dynamic language switching with async JSON loading
- **No Dependencies**: Zero build process, no frameworks required

## 🚀 Quick Start

### Option 1: Local Server (Recommended for development)

```bash
# Clone the repository
git clone https://github.com/nihal467/Beyond-Limit.git
cd Beyond-Limit

# Start a local server (required for translations to work)
python3 -m http.server 8000

# Open in browser
# Visit: http://localhost:8000
```

### Option 2: Direct Open (Limited functionality)

```bash
open index.html
# Note: Translations won't work due to CORS restrictions with file:// protocol
```

### Option 3: Live Server (VS Code)

Install "Live Server" extension in VS Code and click "Go Live"

## 📁 Project Structure

```
Beyond-Limits/
├── index.html              # Main HTML file
├── script.js               # JavaScript (translations + interactions)
├── styles.css              # All CSS styles
├── CNAME                   # GitHub Pages domain configuration
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── Public/                 # Static assets
│   └── logo.png           # Website logo
└── translations/           # Language files
    ├── README.md          # Translation guide
    ├── en.json            # English translations
    ├── hi.json            # Hindi translations
    └── ta.json            # Tamil translations
```

## 🌍 Multi-Language System

The website supports three languages with a dropdown selector in the navigation bar.

### How It Works

1. JSON files in `translations/` contain all text content
2. HTML elements use `data-i18n` attributes to identify translatable content
3. JavaScript dynamically loads and applies translations
4. User's language preference is saved in browser localStorage

### Adding/Editing Translations

1. **Edit existing translations**:
   - Open `translations/en.json`, `hi.json`, or `ta.json`
   - Modify the text values (keep the keys unchanged)
   - Save and refresh browser

2. **Add new translatable content**:
   - Add `data-i18n="section.key"` attribute to HTML element
   - Add the key-value pair to all three JSON files
   - Example:
   ```html
   <h1 data-i18n="hero.title">Online Tuition for Classes 6–12</h1>
   ```
   ```json
   {
     "hero": {
       "title": "Online Tuition for Classes 6–12"
     }
   }
   ```

3. **Add a new language**:
   - Create `translations/xx.json` (e.g., `fr.json` for French)
   - Copy structure from `en.json` and translate
   - Add to dropdown in `index.html`:
     ```html
     <option value="fr">Français</option>
     ```
   - Update `script.js` to load new language:
     ```javascript
     await Promise.all([
         loadTranslation('en'),
         loadTranslation('hi'),
         loadTranslation('ta'),
         loadTranslation('fr')  // Add here
     ]);
     ```

See `translations/README.md` for detailed translation guide.

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #10b981;  /* Accent color */
    --accent-color: #8b5cf6;     /* Additional accent */
    --dark-color: #1e293b;       /* Dark text/bg */
    --light-color: #f8fafc;      /* Light bg */
}
```

### Images

Replace the Unsplash image URLs in `index.html` with your own images, or use the placeholder images.

### Branding

- Replace `Public/logo.png` with your logo
- Update the brand text in the navigation bar
- Modify the website title and meta tags in `<head>`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

Mobile menu activates below 768px width.

## 🔒 Security

- No API keys or secrets in repository
- `.gitignore` prevents accidental secret commits
- Translation files are safe to commit

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select branch: `main`
4. Site will be live at: `https://yourusername.github.io/repo-name`

### Custom Domain

1. Add `CNAME` file with your domain (already included)
2. Configure DNS settings at your domain provider
3. Point to GitHub Pages servers

### Other Hosting

Upload all files to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

## 📊 Browser Support

- Chrome/Edge: ✅ Latest
- Firefox: ✅ Latest
- Safari: ✅ Latest
- Mobile Browsers: ✅ iOS Safari, Chrome Android

Requires JavaScript enabled for language switching.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use for your own projects!

---

Built with ❤️ for quality education
