// const middleware = require("../middleware");

const routers = app => {
  // List of available Routes
  app.use("/tasks", require("./Tasks"));
  // app.use(middleware.notFound);
  // app.use(middleware.errorHandler);
};

module.exports = routers;
