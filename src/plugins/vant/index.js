/*
 * @Author: findnr
 * @Date: 2024-04-24 07:41:19
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-24 07:44:08
 * @Description: 
 */
import Vant from 'vant';
import 'vant/lib/index.css';
export function setupVant(app) {
    app.use(Vant);
    app.use(Vant.Lazyload);
}
