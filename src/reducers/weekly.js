export const initialState = {
  day: 'Saturday',
  date: '28.12.19',
  icon: '',
  temperature: 15,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
