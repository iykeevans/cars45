import React from 'react';


const Carinspection = (props) => {
    React.useEffect(() => {

    })
    return (

        <div className="car-overview">
            <div className="row mr-0">
                <div className="col-md-3 pr-0 inspection-menu">
                    <ul>
                        <li>
                            <button className="btn btn-outline-secondary active btn-block">Interior</button>
                        </li>
                        <li>
                            <button className="btn btn-outline-secondary btn-block">Exterior</button>
                        </li>
                        <li>
                            <button className="btn btn-outline-secondary btn-block">Transmission</button>
                        </li>
                        <li>
                            <button className="btn btn-outline-secondary btn-block">Engine</button>
                        </li>
                        <li>
                            <button className="btn btn-outline-secondary btn-block">AC & Electrical</button>
                        </li>
                        <li>
                            <button className="btn btn-outline-secondary btn-block">Steering & Brake</button>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9 inspection-details">
                    <div className="row">
                        <div className="col-md-1 align-self-center">
                            <img src="/assets/icons/check.svg" alt="check" />
                        </div>
                        <div className="col-md-11 align-self-center">
                            <p>No damage to the roof upholstery except regular use wear and tear</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 align-self-center">
                            <img src="/assets/icons/check.svg" alt="check" />
                        </div>
                        <div className="col-md-11">
                            <p>No damage to the seat upholstery except regular use wear and tear</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 align-self-center">
                            <img src="/assets/icons/check.svg" alt="check" />
                        </div>
                        <div className="col-md-11">
                            <p>No damage to the dashboard fittings except regular use wear and tear</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 align-self-center">
                            <img src="/assets/icons/check.svg" alt="check" />
                        </div>
                        <div className="col-md-11">
                            <p>All door fittings and trims available with no damages</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 align-self-center">
                            <img src="/assets/icons/no-check.svg" alt="check" />
                        </div>
                        <div className="col-md-11">
                            <p>Steering Wheel Controls not in working condition</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Carinspection;