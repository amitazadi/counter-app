const initialstate = {
  count: 0,
};

function countReducer(state = initialstate, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return {
        count: state.count - action.payload > 0 ? state.count - action.payload : 0,
      };
    case 'RESET':
      return { count: action.payload };
    default:
      return initialstate;
  }
}

export default countReducer;
