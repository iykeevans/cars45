import React from 'react';



const Dropdown = (props) => {
    React.useEffect(() => {

    })

    const data = props.data
    const dataDisplay = Math.floor(data.length / 6)
    const getSelectedMake = (make) => {
        props.getSelectedMake(make)
    }
    return (
        <div className="dropdown-component">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.name} <img src="https://storage.googleapis.com/cars45-web-bucket/caretdown-withbackground@2x.png" alt=".." /></button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="row">
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice(0, dataDisplay).map((make, i) => (

                                            <button key={i} className="dropdown-item dark-color btn btn-link" onClick={() => getSelectedMake(make)}>{make}</button>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" >Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice(dataDisplay, (2 * dataDisplay)).map((make, i) => (

                                            <button key={i} className="dropdown-item dark-color btn btn-link" onClick={() => getSelectedMake(make)}>{make}</button>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <button className="dropdown-item teal-color" >Toyota</button> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice((2 * dataDisplay), (3 * dataDisplay)).map((make, i) => (

                                            <button key={i} className="dropdown-item dark-color btn btn-link" onClick={() => getSelectedMake(make)}>{make}</button>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" >Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice((3 * dataDisplay), (4 * dataDisplay)).map((make, i) => (

                                            <button key={i} className="dropdown-item dark-color btn btn-link" onClick={() => getSelectedMake(make)}>{make}</button>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" >Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice((4 * dataDisplay), (5 * dataDisplay)).map((make, i) => (

                                            <button key={i} className="dropdown-item dark-color btn btn-link" onClick={() => getSelectedMake(make)}>{make}</button>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" >Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice((5 * dataDisplay), (data.length)).map((make, i) => (

                                            <button key={i} className="dropdown-item dark-color btn btn-link" onClick={() => getSelectedMake(make)}>{make}</button>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown