import axios from "axios";


export function getImagePage(pg, lt) {
  return axios.get("https://picsum.photos/v2/list?page=" + pg + "&limit=" + lt);
}

