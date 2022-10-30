import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setIsAdding(false);
  };
  const startAddingHandler = () => {
    setIsAdding(true);
  };
  const endAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={startAddingHandler}>Add Expense</button>}
      {isAdding && (
        <ExpenseForm
          onExpenseForm={saveExpenseDataHandler}
          onCancel={endAddingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
