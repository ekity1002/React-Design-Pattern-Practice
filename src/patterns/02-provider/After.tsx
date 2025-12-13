

// TODO: Providerパターンを実装してください
// ヒント:
// 1. React.createContext()でThemeContextを作成
// 2. ThemeProviderコンポーネントを作成
// 3. useContextフックでthemeとtoggleThemeを取得
// 4. プロップドリリングを解消


import React, {
  createContext,
  useContext,
  useState
} from 'react'


type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

interface ContentProps {
  theme: Theme
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}


function Layout() {
  const {theme, toggleTheme} = useTheme()
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <Content />
      <div style={{ marginTop: '16px' }}>
        <button onClick={toggleTheme}>
          (Layoutから) Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  )
}

function Header() {
  const { theme } = useTheme()

  return (
    <header
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h3>Header</h3>
      <ThemeButton />
    </header>
  )
}

function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

function Content() {
  const { theme } = useTheme()

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#555',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <p>Current theme: {theme}</p>
    </div>
  )
}


export default App
