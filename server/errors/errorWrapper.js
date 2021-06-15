const errorWrapper = (controller) => (res, req, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    next(err);
  }
};

module.export = errorWrapper;
