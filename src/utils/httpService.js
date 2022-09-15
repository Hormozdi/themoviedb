import axios from "axios";
import { toast } from "react-toastify";

const defaultOptions = {
  method: "get",
  withToken: true,
  timeout: 10000,
  baseURL: process.env.THE_MOVIE_DB_BASE_URL,
  responseType: "json",
};

const generateErrorsMessage = (response) => {
  let error = "Unexpected error";

  if (response.message && response.message !== "Network Error") {
    error = response.message;
  } else if (response.error_msg) {
    error = response.error_msg;
  } else if (response.object) {
    if (response.object.error_msg) {
      error = response.object.error_msg;
    } else if (response.object.message) {
      let errors = response.object.message;

      try {
        errors = JSON.parse(errors);
      } catch (e) {
        // log(e);
      }

      if (typeof errors === "string") {
        error = errors;
      } else if (typeof errors === "object") {
        const arr = Object.keys(errors).reduce((acc, key) => {
          return acc.concat(errors[key]);
        }, []);

        error = arr.join("\n");
      }
    }
  }
  return error;
};

const handleError = (response) => {
  let MyResponse = response;

  if (response && response.response && response.response.data) {
    MyResponse = response.response.data;
  }

  if (response.message === "Network Error") {
    toast.error("Internet connection error");
  } else if (MyResponse && MyResponse.code !== "ECONNABORTED") {
    toast.error(generateErrorsMessage(MyResponse));
  }

  const error = response.response;
  if (error && [401, 403].indexOf(error.status) >= 0) {
    toast(error.message);
  }

  return Promise.reject(response);
};

const http = axios.create(defaultOptions);

http.interceptors.request.use((conf) => {
  const myConfig = { ...conf };

  if (typeof myConfig.params === "undefined") {
    myConfig.params = {};
  }

  if (process.env.THE_MOVIE_DB_JWT_TOKEN) {
    myConfig.headers.common.Authorization = `Bearer ${process.env.THE_MOVIE_DB_JWT_TOKEN}`;
  }

  return myConfig;
});

http.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      toast(response.data.message);
    }
    return response.data || response;
  },
  (error) => {
    return handleError(error);
  }
);

const callHttp = async (method, url, data = null) => {
  let response;
  try {
    response = await http({ method, url, data });
    return response;
  } catch (err) {
    return err.response;
  }
};

export { callHttp };
