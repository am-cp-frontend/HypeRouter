import * as React from 'react'
import { MatcherProps, useMatch } from './matchPath';


export const Route: React.FC<MatcherProps> = React.memo(props => (
    useMatch(props)
        ? <React.Fragment>{props.children}</React.Fragment>
        : null
))

Route.displayName = 'Route'
