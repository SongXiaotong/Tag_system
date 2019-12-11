// import axios from 'axios'
import service from './../utils/service.js'

// import getRequset from '../utils/service'

/**
 * Login with a post to login url with the data {username, password}.
 * @param {string} username The username of the user.
 * Should be phone or email judged by frontend
 * @param {string} password The password of the user.
 * @param {string} mode The mode of new user.
 * @return {Promise}
 * Promise will return the json data with success and message
 */
export async function get_book_list () {
  // let response = await service.get('/')
  // return response.data
  let result = {
    data: [
    {id: 0, name: '红楼梦'},
    {id: 1, name: '西游记'},
    {id: 2, name: '水浒传'},
    {id: 3, name: '三国演义'}
  ]}
  return result
}

export async function get_chap_list (book_id) {
  let response = await service.get('/book', {params:{book_id: book_id}})
  return response.data
  // let result = {
  //   "num": 50,
  //   "data": [
  //     {
  //       "id": 1,
  //       "book_id": 0,
  //       "name": "第1集"
  //     },
  //     {
  //       "id": 2,
  //       "book_id": 0,
  //       "name": "第2集"
  //     },
  //     {
  //       "id": 3,
  //       "book_id": 0,
  //       "name": "第3集"
  //     },
  //     {
  //       "id": 4,
  //       "book_id": 0,
  //       "name": "第4集"
  //     },
  //     {
  //       "id": 5,
  //       "book_id": 0,
  //       "name": "第5集"
  //     },
  //     {
  //       "id": 6,
  //       "book_id": 0,
  //       "name": "第6集"
  //     },
  //     {
  //       "id": 7,
  //       "book_id": 0,
  //       "name": "第7集"
  //     },
  //     {
  //       "id": 8,
  //       "book_id": 0,
  //       "name": "第8集"
  //     },
  //     {
  //       "id": 9,
  //       "book_id": 0,
  //       "name": "第9集"
  //     },
  //     {
  //       "id": 10,
  //       "book_id": 0,
  //       "name": "第10集"
  //     },
  //     {
  //       "id": 11,
  //       "book_id": 0,
  //       "name": "第11集"
  //     },
  //     {
  //       "id": 12,
  //       "book_id": 0,
  //       "name": "第12集"
  //     },
  //     {
  //       "id": 13,
  //       "book_id": 0,
  //       "name": "第13集"
  //     },
  //     {
  //       "id": 14,
  //       "book_id": 0,
  //       "name": "第14集"
  //     },
  //     {
  //       "id": 15,
  //       "book_id": 0,
  //       "name": "第15集"
  //     },
  //     {
  //       "id": 16,
  //       "book_id": 0,
  //       "name": "第16集"
  //     },
  //     {
  //       "id": 17,
  //       "book_id": 0,
  //       "name": "第17集"
  //     },
  //     {
  //       "id": 18,
  //       "book_id": 0,
  //       "name": "第18集"
  //     },
  //     {
  //       "id": 19,
  //       "book_id": 0,
  //       "name": "第19集"
  //     },
  //     {
  //       "id": 20,
  //       "book_id": 0,
  //       "name": "第20集"
  //     },
  //     {
  //       "id": 21,
  //       "book_id": 0,
  //       "name": "第21集"
  //     },
  //     {
  //       "id": 22,
  //       "book_id": 0,
  //       "name": "第22集"
  //     },
  //     {
  //       "id": 23,
  //       "book_id": 0,
  //       "name": "第23集"
  //     },
  //     {
  //       "id": 24,
  //       "book_id": 0,
  //       "name": "第24集"
  //     },
  //     {
  //       "id": 25,
  //       "book_id": 0,
  //       "name": "第25集"
  //     },
  //     {
  //       "id": 26,
  //       "book_id": 0,
  //       "name": "第26集"
  //     },
  //     {
  //       "id": 27,
  //       "book_id": 0,
  //       "name": "第27集"
  //     },
  //     {
  //       "id": 28,
  //       "book_id": 0,
  //       "name": "第28集"
  //     },
  //     {
  //       "id": 29,
  //       "book_id": 0,
  //       "name": "第29集"
  //     },
  //     {
  //       "id": 30,
  //       "book_id": 0,
  //       "name": "第30集"
  //     },
  //     {
  //       "id": 31,
  //       "book_id": 0,
  //       "name": "第31集"
  //     },
  //     {
  //       "id": 32,
  //       "book_id": 0,
  //       "name": "第32集"
  //     },
  //     {
  //       "id": 33,
  //       "book_id": 0,
  //       "name": "第33集"
  //     },
  //     {
  //       "id": 34,
  //       "book_id": 0,
  //       "name": "第34集"
  //     },
  //     {
  //       "id": 35,
  //       "book_id": 0,
  //       "name": "第35集"
  //     },
  //     {
  //       "id": 36,
  //       "book_id": 0,
  //       "name": "第36集"
  //     },
  //     {
  //       "id": 37,
  //       "book_id": 0,
  //       "name": "第37集"
  //     },
  //     {
  //       "id": 38,
  //       "book_id": 0,
  //       "name": "第38集"
  //     },
  //     {
  //       "id": 39,
  //       "book_id": 0,
  //       "name": "第39集"
  //     },
  //     {
  //       "id": 40,
  //       "book_id": 0,
  //       "name": "第40集"
  //     },
  //     {
  //       "id": 41,
  //       "book_id": 0,
  //       "name": "第41集"
  //     },
  //     {
  //       "id": 42,
  //       "book_id": 0,
  //       "name": "第42集"
  //     },
  //     {
  //       "id": 43,
  //       "book_id": 0,
  //       "name": "第43集"
  //     },
  //     {
  //       "id": 44,
  //       "book_id": 0,
  //       "name": "第44集"
  //     },
  //     {
  //       "id": 45,
  //       "book_id": 0,
  //       "name": "第45集"
  //     },
  //     {
  //       "id": 46,
  //       "book_id": 0,
  //       "name": "第46集"
  //     },
  //     {
  //       "id": 47,
  //       "book_id": 0,
  //       "name": "第47集"
  //     },
  //     {
  //       "id": 48,
  //       "book_id": 0,
  //       "name": "第48集"
  //     },
  //     {
  //       "id": 49,
  //       "book_id": 0,
  //       "name": "第49集"
  //     },
  //     {
  //       "id": 50,
  //       "book_id": 0,
  //       "name": "第50集"
  //     }
  //   ]
  // }
  // return result
}

