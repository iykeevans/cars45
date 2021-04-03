import React from 'react';



const Dropdown = (props) => {
    React.useEffect(() => {

    })

const data = props.data
const dataDisplay = Math.floor(data.length/6)
console.log(Math.floor( data.length/6))
    return (
        <div className="dropdown-component">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.name} <img src="/assets/icons/caretdown-withbackground@2x.png" alt=".." /></button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="row">
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        data.slice(0,dataDisplay).map((make,i)=>(

                                            <a className="dropdown-item dark-color" href="#">{make}</a>
                                        ))
                                    }
                                    

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                {
                                        data.slice(dataDisplay,(2*dataDisplay)).map((make,i)=>(

                                            <a className="dropdown-item dark-color" href="#">{make}</a>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                {
                                        data.slice((2*dataDisplay),(3*dataDisplay)).map((make,i)=>(

                                            <a className="dropdown-item dark-color" href="#">{make}</a>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                {
                                        data.slice((3*dataDisplay),(4*dataDisplay)).map((make,i)=>(

                                            <a className="dropdown-item dark-color" href="#">{make}</a>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                {
                                        data.slice((4*dataDisplay),(5*dataDisplay)).map((make,i)=>(

                                            <a className="dropdown-item dark-color" href="#">{make}</a>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            {/* <a className="dropdown-item teal-color" href="#">Toyota</a> */}
                            <div className="row">
                                <div className="col-md-12">
                                {
                                        data.slice((5*dataDisplay),(data.length)).map((make,i)=>(

                                            <a className="dropdown-item dark-color" href="#">{make}</a>
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