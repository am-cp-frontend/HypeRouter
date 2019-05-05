import * as React from 'react';
import { Link } from './Router';


// tslint:disable-next-line:no-console
console.warn('ABOUT WAS LOADED');

const About = () => (
    <React.Fragment>
        <h1>About</h1>
        <Link href='home'>Home</Link>
    </React.Fragment>
)

export default About;
