import axios from "axios"
import { APIS } from "./ApiConstant";

export const getCategory = ({ callBack }) => {
    const url = APIS.getCategory;
    axios.get(url).then((response) => {
      callBack(response);
    });
  };    
export const getBlog = ({ callBack, onError }) => {
    const url = APIS.getBlog;
  axios.get(url).then((response) => {
    callBack(response);
  }).catch((error) => {
    onError(error);
    });
};

export const getAllCourses = ({callBack, searchString, error }) => {
    let url = new URL(`${APIS.allCourses}`);
    if(searchString){
      url.searchParams.set("course_name", searchString);
    }  
    axios
      .get(url)
      .then((response) => {
  
        callBack(response);
      })
      .catch((errorMessage) => {
        error(errorMessage);
      });
  };

  export const addNewsLetter = ({payload, callBack, error }) => {
    const url = APIS.addNewsLetter;
    axios
      .post(url, payload)
      .then((response) => {
        callBack(response);
      })
      .catch((errorMessage) => {
        error(errorMessage);
      });
  };

export const banner = ({ callBack, error }) => {
  const url = APIS.banner;
  axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((errorMessage) => {
      error(errorMessage);
    });
};