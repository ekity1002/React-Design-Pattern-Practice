import { useState } from 'react'

// Providerパターン適用前: プロップドリリング(Prop Drilling)が発生

type Theme = 'light' | 'dark'

interface ThemeProps {
  theme: Theme
  toggleTheme: () => void
}

interface ContentProps {
  theme: Theme
}

function App() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return <Layout theme={theme} toggleTheme={toggleTheme} />
}

function Layout({ theme, toggleTheme }: ThemeProps) {
  return (
    <div style={{ padding: '20px' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Content theme={theme} />
    </div>
  )
}

function Header({ theme, toggleTheme }: ThemeProps) {
  return (
    <header style={{
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h3>Header</h3>
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
    </header>
  )
}

function ThemeButton({ theme, toggleTheme }: ThemeProps) {
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

function Content({ theme }: ContentProps) {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: theme === 'light' ? '#f5f5f5' : '#555',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <p>Current theme: {theme}</p>
    </div>
  )
}

export default App
