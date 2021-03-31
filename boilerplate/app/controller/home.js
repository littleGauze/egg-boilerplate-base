module.exports = app => {
  const joi = app.joi;

  class HomeController extends app.BaseController {
    async index() {
      const { ctx } = this;
      // await this.validate('index');
      ctx.body = 'hi egg';
    }
  }

  HomeController.RULES = {
    index: {
      query: joi.object({
        page: joi.number().required(),
      }),
    },
  };

  return HomeController;
};
