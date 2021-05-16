import React from 'react';
import Link from "next/link";
import HomeLayout from "../../../../components/layouts/home-layout";
import Loading from "../../../../components/loadingScreen";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useRouter } from "next/router";
import endpoints from '../../../../api/endPoints';
import { getCall } from '../../../../api/request';
import Carlist from '../../../../components/car-list';

const Brandnewtype = (props) => {
    React.useEffect(() => {
        searchModels(props.type)
        getMakes()
    }, [])

    const [loading, setLoading] = React.useState(false);
    const [models, setModels] = React.useState([])
    const [cars, setCars] = React.useState([])
    const [makes, setMakes] = React.useState([]);
    const [data, setData] = React.useState({});
    const [relatedCars, setRelatedCars] = React.useState([]);
    const [searchParams, setSearchParams] = React.useState({})
    const [pagination, setPagination] = React.useState({ currentPage: 1, pages: [], limit: 50, total: 0, paginationLimit: [0, 5], count: 1 })
    const router = useRouter();

    const getMakes = async () => {
        try {
            let response = await getCall(`${endpoints.getMake}`, {})
            setMakes(response.data.data);
        } catch (error) {
            setLoading(false);
        }
    }

    const getModels = async (make) => {
        try {
            let response = await getCall(`${endpoints.getModel(make)}`)
            setModels(response.data.data);
        } catch (error) {
            setLoading(false);
            toast.notify('Can not load models', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    const searchModels = async (type) => {
        try {
            setLoading(true);
            let response = await getCall(`${endpoints.getSearch({ type, condition: 'new', page: 0 })}`)
            setSearchParams({ type, condition: 'new', })
            setLoading(false);
            if (typeof response.data.data === 'string') {
                setCars([])
                return toast.notify('No cars found, try another search', {
                    duration: 5,
                    title: "Not found",
                    type: "error",
                });
            }
            if (response.data.data.currency) delete response.data.data.currency
            if (response.data.data.totalCars[0]) {
                let total = response.data.data.totalCars[0].total
                let pages = Math.ceil(total / pagination.limit)
                let pageNumber = []
                let count = 0
                for (let i = 1; i <= pages; i++) {
                    pageNumber = [...pageNumber, i]
                    count += 1
                    if (count === pages) {
                        setPagination({ ...pagination, currentPage: 1, paginationLimit: [0, 5], count: 1, pages: pageNumber, total: pages })
                    }
                }
            }
            if (response.data.data.totalCars) delete response.data.data.totalCars
            setCars(Object.values(response.data.data));
            setData({ ...data, type })
            getRelatedCars(Object.values(response.data.data))
        } catch (error) {
            setLoading(false);
            toast.notify('Oops! something went wrong. keep calm and try again.', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    const search = async (datafilter) => {
        try {
            setLoading(true);
            let response = await getCall(`${endpoints.getSearch({ ...datafilter, condition: 'new', page: 0 })}`)
            setSearchParams({ ...datafilter, condition: 'new' })
            setLoading(false);
            if (typeof response.data.data === 'string') {
                setCars([])
                return toast.notify('Can not find new cars for this brand', {
                    duration: 5,
                    title: "Not found",
                    type: "error",
                });
            }
            if (response.data.data.currency) delete response.data.data.currency
            if (response.data.data.totalCars[0]) {
                let total = response.data.data.totalCars[0].total
                let pages = Math.ceil(total / pagination.limit)
                let pageNumber = []
                let count = 0
                for (let i = 1; i <= pages; i++) {
                    pageNumber = [...pageNumber, i]
                    count += 1
                    if (count === pages) {
                        setPagination({ ...pagination, currentPage: 1, paginationLimit: [0, 5], count: 1, pages: pageNumber, total: pages })
                    }
                }
            }
            if (response.data.data.totalCars) delete response.data.data.totalCars
            setCars(Object.values(response.data.data));
            getRelatedCars(Object.values(response.data.data))

        } catch (error) {
            setLoading(false);
            toast.notify('Oops! something went wrong. keep calm and try again.', {
                duration: 5,
                title: "An error occured",
                type: "error",
            });
        }
    }
    const next = (page) => {
        let currentPage = page ? page : pagination.currentPage + 1
        let count = pagination.count + 1
        setPagination({ ...pagination, currentPage, paginationLimit: count === 6 ? [pagination.paginationLimit[0] + 5, pagination.paginationLimit[1] + 5] : pagination.paginationLimit, count: count === 6 ? 1 : count })
        setLoading(true);
        getCall(`${endpoints.getSearch({ ...searchParams, page: currentPage - 1 })}`)
            .then((response) => {
                const resData = response.data.data;

                setLoading(false);
                if (response.status === 200) {
                    if (resData === "No cars in our repository fits your filter.") {
                        return toast.notify("No cars in our repository fits your filter.", {
                            duration: 5,
                            title: "Success",
                            type: "warning",
                        });
                    }
                    const resDataArr = Object.values(resData).filter(
                        (item) => item.status
                    );
                    if (resDataArr.length < 1) {
                        return toast.notify(
                            "No Available cars in our repository fits your filter.",
                            {
                                duration: 5,
                                title: "Success",
                                type: "warning",
                            }
                        );
                    }
                    setCars(resDataArr)
                } else {
                    setLoading(false);
                    toast.notify("Oops! something went wrong. keep calm and try again.", {
                        duration: 5,
                        title: "Something when wrong",
                        type: "warning",
                    });
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.notify("No Available cars in our repository fits your filter.", {
                    duration: 5,
                    title: "Success",
                    type: "error",
                });
            });
    }
    const prev = () => {
        if (pagination.currentPage === 2) {
            return search(searchParams)
        }
        let currentPage = pagination.currentPage - 1
        let count = pagination.count - 1
        setPagination({ ...pagination, currentPage, paginationLimit: count === 1 || count === 0 ? [pagination.paginationLimit[0] - 5, pagination.paginationLimit[1] - 5] : pagination.paginationLimit, count: count === 1 || count === 0 ? 5 : count })
        setLoading(true);
        getCall(`${endpoints.getSearch({ ...searchParams, page: currentPage - 1 })}`)
            .then((response) => {
                const resData = response.data.data;

                setLoading(false);
                if (response.status === 200) {
                    if (resData === "No cars in our repository fits your filter.") {
                        return toast.notify("No cars in our repository fits your filter.", {
                            duration: 5,
                            title: "Success",
                            type: "warning",
                        });
                    }
                    const resDataArr = Object.values(resData).filter(
                        (item) => item.status
                    );
                    if (resDataArr.length < 1) {
                        return toast.notify(
                            "No Available cars in our repository fits your filter.",
                            {
                                duration: 5,
                                title: "Success",
                                type: "warning",
                            }
                        );
                    }

                    setCars(resDataArr)
                } else {
                    setLoading(false);
                    toast.notify("Oops! something went wrong. keep calm and try again.", {
                        duration: 5,
                        title: "Something when wrong",
                        type: "warning",
                    });
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.notify("No Available cars in our repository fits your filter.", {
                    duration: 5,
                    title: "Success",
                    type: "error",
                });
            });
    }
    const handleChange = (e) => {
        let dataFilter = {
            ...data,
            [e.target.name]: e.target.value
        }
        if (dataFilter.price) {
            if (dataFilter.price.split('-')[0] * 1 && dataFilter.price.split('-')[1] * 1) {
                dataFilter.minPrice = dataFilter.price.split('-')[0] * 1
                dataFilter.maxPrice = dataFilter.price.split('-')[1] * 1
                delete dataFilter.price
            } else if (dataFilter.price.split('-')[0] * 1 === 0 && dataFilter.price.split('-')[1] * 1) {
                dataFilter.maxPrice = dataFilter.price.split('-')[1] * 1
                delete dataFilter.price
                delete dataFilter.minPrice
            } else if (dataFilter.price.split('-')[0] * 1 && dataFilter.price.split('-')[1] * 1 === 0) {
                dataFilter.minPrice = dataFilter.price.split('-')[0] * 1
                delete dataFilter.price
                delete dataFilter.maxPrice
            }
        }
        search(dataFilter)
        setData(dataFilter)
    }

    const getRelatedCars = async (theCars) => {
        try {
            let length = theCars.length
            let randomNumber = () => {
                return Math.floor(
                    Math.random() * (length - 0 + 1) + 0
                )
            }
            let index = randomNumber()
            setLoading(true);
            let response = await getCall(`${endpoints.getRelatedCars(theCars[index].sku, theCars[index].make, theCars[index].year)}`)
            setLoading(false);
            if (typeof response.data.data !== 'string') {
                if (response.data.data.currency) delete response.data.data.currency
                if (response.data.data.totalCars) delete response.data.data.totalCars
                setRelatedCars(Object.values(response.data.data));
            }

        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <HomeLayout>
            {loading && <Loading />}
            <div className="brand-new-brand">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 border-bottom heading ">
                            <h5>New Models: Make A Selection</h5>
                        </div>

                        <div className="col-md-12 filters">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Filters</label>
                                    {makes.length ? <div className="col-sm-2">
                                        <select className="form-control" onChange={(e) => getModels(e.target.value)}>
                                            <option value="">Select make</option>
                                            {makes.map((make, index) => (
                                                <option key={index} value={make}>{make}</option>
                                            ))}
                                        </select>
                                    </div> : null}
                                    {models && <div className="col-sm-2">
                                        <select className="form-control" name="model" onChange={(e) => handleChange(e)}>
                                            <option value="">All Vehicle Types</option>
                                            {models.map((model, index) => (
                                                <option key={index} value={model}>{model}</option>
                                            ))}
                                        </select>
                                    </div>}
                                    <div className="col-sm-2">
                                        <select className="form-control" name="price" onChange={(e) => handleChange(e)}>
                                            <option value="">All Price Ranges</option>
                                            <option value="0-1000000">0 - ₦1m</option>
                                            <option value="1000000-2000000">₦1m - ₦2m</option>
                                            <option value="2000000-4000000">₦2m - ₦4m</option>
                                            <option value="4000000-6000000">₦4m - ₦6m</option>
                                            <option value="6000000-10000000">₦6m - ₦10m</option>
                                            <option value="10000000-0">₦10m - Above</option>
                                        </select>
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className="border-bottom" />


                    </div>

                    {cars.length ? <div className="list">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="row">
                                    {cars.map((car, index) => (
                                        <div className="col-md-6 col-lg-6 col-xl-3 mb-5" style={{ cursor: 'pointer' }}>
                                            <div key={index} className="col-12 col-md-6 mb-md-3 mb-lg-0" key={index}>
                                                <Link href="/brandnew/toyota/details">
                                                    <Carlist {...props} car={car} />
                                                </Link>
                                            </div>
                                        </div>))}

                                    {/* <div className="col-md-4 mb-5">
                                        <Link href="/brandnew/toyota/details">
                                            <div className="list-container text-center">
                                                <p className="name">86</p>
                                                <img src="https://storage.googleapis.com/cars45-web-bucket/Toyota-86.svg" alt="86" />
                                                <p className="price"><span>From</span> ₦ 15,000,000</p>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Avalon</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/avalon.svg" alt="4-runner" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Camry</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/camry.svg" alt="Camry" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Corolla</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/corolla.svg" alt="Corolla" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Highlander</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/highlander.svg" alt="Highlander" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Land Cruiser</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/landcruiser.svg" alt="Land Cruiser" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Mirai</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/mirai.svg" alt="Mirai" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Prius</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/prius.svg" alt="Prius" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Rav 4</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/rav4.svg" alt="Rav4" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Sequoia</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/sequoia.svg" alt="Sequoia" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Sienna</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/sienna.svg" alt="sienna" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>


                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Tacoma</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/tacoma.svg" alt="tacoma" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Tundra</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/tundra.svg" alt="tundra" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-5">
                                        <div className="list-container text-center">
                                            <p className="name">Venza</p>
                                            <img src="https://storage.googleapis.com/cars45-web-bucket/venza.svg" alt="Venza" />
                                            <p className="price"><span>From</span> ₦ 15,000,000</p>
                                        </div>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                        {pagination.pages.length ? <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center mt-5">
                                <li className={pagination.currentPage === 1 ? "page-item disabled" : "page-item"}>
                                    <a className="page-link" onClick={() => prev()} tabIndex={-1} aria-disabled="true">Previous</a>
                                </li>
                                {pagination.pages.slice(pagination.paginationLimit[0], pagination.paginationLimit[1]).map(page => (
                                    <li key={page} className={page === pagination.currentPage ? "page-item active" : "page-item"}><button className="page-link btn btn-link" href="#" key={page}>{page}</button></li>
                                ))}
                                {pagination.currentPage !== pagination.total ? <li className="page-item"><button className="page-link btn btn-link" href="#">...</button></li> : null}

                                <li className={pagination.currentPage >= pagination.total ? "page-item disabled" : "page-item"}>
                                    <a className={"page-link"} onClick={() => next()}>Next</a>
                                </li>
                            </ul>
                        </nav> : null}
                    </div> :
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card no-details">
                                    <h4>{loading ? 'Loading...' : 'No cars found, try another search'}</h4>
                                </div>
                            </div>
                        </div>}


                    {relatedCars.length ? <div className="related">
                        <p className="related-head">RELATED VEHICLES</p>
                        <div className="row">
                            {relatedCars.map((car, index) => (
                                <div className="col-md-4" key={index}>
                                    <ul>
                                        <li>
                                            <Link href={{ pathname: `/buy/car/${car?.make}_${car?.sku}` }}><a>{car.make} {car.model}</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            ))}


                            {/* <div className="col-md-4">
                                <ul>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                </ul>
                            </div> */}

                            {/* <div className="col-md-4">
                                <ul>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/"><a>Toyota 4runner</a></Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div> : null}
                </div>
            </div>
            <ToastContainer align={"right"} position={"bottom"} />
        </HomeLayout>
    )
}

Brandnewtype.getInitialProps = async ({ query }) => {
    const { type } = query
    return { type }
}


export default Brandnewtype;
