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
    count: 1,
    title: "特别奖",
    img: "../img/mbp.jpg"
  },
  // {
  //   type: 1,
  //   count: 1,
  //   title: "HUAWEI Mate X",
  //   img: "../img/one.png"
  // },
  // {
  //   type: 2,
  //   count: 5,
  //   title: "小莫智能划船机",
  //   img: "../img/two1.png"
  // },
  // {
  //   type: 3,
  //   count: 5,
  //   title: "小米VR一体机",
  //   img: "../img/two2.png"
  // },
  // {
  //   type: 4,
  //   count: 5,
  //   title: "华为手表&Beats耳机",
  //   img: "../img/three.png"
  // },
  // {
  //   type: 5,
  //   title: "小度在家",
  //   count: 50,
  //   img: "../img/baidu.jpg"
  // }
];

/**
 * 一次抽取的奖品个数
 * 顺序为：[特别奖，一等奖，二等奖，三等奖，四等奖，五等奖]
 */
const EACH_COUNT = [1];

const COMPANY = "猎户星空";  // 公司名称

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
