

// TODO: Compound Component パターンを実装してください
// ヒント:
// 1. Accordion, Accordion.Header, Accordion.Content のような構造
// 2. React.createContext()で親子間で状態を共有
// 3. より柔軟で宣言的なAPI

import { createContext, ReactNode, useContext, useMemo, useState } from "react"

type AccordionContextValue = {
  isOpen: boolean
  toggle: () => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

type AccordionProps = {
  children: ReactNode;
  defaultOpen?: boolean;
}

type AccordionHeaderProps = {
  children: ReactNode;
};

type AccordionContentProps = {
  children: ReactNode;
};

function AccordionRoot({ children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const value = useMemo<AccordionContextValue>(
    () => ({
      isOpen,
      toggle: () => setIsOpen((prev) => !prev),
    }),
    [isOpen]
  );

  return (
    <AccordionContext.Provider value={value}>
      <div style={{ border: "1px solid #ddd", marginBottom: "10px" }}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionHeader({ children }: AccordionHeaderProps) {
  const { isOpen, toggle } = useAccordionContext()
  return (
    <div
      onClick={toggle}
      style={{
        padding: "15px",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={(e) => {
        // アクセシビリティ: Enter/Space でも開閉できるようにする
        if (e.key === "Enter" || e.key === " ") toggle();
      }}
    >
      {children} {isOpen ? "▼" : "▶"}
    </div>
  )
}

function AccordionContent({ children }: AccordionContentProps) {
  const { isOpen } = useAccordionContext();

  if (!isOpen) return null;

  return <div style={{ padding: "15px" }}>{children}</div>;
}

// コンポーネントの関連付け
// こうすると「Accordion に属する部品」だと一目で分かる
// APIが宣言的で読みやすい
const Accordion = Object.assign(AccordionRoot, {
  Header: AccordionHeader,
  Content: AccordionContent,
})


function App() {
  return (
    <div>
      <Accordion defaultOpen>
        <Accordion.Header>Section 1</Accordion.Header>
        <Accordion.Content>This is the content of section 1</Accordion.Content>
      </Accordion>

      <Accordion>
        <Accordion.Header>Section 2</Accordion.Header>
        <Accordion.Content>This is the content of section 2</Accordion.Content>
      </Accordion>
    </div>
  );}

export default App
