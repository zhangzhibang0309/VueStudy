export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20Stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  more20StuLength(state, getters) {
    return getters.more20Stu.length
  },
  //  组件置顶显示年龄界限
  moreAgeStu(state) {
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}
