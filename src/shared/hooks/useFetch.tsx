import { useState, useEffect } from "react";
import { request } from "../../utils/helpers";

export default function useFetch(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(false);
  const [error, setError] = useState<string | boolean>(false);

  useEffect(() => {
    setLoading(true);
    setData(false);
    setError(false);
    request
      .get(url)
      .then((response) => {
        setLoading(false);
        setData(response.results);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { loading, data, error };
}
