import Mock from "mockjs";
// http://mockjs.com/examples.html
export const mapData = [
  {
    fromName: "贵阳",
    from: [106.71, 26.57],
    fromCountry: "中国",
    toCountry: "中国",

    to: [113, 28.21],
    toName: "长沙",
    value: 171,
  },
  {
    fromName: "贵阳",
    from: [106.71, 26.57],
    to: [113.23, 23.16],
    toName: "广州",
    value: 171,
    fromCountry: "中国",
    toCountry: "中国",
  },
  {
    fromName: "贵阳",
    from: [106.71, 26.57],
    to: [116.7, 39.53],
    toName: "廊坊",
    value: 171,
    fromCountry: "中国",
    toCountry: "中国",
  },
  {
    fromName: "贵阳",
    from: [106.71, 26.57],
    to: [117.27, 31.86],
    toName: "合肥",
    value: 171,
    fromCountry: "中国",
    toCountry: "中国",
  },
  {
    fromName: "合肥",
    from: [117.27, 31.86],
    to: [125.03, 46.58],
    toName: "大庆",
    value: 229,
    fromCountry: "中国",
    toCountry: "中国",
  },
  {
    fromName: "合肥",
    from: [117.27, 31.86],
    to: [115.480656, 35.23375],
    toName: "菏泽",
    fromCountry: "中国",
    toCountry: "中国",
    value: 229,
  },
  {
    fromName: "菏泽",
    from: [115.480656, 35.23375],
    to: [107.15, 34.38],
    toName: "宝鸡",
    value: 194,
    fromCountry: "中国",
    toCountry: "中国",
  },

  {
    fromName: "美国",
    fromCountry: "美国",
    toCountry: "中国",
    from: [-109.69796 + 360, 39.79028],
    to: [121.45918, 31.2372],
    toName: "上海",
    value: 300,
  },
  {
    fromName: "巴西",
    fromCountry: "巴西",
    toCountry: "中国",
    from: [-56.02942 + 360, -10.70531],
    to: [121.45918, 31.2372],
    toName: "上海",
    value: 500,
  },
  {
    fromName: "马达加斯加",
    fromCountry: "马达加斯加",
    toCountry: "中国",
    from: [47.08301056835936, -19.65235624472773],
    to: [121.45918, 31.2372],
    toName: "上海",
    value: 100,
  },
];
export const lineData = () => {
  return [
    ...Mock.mock({
      "arr|10": [
        {
          time: "@date",
          value: "@natural(40,70)",
          // value: "100",
        },
      ],
    }).arr,
  ].sort((a, b) => (a.time <= b.time ? -1 : 1));
};

export const pieData = [
  //
  ...Mock.mock({
    "arr|5": [
      {
        domain: "@domain",
        value: "@natural(40,70)",
        // value: "100",
      },
    ],
  }).arr,
].sort((a, b) => a.value - b.value);

export const circlePieData = [
  ...Mock.mock({
    "arr|4": [
      {
        systemName: "@ctitle(3, 5)",
        value: "@natural(40,70)",
      },
    ],
  }).arr,
];
export const colBarData = [
  {
    label: "服务器数目",
    value: Mock.Random.natural(20, 40),
  },
  {
    label: "节点数目",
    value: Mock.Random.natural(20, 40),
  },
  {
    label: "宕机数目",
    value: Mock.Random.natural(20, 40),
  },
  {
    label: "宕机数目",
    value: Mock.Random.natural(20, 40),
  },
  {
    label: "测试数量",
    value: Mock.Random.natural(20, 40),
  },
];

export const ipAttackCount = [
  ...Mock.mock({
    "arr|20": [
      {
        ip: "@ip",
        address: "@city",
        value: "@natural(40,80)",
      },
    ],
  }).arr,
];
export const realTimeAttackData = [
  ...Mock.mock({
    "arr|20": [
      {
        time: "@datetime('MM-dd HH:mm')",
        address: "@city",
        fromIP: "@Ip",
        attackIP: "@Ip",
        strategy: "策略@natural(1,20)_@natural(1,20)",
      },
    ],
  }).arr,
];
console.log(realTimeAttackData);
