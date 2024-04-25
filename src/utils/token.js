/*
 * @Author: findnr
 * @Date: 2024-04-24 07:25:31
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-24 07:25:46
 * @Description: 
 */
export function getToken(name = 'token') {
    return localStorage.getItem(name) || sessionStorage.getItem(name) || false;
}

export function setToken(obj) {
    for (const key in obj) {
        localStorage.setItem(key, obj[key]);
    }
}