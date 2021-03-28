export const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
      break
    default:
      return state
  }
}
