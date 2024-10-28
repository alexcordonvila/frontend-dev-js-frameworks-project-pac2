class ExpenseService {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map(
        expense => new Expense(expense)
      );
    }

    addExpense({text, amount}){
      this.expenses.push(new Expense({ text, amount }));

    }
    deleteExpense(){
      this.expenses = this.expenses.filter(({ id }) => id !== _id);

    }
    editExpense(){

    } 
}