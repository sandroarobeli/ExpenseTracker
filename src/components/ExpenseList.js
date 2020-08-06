import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ul>
      {props.expenses.map((expense) => (
        <ExpenseListItem
          key={expense.id}
          description={expense.description}
          amount={expense.amount}
          createdAt={expense.createdAt}
          note={expense.note}
          id={expense.id}
        />
      ))}
    </ul>
  </div>
);
// Common pattern for Connect syntax
const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};
// Exports connected component
export default connect(mapStateToProps)(ExpenseList);
