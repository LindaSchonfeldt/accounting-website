[![Netlify Status](https://api.netlify.com/api/v1/badges/123a7ad6-7a35-4c97-9c1e-9e8659805068/deploy-status)](https://app.netlify.com/projects/gleeful-pixie-2c3de9/deploys)

# Billig Bokföring - Accounting Website

A modern, responsive accounting services website built with React, TypeScript, and Chakra UI. This website offers professional bookkeeping services for Swedish small businesses with transparent pricing and easy online ordering.

## 🚀 Demo

[Live Website](https://billigbokforing.se)

## ✨ Features

- **Responsive Design** - Mobile-first approach with full desktop optimization
- **Service Catalog** - Detailed pricing for bookkeeping, tax reports, and annual statements
- **Order System** - Interactive order form with real-time price calculation
- **Discount Logic** - Automatic 10% discount on additional services when ordering ongoing bookkeeping
- **Contact Forms** - Easy communication with form validation
- **FAQ Section** - Comprehensive answers to common questions
- **SEO Optimized** - Meta tags and semantic HTML for better search rankings

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Chakra UI
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **SEO**: React Helmet Async

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer, PageWrapper)
│   ├── sections/         # Page sections (Hero, Services, FAQ, CTA)
│   ├── ui/              # Reusable UI components (Forms, Cards, Accordion)
│   └── Meta.tsx         # SEO meta component
├── data/                # Service data and configuration
├── pages/               # Route pages (Home, Services, About, Contact, Order)
├── styles/              # Theme configuration
├── App.tsx              # Main app component with routing
└── main.tsx            # Application entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/accounting-website.git
cd accounting-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Key Components

### OrderForm

Interactive form with:

- Multi-service selection
- Dynamic plan selection per service
- Real-time price calculation
- Discount application logic
- Form validation

### OrderSummary

Displays:

- Selected services and plans
- Price breakdown with VAT (25%)
- Automatic discount calculation
- Total savings display
- Sticky positioning on desktop

### IntroSection

Reusable hero section with:

- Full-width background
- Responsive typography
- Optional highlighted text

### CTASection

Customizable call-to-action with:

- Flexible background colors
- Button routing
- Full-width display

## 🌐 Pages

- **Home** (`/`) - Landing page with services overview and FAQ
- **Services** (`/tjanster`) - Detailed service catalog
- **Pricing** (`/priser`) - Comprehensive pricing tables
- **About** (`/om-oss`) - Company information
- **Contact** (`/kontakt`) - Contact form and information
- **Order** (`/bestall`) - Service ordering system

## 🎯 Features in Detail

### Discount System

- 10% discount on Momsrapport, Årsredovisning, and Inkomstdeklaration
- Only applies when "Löpande bokföring" is selected
- Visual indicators with green badges
- Real-time calculation in OrderSummary

### Responsive Design

- Mobile: 16px horizontal padding
- Tablet: 24px horizontal padding
- Desktop: Container-based max-width
- Sticky sidebar on large screens

### SEO Optimization

- Dynamic meta tags per page
- Semantic HTML structure
- Open Graph tags
- Descriptive alt texts

## 🚀 Deployment

The site is automatically deployed to Netlify on every push to the main branch.

### Build Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20.19.0"
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

**Linda** - Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-lindaschonfeldt-181717?style=flat&logo=github)](https://github.com/lindaschonfeldt)

## 👥 Contact

For questions or support, please contact through the website's contact form.

## 🙏 Acknowledgments

- Built with [Chakra UI](https://chakra-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Hosted on [Netlify](https://www.netlify.com/)

---

Built with ❤️ for Swedish small businesses by [Linda](https://github.com/lindaschonfeldt)
