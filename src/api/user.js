import axios from 'axios'
import service from './../utils/service.js'
import qs from 'qs'


function parseParams(data) {
  try {
    var tempArr = [];
    for (var i in data) {
      var key = encodeURIComponent(i);
      var value = encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
}
/**
 * Login with a post to login url with the data {username, password}.
 * @param {string} username The username of the user.
 * Should be phone or email judged by frontend
 * @param {string} password The password of the user.
 * @param {string} mode The mode of new user.
 * @return {Promise}
 * Promise will return the json data with success and message
 */
export async function login (info) {
  let data = { 'username': info.username, 'password': info.password }
  let response = await service.get('/login', {params: data})
  return response.data
  // let result = {
  //   "info": "登陆成功",
  //   "data": {
  //     "id": 2,
  //     "username": "huangscar",
  //     "last_work": ""
  //   }
  // }
  // return result
}

export async function register (info) {
  let data = { 'username': info.username, 'password': info.password }
  let response = await service.get('/resister', {params: data})
  return response.data
  // let result = {status: true, data: {id: 1, username: username}}
  // return result
}
