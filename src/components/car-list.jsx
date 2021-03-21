import React from 'react';
import { useRouter } from 'next/router'



const Carlist = (props) => {
    React.useEffect(() => {

    })
    const router = useRouter()
    return (
        <div className="listing">
            <div className="card" onClick={() => router.push('/buy/car/2')}>
                <img src="/assets/images/carlistimg-demo@2x.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row border-bottom">
                        <div className="col-md-8">
                            <p>2010 Honda Accord Crosstour</p>
                        </div>
                        <div className="col-md-4 text-right">
                            <img className="inspection-badge" src="/assets/icons/badge-b.svg" alt="B" />
                        </div>
                    </div>

                    <div className="row condition text-center">
                        <div className="col-md-5 text-center pr-0">
                            <div className="nigeria">
                                <p>Nigerian Used</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="vertical-line" />
                        </div>
                        <div className="col-md-5 text-center pl-0">
                            <div className="foreign">
                                <p>Foreign Used</p>
                            </div>
                            {/* <div className="direct">
                                                <p>Car45-Direct</p>
                                            </div> */}
                            {/* <div className="market">
                                                <p>Car-45 Marketplace</p>
                                            </div> */}
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-12">
                            <p className="price">₦ 2,720,000</p>
                            <p className="mile"><small>Mileage: </small>136,222km</p>
                            <p className="year"><small>Year: </small>2010</p>
                            <p className="id"><small>Car ID </small>NG-693081</p>
                        </div>

                    </div>
                    <img src="/assets/icons/car-badge.svg" className="car-badge" alt="car-badge" />
                </div>
            </div>
        </div >
    )
}

export default Carlist