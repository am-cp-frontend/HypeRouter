import * as React from 'react';
import {
    LocationCtx, locationCtx,
    RouterCtx, routerCtx,
} from './ctx';


// take after, take cb, return function that passes all received arguments to cb, than calls after
const makeActionHelper = (after: () => void) => <T extends any[]>(
    cb: (...args: T) => void,
) => (...args: T) => {
    cb(...args);
    after();
};

const getLocation = () => ({
    host: window.location.host,
    path: window.location.pathname,
})


export const HistoryRouter: React.FC = props => {
    const [location, setLocation] = React.useState<LocationCtx>(getLocation());
    const sync = React.useCallback(() => setLocation(getLocation()), []);

    const router = React.useMemo<RouterCtx>(() => {
        const action = makeActionHelper(sync);
        return {
            back: action(window.history.back),
            push: action(url => window.history.pushState(url, 'ignored', url)),
            replace: action(url => window.history.replaceState(url, 'ignored', url)),
        };
    }, [sync]);

    React.useEffect(() => {
        window.addEventListener('popstate', sync);
        return () => window.removeEventListener('popstate', sync);
    }, []);

    return (
        <routerCtx.Provider value={router}>
            <locationCtx.Provider value={location}>
                {props.children}
            </locationCtx.Provider>
        </routerCtx.Provider>
    );
};

HistoryRouter.displayName = 'HistoryRouter';
