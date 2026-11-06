# CampusCode ReBuild '26 - Round 1 Submission

A faithful recreation of the CampusCode Hackathon Arena platform for the ReBuild '26 Round 1 challenge. This project implements the four required pages with exact design fidelity to the original CampusCode UI.

## 🎯 Project Overview

This is a frontend-only recreation of the CampusCode platform, built with React and Vite. The project preserves the original visual identity, color palette, typography, and layout while implementing all required functionality with mock data and frontend-only interactions.

## 📋 Implemented Pages

### 1. Public CampusCode Homepage
- Hero section with "BUILD. COMPETE. SHIP." headline
- Navigation with smooth scroll to sections
- About CampusCode section
- How It Works section (Discover, Team Up, Build, Ship workflow)
- Hackathons section with event cards
- Community section
- Footer with navigation links
- Custom cursor glow effect
- Responsive design

### 2. Student Login Page
- Email and password input fields
- Form validation (email format, required fields)
- Error message display
- Remember me checkbox
- Forgot password button
- Navigation to registration
- Mock authentication flow
- Loading states

### 3. Student Registration Page
- Full registration form (first name, last name, email, password, confirm password, college, year of study)
- Comprehensive form validation
- Password confirmation check
- Error handling
- Navigation to login
- Mock registration flow
- Loading states

### 4. Student Dashboard / Workspace
- Sidebar navigation with all menu items (Overview, Events, My Events, HackMate AI, IdeaCheck AI, Certificates, Digital Card, RuleBot AI, Student Guide, Official Communication, Notifications, Help & Support, Profile)
- Overview tab with welcome section, activity statistics, event cards with progress bars, recent notifications
- Events tab with discoverable events
- My Events tab with registered events
- Certificates tab
- Notifications tab
- Profile tab with user details
- User profile section with logout
- Responsive sidebar toggle
- Mock data for all sections

## 🛠️ Technology Stack

- **Framework:** React 19.3.1
- **Build Tool:** Vite 8.3.6
- **Routing:** React Router DOM 7.18.5
- **Styling:** Custom CSS with CSS variables
- **Fonts:** Inter (body), DM Mono (labels/navigation) via Google Fonts

## 🎨 Design System

The project faithfully recreates the original CampusCode design:

### Colors
- Background: `#f7f7f4`
- Surface: `#ffffff`
- Surface Soft: `#f0f0ec`
- Text: `#111111`
- Text Soft: `#4f4f4b`
- Muted: `#858580`
- Border: `#deded8`
- Lime: `#a8e62e`
- Lime Dark: `#82b91a`
- Purple: `#7665ff`
- Blue: `#526eff`
- Black: `#111111`

### Typography
- **Inter:** Main body text (400, 500, 600, 700, 800 weights)
- **DM Mono:** Labels, navigation, small text (400, 500 weights)

### Layout
- Desktop-first design
- Responsive breakpoints at 1024px and 768px
- Consistent spacing and padding
- Grid-based layouts for cards and sections

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Clone or download the repository**
   ```bash
   cd campuscode-rebuild
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CampusCode ReBuild '26"
   git remote add origin https://github.com/YOUR_USERNAME/campuscode-rebuild.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up
   - Click "Add New Project" → Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Access your site**
   - Vercel will provide a URL like: `https://campuscode-rebuild-xyz.vercel.app`

### Alternative Hosting

The `dist/` folder can be deployed to:
- **Netlify:** Drag and drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages:** See DEPLOYMENT.md for instructions
- **Any static host:** Upload the `dist/` folder contents

## 📝 Project Structure

```
campuscode-rebuild/
├── src/
│   ├── pages/
│   │   ├── Homepage.jsx       # Public landing page
│   │   ├── Homepage.css       # Homepage styles
│   │   ├── Login.jsx          # Student login page
│   │   ├── Login.css          # Login styles
│   │   ├── Register.jsx       # Student registration page
│   │   ├── Register.css       # Registration styles
│   │   ├── Dashboard.jsx      # Student dashboard
│   │   └── Dashboard.css      # Dashboard styles
│   ├── styles/
│   │   └── globals.css        # Global styles and design system
│   ├── assets/                # Static images (hero.png, etc.)
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # Entry point
├── public/                    # Static assets (favicon.svg, icons.svg)
├── dist/                      # Production build output (generated)
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── package-lock.json          # Dependency lockfile
├── vite.config.js             # Vite configuration
├── vercel.json                # Vercel deployment configuration
├── .gitignore                 # Git ignore rules
├── .oxlintrc.json             # Oxlint configuration
├── README.md                  # Main documentation
├── SCREENSHOTS.md              # Screenshot capture guide
└── DEPLOYMENT.md              # Deployment instructions
```

## ✅ Testing Checklist

- [x] Homepage loads correctly
- [x] Navigation buttons work (LOGIN, JOIN CAMPUSCODE)
- [x] Smooth scroll to sections works
- [x] Login page loads and validates form
- [x] Registration page loads and validates form
- [x] Dashboard loads with sidebar
- [x] Sidebar navigation works
- [x] Dashboard tabs switch correctly
- [x] Event cards display properly
- [x] Notifications display correctly
- [x] Profile section displays
- [x] Logout returns to homepage
- [x] Build completes without errors
- [x] No console errors in browser
- [x] Responsive design works on mobile
- [x] Linting passes (oxlint)
- [x] Production build succeeds
- [x] Preview server works

