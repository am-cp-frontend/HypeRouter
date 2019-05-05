import { useContext } from 'react';
import { locationCtx } from './ctx';


export interface MatcherProps {
    match?: (path: string) => boolean
    path?: string
    exact?: boolean
}

export const matches = (props: MatcherProps, path: string) => {
    if (props.match) {
        return props.match(path)
    }
    if (props.path) {
        if (props.exact) {
            return path === props.path;
        }
        return path.startsWith(props.path)
    }
    return true
}


export const useMatch = (props: MatcherProps) => {
    const location = useContext(locationCtx);
    return matches(props, location.path);
}
