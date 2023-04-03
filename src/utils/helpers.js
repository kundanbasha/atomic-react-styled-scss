//localstorge helpers
export const getLocalItem = () => localStorage.getItem("username");
export const setLocalItem = (key, value) => localStorage.setItem(key, value);
export const removeLocalItem = (key) => localStorage.removeItem(key);

//authentication check helper
export const isLoggedIn = () => getLocalItem();

//fetch utility function
let options = (method) => ({
  method: method,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export const request = {
  get: async (endpoint) => {
    const url = `${process.env.REACT_APP_QUOTES_SERVER_URL}/${endpoint}`;
    const methodOptions = options("GET");
    return await fetch(url, methodOptions).then((res) => res.json());
  },
  post: async (endpoint, data) => {
    const url = `${process.env.REACT_APP_QUOTES_SERVER_URL}/${endpoint}`;
    let methodOptions = options("POST", data);
    methodOptions["body"] = data ? JSON.stringify(data) : data;

    return await fetch(url, methodOptions).then((res) => res.json());
  },
};
