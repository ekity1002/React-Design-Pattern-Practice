import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import HOCPattern from './patterns/01-hoc/HOCPattern'
import ProviderPattern from './patterns/02-provider/ProviderPattern'
import PresentationalContainer from './patterns/03-presentational-container/PresentationalContainer'
import HooksPattern from './patterns/04-hooks/HooksPattern'
import CompoundComponent from './patterns/05-compound-component/CompoundComponent'
import ConditionalRendering from './patterns/06-conditional-rendering/ConditionalRendering'
import RenderProps from './patterns/07-render-props/RenderProps'
import StateReducer from './patterns/08-state-reducer/StateReducer'
import ControlledComponents from './patterns/09-controlled-components/ControlledComponents'
import ExtensibleStyles from './patterns/10-extensible-styles/ExtensibleStyles'
import StateInitializer from './patterns/11-state-initializer/StateInitializer'

function App() {
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <h1>React Design Patterns</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/hoc">01. HOC Pattern</NavLink>
              </li>
              <li>
                <NavLink to="/provider">02. Provider Pattern</NavLink>
              </li>
              <li>
                <NavLink to="/presentational-container">03. Presentational & Container</NavLink>
              </li>
              <li>
                <NavLink to="/hooks">04. React Hooks</NavLink>
              </li>
              <li>
                <NavLink to="/compound-component">05. Compound Component</NavLink>
              </li>
              <li>
                <NavLink to="/conditional-rendering">06. Conditional Rendering</NavLink>
              </li>
              <li>
                <NavLink to="/render-props">07. Render Props</NavLink>
              </li>
              <li>
                <NavLink to="/state-reducer">08. State Reducer</NavLink>
              </li>
              <li>
                <NavLink to="/controlled-components">09. Controlled Components</NavLink>
              </li>
              <li>
                <NavLink to="/extensible-styles">10. Extensible Styles</NavLink>
              </li>
              <li>
                <NavLink to="/state-initializer">11. State Initializer</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hoc" element={<HOCPattern />} />
            <Route path="/provider" element={<ProviderPattern />} />
            <Route path="/presentational-container" element={<PresentationalContainer />} />
            <Route path="/hooks" element={<HooksPattern />} />
            <Route path="/compound-component" element={<CompoundComponent />} />
            <Route path="/conditional-rendering" element={<ConditionalRendering />} />
            <Route path="/render-props" element={<RenderProps />} />
            <Route path="/state-reducer" element={<StateReducer />} />
            <Route path="/controlled-components" element={<ControlledComponents />} />
            <Route path="/extensible-styles" element={<ExtensibleStyles />} />
            <Route path="/state-initializer" element={<StateInitializer />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
