/*
 * @Description: Service
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-11-12 21:08:00
 * @LastEditors: Jensen
 * @LastEditTime: 2019-11-12 21:37:44
 */
import { Service } from 'egg';

export default class Test extends Service {

  /**
   * @description: return name
   * @param {string}
   * @return: string
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async user() {
    const data = {
      name: 'jensen',
      age: 12,
      sex: '男',
    };

    return data;
  }
}
