import React from 'react';
import Select from 'react-select';

const CenterFeedback = () => {

    const [selectedOption, setSelectedOption] = React.useState(null)
    const [experience, setExperience] = React.useState([{ exp: 'Completely satisfied', selected: false }, { exp: 'Mostly satisfied', selected: false }, { exp: 'Moderately satisfied', selected: false }, { exp: 'Slightly satisfied', selected: false }, { exp: 'Not at all satisfied', selected: false }])
    const options = [
        { value: 'Site design/navigation', label: 'Site design/navigation' },
        { value: 'Site performance/speed', label: 'Site performance/speed' },
        { value: 'General complaint', label: 'General complaint' },
        { value: 'General compliment', label: 'General compliment' }
    ]

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };
    return (
        <div className="website-feedback" style={{ backgroundColor: "#C7C5C5" }}>
            <div className="container" style={{ backgroundColor: "#ffffff", paddingLeft: '200px', paddingRight: '200px', paddingTop: '100px', paddingBottom: '30px' }}>
                <div className="row">
                    <div className="col-md-12" >
                        <div className="text-center mb-5">
                            <img className="logo-img" src="/assets/icons/Cars45logo.svg" alt="logo" />
                        </div>

                        <div className="col-md-10 p-text">
                            <p>We appreciate your feedback! Your opinions will help us provide you and other customers the best customer experience.</p>
                            <div className="border-bottom" />
                        </div>



                        <div className="info pl-3">
                            <form>
                                <div className="row">
                                    <div className="col-md-10">
                                        <p className="p-text mb-4">For which Cars45 location are you providing feedback?</p>
                                        <div className="form-group row">
                                            <label className="mb-3 col-md-2 col-form-label">Location</label>
                                            <div className="col-md-10">
                                                <Select
                                                    value={selectedOption}
                                                    onChange={handleChange}
                                                    options={options}
                                                    placeholder="Select location"
                                                />
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p className="p-text mt-4 mb-5">Overall, how satisfied were you with your experience at that Cars45 location?</p>
                                            </div>
                                            {experience.map((exp, index) => (
                                                <div className="col mb-5" key={index}>
                                                    <button className="btn btn-outline-secondary">{exp.exp}</button>
                                                </div>
                                            ))}

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="feedback" className="mb-4 mt-4">Please enter your feedback below:</label>
                                            <textarea type="text" name="feedback" className="form-control" rows="10" id="feedback" />
                                        </div>
                                    </div>
                                </div>


                                <div className="border-bottom mt-4" />


                                <div>
                                    <div className="form-group row">
                                        <label className="col-sm-12 col-form-label mt-4 mb-3">Please provide your contact information (Optional):</label>
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" name="name" id="name" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="phone" className="col-sm-3 col-form-label">Phone Number</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" name="phone" id="phone" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-sm-3 col-form-label">Email Address</label>
                                        <div className="col-sm-4">
                                            <input type="email" className="form-control" name="email" id="email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <button className="btn btn-link"><img src="/assets/icons/forward.svg" alt="forward" /></button>
                                </div>

                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterFeedback;