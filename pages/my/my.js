Page({
  data: {
    userInfo: {
      name: '李四',
      phone: '138****8888',
      cardType: '年卡', // 可选：次卡、年卡、季卡、月卡
      remainTimes: 8, // 仅次卡有效
      dateRange: '2024/06/01 - 2024/12/01',
    },
  },
  onLoad() {
    // 这里可以请求后端获取用户信息，当前为静态演示
  },
}); 