# Mihishan Gunasekara Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── UIUXProjects.js
│   │   ├── WebProjects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── images/          (existing images folder)
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Theme**: Eye-friendly dark color scheme
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive UI**: Hover effects and transitions
- **Skills Visualization**: Animated circular progress bars
- **Project Showcase**: Grid layouts for projects
- **Contact Form**: Functional contact form (ready for backend integration)

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **CSS3**: Custom animations and transitions
- **React Hooks**: useState, useEffect, useRef

## 📝 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#DC143C',  // Change this to your preferred color
  dark: '#0a0a0a',
  'dark-light': '#1a1a1a',
}
```

### Content

Update the content in each component file:
- `Hero.js` - Your name and title
- `About.js` - Your bio and information
- `Skills.js` - Your skills and percentages
- `Projects.js`, `UIUXProjects.js`, `WebProjects.js` - Your projects
- `Contact.js` - Your contact information

### Images

Place your images in the `public/images/` folder and update the image paths in the components.

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect React and configure everything

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mihishan Gunasekara**
- LinkedIn: [Mihishan Gunasekara](https://www.linkedin.com/in/mihishan-gunasekara-52a1342a0)
- GitHub: [@Mihishan09](https://github.com/Mihishan09)
- Email: mihishanofficial@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Heroicons
- Fonts from Google Fonts (Inter)
