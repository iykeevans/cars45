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
                                        <div className="col-7 text-right">
                                            <p>₦2m - ₦5m</p>
                                        </div>
                                        <div className="col-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-7 text-right">
                                            <p>₦5m - ₦10m</p>
                                        </div>
                                        <div className="col-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-7 text-right">
                                            <p>₦10m - ₦15m</p>
                                        </div>
                                        <div className="col-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-7 text-right">
                                            <p>₦15m - ₦30m</p>
                                        </div>
                                        <div className="col-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-7 text-right">
                                            <p>₦30m - ₦50m</p>
                                        </div>
                                        <div className="col-5 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category">
                                    <div className="row">
                                        <div className="col-8 col-md-8 text-right">
                                            <p>₦50m and above</p>
                                        </div>
                                        <div className="col-4 col-md-4 text-right">
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
