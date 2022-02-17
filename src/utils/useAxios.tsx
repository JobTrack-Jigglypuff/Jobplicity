// import { useEffect, useState } from 'react';
// import axios, { AxiosResponse, AxiosError } from 'axios';

// import { LoginForm, SignupForm } from '../../interfaces';

// const useAxios = ({
//   method,
//   url,
//   body,
// }: {
//   method: 'get' | 'post' | 'put' | 'delete';
//   url: string;
//   body: LoginForm | SignupForm;
// }) => {
//   const [response, setResponse] = useState<AxiosResponse | null> (null);
//   const [err, setErr] = useState<string>('');

//   useEffect(() => {
//     fetchData();
//   }, [method, url, body]);

//   const fetchData = () => {
//     axios[method](url, body)
//       .then((data: AxiosResponse<any>) => setResponse(data))
//       .catch((err: AxiosError<any>) => setErr(err.message));
//   };

//   return { response, err };
// };

// export default useAxios;
