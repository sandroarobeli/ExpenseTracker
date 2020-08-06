import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

// Store creation (using COMBINE REDUCERS)

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

// NOTE. IMPORT DEPENDENCIES, IF CURRENT
// ENTITY USES THEM. SAME WITH IMPORTING
// React from 'react. IF THERE IS NO JSX
// PRESENT, WE DON'T NEED TO IMPORT IT
