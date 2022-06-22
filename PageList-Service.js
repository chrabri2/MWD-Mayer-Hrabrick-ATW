// This service obtains a list of pages from a json file
export function getPageList() {
  const axios = window.axios;
  return axios.get("pageList.json").then((response) => {
    console.log(response.data);
    return response.data.pages;
  });
}
