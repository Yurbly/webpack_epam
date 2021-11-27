import React from "react";
import {Provider} from "react-redux";
import Layout from "components/layout/Layout";
import Home from "containers/Home";
import {store} from "store/index";

const App = () =>
    <Provider store={store}>
        <Layout>
            <Home/>
        </Layout>
    </Provider>

export default App;
