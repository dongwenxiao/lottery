/**
 * 奖品设置
 * type
 * count
 * title:
 * img:
 */
const prizes = [
  {
    type: 0,
    count: 100,
    title: " ",
    img: "../img/mbp.jpg"
  },
  {
    type: 1,
    count: 1,
    title: " ",
    img: "../img/one.png"
  },
  {
    type: 2,
    count: 5,
    title: " ",
    img: "../img/two1.png"
  },
  {
    type: 3,
    count: 5,
    title: " ",
    img: "../img/two2.png"
  },
  {
    type: 4,
    count: 30,
    title: " ",
    img: "../img/three.png"
  },
  // {
  //   type: 5,
  //   title: " ",
  //   count: 50,
  //   img: "../img/baidu.jpg"
  // }
];

/**
 * 一次抽取的奖品个数
 * 顺序为：[特别奖，一等奖，二等奖，二等奖，三等奖]
 */
const EACH_COUNT = [1, 1, 1, 1, 5];

const COMPANY = "猎户星空";  // 公司名称

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
