# AD Interior Website - Technical Documentation

## Project Structure
```
adinterior_website/
├── assets/
│   └── images/
│       ├── icon.jpg
│       ├── example1.jpeg
│       ├── example2.jpeg
│       ├── example3.jpeg
│       └── map3.jpg
├── css/
│   ├── tailwind.css
│   └── nav.css
├── js/
│   └── menu.js
├── documentation.md
├── index.html
├── projects.html
├── service.html
├── contact.html
└── career.html
```

## Technology Stack
- HTML5
- CSS3 with Tailwind CSS
- Vanilla JavaScript
- External Dependencies:
  - Font Awesome 6.0.0
  - Tailwind CSS Browser 4.0

## Component Documentation

### 1. Navigation Bar
Located in all pages, controlled by `nav.css` and `menu.js`.

**Features:**
- Responsive design with mobile menu
- Color scheme: Background `#454545`, Text `#bbae9d`
- Mobile breakpoint: `md` (768px)
- Hover effects: Text color transitions to white

### 2. Homepage Slideshow
Located in `index.html`

**Configuration:**
```css
- Transition duration: 1.5s
- Interval: 7 seconds
- Height: 70vh
- Z-index structure:
  - Overlay: 3
  - Active slide: 2
  - Previous slide: 1
  - All other slides: 0
```

### 3. Contact Page Features
Located in `contact.html`

**Components:**
- Contact information section
- Social media links with brand colors:
  - WhatsApp: `#25D366`
  - Facebook: `#1877F2`
  - Instagram: gradient from `#833AB4` via `#FD1D1D` to `#F77737`
  - Xiaohongshu: `#FE2C55`
  - TikTok: `#000000`
- Google Maps integration
- Location map with border styling

### 4. Color Scheme
```css
Primary colors:
- Background: #454545
- Accent: #bbae9d
- Text: white/black
```

## Maintenance Guidelines

### Adding New Slides
  - Add the following code to the slideshow section
```html
<img src="assets/images/example4.jpeg" 
    alt="Interior Design Example 4" 
    class="slideshow-image">
```

### Image Requirements
- Format: JPEG/JPG
- Slideshow dimensions: 1920x1080px (minimum)
- Icon size: 100px height (auto width)
- Map image: Responsive width

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript required
- CSS Grid support needed

## Known Issues & Solutions
1. Mobile menu requires JavaScript
2. Slideshow transitions may show background briefly
3. Social media links need updating (currently using ### placeholders)

## Future Improvements
1. Add loading states for images
2. Optimize images for faster loading
3. Add meta tags for SEO