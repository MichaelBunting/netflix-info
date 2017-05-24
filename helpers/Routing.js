import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MainLayout from '../components/MainLayout';

const Routing = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route exact path="/">
                    
                    </Route>
                    <Route path="*" render={() => {
                        return (
                            <div>
                                404 not found
                            </div>
                        );
                    }} />
                </Switch>
            </MainLayout>
        </Router>
    )
}

export default Routing;
