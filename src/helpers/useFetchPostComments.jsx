import useFetch from "./useFetch";

function useFetchPostComments() {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const data = useFetch(url);

  return  data ;
}

export default useFetchPostComments;
