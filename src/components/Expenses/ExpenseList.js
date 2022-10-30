import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses yet!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
