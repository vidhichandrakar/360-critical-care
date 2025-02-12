import axios from "axios";
import { APIS } from "./ApiConstant";

export const getCategory = ({ callBack, error }) => {
  const url = APIS.getCategory;
  axios.get(url).then((response) => {
    callBack(response);
  }) .catch((errorMessage) => {
    error(errorMessage);
  });
};
export const getBlog = ({ callBack, error }) => {
  const url = APIS.getBlog;
  axios.get(url).then((response) => {
    callBack(response);
  }).catch((errorMessage) => {
    error(errorMessage);
  });
};

export const getAllCourses = ({ callBack, searchString, error }) => {
  let url = new URL(`${APIS.allCourses}`);
  if (searchString) {
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

export const getAllCoursesFilter = ({
  category_id,
  subcategories,
  callBack,
  error,
}) => {
  let url = new URL(`${APIS.allCoursesFilter}`);
  if (category_id) {
    url.searchParams.set("category_id", category_id);
  }
  if (subcategories) {
    url.searchParams.set("sub_category_id", subcategories);
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

export const addNewsLetter = ({ payload, callBack, error }) => {
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

export const StudentData = ({  callBack, error }) => {
  const url = APIS.StudentData;
  axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((errorMessage) => {
      // error(errorMessage);
    });
};
export const Whyus = ({  callBack, error }) => {
  const url = APIS.Whyus;
  axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((errorMessage) => {
      // error(errorMessage);
    });
};

export const getPopularColurses = ({  callBack, error }) => {
  const url = APIS.getPopularColurses;
  axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((errorMessage) => {
      // error(errorMessage);
    });
};
export const getBlogCards = ({ callBack, error }) => {
  const url = APIS.getBlogCards;
  axios.get(url)
  .then((response)=> {
    callBack(response);
  })
  .catch((errorMessage) => {
    error(errorMessage);
  })
};

export const contactUsDetails = ({ payload, callBack, error }) => {
  const url = APIS.contactUS;
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

export const getAllTestimonials = ({ callBack, error }) => {
  const url = new URL(`${APIS.testimonials}`);
  axios
    .get(url)
    .then((response) => {

      callBack(response);
    })
    .catch((errorMessage) => {
      error(errorMessage);
    });
};

export const buyCourse = ({ courseId, callBack, error }) => {
  const url = APIS.allCourses + "/" + courseId;
  axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((errorMessage) => {
      // error(errorMessage);
    });
};

export const duration = ({ callBack }) => {
  const url = APIS.duration;
  axios.get(url).then((response) => {
    callBack(response);
  });
};