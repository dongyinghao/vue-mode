export default {
  setlang (state, lang) {
    window.vm.$i18n.locale = lang
    state.lang = lang
  },
  sethistorypage (state, page) {
    state.historypage = page
  }
}
