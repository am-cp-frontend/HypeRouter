import * as React from 'react'
import { MatcherProps } from './matchPath';
import { Route } from './Route';
import { routerCtx } from './ctx';


interface RedirectCoreProps {
    to: string;
}

type RedirectProps = MatcherProps & RedirectCoreProps;


export const RedirectCore: React.FC<RedirectCoreProps> = props => {
    const router = React.useContext(routerCtx)
    React.useEffect(() => router.replace(props.to));
    return null;
}


export const Redirect: React.FC<RedirectProps> = React.memo(props => (
    <Route {...props}>
        <RedirectCore to={props.to} />
    </Route>
))

Redirect.displayName = 'Redirect'
