import * as React from 'react'
import { MatcherProps } from './matchPath';
import { Route } from './Route';


type AsyncRouteProps = MatcherProps & {
    fallback?: React.ReactNode,
}

export const AsyncRoute: React.FC<AsyncRouteProps> = React.memo(props => (
    <Route {...props}>
        <React.Suspense fallback={props.fallback || <div>loading...</div>}>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </React.Suspense>
    </Route>
))

AsyncRoute.displayName = 'AsyncRoute'
