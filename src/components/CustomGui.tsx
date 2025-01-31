import {
    DefaultMainMenu,
    DefaultMainMenuContent, DefaultQuickActions, DefaultQuickActionsContent,
    TldrawUiMenuItem,
} from 'tldraw'

import { useState } from 'react'


export function CustomMainMenu() {
    return (
        <DefaultMainMenu>
            <DefaultMainMenuContent />
            <TldrawUiMenuItem id="github-link" label="Draw on Screen GitHub"
                              onSelect={() => {
                                  window.open('https://github.com/CrunchNCrisp/draw-on-screen', '_blank')
                              }}>
            </TldrawUiMenuItem>
        </DefaultMainMenu>
    )
}

export function CustomQuickActions() {
    const [isTransparent, setIsTransparent] = useState(true);

    const toggleBackground = () => {
        const styleSheet = document.styleSheets[0];
        const ruleIndex = Array.from(styleSheet.cssRules).findIndex(
            (rule) => rule.cssText.startsWith('.tl-background')
        );

        if (ruleIndex !== -1) {
            const rule = styleSheet.cssRules[ruleIndex] as CSSStyleRule;
            rule.style.background = isTransparent ? 'var(--color-background)' : 'transparent';
        }

        setIsTransparent(!isTransparent);
    };

    return (

        <DefaultQuickActions>
            <TldrawUiMenuItem id="whiteboard-toggle"
                              icon={isTransparent ? "brush" : "link-external"}
                              onSelect={toggleBackground}>
            </TldrawUiMenuItem>
            <DefaultQuickActionsContent />
        </DefaultQuickActions>
    )
}