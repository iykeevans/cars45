const baseURL = "https://testing-c45webapi.cars45.com/api"

export default {
    getMake: `${baseURL}/make`,
    getModel: (model)=>`${baseURL}/model?make=${model}`,
    getYear: (make, model)=>`${baseURL}/year?make=${make}&model=${model}`,
    getTrim: (make, model)=>`${baseURL}/trim?make=${make}&model=${model}`,
    getSearch: (searchParam)=>`${baseURL}/car/search?make=${searchParam?.make||""}&model=${searchParam?.model||""}&year=${searchParam?.year||""}&minPrice=${searchParam?.minPrice||""}&maxPrice=${searchParam?.maxPrice||""}&condition=${searchParam?.condition||""}&status=${searchParam?.status||"available"}`,
    getSingleCar: (sku)=>`${baseURL}/car?sku=${sku}`,
    getCenters: (city)=>`${baseURL}/location?city=${city}`,
    getSlot: (placeID)=>`${baseURL}/slot?placeId=${placeID}`,
    getLocations: `${baseURL}/locations`,
    getCities: `${baseURL}/cities`,
    createBooking: `${baseURL}/booking`,
    createInspection: `${baseURL}/car-inspection`,
    createContact: `${baseURL}/contact`,
}