// home router

module.exports = app =>{
  const {controller} = app;
  const homeRouter = app.router.namespace('/');
  homeRouter.get('/',controller.home.index);
  homeRouter.redirect('index','/');
  
};