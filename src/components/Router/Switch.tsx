import * as React from 'react'

import { locationCtx } from './ctx';
import { matches } from './matchPath';


// imagine running outside of the browser
export const Switch: React.FC = React.memo(({ children }) => {
    const location = React.useContext(locationCtx)
    let match: boolean = false
    let route: React.ReactNode = null

    React.Children.forEach(children, child => {
        if (!match && React.isValidElement(child)) {
            if (matches(child.props, location.path)) {
                route = React.cloneElement(child)
                match = true
            }
        }
    })

    return route
})

Switch.displayName = 'Switch'
