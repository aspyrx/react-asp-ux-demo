import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import browserHistory from 'react-router/lib/browserHistory';

import demos from './demos';

import styles from './app.less';

function NavLink(props) {
    const { activeClassName = styles.active, ...rest } = props;
    return <Link activeClassName={activeClassName} {...rest} />;
}

NavLink.propTypes = {
    activeClassName: React.PropTypes.string
}

function itemPropType(props, propName, componentName, propFullName) {
    const { type } = props[propName];
    if (!type === Route) {
        return new Error(
            `Invalid prop \`${propFullName}\` supplied to`
            + ` \`${componentName}\`. Only children of type`
            + ` \`${Route}\` are allowed; got \`${type}\` instead`
        );
    }
}

function NavItem(props) {
    const { item } = props;
    const { path } = item.props;
    const name = path.substring(path.lastIndexOf('/') + 1);

    return <div>
        <NavLink to={path}>{name}</NavLink>
    </div>
}

NavItem.propTypes = {
    item: itemPropType
}

function Nav(props) {
    const { items, title, ...rest } = props;

    return <nav {...rest}>
        <header>
            <IndexLink to="/" activeClassName={styles.active}>
                {title}
            </IndexLink>
        </header>
        {items.map((item, i) => <NavItem key={i} item={item} />)}
    </nav>;
}

Nav.propTypes = {
    items: React.PropTypes.arrayOf(itemPropType),
    title: React.PropTypes.string
}

function App(props) {
    const { children } = props;

    return <div className={styles.app}>
        <Nav items={demos} title="Home" className={styles.nav} />
        <main>
            {children}
        </main>
    </div>;
}

App.propTypes = {
    children: React.PropTypes.node
}

const bundleLoadedEvent = new Event('appBundleLoaded');
bundleLoadedEvent.renderApp = function renderApp(elem, done) {
    render(<Router history={browserHistory}>
        <Route path="/" component={App}>
            {demos}
        </Route>
    </Router>, elem, done);
};

window.dispatchEvent(bundleLoadedEvent);

