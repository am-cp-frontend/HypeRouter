import * as React from 'react'
import { locationCtx, LocationCtx, RouterCtx, routerCtx } from './ctx'


const last = (arr: string[]) => arr[arr.length - 1]


// imagine running outside of the browser
export const MemoryRouter: React.FC = props => {
    const host = 'memory'
    const paths = React.useRef(['/'])

    const [location, setLocation] = React.useState<LocationCtx>({ host, path: last(paths.current) })
    const sync = React.useCallback(() => setLocation({ host, path: last(paths.current) }), [])

    const actions = React.useMemo<RouterCtx>(
        () => ({
            back: () => {
                if (paths.current.length > 1) {
                    paths.current.pop()
                    sync()
                }
            },
            push: path => {
                paths.current.push(path)
                sync()
            },
            replace: path => {
                paths.current[paths.current.length - 1] = path
                sync()
            },
        }),
        [],
    )

    return (
        <routerCtx.Provider value={actions}>
            <locationCtx.Provider value={location}>{props.children}</locationCtx.Provider>
        </routerCtx.Provider>
    )
}

MemoryRouter.displayName = 'MemoryRouter'
