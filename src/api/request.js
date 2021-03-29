import axios from "axios"
import cookie from "js-cookie"


  
  export async function postCall(endpoint, data, headers) {
    const apikey = cookie.get('__exponea_etc__');
  
    return axios({
      method: 'POST',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`,
        apikey,
        ...headers,
      },
      data,
    })
      .then((response) => response)
      .catch((error) => {
        logOut(error)
        return error.response;
      });
  }
  
  export async function getCall(endpoint, headers) {
    const apikey = cookie.get('__exponea_etc__');
    console.log({apikey})
    return axios({
      method: 'GET',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json',
        apikey:"b1028a8c-182c-44d2-b27d-6713e692803f",
        Accept:"*/*",
        ...headers,
      },
    })
      .then((response) => response)
      .catch((error) => {
        logOut(error)
        return error.response;
      });
  }
  
  export async function patchCall(endpoint, data, headers) {
    const apikey = cookie.get('__exponea_etc__');
    return axios({
      method: 'PATCH',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`,
        apikey,
        ...headers,
      },
      data,
    })
      .then((response) => response)
      .catch((error) => {
        logOut(error)
        return error.response
      });
  }
  
  export async function putCall(endpoint, data, headers) {
    const apikey = cookie.get('__exponea_etc__');
    return axios({
      method: 'PUT',
      url: endpoint,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`,
        apikey,
      },
      data,
    })
      .then((response) => response)
      .catch((error) => {
        logOut(error)
        return error.response;
      });
  }