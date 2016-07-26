import React from 'react';
import Route from 'react-router/lib/Route';

import Lists from './Lists';
import Links from './Links';
import Buttons from './Buttons';
import Inputs from './Inputs';
import Selects from './Selects';

const demos = [
    Lists, Links, Buttons, Inputs, Selects
].map(function getRoute(Component) {
    const { demo: { name, children = [] } } = Component;
    const childRoutes = children.map(getRoute);

    return <Route key={name} path={`/demos/${name}`} component={Component}>
        { childRoutes }
    </Route>;
});

export { demos as default };

