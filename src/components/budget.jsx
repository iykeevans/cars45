import React from 'react'
import InputRange from 'react-input-range';
import endpoints from "../api/endPoints";
import { getCall, postCall } from "../api/request";
import { toast, ToastContainer } from "react-nextjs-toast";
import Loading from "./loadingScreen";
import { useRouter } from "next/router";


const Budget = () => {
    const [value, setValue] = React.useState({ min: 1000000, max: 10000000 })
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()

    const getBudget = (min, max) => {
        let data = {}
        if (min && max === 0) {
            data.minPrice = min
        } else {
            data.minPrice = min
            data.maxPrice = max
        }
        search(data)
    }

    const submit = (e) => {
        e.preventDefault()
        let data = { minPrice: value.min, maxPrice: value.max }
        search(data)
    }
    const search = (searchParams) => {
        if (searchParams?.make === 'Make') delete searchParams.make
        setLoading(true)
        getCall(`${endpoints.getSearch(searchParams)}`)
            .then((response) => {
                const data = response.data;
                setLoading(false);
                if (response.status === 200) {
                    if (typeof response.data.data === 'string') {
                        toast.notify('No car matched your search criteria', {
                            duration: 5,
                            title: "Not found",
                            type: "error",
                        });
                    } else {
                        if (response.data.data.currency) delete response.data.data.currency
                        router.push(
                            { pathname: '/all-cars' },
                            '/all-cars',
                            { carData: Object.values(response.data.data) }
                        );
                    }
                } else {
                    toast.notify('Oops! something went wrong. keep calm and try again.', {
                        duration: 5,
                        title: "An error occured",
                        type: "error",
                    });
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.notify('Oops! something went wrong. keep calm and try again.', {
                    duration: 5,
                    title: "An error occured",
                    type: "error",
                });
            });
    }
    return (
        <div>
            <div className="budget">
                {loading && <Loading />}
                <h1 className="text-center">What's Your Budget</h1>
                <div className="container">
                    <div className="budget-container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="budget-category" onClick={() => getBudget(2000000, 5000000)}>
                                    <div className="row">
                                        <div className="col-8 text-right">
                                            <p>₦2m - ₦5m</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category" onClick={() => getBudget(5000000, 10000000)}>
                                    <div className="row">
                                        <div className="col-8 text-right">
                                            <p>₦5m - ₦10m</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category" onClick={() => getBudget(10000000, 15000000)}>
                                    <div className="row">
                                        <div className="col-8 text-right">
                                            <p>₦10m - ₦15m</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category" onClick={() => getBudget(15000000, 30000000)}>
                                    <div className="row">
                                        <div className="col-8 text-right">
                                            <p>₦15m - ₦30m</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category" onClick={() => getBudget(30000000, 50000000)}>
                                    <div className="row">
                                        <div className="col-8 text-right">
                                            <p>₦30m - ₦50m</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <img src="/assets/icons/budget-arrow.svg" alt="continue" />
                                        </div>
                                    </div>
                                </div>

                                <div className="budget-category" onClick={() => getBudget(50000000, 0)}>
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
                                minValue={1000000}
                                value={value}
                                step={1000000}
                                type="button"
                                onChange={value => setValue({ ...value })} />

                        </div>


                        <div className="col-md-6 offset-md-3 mt-4">
                            <form className="form-inline" onSubmit={(e) => submit(e)}>
                                <div className="form-group mr-3 mb-2">
                                    <input type="number" onBlur={(e) => search({ minPrice: 0, maxPrice: e.target.value })} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2 teal-background">FIND MY CAR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer align={"right"} position={"bottom"} />
        </div>
    )
}

export default Budget;
