export default (getState) => {
  const token = getState().authReducer.token;
  console.log(token);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (token) config.headers['Authorization'] = `Token ${token}`;
  return config;
};
