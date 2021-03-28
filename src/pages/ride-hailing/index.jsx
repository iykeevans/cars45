import React from 'react';
// import '../../asset/scss/ride-hailing.scss';
import Chat from "../../components/chat";
import Feedbackbutton from '../../components/feedback-button';
import Inputs from '../../components/forms';
import HomeLayout from "../../components/layouts/home-layout"
import { toast, ToastContainer } from 'react-nextjs-toast'

const Ridehailing = (props) => {
    React.useEffect(() => {
    });

    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedModel, setSelectedModel] = React.useState(null);
    const [selectedCenter, setSelectedCenter] = React.useState(null);
    const [options, setOptions] = React.useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]);
    const [models, setModel] = React.useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]);
    const [centers, setCenters] = React.useState([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]);
    const [data, setData] = React.useState({ loading: false, name: '', email: '', phone: '', make: '', model: '', trim: '', year: '', city: '', placeId: '', date: '', time: '' })
    const [formError, setFormError] = React.useState({})

    const handleChange = (selectedOption, name) => {
        if (!selectedOption[name]) {
            setFormError({ ...formError, [name]: 'Please select an option' })
        } else {
            delete formError[name]
        }
        setData({ ...data, ...selectedOption })
    };
    const getValues = (e) => {
        if (!e.target.value) {
            setFormError({ ...formError, [e.target.name]: 'This field is required' })
        } else {
            delete formError[e.target.name]
        }
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const validateForm = () => {
        return new Promise((resolve, reject) => {
            let dataKeys = Object.keys(data)
            let error;
            let count = 0
            for (let i in dataKeys) {
                if (dataKeys[i] !== 'loading' && !data[dataKeys[i]]) {
                    error = { ...error, [dataKeys[i]]: 'This field is required' }
                }
                count += 1
                if (count === dataKeys.length) {
                    if (error) {
                        setFormError({ ...formError, ...error })
                        reject({ message: 'Fill required field', statusCode: 400 })
                    } else {
                        resolve()
                    }
                }
            }

        })


    }
    const submitInspectionForm = async () => {
        try {
            await validateForm()
            console.log('working now')

        } catch (error) {
            console.log(error)
            if (error.statusCode && error.statusCode === 400) {
                toast.notify(error.message, {
                    duration: 5,
                    title: 'Validation error',
                    type: "error"
                })
            }
        }

    }

    return (
        <HomeLayout >
            <div className="ride-hailing" >
                <div className="jumbotron">
                    <Feedbackbutton {...props} />
                </div>

                <div className="get-inspected">
                    <div className="container">
                        <Chat />

                        <div className="row">
                            {/* <div className="col-md-12"> */}
                            <div className="col-md-4 inspect-img d-none d-lg-block">
                                <img src="/assets/images/inspection.png" alt="inspect" alt="inspect" />
                            </div>
                            <div className="col-lg-8">
                                <h2 className="inspect-header text-center">Get your car inspected</h2>
                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 inspect-info-img">
                                        <img className="book" src="/assets/icons/book.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>Book an inspection right here or walk into any of our centers</p>
                                    </div>
                                </div>

                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 align-self-center inspect-info-img">
                                        <img src="/assets/icons/money.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>Make a deposit of ₦2,000 at your inspection center of choice.</p>
                                    </div>
                                </div>

                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 inspect-info-img">
                                        <img src="/assets/icons/inspect-done.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>The inspection is carried out in less than 30 minutes.</p>
                                    </div>
                                </div>

                                <div className="row ml-4 mb-4">
                                    <div className="col-md-2 inspect-info-img">
                                        <img className="report" src="/assets/icons/inspection-report.svg" alt="book" />
                                    </div>
                                    <div className="col-md-6 details align-self-center">
                                        <p>Receive your inspection result within 30 minutes later!</p>
                                    </div>
                                </div>

                                <button className="btn btn-secondary orange-button mt-5 mb-5" data-toggle="modal" data-target="#popup-modal">Book An Inspection</button>
                            </div>
                            {/* </div> */}

                            <div className="col-md-12 other-info text-center">
                                <p>We’ve partnered with these companies to ensure that the quality of their cars comply with prescribed standards</p>
                            </div>


                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="bottom-div">
                            <img src="/assets/icons/security.svg" alt="security" />
                            <p>Cars45 is commited to keeping your information safe</p>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div>
                    <div className="modal fade" id="popup-modal" tabIndex={-1} aria-labelledby="popup" aria-hidden="true">
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
                                            <img className="logo" src="/assets/icons/Cars45logo.svg" alt="logo" />
                                        </div>
                                        <div className="col-2 col-md-2 text-right">
                                            <button className="btn btn-link">
                                                <img className="close" data-dismiss="modal" src="/assets/icons/close.svg" alt="close" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="row pb-5 pl-2 pl-md-5 pr-2 pr-md-5">
                                        <div className="col-md-12 text-center">
                                            <div className="question">
                                                <p>Schedule Your Car Inspection</p>
                                            </div>



                                            {/* <h3>It'll take 3 minutes</h3>
                                            <div>
                                                <button className="btn btn-success">YES, I'LL ANSWER NOW</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success">Sure, But When I'm Done</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-outline-secondary">NO THANKS</button>

                                            </div> */}
                                        </div>
                                        <div className="col-md-12">
                                            <form noValidate>

                                                <Inputs name={"name"} type={"text"} placeholder={'Enter your name'} label={'Name'} getValues={getValues} errorMessage={formError['name']} required={true} />


                                                <Inputs name={"email"} type={"email"} placeholder={'Enter your email'} label={'Email'} getValues={getValues} errorMessage={formError['email']} required={true} />


                                                <Inputs name={"phone"} type={"text"} placeholder={'Enter your phone number'} label={'Phone number'} getValues={getValues} errorMessage={formError['phone']} required={true} />


                                                <Inputs name={"make"} type="select" label={'Select Brand'} errorMessage={formError['make']} options={options} handleChange={handleChange} />



                                                <Inputs name={"model"} type="select" label={'Select Model'} errorMessage={formError['model']} options={models} handleChange={handleChange} />



                                                <Inputs name={"trim"} type="select" label={'Gear type'} errorMessage={formError['trim']} options={options} handleChange={handleChange} />


                                                <Inputs name={"year"} type="select" label={'Year'} errorMessage={formError['year']} options={options} handleChange={handleChange} />


                                                <Inputs name={"city"} type="select" label={'City'} errorMessage={formError['city']} options={options} handleChange={handleChange} />

                                                <Inputs name={"placeId"} type="select" label={'Select an inspection center'} errorMessage={formError['placeId']} options={centers} handleChange={handleChange} />


                                                <Inputs name={"date"} type="select" label={'Select date'} errorMessage={formError['date']} options={options} handleChange={handleChange} />


                                                <Inputs name={"time"} type="select" label={'Select time'} errorMessage={formError['time']} options={options} handleChange={handleChange} />


                                                <div>
                                                    <Inputs type="button" title={'Book Inspection'} formError={formError} submit={submitInspectionForm} incomingData={data} />
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer align={"right"} position={"bottom"} />
            </div>
        </HomeLayout>
    )
}

export default Ridehailing;
