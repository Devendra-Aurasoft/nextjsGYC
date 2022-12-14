import React, { Fragment } from 'react'
import Footer from './Footer';
import Header from './Header'
import OldHeader from './Header/OldHeader';

function Layout(props) {
    return (
        <Fragment>
            {/* <Header /> */}
            <OldHeader/>
            <div className="header_height"></div>
            <div>{props.children}</div>
            <Footer/>
        </Fragment>
    )
};

export default Layout;