import { useEffect, useState } from "react";

export function useGetData(getDataFunction, options) {
  const [data, setData] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const { data } = await getDataFunction(page, limit, options);
        setData(data.data);
        setTotal(data.total);
      } catch (e) {
        console.log(e);
        setError(e);
      }
      setLoading(false);
    }

    getData();
  }, [page, limit]);
  return {
    data,
    total,
    page,
    limit,
    loading,
    setLimit,
    setPage,
    error,
  };
}
