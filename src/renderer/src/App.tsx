import { Tldraw } from 'tldraw'
import { CustomQuickActions } from '../../components/CustomGui.tsx'

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw
				persistenceKey="draw-on-screen"
				components={{QuickActions : CustomQuickActions}}
			>
			</Tldraw>
		</div>
	)
}

export default App
