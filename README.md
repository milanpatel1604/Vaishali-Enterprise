# Vaishali Enterprise - Laminate Company Website

A modern, responsive website for Vaishali Enterprise showcasing premium A and B grade laminates.

## Features

- 🏠 Landing Page with hero section
- 📦 Products catalog with categories
- 📞 Contact Us page with form
- ℹ️ About Us page
- 💬 Talk to Expert popup
- 📱 Fully responsive design (Mobile, Tablet, Desktop)

## Tech Stack

- **Frontend**: React.js, React Router, Framer Motion, Styled Components
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Icons**: React Icons

## Installation

1. Install all dependencies:
```bash
npm run install-all
```

2. Configure MongoDB:
   - Make sure MongoDB is installed and running
   - Update `.env` file with your MongoDB URI

3. Start the development server:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- React frontend on http://localhost:3000

## Available Scripts

- `npm run dev` - Run both frontend and backend
- `npm run client` - Run only frontend
- `npm run server` - Run only backend
- `npm run build` - Build for production

## Project Structure

```
vaishali-enterprise/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── styles/         # Global styles
│       └── App.js
├── server/                 # Node.js backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── index.js
└── package.json
```

## Contact

For any queries, contact Vaishali Enterprise.
