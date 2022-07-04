import useFetch from "./useFetch";

function useFetchImagesData(id) {
  const url = "https://jsonplaceholder.typicode.com/photos?id=" + id;

  const  data  = useFetch(url);

  return { data };
}

export default useFetchImagesData;
