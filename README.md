# 🎨 nicky.cool - Portfolio in Progress

This is what you might call Nicholas Angelo Batten's portfolio site - a work in progress that's equal parts thing's I'd like to share and experimental sandbox. Think of it as my creative laboratory where I test ideas, break things, and occasionally, perhaps accidentally, make something usful and beautiful.

## 🚀 What's This All About?

Built with intention, styled with purpose, and coded with caffeine. Every pixel has been placed with care, every animation has meaning, and every component tells a story.

### 🎭 The Philosophy

- **Minimalism with Purpose**: Clean design that doesn't sacrifice personality
- **Performance First**: What is the other option?
- **Accessibility Matters**: Ease of use for everyone, not just some
- **Code as Craft**: Well-structured, maintainable, and documented code

## 🛠️ Tech Stack & Why

### Core Technologies

- **React 18** - Because hooks
- **Vite** - Lightning-fast development that makes webpack jealous
- **CSS Modules** - Scoped styles that play nice together
- **Storybook** - Component documentation that actually gets used

### Development Experience

- **ESLint + Prettier** - Code formatting that doesn't start arguments
- **Husky + lint-staged** - Pre-commit hooks that catch mistakes before they escape
- **Commitlint** - Semantic commits because `git commit -m "fix stuff"` isn't professional... maybe sometimes

## 🎨 Design Decisions

### Color Palette

The site uses a carefully curated color scheme that balances professionalism with personality:

- **Primary Background**: `#f7f9f5` - A warm, off-white that's easier on the eyes than pure white
- **Text**: `#1a2e44` - Deep blue-gray for excellent readability
- **Accent Gradient**: Bisque (`#ffe4c4`) to transparent - Subtle warmth that guides the eye

### Typography

- **Font Stack**: Helvetica → Arial → sans-serif
- Clean, readable, and universally supported
- Optimized line-height (1.5) for comfortable reading

### Layout Philosophy

- **Flexbox-First**: Modern layout that adapts gracefully
- **Mobile-Responsive**: Looks great on everything from phones to ultrawide monitors
- **Semantic HTML**: Screen readers and SEO bots are friends, not food

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A sense of adventure

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/nicky_dot_cool.git
cd nicky_dot_cool

# Install dependencies
npm install

# Start the development server
npm run dev

# Open your browser and navigate to http://localhost:5173
# Prepare to be amazed (or at least mildly impressed)
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Check for linting errors
npm run lint:fix     # Fix auto-fixable linting issues
npm run format       # Format code with Prettier

# Documentation
npm run storybook    # Launch Storybook component library
npm run build-storybook  # Build static Storybook

# Testing (coming soon!)
npm test             # Run tests (when they exist)
```

## 🏗️ Project Structure

```
nicky_dot_cool/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   ├── 📁 Header/          # Site header with navigation
│   │   ├── 📁 Footer/          # Contact links and copyright
│   │   ├── 📁 MainLayout/      # Page layout wrapper
│   │   └── 📁 elements/        # Atomic components (buttons, links, etc.)
│   ├── 📁 assets/              # Static assets
│   │   └── 📁 icons/           # SVG icons and social links
│   ├── 📄 App.jsx              # Main application component
│   ├── 📄 index.css            # Global styles and CSS reset
│   └── 📄 main.jsx             # Application entry point
├── 📁 .husky/                  # Git hooks for code quality
├── 📁 .storybook/              # Storybook configuration
├── 📄 reset.css                # Modern CSS reset
├── 📄 commitlint.config.js     # Semantic commit rules
└── 📄 package.json             # Dependencies and scripts
```

## 🎯 Current Features

### ✅ Implemented

- **Responsive Layout**: Looks great on all devices
- **Modern CSS Reset**: Consistent styling across browsers
- **Component Architecture**: Modular, reusable components
- **Development Tooling**: ESLint, Prettier, Husky hooks
- **Semantic Commits**: Enforced commit message standards
- **Storybook Integration**: Component documentation and testing

### 🚧 In Progress

- **Content Sections**: About, projects, experience, contact
- **Animations**: Subtle micro-interactions and page transitions
- **Dark Mode**: Because developers love dark themes
- **Performance Optimization**: Image optimization, lazy loading
- **SEO Enhancement**: Meta tags, structured data, sitemap

### 🔮 Coming Soon

- **Blog Integration**: Technical articles and project deep-dives
- **Project Showcase**: Interactive portfolio pieces
- **Contact Form**: Functional contact with form validation
- **Testing Suite**: Unit and integration tests
- **CI/CD Pipeline**: Automated deployment and testing

## 🎨 Design System

### Component Philosophy

Each component follows a consistent pattern:

- **Single Responsibility**: One component, one job
- **Prop Validation**: TypeScript-ready prop interfaces
- **CSS Modules**: Scoped styling that doesn't leak
- **Storybook Stories**: Documentation and visual testing

### Naming Conventions

- **Components**: PascalCase (`Header`, `IconLink`)
- **Files**: Match component names (`Header.jsx`, `HeaderStyles.module.css`)
- **CSS Classes**: camelCase (`.headerContainer`, `.navigationLink`)
- **Git Commits**: Semantic format (`feat:`, `fix:`, `docs:`)

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback, suggestions, and discussions about the code! Feel free to:

1. **Open Issues**: Found a bug or have a suggestion?
2. **Start Discussions**: Want to chat about the tech choices?
3. **Share Ideas**: Have a cool feature idea?

## 🪝 Commit Hooks & Code Quality

This project uses automated commit hooks to maintain code quality and consistency:

### Pre-commit Hooks

When you run `git commit`, the following happens automatically:

1. **ESLint** runs on staged JavaScript/TypeScript files and fixes issues
2. **Prettier** formats all staged files for consistent styling
3. **Staged files** are automatically updated with fixes and formatting

### Commit Message Validation

All commit messages must follow **semantic commit format**:

```
type(scope): description

[optional body]

[optional footer]
```

#### Allowed Types:

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Build system changes
- `ci` - CI configuration changes
- `chore` - Other changes (maintenance, etc.)
- `revert` - Reverting previous commits

#### Examples:

```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve header gradient width issue"
git commit -m "docs: update README with setup instructions"
git commit -m "style: format code with prettier"
git commit -m "refactor: simplify component structure"
```

### Testing the Hooks

```bash
# This will trigger pre-commit hooks
echo "// test comment" >> src/App.jsx
git add src/App.jsx
git commit -m "test: verify pre-commit hooks work"

# This will fail commit message validation
git commit -m "bad commit message"

# This will pass
git commit -m "feat: add new feature"
```

### Development Workflow

```bash
# Create a feature branch
git checkout -b feat/awesome-new-feature

# Make your changes
# ... code, code, code ...

# Commit with semantic format (hooks will run automatically)
git commit -m "feat: add awesome new feature"

# Push and create a pull request
git push origin feat/awesome-new-feature
```

## 📞 Connect With Me

- **Email**: [nicholasangelobatten@gmail.com](mailto:nicholasangelobatten@gmail.com)
- **LinkedIn**: [Nicholas Angelo Batten](https://linkedin.com/in/nicholasangelobatten)
- **Portfolio**: [nicky.cool](https://nicky.cool) _(when it's live!)_

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with ❤️, ☕, and probably too much attention to detail._

**Current Status**: 🚧 Under Construction - Check back soon for updates!
