# FinTrack - Finance Tracker React Application

A modern, responsive finance tracking application built with React, Tailwind CSS, and React Router.

## Features

- ✨ **Dark Mode Toggle** - Global theme switching with persistent storage
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile devices
- 🎨 **Beautiful UI** - Modern design with custom color palette
- 🧭 **React Router** - Client-side routing for smooth navigation
- 📊 **Dashboard** - Visual charts and financial overview
- 💰 **Transaction Management** - Add, edit, view, and list transactions
- 👤 **User Profile** - Personal profile management

## Project Structure

```
project-root/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles with Tailwind
│   │
│   ├── assets/                 # Images and static assets
│   │
│   ├── components/             # Reusable UI components
│   │   ├── navigation/
│   │   │   └── Navbar.jsx     # Navigation bar with dark mode toggle
│   │
│   ├── pages/
│   │   ├── auth/               # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── main/               # Main application pages
│   │   │   ├── Home.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   └── transactions/       # Transaction management pages
│   │       ├── TransactionList.jsx
│   │       ├── TransactionDetails.jsx
│   │       └── AddEditTransaction.jsx
│   │
│   ├── context/
│   │   └── UIContext.jsx       # Dark mode context provider
│   │
│   ├── router/
│   │   └── AppRouter.jsx       # React Router configuration
│   │
│   └── utils/
│       └── helpers.js          # Utility functions
│
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Pages

- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration
- **Home** (`/home`) - Landing page with features
- **Dashboard** (`/dashboard`) - Financial overview with charts
- **Profile** (`/profile`) - User profile management
- **Transactions** (`/transactions`) - List all transactions
- **Transaction Details** (`/transactions/:id`) - View transaction details
- **Add Transaction** (`/transactions/add`) - Create new transaction
- **Edit Transaction** (`/transactions/edit/:id`) - Edit existing transaction

## Dark Mode

The application includes a global dark mode toggle in the navigation bar. The theme preference is saved to localStorage and persists across page reloads.

## Technologies Used

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom CSS** - Additional animations and styles

## Color Palette

- **Sea Blue** (#0F4E77) - Primary color
- **Lemonade** (#F8D27E) - Accent color
- **Matcha** (#89A577) - Success/income
- **Honey Drizzle** (#E7B08B) - Warning/expense
- **Coffee Grounds** (#3F2516) - Text color

## Development Notes

- All pages maintain the exact design and styling from the Phase 2 HTML prototype
- Dark mode uses a navy blue + system blue palette for optimal readability
- All UI interactions are functional (navigation, forms, buttons)
- Responsive design works on all screen sizes

## License

ISC


