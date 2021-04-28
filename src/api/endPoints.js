const baseURL = "https://testing-c45webapi.cars45.com/api"
const financeUrl = "http://testing-confinapi.cars45.ng/api"
const gtPayUrl = "https://gtweb.gtbank.com/GTPay/Tranx.aspx"

export default {
    getMake: `${baseURL}/make`,
    getModel: (model) => `${baseURL}/model?make=${model}`,
    getYear: (make, model) => `${baseURL}/year?make=${make}&model=${model}`,
    getTrim: (make, model) => `${baseURL}/trim?make=${make}&model=${model}`,
    getSearch: (searchParam) => `${baseURL}/car/search?make=${searchParam?.make || ""}&model=${searchParam?.model || ""}&year=${searchParam?.year || ""}&minPrice=${searchParam?.minPrice || ""}&maxPrice=${searchParam?.maxPrice || ""}&minYear=${searchParam?.minYear || ""}&maxYear=${searchParam?.maxYear || ""}&transmission=${searchParam?.transmission || ""}&condition=${searchParam?.condition || ""}&grade=${searchParam?.grade || ""}&financeable=${searchParam?.financeable || ""}&type=${searchParam?.type || ""}&start=${searchParam?.start || 1}`,
    getSingleCar: (sku) => `${baseURL}/car?sku=${sku}`,
    getCenters: (city) => `${baseURL}/location?city=${city}`,
    getSlot: (placeID) => `${baseURL}/slot?placeId=${placeID}`,
    getLocations: `${baseURL}/locations`,
    getCities: `${baseURL}/cities`,
    createBooking: `${baseURL}/booking`,
    createInspection: `${baseURL}/car-inspection`,
    createCarSwapInspection: `${baseURL}/swapcar-inspection`,
    createContact: `${baseURL}/contact`,
    getBanks: `${financeUrl}/banks`,
    payWithSterling: `${financeUrl}/sterling/create`,
    payWithGTB: `${financeUrl}/gtb/create`,
    gtbfinance: gtPayUrl,
    verifyFinance: (ref) => `${financeUrl}/sterling/callback?${ref}`,
    leads: `${financeUrl}/leads`,
    goMechanic: `${baseURL}/go-mechanic`,
    reserveCar: `${baseURL}/reserve-car`,
    referBuyer: `${baseURL}/refer-buyer`,
    preorder: `${baseURL}/preorder-car`,
    getBodyType: `${baseURL}/bodytype`,
    getTransmission: `${baseURL}/transmission`,
    getRelatedCars: (sku, make, year) => `${baseURL}/related-cars?sku=${sku}&make=${make}&year=${year}`
}