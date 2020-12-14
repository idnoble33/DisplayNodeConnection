import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getNode = () => {
  const request = axios
    .get(`http://localhost:5000/nodes/`)
    .then((response) => response.data)
    .catch((error) => {
      console.log("caught error in get Title Node", error);
    });
  return {
    type: actionTypes.GET_NODE,
    payload: request,
  };
};

export const NodeInfo = (id) => {
  const request = axios
    .get(`http://localhost:5000/nodes/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log("caught error in get Node Info", error);
    });
  return {
    type: actionTypes.NODE_INFO,
    payload: request,
  };
};

export const SearchByNode = (text) => {
  const request = axios
    .post(`http://localhost:5000/nodes/search`, { query: text })
    .then((response) => response.data)
    .catch((error) => {
      console.log("caught error in get Search Node", error);
    });
  return {
    type: actionTypes.SEARCH_BY_NODE,
    payload: request,
  };
};

export const GetVariableData = () => {
  const request = axios
    .get(`http://localhost:5000/variables`)
    .then((response) => response.data)
    .catch((error) => {
      console.log("caught error in get Search Node", error);
    });
  return {
    type: actionTypes.GET_VARIABLE_DATA,
    payload: request,
  };
};
