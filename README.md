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
- 🧩 **Reusable Components** - Comprehensive component library (buttons, forms, layouts)
- 🔔 **Notifications** - Toast notifications for user feedback
- 🎯 **State Management** - Enhanced UI state management with Context API

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
│   │   ├── ui/                 # UI components
│   │   │   ├── Button.jsx     # Reusable button component
│   │   │   ├── Input.jsx      # Form input component
│   │   │   ├── Select.jsx     # Dropdown select component
│   │   │   ├── Textarea.jsx   # Textarea component
│   │   │   ├── Checkbox.jsx   # Checkbox component
│   │   │   ├── Modal.jsx      # Modal/dialog component
│   │   │   ├── Notification.jsx # Notification component
│   │   │   └── index.js       # Component exports
│   │   ├── layout/            # Layout components
│   │   │   ├── Container.jsx  # Responsive container
│   │   │   ├── Card.jsx       # Card container
│   │   │   ├── Header.jsx     # Page header
│   │   │   ├── Footer.jsx     # Reusable footer
│   │   │   └── index.js       # Component exports
│   │   ├── navigation/
│   │   │   └── Navbar.jsx     # Navigation bar with dark mode toggle
│   │   └── README.md          # Component documentation
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
│   │   └── UIContext.jsx       # UI state management (dark mode, modals, notifications)
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

## Phase 3: Core React Components ✅

This project fully implements Phase 3 requirements:

### ✅ Reusable React Components
- **Button** - Multiple variants (primary, secondary, outline, accent, danger, ghost)
- **Form Components** - Input, Select, Textarea, Checkbox with consistent styling
- **Layout Components** - Container, Card, Header, Footer for consistent page structure
- **Modal** - Dialog component for overlays and confirmations
- **Notification** - Toast notifications for user feedback

### ✅ React Router
- Fully configured with routes for all pages
- Navigation between pages works seamlessly
- Protected routes can be easily added

### ✅ State Management
- **UIContext** - Global UI state management
  - Dark mode toggle with localStorage persistence
  - Modal state management
  - Notification system
- All components automatically adapt to dark mode

### ✅ Responsive Design
- All components use Tailwind CSS with responsive utilities
- Mobile-first approach with breakpoints
- Consistent spacing and layout across screen sizes

### Component Usage
See `src/components/README.md` for detailed component documentation and examples.

## Dark Mode

The application includes a global dark mode toggle in the navigation bar. The theme preference is saved to localStorage and persists across page reloads. All reusable components automatically adapt to the current theme.

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


