export function getPageList() {
  const axios = window.axios;
  return axios.get("pageList.json").then((response) => {
    console.log(response.data);
    return response.data.pages;
  });
}
