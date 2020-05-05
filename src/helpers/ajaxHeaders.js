export const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const authHeader = (getState) => {
  const token = getState().authReducer.token;
  if (token) config.headers['Authorization'] = `Token ${token}`;
  return config;
};
