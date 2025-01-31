import { Tldraw } from 'tldraw'

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw persistenceKey="draw-on-screen"/>
		</div>
	)
}

export default App
