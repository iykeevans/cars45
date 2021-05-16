import React from 'react';
import Link from 'next/link';


const Feedback = (props) => {

    return (
        <div className="feedback" style={{ backgroundColor: "#C7C5C5" }}>
            <div className="container" className="feed-div" >
                <div className="row" style={{ height: '100vh' }}>
                    <div className="col-md-12 mx-auto my-auto bordered" >

                        <div className="text-center">
                            <img className="logo-img" src="https://storage.googleapis.com/cars45-web-bucket/Cars45logo.svg" alt="logo" />
                        </div>
                        <p>Select a category</p>
                        <Link href="/feedback/website">
                            <div className="category">
                                <p>Website Feedback</p>

                            </div>
                        </Link>
                        <Link className="category" href="/feedback/center">
                            <div className="category">
                                <p>Cars45 Center Feedback</p>
                            </div>
                        </Link>

                        <div className="text-right">
                            <button className="btn btn-link"><img src="https://storage.googleapis.com/cars45-web-bucket/forward.svg" alt="forward" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;