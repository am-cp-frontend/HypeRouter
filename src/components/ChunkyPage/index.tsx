import * as React from 'react';

const Section1 = React.lazy(() => import('./Section1'));
const Section2 = React.lazy(() => import('./Section2'));
const Section3 = React.lazy(() => import('./Section3'));

const ChunkyPage = () => (
    <React.Fragment>
        <Section1 />
        <Section2 />
        <Section3 />
        <footer>
            Please note that sections were loaded concurrently,
            but shown only after all of them were loaded
        </footer>
    </React.Fragment>
)

export default ChunkyPage;
