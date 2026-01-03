# PR Preview Workflow Guide

## 🚀 Setting Up PR Previews with Netlify

### Initial Setup (One-time)

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign up/Login** with your GitHub account
3. **Click "Add new site" → "Import an existing project"**
4. **Select "GitHub"** and authorize Netlify
5. **Choose repository**: `nihal467/Beyond-Limit`
6. **Configure build settings**:
   - Build command: (leave empty)
   - Publish directory: `.` (current directory)
7. **Click "Deploy site"**

### How PR Previews Work

1. **Create a branch**: `git checkout -b feature/your-feature`
2. **Make changes and commit**: `git commit -m "Add feature"`
3. **Push to GitHub**: `git push origin feature/your-feature`
4. **Create PR on GitHub**: GitHub will show "Compare & pull request"
5. **Netlify automatically**:
   - Builds your PR
   - Creates a unique preview URL
   - Comments on the PR with the preview link
6. **Review the preview**: Click the Netlify preview link in PR comments
7. **Merge when ready**: Netlify will deploy to production

### Preview URLs

- **PR Preview**: `https://deploy-preview-[PR#]--your-site-name.netlify.app`
- **Production**: `https://your-site-name.netlify.app` (or custom domain)

## Current PR Workflow

### Step 1: Create Feature Branch ✅ (Already done)

```bash
git checkout -b feature/multilingual-support
```

### Step 2: Commit Changes

```bash
git add -A
git commit -m "Add multilingual support (English, Hindi, Tamil)

- Implemented language dropdown selector
- Created translation system with JSON files
- Added translations for English, Hindi, and Tamil
- Updated project structure and documentation
- Added security protections (.gitignore)
- Updated README with comprehensive guide"
```

### Step 3: Push to GitHub

```bash
git push origin feature/multilingual-support
```

### Step 4: Create PR

Go to: https://github.com/nihal467/Beyond-Limit/pulls
- Click "New Pull Request"
- Select: base: `main` ← compare: `feature/multilingual-support`
- Add title: "Add multilingual support"
- Add description explaining changes
- Click "Create Pull Request"

### Step 5: Get Preview

After creating PR:
1. Netlify bot will comment with preview URL
2. Click preview link to test
3. Every new push to the branch updates the preview
4. Merge when satisfied

## Alternative: Vercel

If you prefer Vercel:

1. Go to: https://vercel.com/
2. Import your GitHub repo
3. Vercel automatically creates preview deployments for PRs
4. Works similar to Netlify

## Alternative: Manual Preview (No Service)

If you don't want to use Netlify/Vercel:

```bash
# Start local server on different port
python3 -m http.server 8001

# Share via ngrok (temporary public URL)
ngrok http 8001
```

## GitHub Pages Limitation

GitHub Pages only deploys one branch (usually `main`), so it can't automatically create PR previews. You'd need:
- Manual branches like `preview-pr-123`
- Manual deployment for each PR
- Not recommended for PR workflow

## Recommended Setup

**Best Option**: Netlify
- ✅ Free
- ✅ Automatic PR previews
- ✅ Custom domain support
- ✅ SSL certificates
- ✅ Easy rollbacks
- ✅ Built-in forms (if needed)

Setup time: ~5 minutes
