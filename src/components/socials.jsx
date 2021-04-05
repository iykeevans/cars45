import React from 'react';
import Link from 'next/link';

const Socials = () => {
    return (
        <div className="socials">
            <div className="fixed-socials">
                <div>
                    <Link href="http://facebook.com/cars45.NG" >
                        <button className="btn btn-link"><img src="/assets/icons/fb.svg" className="fb" alt="facebook" /></button>
                    </Link>
                </div>
                <div>
                    <Link href="https://www.instagram.com/cars45ng/" >
                        <button className="btn btn-link"><img src="/assets/icons/insta.svg" alt="instagram" /></button>
                    </Link>
                </div>
                <div>
                    <Link href="https://twitter.com/cars45ng" >
                        <button className="btn btn-link"><img src="/assets/icons/tw.svg" alt="twitter" /></button>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-link"><img src="/assets/icons/yt.svg" alt="youtube" /></button>

                </div>
            </div>

        </div>
    )
}

export default Socials
