import React from 'react';
import Header from '../header-one';
import Footer from '../footer-one';

export default function (ComposedComponent) {
    return class HomeLayout extends React.PureComponent {
        _isMounted = false
        componentDidMount() {

        }
        componentWillUnmount() {

        }
        state = {

        }


        render() {
            return (
                <div className="admin freelancer">
                    <Header />

                    <div className="main">
                        <ComposedComponent {...this.props} />
                    </div>

                    <Footer />

                </div >


            )
        }
    }
}