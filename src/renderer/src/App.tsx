import { Tldraw } from 'tldraw'
import { CustomMainMenu, CustomQuickActions } from '../../components/CustomGui.tsx'

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw
				persistenceKey="draw-on-screen"
				components={{MainMenu : CustomMainMenu,  QuickActions : CustomQuickActions}}
			/>
		</div>
	)
}

export default App
