function reducer(state, action) {
  switch (action.type) {
    case "number_zero":
      return {...state, number: 0}
    case "number_Add2":
      return { ...state, number: state.number + 2 }
    case "number_mult7":
      return {...state, number: state.number * 7}
    case "number_div25":
      return {...state, number: state.number / 2}
    case "number_parse":
      return {...state, number : parseInt(state.number)}
    case "number_Miss2":
        return {...state, number: state.number - 2}
    case "user":
        return {...state, user: { name: action.payload}}
    default:
      return state;
  }
}
export default reducer;