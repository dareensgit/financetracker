# Component Library Documentation

This document describes all reusable React components available in the FinTrack application.

## UI Components

### Button
A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'accent' | 'danger' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `fullWidth`: boolean (default: false)
- `disabled`: boolean (default: false)
- `onClick`: function
- `className`: string

**Example:**
```jsx
import { Button } from '../components/ui'

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

### Input
A styled input field with label and error handling.

**Props:**
- `label`: string
- `type`: string (default: 'text')
- `name`: string
- `value`: string
- `onChange`: function
- `placeholder`: string
- `error`: string
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)
- `id`: string
- `className`: string

**Example:**
```jsx
import { Input } from '../components/ui'

<Input
  label="Email"
  type="email"
  name="email"
  value={email}
  onChange={handleChange}
  required
/>
```

### Select
A styled select dropdown with label and error handling.

**Props:**
- `label`: string
- `name`: string
- `value`: string
- `onChange`: function
- `options`: array of strings or {value, label} objects
- `placeholder`: string
- `error`: string
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)
- `id`: string
- `className`: string

**Example:**
```jsx
import { Select } from '../components/ui'

<Select
  label="Category"
  name="category"
  value={category}
  onChange={handleChange}
  options={[
    { value: 'food', label: 'Food' },
    { value: 'housing', label: 'Housing' }
  ]}
  required
/>
```

### Textarea
A styled textarea with label and error handling.

**Props:**
- `label`: string
- `name`: string
- `value`: string
- `onChange`: function
- `placeholder`: string
- `rows`: number (default: 4)
- `error`: string
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)
- `id`: string
- `className`: string

**Example:**
```jsx
import { Textarea } from '../components/ui'

<Textarea
  label="Description"
  name="description"
  value={description}
  onChange={handleChange}
  rows={5}
/>
```

### Checkbox
A styled checkbox with label.

**Props:**
- `label`: string
- `name`: string
- `checked`: boolean
- `onChange`: function
- `required`: boolean (default: false)
- `disabled`: boolean (default: false)
- `id`: string
- `className`: string

**Example:**
```jsx
import { Checkbox } from '../components/ui'

<Checkbox
  label="I agree to the terms"
  name="terms"
  checked={terms}
  onChange={handleChange}
  required
/>
```

### Modal
A modal/dialog component for displaying content in an overlay.

**Props:**
- `isOpen`: boolean
- `onClose`: function
- `title`: string
- `children`: ReactNode
- `footer`: ReactNode
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'md')
- `closeOnOverlayClick`: boolean (default: true)
- `className`: string

**Example:**
```jsx
import { Modal } from '../components/ui'

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Confirm Action"
  footer={
    <>
      <Button variant="outline" onClick={() => setIsModalOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

## Layout Components

### Container
A responsive container component with max-width constraints.

**Props:**
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full' (default: '7xl')
- `className`: string
- `children`: ReactNode

**Example:**
```jsx
import { Container } from '../components/layout'

<Container maxWidth="lg">
  <h1>Content</h1>
</Container>
```

### Card
A card container component with padding, shadow, and border options.

**Props:**
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `shadow`: boolean (default: true)
- `border`: boolean (default: true)
- `className`: string
- `children`: ReactNode

**Example:**
```jsx
import { Card } from '../components/layout'

<Card padding="lg" shadow={true}>
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>
```

### Header
A page header component with title and subtitle.

**Props:**
- `title`: string
- `subtitle`: string (optional)
- `className`: string
- `children`: ReactNode (optional, for action buttons)

**Example:**
```jsx
import { Header } from '../components/layout'

<Header
  title="Dashboard"
  subtitle="View your financial overview"
>
  <Button>Add Transaction</Button>
</Header>
```

### Footer
A reusable footer component with links and social media icons.

**Props:**
- `className`: string

**Example:**
```jsx
import { Footer } from '../components/layout'

<Footer />
```

## State Management

### UIContext
The application uses a context provider for UI state management.

**Available hooks:**
- `useUI()`: Returns UI context with:
  - `isDarkMode`: boolean
  - `toggleDarkMode()`: function
  - `modal`: object with modal state
  - `openModal(title, content, onClose)`: function
  - `closeModal()`: function
  - `notifications`: array
  - `showNotification(message, type, duration)`: function
  - `removeNotification(id)`: function

**Example:**
```jsx
import { useUI } from '../context/UIContext'

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode, showNotification } = useUI()
  
  const handleClick = () => {
    showNotification('Action completed!', 'success')
  }
  
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
```

## Usage Best Practices

1. **Import from index files**: Use the index exports for cleaner imports
   ```jsx
   import { Button, Input } from '../components/ui'
   import { Container, Card } from '../components/layout'
   ```

2. **Consistent styling**: All components automatically adapt to dark mode via the UIContext

3. **Form handling**: Use controlled components with state management
   ```jsx
   const [formData, setFormData] = useState({ email: '', password: '' })
   
   const handleChange = (e) => {
     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
   }
   ```

4. **Error handling**: Use the `error` prop on form components to display validation errors

5. **Notifications**: Use the `showNotification` function from UIContext for user feedback
   ```jsx
   showNotification('Success!', 'success', 3000)
   showNotification('Error occurred', 'error', 5000)
   ```

