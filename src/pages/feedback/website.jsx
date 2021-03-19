import React from 'react';
import Select from 'react-select';

const WebsiteFeedback = () => {

    const [selectedOption, setSelectedOption] = React.useState(null)

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
                            <p>We're always looking for ways to improve our site and make it even more
                            enjoyable and user-friendly.</p>

                        </div>
                        <div className="col-md-12">
                            <div className="border-bottom">
                                <p className="p-text">We appreciate your feedback!</p>
                            </div>
                        </div>

                        <div className="info pl-3">
                            <form>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label className="mb-3">What would you like to provide feedback about?</label>
                                                <Select
                                                    value={selectedOption}
                                                    onChange={handleChange}
                                                    options={options}
                                                />
                                                {/* <select className="form-control" id="exampleFormControlSelect1">
                                                    <option value="">Select an option</option>
                                                    <option value="Site design/navigation">Site design/navigation</option>
                                                    <option value="Site errors/bug">Site errors/bug</option>
                                                    <option value="Site performance/speed">Site performance/speed</option>
                                                    <option value="General complaint">General complaint</option>
                                                    <option value="General compliment">General compliment</option>
                                                </select> */}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="feedback" className="mb-4 mt-4">Please enter your feedback below:</label>
                                            <textarea type="text" className="form-control" rows="10" id="feedback" />
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

export default WebsiteFeedback;