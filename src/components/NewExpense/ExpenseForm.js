import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // first solution

  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  //another solution
  // const [input, setInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    // first solution
    setTitle(event.target.value);
    //another solution
    // setInput({ ...input, title: event.target.value }); good
    // setInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // }); perfect but dont use it use the first solution
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setInput({ ...input, amount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setInput({ ...input, date: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onExpenseForm(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //this aprouach called 2-way binding and it let the field become empty when we submit
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //this aprouach called 2-way binding and it let the field become empty when we submit
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate} //this aprouach called 2-way binding and it let the field become empty when we submit
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
