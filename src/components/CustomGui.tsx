import {
    DefaultQuickActions, DefaultQuickActionsContent,
    TldrawUiMenuItem
} from 'tldraw'
import { useState } from 'react'

export function CustomQuickActions() {
    const [isTransparent, setIsTransparent] = useState(true)

    const getIcon = () => {
        // Check if the state is correctly determining the icon
        return isTransparent ? 'group' : 'ungroup'
    }

    const toggleBackground = () => {
        const newIsTransparent = !isTransparent
        setIsTransparent(newIsTransparent)

        if (newIsTransparent) {
            document.body.classList.remove('show-whiteboard')
        } else {
            document.body.classList.add('show-whiteboard')
        }
    }

    return (
        <DefaultQuickActions>
            <TldrawUiMenuItem id="whiteboard-toggle"
                              label={isTransparent ? "Show Whiteboard" : "Hide Whiteboard"}
                              icon={getIcon()} // Ensure this is correctly computed
                              onSelect={toggleBackground}>
            </TldrawUiMenuItem>
            <DefaultQuickActionsContent />
            <TldrawUiMenuItem id="github-link"
                              icon={'github'}
                              label="Draw on Screen GitHub"
                              onSelect={() => {
                                  window.open('https://github.com/CrunchNCrisp/draw-on-screen', '_blank')
                              }}>
            </TldrawUiMenuItem>
        </DefaultQuickActions>
    )
}