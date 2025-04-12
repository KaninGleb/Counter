

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('Could not load state:', err);
    return undefined;
  }
}

export const saveState = (state: saveStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.log('Could not save state:', err);
  }
}

type saveStateType = {
  counterV3: number
}