// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    bannerList: [
      { imageUrl: 'https://img1.imgtp.com/2023/07/01/abcd1.jpg' },
      { imageUrl: 'https://img1.imgtp.com/2023/07/01/abcd2.jpg' },
      { imageUrl: 'https://img1.imgtp.com/2023/07/01/abcd3.jpg' },
    ],
    weekDays: [],
    currentDay: 0,
    currentWeek: '',
    courseList: [],
    allCourses: [
      // 周日
      [
        { id: 1, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 3, total: 25 },
        { id: 2, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 13, total: 25 },
        { id: 3, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 11, total: 25 },
        { id: 4, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 8, total: 20 },
        { id: 5, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 5, total: 18 },
      ],
      // 周一
      [
        { id: 6, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 6, total: 25 },
        { id: 7, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 15, total: 25 },
        { id: 8, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 10, total: 25 },
        { id: 9, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 12, total: 20 },
        { id: 10, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 7, total: 18 },
      ],
      // 周二
      [
        { id: 11, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 8, total: 25 },
        { id: 12, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 18, total: 25 },
        { id: 13, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 9, total: 25 },
        { id: 14, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 10, total: 20 },
        { id: 15, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 6, total: 18 },
      ],
      // 周三
      [
        { id: 16, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 7, total: 25 },
        { id: 17, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 14, total: 25 },
        { id: 18, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 12, total: 25 },
        { id: 19, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 9, total: 20 },
        { id: 20, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 8, total: 18 },
      ],
      // 周四
      [
        { id: 21, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 5, total: 25 },
        { id: 22, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 17, total: 25 },
        { id: 23, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 13, total: 25 },
        { id: 24, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 11, total: 20 },
        { id: 25, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 9, total: 18 },
      ],
      // 周五
      [
        { id: 26, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 4, total: 25 },
        { id: 27, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 16, total: 25 },
        { id: 28, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 15, total: 25 },
        { id: 29, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 13, total: 20 },
        { id: 30, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 10, total: 18 },
      ],
      // 周六
      [
        { id: 31, time: '09:00–10:00', teacher: '林林', type: '国风古典', reserved: 9, total: 25 },
        { id: 32, time: '10:30–11:30', teacher: '33', type: 'HIPHOP/编舞', reserved: 19, total: 25 },
        { id: 33, time: '14:00–15:00', teacher: 'jenny', type: 'JAZZ基础', reserved: 14, total: 25 },
        { id: 34, time: '16:00–17:00', teacher: '小明', type: '拉丁舞', reserved: 15, total: 20 },
        { id: 35, time: '18:00–19:00', teacher: '小红', type: '芭蕾', reserved: 12, total: 18 },
      ],
    ],
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onLoad() {
    const weekDays = [];
    const today = new Date();
    const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
    let firstDay = new Date(today);
    firstDay.setDate(today.getDate() - today.getDay());
    for (let i = 0; i < 7; i++) {
      const d = new Date(firstDay);
      d.setDate(firstDay.getDate() + i);
      weekDays.push({
        name: '周' + dayNames[i],
        date: (d.getMonth() + 1) + '/' + d.getDate(),
      });
    }
    const weekStart = weekDays[0].date;
    const weekEnd = weekDays[6].date;
    this.setData({
      weekDays,
      currentWeek: weekStart + ' - ' + weekEnd,
      currentDay: today.getDay(),
      courseList: this.data.allCourses[today.getDay()] || [],
    });
  },
  selectDay(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentDay: index,
      courseList: this.data.allCourses[index] || [],
    });
  },
  makeReservation(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '预约功能待实现',
      icon: 'none',
    });
  },
})
