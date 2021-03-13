import React from 'react';
import Header from '../header-one';
import HeaderTwo from '../header-two';
import Footer from '../footer-one';
import FooterTwo from '../footer-two';

export default function (ComposedComponent) {
    return class HomeLayout extends React.PureComponent {
        _isMounted = false
        componentDidMount() {
            console.log(this.props.location)
        }
        componentWillUnmount() {

        }
        state = {

        }


        render() {
            return (
                <div>
                    {this.props.location.pathname === '/buy' ? <HeaderTwo /> : <Header />}

                    <div>
                        <ComposedComponent {...this.props} />
                    </div>

                    {this.props.location.pathname === '/buy' ? <FooterTwo /> : <Footer />}

                </div >


            )
        }
    }
}