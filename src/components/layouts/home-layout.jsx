import React from 'react';
import Header from '../header-one';
import HeaderTwo from '../header-two';
import Footer from '../footer-one';
import FooterTwo from '../footer-two';

export default function HomeLayout(props) {

    return (
        <>


            {props.header === "two" ? <HeaderTwo /> : <Header />}
            {props.children}
            {props.footer === "two" ? <FooterTwo /> : <Footer />}
        </>

    )
    // return (
    //     <div>
    //         {this.props.location.pathname === '/buy' ? <HeaderTwo /> : <Header />}

    //         <div>
    //             <ComposedComponent {...this.props} />
    //         </div>

    //         {this.props.location.pathname === '/buy' ? <FooterTwo /> : <Footer />}

    //     </div >


    // )

}