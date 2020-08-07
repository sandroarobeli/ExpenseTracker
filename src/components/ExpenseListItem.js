import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      {" "}
      <h3>Description: {description}</h3>
    </Link>
    Amount: {numeral(amount / 100).format("$0,0.00")}; Created At:{" "}
    {moment(createdAt).format("MMMM Do, YYYY")};
  </div>
);

export default ExpenseListItem;

// FORMAT CREATED AT DATE OUTPUT LIKE IT SHOWS BELOW!!!
// const dateNow = moment().format("MMMM Do YYYY, h:mm a")
