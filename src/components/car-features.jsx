import React from 'react';



const Carfeatures = (props) => {
    React.useEffect(() => {

    })


    return (
        <div className="car-overview">
            {props.features && Object.keys(props.features).length ? <div className="row">
                <div className="col-md-9 feature-list">
                    {Object.keys(props.features).map((key, index) => (
                        <div className="row" key={index}>
                            <div className="col-6">
                                <p>{key}</p>
                            </div>
                            <div className="col-6 text-left">
                                <p>{props.features[key]}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div> : null}
        </div>
    )
}

export default Carfeatures;