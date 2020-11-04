import { API_HOST } from '../../../constants';

export const getAllApplications = (type, id, companyId) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(
    `${API_HOST}/applications/${companyId}/${type}/all/${id}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const updateApplicationStatus = (type, data) => {
  var raw = JSON.stringify({
    ...data,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "PUT",
    headers: headers,
    body: raw,
    redirect: "follow",
  };
  return fetch(
    `${API_HOST}/${type}/updateApplicationStatus`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
