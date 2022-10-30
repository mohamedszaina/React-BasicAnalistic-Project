import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense = props.items.filter((expenseItem) => {
    return expenseItem.date.getFullYear().toString() === filteredYear;
  });

  //third way to Outputting Conditional Content (internal way)
  // let expenseContent = <p>No items yet!</p>;
  // if (filterExpense.length > 0) {
  //   expenseContent = filterExpense.map((expenseItem) => (
  //     <ExpenseItem
  //       key={expenseItem.id}
  //       title={expenseItem.title}
  //       amount={expenseItem.amount}
  //       date={expenseItem.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterHandler={filterHandler}
        />
        {
          //first way to Outputting Conditional Content (internal way)
          /* {filterExpense.length === 0 ? (
          <p>No items yet!</p>
        ) : (
          filterExpense.map((expenseItem) => (
            <ExpenseItem
              key={expenseItem.id}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          ))
        )} */
        }

        {
          //second way to Outputting Conditional Content (internal way)
          /* {filterExpense.length === 0 && <h1>No items yet!</h1>}
        {filterExpense.length > 0 &&
          filterExpense.map((expenseItem) => (
            <ExpenseItem
              key={expenseItem.id}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          ))} */
        }

        {
          //third way to Outputting Conditional Content (internal way)
          // expenseContent
        }
        {
          //Fourth way to Outputting Conditional Content (External way)
        }
        <ExpensesChart expenses={filterExpense} />
        <ExpenseList items={filterExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
