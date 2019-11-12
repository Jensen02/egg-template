/*
 * @Description: Jensen
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-11-12 21:06:11
 * @LastEditors: Jensen
 * @LastEditTime: 2019-11-12 21:34:51
 */
import { Application } from 'egg';
import userRoute from './rotues/user';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  userRoute(app);
};
