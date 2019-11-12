/*
 * @Description: Jensen
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-11-12 21:02:40
 * @LastEditors: Jensen
 * @LastEditTime: 2019-11-12 21:38:35
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/user', controller.home.user);
};
