import React from 'react';
import dynamic from "next/dynamic";
import HomePage from './'

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false })
import InputRange from 'react-input-range';
import HomeLayout from "../components/layouts/home-layout"


const Home = (props) => {
    React.useEffect(() => {
        document.getElementById('open-modal').click()
    })

    const [value, setValue] = React.useState({ min: 0, max: 0 })
    const responsive = {
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    };
    const responsivefeatures = {
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
    const response = {
        0: {
            items: 1
        },
        450: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
    return (
        <>
            <HomePage />
        </>
    )
}

export default Home