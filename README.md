# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- ✅ **Modern Design**: Clean and professional UI inspired by best portfolio examples
- ✅ **Dark/Light Theme**: Toggle between dark and light modes
- ✅ **Responsive**: Works perfectly on mobile, tablet, and desktop
- ✅ **Smooth Animations**: Framer Motion animations and transitions
- ✅ **SEO Optimized**: Meta tags and semantic HTML
- ✅ **Fast Performance**: Built with Next.js for optimal performance

## 📋 Sections

1. **Hero Section**: Profile photo, name, title, education, and quick links
2. **About Section**: Detailed bio and education timeline
3. **Skills Section**: Interactive skill cards with icons
4. **Experience Section**: Work experience and achievements
5. **Projects Section**: Project showcase with tech stack and links
6. **Certifications Section**: Certificates and badges
7. **Contact Section**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### Step 1: Update Personal Information

Search for `TODO` comments throughout the codebase and replace placeholder content with your information:

#### In `app/layout.tsx`:
- Update metadata (title, description, keywords)

#### In `components/Header.tsx`:
- Replace "Your Name" with your actual name

#### In `components/HeroSection.tsx`:
- Add your profile photo to `/public/profile.jpg`
- Update name, title, education details
- Update bio/about text
- Update GitHub, LinkedIn, and email links
- Add your resume PDF to `/public/resume.pdf`

#### In `components/AboutSection.tsx`:
- Update detailed bio
- Update education timeline with your degrees and schools
- Update CGPA/percentages and dates

#### In `components/SkillsSection.tsx`:
- Update the skills array with your actual skills
- Add/remove skills as needed

#### In `components/ExperienceSection.tsx`:
- Update work experience array with your jobs/internships
- Update achievements array with your accomplishments

#### In `components/ProjectsSection.tsx`:
- Update projects array with your actual projects
- Add project screenshots to `/public/projects/`
- Update tech stacks, descriptions, and links

#### In `components/CertificationsSection.tsx`:
- Update certifications array with your certificates
- Update badges array with your badges
- Add certificate images to `/public/certifications/`
- Add badge images to `/public/badges/`

#### In `components/ContactSection.tsx`:
- Update email, phone, and location
- Update social media links
- Implement form submission (see Form Submission section below)

#### In `components/Footer.tsx`:
- Update name and title
- Update social media links

### Step 2: Add Images

Create the following directories in the `/public` folder and add your images:

```
public/
├── profile.jpg              # Your profile photo
├── resume.pdf               # Your resume PDF
├── projects/                # Project screenshots
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── certifications/          # Certificate images
│   ├── cert1.jpg
│   └── cert2.jpg
└── badges/                  # Badge images
    ├── badge1.png
    └── badge2.png
```

### Step 3: Implement Contact Form Submission

The contact form currently shows an alert. To make it functional, you can use:

#### Option 1: EmailJS (Recommended for beginners)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update `components/ContactSection.tsx` with EmailJS integration

#### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Update the form action to your Formspree endpoint

#### Option 3: Custom Backend
Create your own API endpoint in `app/api/contact/route.ts`

### Step 4: Update Colors (Optional)

The portfolio uses a green color scheme. To change colors, update the CSS variables in `app/globals.css`:

```css
:root {
  --background: #ddf6d2;      /* Light background */
  --foreground: #000000;       /* Text color */
  --primary: #4ade80;          /* Primary green */
  --primary-dark: #22c55e;     /* Darker green */
  --secondary: #ecfae5;        /* Secondary background */
  --border: #b4c8aa;           /* Border color */
  --card: #ecfae5;             /* Card background */
}
```

## 🏗️ Build for Production

```bash
npm run build
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update `package.json` scripts
3. Update `next.config.js` for static export
4. Run: `npm run deploy`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

## 📦 Technologies Used

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **next-themes**: Dark/light theme

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Made with ❤️ and Next.js**
