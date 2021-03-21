import React from 'react'
import InputRange from 'react-input-range';



const Budget = () => {
    const [value, setValue] = React.useState({ min: 0, max: 0 })


    return (
        <div>
            <div className="budget">
                <h1 className="text-center">What's Your Budget</h1>
                <div className="container">
                    <div className="budget-container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>Under ₦500k</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>500k - ₦1m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>₦1m - ₦2m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>₦2m - ₦5m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-md-7 text-right">
                                            <p>Above ₦5m</p>
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10 offset-md-1 text-center info">
                            <h4>If you tell us your budget, we can help you find the right car</h4>
                            <p>Move the slider to set a budget range then click “Find My Car” to see great offers within you budget.You can also manually enter an amount.</p>
                        </div>


                        <div className="col-md-6 offset-md-3 mt-5">
                            <InputRange
                                maxValue={10000000}
                                minValue={0}
                                value={value}
                                step={50000}
                                onChange={value => setValue({ ...value })} />
                        </div>


                        <div className="col-md-6 offset-md-3 mt-4">
                            <form className="form-inline">
                                <div className="form-group mr-3 mb-2">
                                    <input type="text" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 teal-background">FIND MY CAR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;
