import axios from "axios";

export const getAllNotes = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(({ data }) => data);
