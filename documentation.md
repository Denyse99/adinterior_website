# AD Interior Website - Technical Documentation

## Project Structure
```
adinterior_website/
├── assets/
│   └── images/
│       ├── icon.jpg
│       ├── map3.jpg
│       └── slideshow/
│           └── slide-01.jpg...
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
  - Add an image file in assets/images/slideshow and rename it according to the format: slide-00.jpg

### Adding New Projects (NO CODING NEEDED)
You only create folders and name files in a clear pattern. The page builds itself.

#### Quick Summary (Checklist)
1. Go to: `assets/projects/`
2. Copy an existing folder (if any) or create a new one named exactly: `project-01` (two digits)
3. Put a main image inside and name it: `cover.jpg` (or `cover.png`, `cover.jpeg`, `cover.webp`)
4. (Optional) Add more images named: `img-01.jpg`, `img-02.jpg`, `img-03.jpg` ... (no gaps)
5. (Optional) Add/edit details in `js/projects-metadata.js`
6. For a second project create: `project-02`, then repeat

#### Detailed Instructions
Folder layout example for the first two projects:
```
assets/projects/
  project-01/
    cover.jpg
    img-01.jpg
    img-02.jpg
  project-02/
    cover.jpg
    img-01.jpg
```

Accepted image extensions (upper or lower case): jpg, jpeg, png, webp

#### Naming Rules (Very Important)
- Folder names: `project-01`, `project-02`, `project-03`, ... (always two digits, no skipping numbers)
- Main image MUST be called `cover` with one of the allowed extensions
- Extra images: start at `img-01`, then `img-02`, etc. Stop whenever you like, just don’t skip a number
- If you only want one image, just add the cover – that’s fine

#### Adding Text (Titles & Descriptions)
Open the file: `js/projects-metadata.js`
Add (or edit) an entry using the folder name as the key. Example:
```js
window.PROJECT_METADATA = {
  'project-01': {
    title: 'Jalan Jurong Kechil',
    description: 'Modern minimalist renovation with a focus on clean lines and natural light.',
    details: '<strong>Scope:</strong> Full renovation<br><strong>Duration:</strong> 12 weeks<br><strong>Style:</strong> Modern Minimalist'
  },
  'project-02': {
    title: 'Compassvale Apartment',
    description: 'Warm contemporary tones with functional storage.',
    details: 'Custom carpentry & lighting plan'
  }
};
```
If you leave out a project key, it will show a default like “Project 03”.

#### Good Image Practices
- Keep images reasonably sized (e.g. under 2500px wide) for faster loading
- Try to use a 4:3 shape (e.g. 1600x1200) for the cover so cards look neat
- Use consistent orientation for gallery images

#### Common Problems & Fixes
| Problem | Cause | Fix |
|---------|-------|-----|
| Project doesn’t show | Folder skipped a number (e.g. project-01 then project-03) | Rename to fill the gap |
| Still shows old image | Browser cached it | Hard refresh (Ctrl+F5) |
| Image broken icon | Wrong name (e.g. cover (1).jpg) | Rename exactly to cover.jpg |
| Description missing | No entry in metadata file | Add entry in `projects-metadata.js` |
| Only one image in popup | You didn’t add `img-01.jpg` | Add `img-01.jpg` or more |

#### Removing a Project
Delete the last project folder (e.g. remove `project-05`). If you delete the middle one (e.g. project-03) the ones after it won’t show until you rename them to close the gap.

#### Reordering Projects
Rename the folders so their numbers reflect the order you want (01 = first, 02 = second, etc.).

#### Increasing the Limit
Currently supports up to 50 projects. A developer can raise this by changing `maxProjects` in `js/projects.js`.

#### No Developer? That’s Fine
As long as you follow the naming rules above, everything updates itself. No code edits required.

> Tip: If something looks wrong, compare your new folder with a working one side-by-side.

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