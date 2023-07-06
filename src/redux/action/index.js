export function incrementTask(value = 1) {
  return {
    type: 'INCREMENT',
    payload: value,
  };
}

export function decrementTask(value = 1) {
  return {
    type: 'DECREMENT',
    payload: value,
  };
}

export function resetTask(value = 0) {
  return {
    type: 'RESET',
    payload: value,
  };
}
