/**
 * @class Service
 *
 * Manages the data of the application.
 */

class ExpenseService {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map(
        expense => new Expense(expense)
      );
    }

    bindExpenseListChanged(callback) {
      this.onExpenseListChanged = callback;
    }

    _commit(expenses) {
      this.onExpenseListChanged(expenses);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    addExpense(expenseText, expenseAmount){
      this.expenses.push(new Expense({ text: expenseText, amount: expenseAmount }));
      this._commit(this.expenses);
    }
    deleteExpense(_id){
      this.expenses = this.expenses.filter(({ id }) => id !== _id);
      this._commit(this.expenses);
    }

    editExpense(id, updatedText,updateAmount) {
      this.expenses = this.expenses.map(expense =>
        expense.id === id
          ? new Expense({
              ...expense,
              text: (updatedText !== null && updatedText !== undefined) ? updatedText : expense.text,
              amount: (updateAmount !== null && updateAmount !== undefined) ? updateAmount : expense.amount
            })
          : expense
      );
    
      this._commit(this.expenses);
    }
}