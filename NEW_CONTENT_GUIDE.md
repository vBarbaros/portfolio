# Portfolio Content Management Guide

This guide explains how to add and update content on your portfolio website.

## 📋 Table of Contents
- [Profile Information](#profile-information)
- [Articles & Posts](#articles--posts)
- [Projects](#projects)
- [Platform Configuration](#platform-configuration)
- [Recent Activities](#recent-activities)
- [Skills & Experience](#skills--experience)

---

## 👤 Profile Information

### Basic Profile Data
**File:** `/src/config/profile-config.json`

```json
{
  "startDate": "2019-05-01",
  "name": "Victor Barbarosh",
  "title": "Senior Full-Stack Developer"
}
```

- `startDate`: Used to calculate years of experience automatically
- `name`: Your full name displayed throughout the site
- `title`: Your professional title

### Detailed Profile Info
**File:** `/src/data/content.js`

Update the `personalInfo` object for:
- Description (auto-calculates experience from startDate)
- Education details
- LinkedIn and GitHub URLs

---

## 📝 Articles & Posts

### Adding New Articles

#### 1. Medium Articles
**Posts List:** `/src/pages/Medium/posts/posts-list.json`

```json
{
  "id": "unique-article-id",
  "title": "Article Title",
  "datePublished": "2024-12-29",
  "briefSummary": "Brief description of the article",
  "category": "technical", // or "non-technical"
  "content": "article-filename.md", // or null for external links
  "externalLink": null // or URL if content is null
}
```

**Content:** Add markdown content to `/src/components/ArticleViewer/ArticleViewer.js`
- Find the `content` object
- Add your article under `'Medium'` section with the same ID

#### 2. Baeldung Articles
**Posts List:** `/src/pages/Baeldung/posts/posts-list.json`

Same structure as Medium, but category is always "technical"

**Content:** Add to the `'Baeldung'` section in ArticleViewer.js

#### 3. Substack Posts
**Posts List:** `/src/pages/Substack/posts/posts-list.json`

Same structure, typically algorithm/technical focused

**Content:** Add to the `'Substack'` section in ArticleViewer.js

### Article Content Format
Use standard Markdown with code blocks:

```markdown
# Article Title

Your content here...

## Code Examples

```java
public class Example {
    // Your code
}
```

*Published on Platform - Date*
```

---

## 🚀 Projects

### Adding New Projects
**File:** `/src/pages/Projects/projects-list.json`

```json
{
  "id": "project-unique-id",
  "title": "Project Name",
  "dateCompleted": "2024-12-29",
  "briefSummary": "Project description",
  "technologies": ["React", "Node.js", "MongoDB"],
  "status": "completed", // or "in-progress"
  "featured": true // or false
}
```

- `featured: true` - Shows on home page Featured Projects
- `status: "completed"` - Counts toward Projects Completed metric
- `technologies` - Array of tech stack items

---

## 🔧 Platform Configuration

### Platform Settings
**File:** `/src/config/platforms-config.json`

```json
{
  "name": "Platform Name",
  "path": "/platform-route",
  "color": "#hex-color",
  "icon": "📝",
  "image": "/portfolio/assets/images/platform-logo.png",
  "description": "Platform description"
}
```

- `image`: Logo file in `/public/assets/images/`
- `path`: URL route for the platform
- `color`: Brand color for accents

---

## 📊 Recent Activities

### Adding Activities
**File:** `/src/config/recent-activities.json`

```json
{
  "id": "unique-id",
  "activity": "Description of what you did",
  "timestamp": "2024-12-29T10:30:00Z"
}
```

Activities appear in the QuickNav sidebar, most recent first.

---

## 💼 Skills & Experience

### Skills List
**File:** `/src/components/Layout/Sidebar.js`

Find the `skills` array and update:

```javascript
const skills = [
  { name: 'Skill Name', level: 95 }, // level 0-100
  // Add more skills...
];
```

### Experience Timeline
**File:** `/src/data/content.js`

Update the `experience` array:

```javascript
export const experience = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start Date – End Date",
    description: "Job description"
  }
];
```

---

## 🎨 Images & Assets

### Adding Images
1. **Profile Images:** Place in `/public/assets/images/`
2. **Platform Logos:** Use existing naming convention
3. **Article Images:** Place in `/public/content/[Platform]/assets/`

### Image Paths
- **Public assets:** `/portfolio/assets/images/filename.png`
- **Article assets:** `/portfolio/content/Platform/assets/filename.png`

---

## 🔄 Automatic Updates

The following metrics update automatically when you add content:

- **Years of Experience** - Calculated from `profile-config.json` startDate
- **Articles Published** - Sum of all posts in platform JSON files
- **Projects Completed** - Count of projects with `status: "completed"`
- **Platform Article Counts** - Displayed in QuickNav and platform cards

---

## 📁 File Structure Summary

```
src/
├── config/
│   ├── profile-config.json          # Basic profile info
│   ├── platforms-config.json        # Platform settings
│   └── recent-activities.json       # Recent activities feed
├── data/
│   └── content.js                   # Detailed profile & experience
├── pages/
│   ├── Medium/posts/posts-list.json # Medium articles
│   ├── Baeldung/posts/posts-list.json # Baeldung articles
│   ├── Substack/posts/posts-list.json # Substack posts
│   └── Projects/projects-list.json  # Projects portfolio
└── components/ArticleViewer/
    └── ArticleViewer.js             # Article content storage
```

---

## ✅ Quick Checklist

When adding new content:

- [ ] Update appropriate JSON file with metadata
- [ ] Add content to ArticleViewer.js if it's an article
- [ ] Verify dates are in correct format (YYYY-MM-DD)
- [ ] Check that IDs are unique
- [ ] Test the content displays correctly
- [ ] Update recent activities if it's a major addition

---

## 🚨 Important Notes

1. **Date Format:** Always use `YYYY-MM-DD` for dates
2. **Unique IDs:** Each article/project needs a unique ID
3. **Image Paths:** Use `/portfolio/` prefix for all public assets
4. **Categories:** Medium supports "technical" and "non-technical"
5. **Featured Projects:** Only projects with `featured: true` show on home page

---

*Last updated: December 29, 2025*
