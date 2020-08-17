import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation (using COMBINE REDUCERS)

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

// NOTE. IMPORT DEPENDENCIES, IF CURRENT
// ENTITY USES THEM. SAME WITH IMPORTING
// React from 'react. IF THERE IS NO JSX
// PRESENT, WE DON'T NEED TO IMPORT IT
