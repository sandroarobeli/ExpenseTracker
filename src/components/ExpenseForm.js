import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Using ternary operators inside the State below
      // Allows to populate Edit Page with the expense props
      // That are associated with the expense
      // We want to edit. If a particular prop
      // Does not exist, the we get default value
      // e.g. empty string etc.
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange(event) {
    const description = event.target.value;
    this.setState(() => ({
      description,
    }));
  }
  onNoteChange(event) {
    const note = event.target.value;
    this.setState(() => ({
      note,
    }));
  }
  onAmountChange(event) {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount,
      }));
    }
  }
  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(() => ({
        createdAt,
      }));
    }
  }
  onFocusChange({ focused }) {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  }
  onSubmit(event) {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.error}</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange.bind(this)}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange.bind(this)}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange.bind(this)}
            numberOfMonths={1}
            isOutsideRange={() => false} // makes days in the past also available
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange.bind(this)}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
