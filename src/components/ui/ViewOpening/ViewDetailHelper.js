import {API_HOST} from '../../../constants'

export const getInternDetail = (id) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(
    `${API_HOST}/internship/${id}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const getJobDetail = (id) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(`${API_HOST}/job/${id}`, requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
