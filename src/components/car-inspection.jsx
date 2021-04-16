import React from 'react';


const Carinspection = (props) => {
    React.useEffect(() => {
        getData()
    }, [])

    let [data, setData] = React.useState()
    let [title, setTitle] = React.useState([])
    let [singleData, setSingleData] = React.useState()

    const getData = () => {
        let keys = Object.keys(props.inspection)
        let keyys = []
        let count = 0
        if (keys.length) {
            keys.map((k, index) => {
                if (index == 0) {
                    keyys = [...keyys, k + '/active']
                    setSingleData(props.inspection[k])
                    console.log(props.inspection[k])
                } else {
                    keyys = [...keyys, k + '/notActive']
                }
                count += 1
                if (count === keys.length) {
                    setTitle(keyys)

                }
            })
        }
        setData(props.inspection)
    }
    const select = (id) => {
        let count = 0
        let keyys = []
        title.map(ti => {
            if (ti == id) {
                keyys = []
                keyys = [ti.split('/')[0] + '/active', ...keyys,]
                setSingleData(data[ti.split('/')[0]])
                console.log(data[ti.split('/')[0]])
            } else {
                keyys = [ti.split('/')[0] + '/notActive', ...keyys,]
            }
            count += 1
            if (count === title.length) {
                setTitle(keyys)
            }
        })

    }
    return (

        <div className="car-overview">
            {data && Object.keys(data).length && <div className="row mr-0">
                <div className="col-md-3 pr-0 inspection-menu">
                    {title.length ? <ul>
                        {title.map((key, index) => (
                            <li key={index}>
                                <button onClick={() => select(key)} className={key.split('/')[1] === 'active' ? "btn btn-outline-secondary active btn-block" : "btn btn-outline-secondary btn-block"}>{key.split('/')[0]}</button>
                            </li>
                        ))}
                        {/* <li>
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
                        </li> */}
                    </ul> : null}
                </div>
                <div className="col-md-9 inspection-details">
                    <div className="row">
                        <div className="col-md-1 align-self-center">
                            <img src="/assets/icons/check.svg" alt="check" />
                        </div>
                        {console.log(singleData)}
                        <div className="col-md-11 align-self-center">
                            <p>{typeof singleData === 'string' ? singleData : null}</p>
                        </div>
                    </div>

                    {/* <div className="row">
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
                    </div> */}

                </div>
            </div>}
        </div>

    )
}

export default Carinspection;