export async function start_mark (chap_id) {
  let response = await service.get('/episodePic', {params:{id:chap_id}})
  for (let i = 0; i < response.data.data.length; ++i) {
    if (!res.data.data[i].if_mark) {
      let data = {
        index: i,
        data: res.data
      }
      console.log(data)
      return data
    }
  }
  console.log(-1)
  return {index: -1}
}

export async function get_next_pic (chap_id) {
  let response = await service.get('/pic', {params:{id:chap_id}})
  return response.data
}

export async function get_mark_detail (chap_id) {
  let response = await service.get('/episodePic', {params:{id:chap_id}})
  return response.data
  // let result = {
  //   data: [
  //   {
  //     "id": 1,
  //     "book_id": 0,
  //     "episode": 1,
  //     "pos": "[624, 173, 773, 344]",
  //     "name": "跛足道人",
  //     "pic_index": 0,
  //     "url": "./../../../static/cat.jpeg",
  //     "tag_user": "",
  //     "if_mark": false
  //   },
  //     {
  //       "id": 2,
  //       "book_id": 0,
  //       "episode": 1,
  //       "pos": "[401, 513, 474, 590]",
  //       "name": "癞头和尚",
  //       "pic_index": 1,
  //       "url": "./../../../static/cat.jpeg",
  //       "tag_user": "",
  //       "if_mark": false
  //     },
  //     {
  //       "id": 3,
  //       "book_id": 0,
  //       "episode": 1,
  //       "pos": "[580, 226, 727, 402]",
  //       "name": "癞头和尚",
  //       "pic_index": 2,
  //       "url": "./../../../static/cat.jpeg",
  //       "tag_user": "",
  //       "if_mark": false
  //     },
  //     {
  //       "id": 4,
  //       "book_id": 0,
  //       "episode": 1,
  //       "pos": "[706, 162, 867, 351]",
  //       "name": "跛足道人",
  //       "pic_index": 3,
  //       "url": "./../../../static/cat.jpeg",
  //       "tag_user": "",
  //       "if_mark": false
  //     },
  //   ]
  // }
  // return result
}

export async function get_need_mark (chap_id) {
  // let response = await service.get('/', chap_id)
  // return response.data
  let result = [
    {id: 0, pic: './../../../static/cat.jpeg', ifmarked: false, last: 'user1', result: '狗', pos:[{x: 0, y: 0}, {x: 450, y: 250}]},
    {id: 1, pic: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', ifmarked: false, last: 'user1', result: '猫', pos:[{x: 50, y: 50}, {x: 850, y: 450}]},
    {id: 2, pic: './../../../static/cat.jpeg', ifmarked: false, last: 'user1', result: '狗', pos:[{x: 50, y: 50}, {x: 850, y: 450}]},
    {id: 4, pic: './../../../static/cat.jpeg', ifmarked: false, last: 'user1', result: '狗', pos:[{x: 50, y: 50}, {x: 850, y: 450}]},
    {id: 6, pic: './../../../static/cat.jpeg', ifmarked: false, last: 'user1', result: '狗', pos:[{x: 50, y: 50}, {x: 850, y: 450}]}
  ]
  return result
}

export async function mark (info) {
  let response = await service.get('/tag', {params: info})
  return response.data
  // let result = {
  //   "info": "修改成功",
  //   "data": {
  //     "id": 1,
  //     "book_id": 0,
  //     "episode": 1,
  //     "pos": "[624, 173, 773, 344]",
  //     "name": "lsls",
  //     "pic_index": 0,
  //     "url": "/static/0/EP01_drop_similar/1417.jpg",
  //     "tag_user": "huangscar",
  //     "if_mark": true
  //   },
  //   "next_pic": {
  //     "id": 2,
  //     "book_id": 0,
  //     "episode": 1,
  //     "pos": "[401, 513, 474, 590]",
  //     "name": "癞头和尚",
  //     "pic_index": 1,
  //     "url": "/static/0/EP01_drop_similar/1417.jpg",
  //     "tag_user": "",
  //     "if_mark": false
  //   }
  // }
  // return result
}
