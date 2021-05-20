import axios from "axios";

import endPoints from "./endPoints";

const apikey = config.env.API_KEY;
import config from "../../next.config";

const headers = {
  "Content-Type": "application/json",
  Accept: "*/*",
  apikey,
};

export const $_getMake = () => {
  return axios.get(endPoints.getMake, { headers });
};

export const $_getModel = (model) => {
  return axios.get(endPoints.getModel(model), { headers });
};

export const $_getYear = (make, model) => {
  return axios.get(endPoints.getYear(make, model), { headers });
};

export const $_getTrim = (make, model) => {
  return axios.get(endPoints.getTrim(make, model), { headers });
};

export const $_getSearch = (value) => {
  return axios.get(endPoints.getSearch(value), { headers });
};

export const $_getSingleCar = (value) => {
  return axios.get(endPoints.getSingleCar(value), { headers });
};

export const $_getCenters = (city) => {
  return axios.get(endPoints.getCenters(city), { headers });
};

export const $_getSlot = (placeID) => {
  return axios.get(endPoints.getSlot(placeID), { headers });
};

export const $_getLocations = () => {
  return axios.get(endPoints.getLocations, { headers });
};

export const $_getCities = () => {
  return axios.get(endPoints.getCities, { headers });
};

export const $_createBooking = (payload) => {
  return axios.post(endPoints.createBooking, payload, { headers });
};

export const $_createInspection = (payload) => {
  return axios.post(endPoints.createInspection, payload, { headers });
};

export const $_createCarSwapInspection = (payload) => {
  return axios.post(endPoints.createCarSwapInspection, payload, { headers });
};

export const $_createContact = (payload) => {
  return axios.post(endPoints.createContact, payload);
};

export const $_getBanks = () => {
  return axios.get(endPoints.getBanks);
};

export const $_payWithSterling = (payload) => {
  return axios.post(endPoints.payWithSterling, payload);
};

export const $_payWithGTB = (payload) => {
  return axios.post(endPoints.payWithGTB, payload);
};

export const $_gtbFinance = (payload) => {
  return axios.post(endPoints.gtbfinance, payload);
};

export const $_verifyFinance = (ref) => {
  return axios.get(endPoints.verifyFinance(ref));
};

export const $_leads = () => {
  return axios.get(endPoints.leads);
};

export const $_goMechanic = () => {
  return axios.post(endPoints.goMechanic);
};

export const $_reserveCar = (payload) => {
  return axios.post(endPoints.reserveCar, payload, { headers });
};

export const $_referBuyer = () => {
  return axios.get(endPoints.referBuyer);
};

export const $_preOrder = (payload) => {
  return axios.post(endPoints.preorder, payload, { headers });
};

export const $_getBodyType = () => {
  return axios.get(endPoints.getBodyType, { headers });
};

// export const $_getTransmission = () => {
//   return axios.get(endPoints.getTransmission);
// };

export const $_getRelatedCars = (sku, make, year) => {
  return axios.get(endPoints.getRelatedCars(sku, make, year), { headers });
};

export const $_payMoneyDown = (payload) => {
  return axios.post(endPoints.payMoneyDown, payload, { headers });
};

export const $_validateCarPayment = (payload) => {
  return axios.post(endPoints.validateCarPayment, payload, { headers });
};
