module.exports = app => {

  const { router, controller } = app;

  router.prefix('/api');

  router.get('/', controller.home.index);
};
