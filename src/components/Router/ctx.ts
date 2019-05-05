import * as React from 'react'


export interface LocationCtx {
    host: string
    path: string
}
export const locationCtx = React.createContext<LocationCtx>({
    host: '[host] No router used',
    path: '[path] No router used',
})


// tslint:disable-next-line:no-console
const noImpl = () => console.warn('No router used')
export interface RouterCtx {
    push: (path: string) => void
    replace: (path: string) => void
    back: () => void
}
export const routerCtx = React.createContext<RouterCtx>({
    back: noImpl,
    push: noImpl,
    replace: noImpl,
})


export const getLocation = () => ({
    host: window.location.host,
    path: window.location.pathname,
})
