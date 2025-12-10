import { useState, ReactNode } from 'react'

// Compound Component パターン適用前
// 全ての設定をpropsで渡す必要がある

interface AccordionProps {
  title: string
  content: ReactNode
  defaultOpen?: boolean
}

function Accordion({ title, content, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{ border: '1px solid #ddd', marginBottom: '10px' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '15px',
          backgroundColor: '#f5f5f5',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {title} {isOpen ? '▼' : '▶'}
      </div>
      {isOpen && (
        <div style={{ padding: '15px' }}>
          {content}
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <div>
      <Accordion
        title="Section 1"
        content="This is the content of section 1"
        defaultOpen={true}
      />
      <Accordion
        title="Section 2"
        content="This is the content of section 2"
      />
    </div>
  )
}

export default App
