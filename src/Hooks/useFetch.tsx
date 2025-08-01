import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T=any>(path: string) => {
  let url = "/carouse.json";
  const [result, SetResult] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(true);
 console.log(path)
  useEffect(() => {
     axios
      .get(url)
      .then((res) => SetResult(res.data[path]))
      .catch((error) => setError(error))
      .finally(() => setisLoading(false));
  }, []);
  return { result, error, isLoading };
};

