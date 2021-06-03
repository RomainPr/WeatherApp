export const initialState = {
  city: 'Tel Aviv',
  temperature: 15,
  icon: '',
  day: 'Monday',
  weather: 'A shower',
  precipitation: 'Rain',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
