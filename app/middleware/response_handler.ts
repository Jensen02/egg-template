/*
 * @Description: response handler middlerware
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-11-12 21:18:50
 * @LastEditors: Jensen
 * @LastEditTime: 2019-11-12 21:24:45
 */
import { Context } from 'egg';

export interface ResponseData {
  code: number;
  msg: string;
  data: object;
}

export default function responseHandler(data: ResponseData): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    await next();
    ctx.body = data;
  };
}
