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
        const styleSheet = document.styleSheets[0]
        const ruleIndex = Array.from(styleSheet.cssRules).findIndex(
            (rule) => rule.cssText.startsWith('.tl-background'),
        )

        if (ruleIndex !== -1) {
            const rule = styleSheet.cssRules[ruleIndex] as CSSStyleRule
            rule.style.background = isTransparent ? 'var(--color-background)' : 'transparent'
        }

        // Toggle the state
        setIsTransparent(!isTransparent)
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