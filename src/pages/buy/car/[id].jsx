import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from "next/router";
import Image from 'next/image';
import Slider from "react-slick";
import Carlist from "../../../components/car-list";
import Caroverview from '../../../components/car-overview';
import Carfeatures from '../../../components/car-features';
import Carinspection from '../../../components/car-inspection';
import HomeLayout from "../../../components/layouts/home-layout"
import { getCall, postCall } from "../../../api/request";
import endpoints from "../../../api/endPoints";
import Loading from "../../../components/loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";
import Recommeneded from "../../../components/recommended"
import { payWithPaystack } from "../../../utils";
import cookie from "js-cookie";

const Cardetails = (props) => {
    useEffect(() => {
        const id = props.id.split("_")[1]
        //  const id = "NG-196632"
        console.log(window)
        getSingleCar(id)
        getCities()
    }, [])
    const [carData, setCarData] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('Loading car details...');
    const [features, setFeatures] = useState({});
    const [inspection, setInspection] = useState({});
    const [cities, setCities] = useState([]);
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [cityLocations, setCityLocations] = useState([]);
    const [data, setData] = useState({})
    const [payData, setPayData] = useState({});
    const [isPaymentSuccessfull, setIsPaymentSuccessfull] = useState(false);
    const [reference, setReference] = useState()
    const router = useRouter()
    // const getPreviousData = (data) => {
    //     let search = decodeURIComponent(data)
    //     search = search.split('=')[1]
    //     search = JSON.parse(search)
    //     setPreviousData(search)

    // }
    const getSingleCar = (sku) => {
        setLoading(true);
        getCall(`${endpoints.getSingleCar(sku)}`)
            .then((response) => {
                const data = response.data;
                setLoading(false);
                if (response.status === 200) {
                    //   setErrorText(data.message);
                    //   setCarYearData(response.data.data);
                    if (typeof response.data.data === 'string') {
                        setCarData()
                        setMessage('Car details not found')
                        toast.notify('Oops! Can not get more details about this car', {
                            duration: 5,
                            title: "An error occured",
                            type: "error",
                        });
                        setTimeout(() => {
                            // if (previousData) {
                            //     let search = decodeURIComponent(previousData)
                            //     search = JSON.parse(search.split('=')[1])
                            //     return router.push({ pathname: '/buy', query: { data: JSON.stringify(search) } })
                            // }

                            router.back()
                        }, 5100);
                    } else {
                        console.log(response.data.data.report)
                        let detail = response.data.data.report
                        let initialKey = Object.keys(detail)
                        let inspection = {}
                        let features = {}
                        for (let i in initialKey) {
                            let key = Object.keys(detail[initialKey[i]])
                            for (let j in key) {
                                if (initialKey[i] === 'features') {
                                    features = {
                                        ...features,
                                        [key[j]]: detail[initialKey[i]][key[j]]
                                    }
                                } else {
                                    inspection = {
                                        ...inspection,
                                        [key[j]]: detail[initialKey[i]][key[j]]
                                    }
                                }
                            }

                            // value = [...value, Object.values(detail[initialKey[i]])]
                        }
                        setFeatures(features)
                        setInspection(inspection)
                        // console.log(value)
                        // console.(initialKey)
                        return setCarData(response.data.data)
                    }
                } else {
                    //   setshowError(true);
                    //   setErrorText("Oops! something went wrong. keep calm and try again.");
                }
            })
            .catch((error) => {
                // setshowError(true);
                setLoading(false);
                // setErrorText("Oops! something went wrong. keep calm and try again.");
            });
    };


    // const mock_cars = Array.from({ length: 10 }, (x) => x);
    // const ref = React.useRef();

    // const slide = (position) => {
    //     let left = ref.current.scrollLeft;
    //     switch (position) {
    //         case "next":
    //             ref.current.scroll(left + 510, 0);
    //             return;
    //         case "prev":
    //             ref.current.scroll(left - 510, 0);
    //             return;
    //         default:
    //             return;
    //     }
    // };

    const settings = {
        customPaging: function (i) {
            const images = carData.images
            return (
                <a>
                    <Image className={`slideClass${i}`} src={`https://buy.cars45.com/image/${images[i].images}`} layout="fill" />
                </a>
            );
        },
        // afterChange: () =>
        //     this.setState(state => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => getNext(next),
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var slider = React.useRef()
    const getNext = (val) => {
    }
    const next = () => {
        slider.slickNext()
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const getCities = () => {
        setLoading(true);
        getCall(`${endpoints.getCities}`)
            .then(({ data: response }) => setCities(response.data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    };
    const getCityLocations = (city) => {
        setLoading(true);
        getCall(`${endpoints.getCenters(city)}`)
            .then(({ data: response }) => setCityLocations(response.data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    };
    const getslot = (placeId) => {
        setLoading(true);
        getCall(`${endpoints.getSlot(placeId)}`)
            .then(({ data: response }) => {
                let theDates = Object.values(response.data)
                setDates(theDates)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    };
    const getTime = (e) => {
        let count = 0
        let result;
        for (let i in dates) {
            if (dates[i][e.target.value]) {
                result = dates[i][e.target.value]
            }
            count += 1
            if (count === dates.length) {
                setTimes(result)
            }
        }
    }
    const searchMake = async (make) => {
        try {
            setLoading(true);
            let response = await getCall(`${endpoints.getSearch({ make })}`)
            setLoading(false);
            let data = response.data.data
            if (data) {
                data = Object.values(data)
            }
            router.push({ pathname: "/all-cars" }, "/all-cars", {
                carData: data,
            });
        } catch (error) {
            setLoading(false);
            toast.notify('Oops! something went wrong. keep calm and try again.', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    const submit = async (e) => {
        e.preventDefault()
        if (!data.name || !data.email || !data.phone || !data.city || !data.address || !data.date || !data.time) {
            toast.notify('All feilds are required', {
                duration: 5,
                title: "Invalid",
                type: "error",
            });
        } else {
            setLoading(true)

            let datas = { ...data, address: data.address.split('/')[1], booking_date: new Date(`${data.date}T${data.time}`).toISOString(), user: cookie.get('__exponea_etc__'), make: carData.make, model: carData.model, year: carData.year }
            try {
                await postCall(endpoints.reserveCar, datas, {})
                toast.notify('Your information has been received', {
                    duration: 5,
                    title: "Congrats!!",
                    type: "success",
                });
                setData({})
                setLoading(false)
                setTimeout(() => {
                    // router.push('/service')
                    document.getElementById('res').reset()
                    document.getElementById('res1').reset()
                }, 3000);

            } catch (error) {
                setLoading(false)
                toast.notify('Oops! something went wrong. keep calm and try again.', {
                    duration: 5,
                    title: "An error occured",
                    type: "error",
                });
            }
        }
    }
    const refer = async (e) => {
        e.preventDefault()
        if (!data.name || !data.email || !data.phone || !data.city || !data.address || !data.date || !data.time) {
            toast.notify('All feilds are required', {
                duration: 5,
                title: "Invalid",
                type: "error",
            });
        } else {
            setLoading(true)

            let datas = { ...data, address: data.address.split('/')[1], booking_date: new Date(`${data.date}T${data.time}`).toISOString(), user: cookie.get('__exponea_etc__'), make: carData.make, model: carData.model, year: carData.year }
            try {
                await postCall(endpoints.reserveCar, datas, {})
                toast.notify('Your information has been received', {
                    duration: 5,
                    title: "Congrats!!",
                    type: "success",
                });
                setData({})
                setLoading(false)
                setTimeout(() => {
                    // router.push('/service')
                    document.getElementById('res').reset()
                    document.getElementById('res1').reset()
                }, 3000);

            } catch (error) {
                setLoading(false)
                toast.notify('Oops! something went wrong. keep calm and try again.', {
                    duration: 5,
                    title: "An error occured",
                    type: "error",
                });
            }
        }
    }
    const handlePayChange = (e) => {
        setPayData({ ...payData, [e.target.name]: e.target.value })
    }
    const openModal = () => {
        document.getElementById('openPayModal').click()
    }
    const onPaysubmit = (e) => {
        e.preventDefault()
        if (!payData.customerName || !payData.customerEmail || !payData.phone) {
            return toast.notify('All fields are required', {
                duration: 5,
                title: "Invalid",
                type: "error",
            });
        }
        openModal()
    }
    const payOnline = () => {
        const { customerName, customerEmail, phone } = payData
        payWithPaystack({
            email: customerEmail,
            amount: carData.payNow,
            name: customerName,
            phone,
            setIsPaymentSuccessfull
        })
    }
    const payMoneyDown = async () => {
        setLoading(true)
        try {
            let res = await postCall(endpoints.payMoneyDown, { ...payData, sku: carData?.sku, make: carData?.make, model: carData?.model, year: carData?.year, url: window.location.href }, {})
            if (typeof res.data.data !== 'string') {
                setReference(res.data.data.reference)
            }
            toast.notify('Your information has been received', {
                duration: 5,
                title: "Congrats!!",
                type: "success",
            });
            setLoading(false)

        } catch (error) {
            setLoading(false)
            toast.notify('Oops! something went wrong. keep calm and try again.', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }

    const confirmPayment = async () => {
        setLoading(true)
        try {
            let res = await postCall(endpoints.validateCarPayment, { ref: reference, url: window.location.href }, {})
            setLoading(false)
            if (res.data.data.message && res.data.data.message === 'Invalid Payment.') {
                return toast.notify('Can not validate payment', {
                    duration: 5,
                    title: "An error occured",
                    type: "error",
                });
            }
            toast.notify('Payment validated', {
                duration: 5,
                title: "Congrats!!",
                type: "success",
            });

        } catch (error) {
            setLoading(false)
            toast.notify('Can not validate payment', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    return (
        <HomeLayout footer="two" header="two">
            <Head>
                <title>{carData?.make} {carData?.model} {carData?.year}</title>
                <meta name="description" content={`${carData?.make} ${carData?.model} ${carData?.year}`} />
            </Head>
            {loading && <Loading />}
            <button className="d-none" data-target="#popup-modal" data-toggle="modal" id="openPayModal">open</button>
            {carData ? <div className="car-details mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-12 col-lg-6 title-container">
                                <div>
                                </div>

                                <div className="d-flex justify-content-between title">
                                    {/* <p>Home</p>
                                    <p>{carData?.make}</p>
                                    <p>{carData?.year} {carData?.make} {carData?.model}</p> */}

                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item" onClick={() => searchMake(carData?.make)}><span href="/all-cars">{carData?.make}</span></li>
                                            <li className="breadcrumb-item active" aria-current="page">{carData?.year} {carData?.make} {carData?.model}</li>
                                        </ol>
                                    </nav>



                                </div>
                            </div>
                            <div className="car-container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <Slider {...settings} ref={c => (slider = c)}>
                                            {
                                                carData?.images?.map((img, index) => (

                                                    <div key={index}>
                                                        <Image src={`https://buy.cars45.com/image/${img.images}`} height={500} width={646} layout="responsive" />
                                                    </div>
                                                ))
                                            }

                                        </Slider>
                                        <div className="prev-button-container">
                                            <button type="button" data-role="none" className="btn btn-link prev-button" onClick={() => slider.slickPrev()}><img src="/assets/icons/prev.svg" alt="prev" /></button>
                                        </div>
                                        <div className="next-button-container">
                                            <button type="button" data-role="none" className="btn btn-link  next-button" onClick={() => next()}><img src="/assets/icons/next.svg" alt="next" /></button>
                                        </div>

                                    </div>
                                    <div className="col-lg-5 quick-details">
                                        <div className="row quick-details-container mt-3">
                                            <div className="col-5 col-md-5 align-self-center">
                                                <h5>{carData?.year} {carData?.make} {carData?.sku}</h5>
                                            </div>
                                            <div className="col-1 col-md-1 text-right">
                                                <div className="border-right" />
                                            </div>
                                            <div className="col-5 col-md-5 align-self-center">
                                                <h5>₦ {(carData?.price * 1)?.toLocaleString()}</h5>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <p className="simple-details">{carData?.year} {" "} •{carData?.trim} •{carData?.mileage} •₦{(carData?.price * 1)?.toLocaleString()}</p>
                                        </div>
                                        <div className="recent">
                                            <p>{carData.viewed} buyers have viewed this vehicle in the last 24 hours</p>
                                        </div>


                                        <div className="mt-3">

                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="reserve-tab" data-toggle="tab" href="#reserve" role="tab" aria-controls="reserve" aria-selected="true">Reserve this car</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="refer-tab" data-toggle="tab" href="#refer" role="tab" aria-controls="refer" aria-selected="false">Refer a buyer</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="deposit-tab" data-toggle="tab" href="#deposit" role="tab" aria-controls="deposit" aria-selected="false">Pay deposit</a>
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="reserve" role="tabpanel" aria-labelledby="reserve-tab">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="content-container">
                                                            <form onSubmit={(e) => submit(e)} id="res">
                                                                <div className="form-group">
                                                                    <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="name" aria-describedby="name" name="name" placeholder="Your name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="email" onChange={(e) => handleChange(e)} className="form-control" id="email" aria-describedby="email" name="email" placeholder="Your email" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="basic-addon1">+234</span>
                                                                        </div>
                                                                        <input type="text" onChange={(e) => handleChange(e)} name="phone" className="form-control" placeholder="Phone number" aria-label="phone" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                </div>
                                                                {cities.length ? <div className="form-group">
                                                                    <select name="city" className="form-control" onChange={(e) => {
                                                                        handleChange(e)
                                                                        getCityLocations(e.target.value)
                                                                    }}>
                                                                        <option value="">Select City</option>
                                                                        {cities.map((city, index) => (
                                                                            <option key={index} value={city}>{city}</option>
                                                                        ))}
                                                                    </select>
                                                                </div> : null}
                                                                <div className="form-group">
                                                                    {cityLocations.length ? <select name="address" onChange={(e) => {
                                                                        handleChange(e)
                                                                        getslot(e.target.value.split('/')[0])
                                                                    }} className="form-control">
                                                                        <option value="">Select Address</option>
                                                                        {cityLocations.map((loc, index) => (
                                                                            <option option key={index} value={`${loc.id}/${loc.location}`}>{loc.location}</option>
                                                                        ))}
                                                                    </select> : null}
                                                                </div>
                                                                {dates.length ? <div className="form-group">
                                                                    <select name="date" onChange={(e) => {
                                                                        handleChange(e)
                                                                        getTime(e)
                                                                    }} className="form-control">
                                                                        <option value="">Choose Date</option>
                                                                        {dates.map((item, index) => (
                                                                            <option key={index} value={Object.keys(item)}>
                                                                                {Object.keys(item)}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div> : null}
                                                                {times.length ? <div className="form-group">
                                                                    <select name="time" onChange={(e) => handleChange(e)} className="form-control">
                                                                        <option value="">Choose time</option>
                                                                        {times.map((item, index) => (
                                                                            <option key={index} value={item}>
                                                                                {item}
                                                                            </option>))}
                                                                    </select>
                                                                </div> : null}
                                                                {/* <div className="form-group">
                                                                    <input type="text" className="form-control" id="offer" placeholder="Make us an offer" />
                                                                </div> */}

                                                                <button type="submit" className="btn btn-primary btn-block">SPEAK TO OUR AGENT</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                            <div className="tab-pane fade" id="refer" role="tabpanel" aria-labelledby="refer-tab">
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="content-container">
                                                            <form onSubmit={(e) => refer(e)} id="res1">
                                                                <div className="form-group">
                                                                    <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="name" aria-describedby="name" name="name" placeholder="Your name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="email" onChange={(e) => handleChange(e)} className="form-control" id="email" aria-describedby="email" name="email" placeholder="Your email" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="basic-addon1">+234</span>
                                                                        </div>
                                                                        <input type="text" onChange={(e) => handleChange(e)} name="phone" className="form-control" placeholder="Phone number" aria-label="phone" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                </div>
                                                                {cities.length ? <div className="form-group">
                                                                    <select name="city" className="form-control" onChange={(e) => {
                                                                        handleChange(e)
                                                                        getCityLocations(e.target.value)
                                                                    }}>
                                                                        <option value="">Select City</option>
                                                                        {cities.map((city, index) => (
                                                                            <option key={index} value={city}>{city}</option>
                                                                        ))}
                                                                    </select>
                                                                </div> : null}
                                                                <div className="form-group">
                                                                    {cityLocations.length ? <select name="address" onChange={(e) => {
                                                                        handleChange(e)
                                                                        getslot(e.target.value.split('/')[0])
                                                                    }} className="form-control">
                                                                        <option value="">Select Address</option>
                                                                        {cityLocations.map((loc, index) => (
                                                                            <option option key={index} value={`${loc.id}/${loc.location}`}>{loc.location}</option>
                                                                        ))}
                                                                    </select> : null}
                                                                </div>
                                                                {dates.length ? <div className="form-group">
                                                                    <select name="date" onChange={(e) => {
                                                                        handleChange(e)
                                                                        getTime(e)
                                                                    }} className="form-control">
                                                                        <option value="">Choose Date</option>
                                                                        {dates.map((item, index) => (
                                                                            <option key={index} value={Object.keys(item)}>
                                                                                {Object.keys(item)}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div> : null}
                                                                {times.length ? <div className="form-group">
                                                                    <select name="time" onChange={(e) => handleChange(e)} className="form-control">
                                                                        <option value="">Choose time</option>
                                                                        {times.map((item, index) => (
                                                                            <option key={index} value={item}>
                                                                                {item}
                                                                            </option>))}
                                                                    </select>
                                                                </div> : null}
                                                                {/* <div className="form-group">
                                                                    <input type="text" className="form-control" id="offer" placeholder="Make us an offer" />
                                                                </div> */}

                                                                <button type="submit" className="btn btn-primary btn-block">REFER</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">

                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <div className="content-container">
                                                            <form onSubmit={(e) => onPaysubmit(e)}>
                                                                <div className="form-group">
                                                                    <input type="text" onChange={(e) => handlePayChange(e)} className="form-control" id="name" aria-describedby="name" name="customerName" placeholder="Your name" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="email" onChange={(e) => handlePayChange(e)} className="form-control" id="email" aria-describedby="email" name="customerEmail" placeholder="Your email" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="basic-addon1">+234</span>
                                                                        </div>
                                                                        <input type="text" onChange={(e) => handlePayChange(e)} name="phone" className="form-control" placeholder="Phone number" aria-label="phone" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                </div>

                                                                <p>Make a fully refundable <span style={{ color: '#ff9101' }}>deposit of</span> NGN{carData?.payNow.toLocaleString()} to hold this car</p>

                                                                <button type="submit" className="btn btn-primary btn-block">PAY NOW</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="more-details mt-5">
                        <div className="row mt-3">
                            <div className="col-md-12">

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="details-tab" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="true">Car Details</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="features-tab" data-toggle="tab" href="#features" role="tab" aria-controls="features" aria-selected="false">Features</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="inspection-tab" data-toggle="tab" href="#inspection" role="tab" aria-controls="contact" aria-selected="false">Inspection</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade active show" id="details" role="tabpanel" aria-labelledby="details-tab">
                                        <Caroverview car={carData} interestedInCar={window.location.href} />

                                    </div>


                                    <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                                        <div className="mt-3 border-top border-bottom pb-5">
                                            <div className="container pl-0 pl-md-5 pt-0 pt-md-3">
                                                <h5 className="overview">Features</h5>

                                                <Carfeatures car={carData} features={features} />
                                            </div>
                                        </div>
                                    </div>




                                    <div className="tab-pane fade" id="inspection" role="tabpanel" aria-labelledby="inspection-tab">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <Carinspection car={carData} inspection={inspection} />
                                            </div>
                                        </div>



                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="recommended mt-3 pb-5 mb-5">
                        <Recommeneded />

                    </div>


                    {/* Modal */}
                    <div>
                        <div
                            className="modal fade"
                            id="popup-modal"
                            tabIndex={-1}
                            aria-labelledby="popup"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    {/* <div className="modal-header">
                                <h5 className="modal-title" id="popup"><img src="/assets/icons/Cars45logo.svg" alt="logo" /></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div> */}
                                    <div className="modal-body">
                                        <div className="row mt-2">
                                            <div className="col-9 col-md-10 text-center">
                                                <img
                                                    className="logo"
                                                    src="/assets/icons/Cars45logo.svg"
                                                    alt="logo"
                                                />
                                            </div>
                                            <div className="col-2 col-md-2 text-right">
                                                <button data-dismiss="modal" id="closeFeedback" className="btn btn-link">
                                                    <img
                                                        className="close"
                                                        src="/assets/icons/close.svg"
                                                        alt="close"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="row pb-5 pl-2 pl-md-5 pr-2 pr-md-5">
                                            <div className="col-md-12 text-center">
                                                <div className="question">
                                                    <p>Payment details</p>
                                                </div>

                                                <div className="row pt-3 car-info">
                                                    <div className="col-md-6">
                                                        <h4>{carData?.make} {carData?.model} {carData?.year}</h4>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4>NGN {carData?.payNow.toLocaleString()}</h4>
                                                    </div>

                                                    <div className="col-md-6 mt-4">
                                                        <button className="btn btn-success" onClick={() => payMoneyDown()}>Pay Via Bank</button>
                                                    </div>
                                                    <div className="col-md-6 mt-4">
                                                        <button className="btn btn-outline-secondary" onClick={() => payOnline()}>Pay Online</button>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <h6>Please follow the instructions below</h6>
                                                        <div className="text-left">
                                                            <p>Please enter your phone number in the remarks/transaction reference section on your internet banking/mobile banking while transferring the funds.</p>

                                                            <p className="mb-3 orange-color">Bank : Providus</p>
                                                            <p className="mb-3 orange-color">Account Name : C45/C45l-100015</p>
                                                            <p className="mb-3 orange-color">Account Number : 9000010183</p>

                                                            <p>Once the transfer has been completed, click the button below and call our customer care line on +2348096951860 to complete the purchase of your car.</p>
                                                        </div>

                                                        <div>
                                                            <button className="btn btn-success" data-dismiss="modal" onClick={() => confirmPayment()}>Complete Payment</button>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* <h3>It'll take 3 minutes</h3>
                                                
                                                <div>
                                                    <button className="btn btn-success">
                                                        YES, I'LL ANSWER NOW
                                         </button>
                                                </div>
                                                <div>
                                                    <button className="btn btn-success">
                                                        Sure, But When I'm Done
                                          </button>
                                                </div>
                                                <div>
                                                    <button className="btn btn-outline-secondary">
                                                        NO THANKS
                                           </button>
                                                </div> */}
                                            </div>
                                            {/* <div className="car-info">
                                                <div className="row">
                                                    <div className="col"></div>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div > :

                <div className="row">
                    <div className="col-lg-8 offset-md-2">
                        <div className="card no-details">
                            <h4>{message}</h4>
                        </div>
                    </div>
                </div>}
            <ToastContainer align={"right"} position={"bottom"} />

        </HomeLayout>
    )
}



Cardetails.getInitialProps = async ({ query }) => {
    const { id } = query
    return { id }
}

export default Cardetails;