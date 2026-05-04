import { Button } from './components'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans p-8">
      <h1 className="text-3xl font-bold text-brand-primary mb-2">Lucky Cat Design System</h1>
      <p className="text-brand-neutral mb-8">Playful, modern components for React + TypeScript.</p>
      <div className="flex gap-3 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  )
}

export default App
