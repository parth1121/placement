
import { API_HOST } from '../../../constants';

export const getFilteredInternships = (filterData) => {
  var raw = JSON.stringify({
    ...filterData,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    `${API_HOST}/filter/internships`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const getFilteredJobs = (filterData) => {
  var raw = JSON.stringify({
    ...filterData,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    `${API_HOST}/filter/jobs`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
