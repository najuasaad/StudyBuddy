const withAuth = (req, res, next) => {
  console.log("authentication check")
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    console.log("failed")
    res.redirect('/login');
  } else {
    console.log("passed")
    next();
  }
};

module.exports = withAuth;
