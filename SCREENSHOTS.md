# CampusCode ReBuild '26 - Screenshot Guide

This document provides guidance on capturing screenshots for your ReBuild '26 Round 1 submission.

## How to Capture Screenshots

### Using Browser Developer Tools

1. **Open the development server**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173`

2. **Open Developer Tools**
   - Windows/Linux: Press `F12` or `Ctrl+Shift+I`
   - Mac: Press `Cmd+Option+I`

3. **Toggle Device Toolbar**
   - Click the device icon in DevTools (or press `Ctrl+Shift+M` / `Cmd+Shift+M`)
   - Select "Responsive" mode
   - Set dimensions to `1920 x 1080` for desktop screenshots

4. **Capture Screenshot**
   - Right-click in DevTools
   - Select "Capture screenshot" or "Capture node screenshot"
   - Save the image

### Using Operating System Tools

**Windows:**
- Use Snipping Tool (Windows Key + Shift + S)
- Select "Rectangular Snip" or "Window Snip"
- Capture the desired area

**Mac:**
- Use Preview > File > Take Screenshot
- Or press `Cmd+Shift+4` for selection, `Cmd+Shift+3` for full screen

## Required Screenshots

### 1. Homepage (http://localhost:5173/)

**Capture these views:**
- Full homepage showing hero section with "BUILD. COMPETE. SHIP."
- Navigation bar with CampusCode logo
- About CampusCode section
- How It Works section (4 workflow cards)
- Hackathons section (event cards)
- Community section
- Footer

**Tips:**
- Capture at desktop resolution (1920x1080)
- Ensure the custom cursor glow effect is visible
- Show the full height or scroll to capture all sections

### 2. Login Page (http://localhost:5173/login)

**Capture these views:**
- Complete login card with CampusCode branding
- Email and password input fields
- Remember me checkbox
- Forgot password link
- Create account link at bottom
- Logo in header

**Tips:**
- Ensure the form is empty or filled with sample data
- Show the validation state if possible (optional)

### 3. Registration Page (http://localhost:5173/register)

**Capture these views:**
- Complete registration card
- First name and last name fields
- Email field
- Password and confirm password fields
- College/University field
- Year of study dropdown
- Sign in link at bottom
- Logo in header

**Tips:**
- Show the form layout with two-column fields
- Ensure all fields are visible

### 4. Student Dashboard (http://localhost:5173/dashboard)

**Capture these views:**
- Full dashboard layout with sidebar on left
- Overview tab showing:
  - Welcome card
  - Statistics grid (4 cards)
  - Event cards with progress bars
  - Recent notifications
- Header with refresh and notification buttons
- Sidebar with all menu items
- User profile at bottom of sidebar

**Tips:**
- Capture the complete layout including sidebar
- Ensure the dashboard content is visible
- Show the active navigation state

### Optional Additional Screenshots

- **Events Tab:** Click "Events" in sidebar, capture the discoverable events
- **My Events Tab:** Click "My Events" in sidebar, capture registered events
- **Profile Tab:** Click "Profile" in sidebar, capture user profile details
- **Mobile View:** Capture responsive layout at 768px width

## Naming Your Screenshots

Use clear, descriptive names:
- `homepage-hero.png`
- `homepage-full.png`
- `login-page.png`
- `register-page.png`
- `dashboard-overview.png`
- `dashboard-sidebar.png`

## Format Recommendations

- **Format:** PNG (for quality) or JPEG (for smaller file size)
- **Resolution:** 1920x1080 or higher
- **File Size:** Keep under 2MB per screenshot for easy upload

## Verification Checklist

Before finalizing your screenshots:
- [ ] All four required pages are captured
- [ ] CampusCode branding is visible in each screenshot
- [ ] Navigation elements are clear
- [ ] No sensitive information is visible
- [ ] Screenshots are clear and not blurry
- [ ] Color accuracy is maintained
- [ ] Layout matches the reference design

## Upload Instructions

When submitting to Unstop:
1. Combine screenshots into a single PDF (optional but recommended)
2. Or upload individual screenshots to the submission form
3. Include the GitHub repository link
4. Include the live deployment URL

## Screenshot Template (Optional)

If you want to create a PDF with annotations:

```
┌─────────────────────────────────────┐
│ CampusCode ReBuild '26 Submission  │
│                                     │
│ 1. Homepage                         │
│ [Screenshot Image]                  │
│ Description: Public landing page    │
│                                     │
│ 2. Login Page                       │
│ [Screenshot Image]                  │
│ Description: Student authentication │
│                                     │
│ 3. Registration Page                │
│ [Screenshot Image]                  │
│ Description: Student registration  │
│                                     │
│ 4. Student Dashboard                │
│ [Screenshot Image]                  │
│ Description: Student workspace      │
└─────────────────────────────────────┘
```