### Manual Testing Steps

1. **Homepage Testing**
   - Navigate to `/`
   - Verify hero section displays correctly
   - Click navigation links (ABOUT, HOW IT WORKS, etc.) - should scroll to sections
   - Click LOGIN button - should navigate to `/login`
   - Click JOIN CAMPUSCODE - should navigate to `/register`

2. **Login Testing**
   - Navigate to `/login`
   - Try submitting empty form - should show validation errors
   - Enter invalid email - should show email error
   - Enter valid email and password (6+ chars) - should redirect to `/dashboard`

3. **Registration Testing**
   - Navigate to `/register`
   - Try submitting empty form - should show validation errors
   - Fill all fields with mismatched passwords - should show password error
   - Fill all fields correctly - should redirect to `/login`

4. **Dashboard Testing**
   - Navigate to `/dashboard` (or after login)
   - Verify sidebar is visible
   - Click different menu items - should switch tabs
   - Click profile - should show user details
   - Click logout - should return to homepage
   - Try collapsing sidebar on smaller screens

5. **Responsive Testing**
   - Resize browser to tablet (1024px)
   - Verify sidebar collapses
   - Resize to mobile (768px)
   - Verify layouts adapt to single columns

## 🎯 Submission Requirements Met

- ✅ Same layout as original CampusCode
- ✅ Same sections as original
- ✅ Desktop-first implementation
- ✅ Frontend only (no backend)
- ✅ Mock data used throughout
- ✅ Individual participation
- ✅ AI assistance used (documented)
- ✅ No ready-made dashboard templates used
- ✅ Original design preserved
- ✅ Four required pages complete
- ✅ All navigation functional
- ✅ Forms functional with validation
- ✅ Visual polish maintained

## ⚠️ Limitations

This is a frontend-only recreation with the following limitations:

1. **No Backend Authentication**
   - Login and registration use mock authentication
   - No real user data storage
   - No session management

2. **No Real AI Features**
   - HackMate AI, IdeaCheck AI, and RuleBot AI are placeholder tabs
   - No actual AI integrations

3. **No Real Database**
   - All data is hardcoded mock data
   - Events, notifications, and certificates are static

4. **No Real Email Functionality**
   - Forgot password shows an alert
   - No email verification

5. **No File Upload**
   - Certificate download is a mock alert
   - No actual file handling

These limitations are acceptable per the hackathon requirements as this is a frontend recreation challenge.

## 📸 Screenshots

For detailed instructions on capturing screenshots for your submission, see [SCREENSHOTS.md](./SCREENSHOTS.md).

### Quick Screenshot Guide

1. Run the development server: `npm run dev`
2. Open http://localhost:5173 in your browser
3. Capture the following views at 1920x1080 resolution:

**Required Screenshots:**
- **Homepage** (`/`) - Hero section, About, How It Works, Hackathons, Community, Footer
- **Login Page** (`/login`) - Complete login form with branding
- **Registration Page** (`/register`) - Complete registration form with all fields
- **Student Dashboard** (`/dashboard`) - Overview tab with sidebar, stats, events, notifications

**Tips:**
- Use browser DevTools device mode for consistent sizing
- Capture PNG format for best quality
- Ensure CampusCode branding is visible in each screenshot

## 🏆 Organizer Note

This project is a faithful recreation of the CampusCode platform for the ReBuild '26 Round 1 challenge. The implementation prioritizes:

1. **Design Fidelity:** Exact recreation of the original CampusCode visual identity
2. **Functional Completeness:** All required pages and interactions work
3. **Code Quality:** Clean, maintainable React code with proper structure
4. **Responsive Design:** Works on desktop and adapts to mobile
5. **No Template Usage:** Built from scratch, no dashboard templates

The project demonstrates frontend skills in React, CSS, and UI/UX design while maintaining the original CampusCode design language throughout.

## 📝 Submission Checklist for ReBuild '26

Before submitting to Unstop, ensure you have:

- [ ] **GitHub Repository:** Repository created and pushed with all code
- [ ] **Live Hosted Link:** Deploy the project to Vercel or another hosting service
- [ ] **Screenshots:** Capture screenshots of all four required pages
- [ ] **Team Name:** Use a consistent team name in your submission
- [ ] **PDF (Optional):** Create a PDF with screenshots and project description

### Unstop Submission Description

Use this description for your Unstop submission:

> **ReBuild '26 – CampusCode Dashboard Recreation**
>
> I recreated the CampusCode platform using its existing visual structure and design language. The project includes the public homepage, student login page, registration page and student dashboard.
>
> The implementation focuses on accurate page structure, navigation, typography, layout, styling and frontend interactions.
>
> The project uses frontend technologies and mock data where backend functionality is not required.
>
> The source code and live demonstration are provided below.

### Submission URL Format

**GitHub Repository:**
```
https://github.com/YOUR_USERNAME/campuscode-rebuild
```

**Live Deployment (after Vercel deployment):**
```
https://your-project-name.vercel.app
```

## 📞 Contact

For questions about this submission, please refer to the CampusCode ReBuild '26 challenge guidelines.

---

**Built with ❤️ for CampusCode ReBuild '26**
