import React from 'react';
import { render } from 'react-dom';
import demos from './demos';

import styles from './app.less';

function App() {
    return <div className={styles.app}>
        <h1>react-asp-ux demo</h1>
        {demos}
    </div>;
}

const bundleLoadedEvent = new Event('appBundleLoaded');
bundleLoadedEvent.renderApp = function renderApp(elem, done) {
    render(<App />, elem, done);
};

window.dispatchEvent(bundleLoadedEvent);

