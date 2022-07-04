import useFetch from "./useFetch";

function useFetchPostsData(id) {
  const url = "https://jsonplaceholder.typicode.com/users?id=" + id;

  const data = useFetch(url);

  return { data };
}

export default useFetchPostsData;
