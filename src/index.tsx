import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { HistoryRouter, Link, Route, NavLink } from './components/Router'
import { Switch } from './components/Router/Switch';
import { AsyncRoute } from './components/Router/AsyncRoute';
import { Redirect } from './components/Router/Redirect';

const isUserRoute = (path: string) => path.startsWith('/user')
const active: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
}
const sidebar: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    background: '#eee',
    boxSizing: 'border-box',
    padding: '20px',
}


const AboutPage = React.lazy(() => import('./components/About'));

const App: React.FC = () => (
    <HistoryRouter>
        <nav>
            <ul>
                <li> <NavLink href='/' exact activeStyle={active}>Home</NavLink> </li>
                <li> <NavLink href='/about' exact activeStyle={active}>About</NavLink> </li>
                <li> <NavLink href='/user/name' activeStyle={active}>@username</NavLink> </li>
            </ul>
        </nav>

        <main>
            <Switch>
                <Redirect path='/about-us' exact to='/about' />

                <Route match={isUserRoute}>
                    <h1>User</h1>
                    Check out the chat in the sidebar (it wouldn't work though)
                </Route>

                <AsyncRoute path='/about' exact>
                    <AboutPage />
                </AsyncRoute>

                <Route path='/' exact>
                    <h1>Home</h1>
                    <Link href='https://github.com/am-cp-frontend/HypeRouter'>Github</Link>
                </Route>

                <Route>
                    <h1>404, sorry bro</h1>
                </Route>
            </Switch>
        </main>

        <Route match={isUserRoute}>
            <aside style={sidebar}>
                <textarea placeholder='chat' style={{ resize: 'vertical' }} />
            </aside>
        </Route>
    </HistoryRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
