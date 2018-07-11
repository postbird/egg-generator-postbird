'use strict';

module.exports = appInfo => {
  console.log(appInfo);
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531319476245_9233';

  // 中间件
  config.middleware = [];

  // 模板
  config.view = {
    defaultViewEngine:'nunjucks',
    mapping:{
      '.html':'nunjucks'
    }
  }
  return config;
};
