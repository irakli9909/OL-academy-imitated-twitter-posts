import useFetch from "./useFetch";

function useFetchPostsData(id) {
  const url =
    id === null
      ? "https://jsonplaceholder.typicode.com/posts/"
      : "https://jsonplaceholder.typicode.com/posts/" + id;

  const data = useFetch(url);

  return data;
}

export default useFetchPostsData;
