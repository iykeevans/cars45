import React from 'react';
import Link from 'next/link'
import Budget from '../../components/budget';
import Chat from "../../components/chat";
import Feedbackbutton from '../../components/feedback-button';
import HomeLayout from "../../components/layouts/home-layout"
import endpoints from '../../api/endPoints';
import { getCall } from '../../api/request';
import Loading from "../../components/loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useRouter } from "next/router";

const Brandnew = (props) => {
    React.useEffect(() => {
        getMakes()
        getBodyTypes()
    }, [])
    const [scrollValue, setScrollValue] = React.useState(0)
    const [makes, setMakes] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [limit, setLimit] = React.useState(9)
    const [types, setTypes] = React.useState([])
    const router = useRouter()

    const getMakes = async () => {
        try {
            setLoading(true);
            let response = await getCall(`${endpoints.getMake}`)
            setLoading(false);
            let data = response.data.data
            data = data.sort()
            setMakes(data);
        } catch (error) {
            setLoading(false);
            toast.notify('Oops! something went wrong. keep calm and try again.', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    const getBodyTypes = async () => {
        try {
            setLoading(true);
            let response = await getCall(`${endpoints.getBodyType}`)
            setLoading(false);
            setTypes(response.data.data);
        } catch (error) {
            setLoading(false);
            toast.notify('Oops! something went wrong. keep calm and try again.', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    const showAll = () => {
        setLimit(makes.length)
    }
    const searchBodyTypes = (filter_id) => {
        router.push({ pathname: "/brandnew/type/[type]", query: { type: filter_id } })
    }
    const next = () => {
        let ele = document.getElementById('scroll')
        ele.scrollLeft += 230
        if (document.getElementById('scroll').scrollLeft === scrollValue) {
            setScrollValue(0)
            return document.getElementById('scroll').scrollLeft = 0
        }
        setScrollValue(ele.scrollLeft)
    }
    return (
        <HomeLayout>
            {loading && <Loading />}
            <div className="brandnew">
                <div className="jumbotron">
                    <h1>THE EASIEST WAY TO BUY YOUR NEXT CAR</h1>
                    <Feedbackbutton {...props} />
                </div>
                <Chat {...props} />

                {makes.length ? <div className="brands">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="h-shop">Shop by Brand</h3>
                            </div>
                        </div>
                        <div className="row brand-row">
                            {makes.slice(0, limit).map((make, index) => (
                                <Link href={{ pathname: "/brandnew/[brand]", query: { brand: make.trim() } }} className="col" key={index}>
                                    <a className="col mb-5">
                                        <div className="brand-container">
                                            <div className="brand-content">
                                                <img src="/assets/icons/brand-placeholder.png" alt="brand" />
                                                <h4>{make}</h4>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))}

                            {limit < makes.length ? <div className="col">
                                <div className="see-container" onClick={() => showAll()}>
                                    <div className="see-all text-center">
                                        <h4>SEE ALL BRANDS</h4>


                                        <img src="/assets/icons/teal-arrow-down.svg" alt="..." />
                                    </div>
                                </div>
                            </div> : null}
                        </div>

                        <div className="border-bottom mb-3" />
                    </div>
                </div> : null}

                <div className="type mt-5">
                    {types.length ? <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="h-shop">Shop by Type</h3>

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="type-container" id="scroll">

                                {types.map((type, index) => (
                                    <div className="type-content text-center" key={index} onClick={() => searchBodyTypes(type.filter_id)}>
                                        <div className="align-self-center">
                                            <img src={`/assets/icons/${type.name}.svg`} alt={type.name} />
                                            <p>{type.name.toUpperCase()}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <button onClick={() => next()} className="btn btn-link"><img src="/assets/icons/arrow-right.svg" alt="..." /></button>
                    </div> : null}
                </div>

                <div className="price">
                    <Budget {...props} />
                </div>

            </div>
            <ToastContainer align={"right"} position={"bottom"} />
        </HomeLayout>
    )
}

export default Brandnew;
