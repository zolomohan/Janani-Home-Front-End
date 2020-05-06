const jsonContentHeader = () => ({
  headers: {
    'Content-Type': 'application/json',
  },
});

const authHeader = () => {
  const config = jsonContentHeader();
  const token = localStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Token ${token}`;
  return config;
};

export default {
  auth: authHeader,
  jsonContent: jsonContentHeader
}