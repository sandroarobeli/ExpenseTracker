import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      {" "}
      <h3>Description: {description}</h3>
    </Link>
    Amount: {amount}; Created At: {createdAt};
  </div>
);

export default ExpenseListItem;

// FORMAT CREATED AT DATE OUTPUT LIKE IT SHOWS BELOW!!!
// const dateNow = moment().format("MMMM Do YYYY, h:mm a")
