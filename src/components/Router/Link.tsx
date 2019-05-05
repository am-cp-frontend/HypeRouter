import * as React from 'react'
import { routerCtx } from './ctx'


export type LinkProps = { replace?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>


export const Link: React.FC<LinkProps> = React.memo(props => {
    const router = React.useContext(routerCtx)
    const { href, replace, target, ...rest } = props

    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            if (
                (!href || href.includes('://')) || // allow external links to stay as is
                e.defaultPrevented || // let children handle events themselves
                (target && target !== '_self') || // let browser handle target blank / iframe
                e.button !== 0 || // only handle left clicks
                (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) // allow new tabs and such
            ) {
                return
            }

            e.preventDefault()
            router[replace ? 'replace' : 'push'](href)
        },
        [href, replace, target],
    )

    return (
        <a {...rest} href={href} target={target} onClick={handleClick}>
            {props.children}
        </a>
    )
})

Link.displayName = 'Link'
