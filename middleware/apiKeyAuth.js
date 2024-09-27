 const API_KEY = process.env.API_KEY; 

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey && apiKey === API_KEY) {
    return next();
  }
  
  return res.status(403).send('Invalid API Key');
};

module.exports = apiKeyAuth;
