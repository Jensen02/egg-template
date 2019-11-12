/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-11-12 16:56:36
 * @LastEditors: Jensen
 * @LastEditTime: 2019-11-12 21:38:02
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async user() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.user();
  }
}
