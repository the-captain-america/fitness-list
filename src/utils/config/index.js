const environment = {
  DEVELOPMENT: 'DEVELOPMENT',
  PRODUCTION: 'PRODUCTION',
};

const getConfig = (env = 'PRODUCTION') => {
  return environment[env];
};

export { getConfig };
