const initialState = {
  message: 'Click me.',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE': {
      return { message: 'That was some Redux!' };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
