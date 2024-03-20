import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

export const fetchProductData = axios.create();

fetchProductData.interceptors.request.use((request) => {
  console.log(request);

  return request;
});

fetchProductData.interceptors.response.use(
  (response) => {
    console.log('response', response);
    return response;
  },
  function (error) {
    const { status } = error.response;
    if (status === 404) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
    return Promise.reject(error);
  }
);
