export default function checkAuth(req, res, next) {
  const authenticated = req.header('authenticated');

  console.log(authenticated);
  if (authenticated === 'yes') next();
  else {
    res.status(400).json({ msg: 'not authenticated' });
  }
}
