
const user = {
  state: {
    isAdmin: false,
    userInfor: {
      'name': ''
    }
  },
  mutations: {
    //同步方法
    updateUser(state, obj) {
      state.userInfor = obj;
      state.isAdmin = state.userInfor.isAdmin;
    }
  },
  actions: {
    // 异步方法
    updateUserFun(context, obj) { //context 上下文(相当于箭头函数中的this)对象 通过dispatch调用
      context.commit('updateUser', obj);
    }
  }
}

export default user
