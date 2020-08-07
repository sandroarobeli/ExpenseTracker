const selectExpensesTotal = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((expense, total) => {
      return expense + total;
    }, 0);
};

export default selectExpensesTotal;
