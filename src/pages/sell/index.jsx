import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Chat from "../../components/chat";
import Security from "../../components/security";
import HomeLayout from "../../components/layouts/home-layout";
import Loading from "../../components/loadingScreen";
import { getCall, postCall } from "../../api/request";
import endpoints from "../../api/endPoints";
import { toast, ToastContainer } from "react-nextjs-toast";
import cookie from "js-cookie";

const Sell_car = (props) => {
  useEffect(() => {
    getMakes()
    getCities()
  }, [])
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [cityLocations, setCityLocations] = useState([]);
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const getMakes = () => {
    getCall(`${endpoints.getMake}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        setMakes(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.notify('Oops! can not load makes at the moment', {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
  const getModels = (make) => {
    setLoading(true);
    getCall(`${endpoints.getModel(make)}`)
      .then((response) => {
        setLoading(false);
        setModels(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.notify('Oops! can not get models at the moment', {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
  const getYear = (make, model) => {
    setLoading(true);
    getCall(`${endpoints.getYear(make, model)}`)
      .then((response) => {
        setLoading(false);
        setYears(response.data.data);

      })
      .catch((error) => {
        setshowError(true);
        setLoading(false);
        toast.notify('Oops! can not get year at the moment', {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      });
  };
  const getCities = () => {
    setLoading(true);
    getCall(`${endpoints.getCities}`)
      .then(({ data: response }) => setCities(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };
  const getCityLocations = (city) => {
    setLoading(true);
    getCall(`${endpoints.getCenters(city)}`)
      .then(({ data: response }) => setCityLocations(response.data))
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };
  const getslot = (placeId) => {
    setLoading(true);
    getCall(`${endpoints.getSlot(placeId)}`)
      .then(({ data: response }) => {
        let theDates = Object.values(response.data)
        setDates(theDates)
      })
      .catch((error) => //console.log(error))
      .finally(() => setLoading(false));
  };
  const getTime = (e) => {
    let count = 0
    let result;
    for (let i in dates) {
      if (dates[i][e.target.value]) {
        result = dates[i][e.target.value]
      }
      count += 1
      if (count === dates.length) {
        setTimes(result)
      }
    }
  }
  const submit = async (e) => {
    e.preventDefault()
    if (!data.name || !data.email || !data.phone || !data.city || !data.address || !data.date || !data.time) {
      toast.notify('All feilds are required', {
        duration: 5,
        title: "Invalid",
        type: "error",
      });
    } else {
      setLoading(true)

      let datas = { ...data, address: data.address.split('/')[1], booking_date: new Date(`${data.date}T${data.time}`).toISOString(), user: cookie.get('__exponea_etc__') }
      try {
        await postCall(endpoints.preorder, datas, {})
        toast.notify('Your information has been received', {
          duration: 5,
          title: "Congrats!!",
          type: "success",
        });
        setData({})
        setLoading(false)
        setTimeout(() => {
          // router.push('/service')
          document.getElementById('res1').reset()
        }, 3000);

      } catch (error) {
        setLoading(false)
        toast.notify('Oops! something went wrong. keep calm and try again.', {
          duration: 5,
          title: "An error occured",
          type: "error",
        });
      }
    }
  }
  return (
    <HomeLayout >
      <div className="sell-car">
        <Head>
          <title>Sell your car</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Sell your car" />
        </Head>
        {loading && <Loading />}
        <div className="hero ">
        </div>
        <div className="text-area container pb-5  ">
          <div className="heading mb-5  mt-5 mt-lg-0 mt-xl-5 text-center">
            Sell your car without stress
        </div>
          <form className=" col-lg-7 d-flex flex-column" id="res1" onSubmit={(e) => submit(e)}>
            <div className="form-group">
              <input type="text" onChange={(e) => handleChange(e)} className="form-control" id="name" aria-describedby="name" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <input type="email" onChange={(e) => handleChange(e)} className="form-control" id="email" aria-describedby="email" name="email" placeholder="Your email" />
            </div>
            <div className="form-group">

              <input type="text" onChange={(e) => handleChange(e)} name="phone" className="form-control" placeholder="Phone number" aria-label="phone" aria-describedby="basic-addon1" />
            </div>
            <div className="form-group">
              <select name="make" className="form-control" onChange={(e) => {
                handleChange(e)
                getModels(e.target.value)
              }}>
                <option value="">Select Make</option>
                {makes.map((make, index) => (
                  <option key={index} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select name="model" className="form-control" onChange={(e) => {
                handleChange(e)
                getYear(data.make, e.target.value)
              }}>
                <option value="">Select model</option>
                {models.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select name="year" className="form-control" onChange={(e) => {
                handleChange(e)
              }}>
                <option value="">Select year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select name="city" className="form-control" onChange={(e) => {
                handleChange(e)
                getCityLocations(e.target.value)
              }}>
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select name="address" onChange={(e) => {
                handleChange(e)
                getslot(e.target.value.split('/')[0])
              }} className="form-control">
                <option value="">Select Address</option>
                {cityLocations.map((loc, index) => (
                  <option option key={index} value={`${loc.id}/${loc.location}`}>{loc.location}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select name="date" onChange={(e) => {
                handleChange(e)
                getTime(e)
              }} className="form-control">
                <option value="">Choose Date</option>
                {dates.map((item, index) => (
                  <option key={index} value={Object.keys(item)}>
                    {Object.keys(item)}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select name="time" onChange={(e) => handleChange(e)} className="form-control">
                <option value="">Choose time</option>
                {times.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>))}
              </select>
            </div>
            <button className="mt-4">Continue</button>
          </form>
        </div>
        <Security />
        <Chat />
      </div>
      <ToastContainer align={"right"} position={"bottom"} />
    </HomeLayout>
  );
};

export default Sell_car;
