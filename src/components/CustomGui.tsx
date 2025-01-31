import {
    DefaultMainMenu,
    DefaultMainMenuContent, DefaultQuickActions, DefaultQuickActionsContent,
    TldrawUiMenuItem,
} from 'tldraw'


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
    return (

        <DefaultQuickActions>
            <TldrawUiMenuItem id="something" icon="external-link" label="Draw on Screen GitHub"
                              onSelect={() => {
                                  window.open('https://github.com/CrunchNCrisp/draw-on-screen', '_blank')
                              }}>
            </TldrawUiMenuItem>
            <DefaultQuickActionsContent />
        </DefaultQuickActions>
    )
}