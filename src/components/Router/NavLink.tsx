import clsx from 'clsx'
import * as React from 'react'
import { Link, LinkProps } from './Link'
import { MatcherProps, useMatch } from './matchPath';


export type NavLinkProps = LinkProps & MatcherProps & {
    activeClass?: string
    activeStyle?: React.CSSProperties,
}


export const NavLink: React.FC<NavLinkProps> = React.memo(props => {
    const { activeClass, activeStyle, className, style, href, exact, ...rest } = props

    const matches = useMatch({ ...props, path: href })

    const mergedClass = React.useMemo(
        () => clsx(className, matches && activeClass),
        [matches, activeClass, className],
    )
    const mergedStyle = React.useMemo(
        () => {
            if (!activeStyle && !style) {
                return undefined
            }
            return Object.assign({}, matches ? activeStyle : undefined, style)
        },
        [matches, activeStyle, style],
    )

    return (
        <Link {...rest} className={mergedClass} style={mergedStyle} href={href}>
            {props.children}
        </Link>
    )
})

NavLink.displayName = 'NavLink'
