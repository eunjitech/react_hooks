//import useAxios from './useAxios';

// export const App = () => {
//   const { loading, data, error, refetch } = useAxios({
//     url: 'https://yts.mx/api/v2/list_movies.json',
//   });
//   console.log(loading, JSON.stringify(data), error);
//   return (
//     <div className="App">
//       <h1>{data && data.status}</h1>
//       <h2>{loading && 'Loading'}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// };

import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((err) => {
        setState({ ...state, loading: false, err });
      });
  }, [trigger]);

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  return { ...state, refetch };
};

export default useAxios;
