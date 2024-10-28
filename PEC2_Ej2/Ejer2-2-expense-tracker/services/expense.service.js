class Expenseervice {
    constructor() {
      this.expenses = (JSON.parse(localStorage.getItem("expenses")) || []).map(
        expense => new Expense(expense)
      );
    }



    addExpense(){

    }
    editExpense(){

    }
    deleteExpense(){
        
    }
}