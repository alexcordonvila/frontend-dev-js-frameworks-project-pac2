class ExpenseController {
    constructor(service, view) {
        this.service = service;
        this.view = view;
        
        this.service.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindDeleteTodo(this.handleDeleteExpense);

        // Display initial expenses
        this.onExpenseListChanged(this.service.expenses);
    }

    onExpenseListChanged = expenses => {
        this.view.displayExpenses(expenses);
    };

    handleAddExpense = (expenseText, expenseAmount) => {
        this.service.addExpense(expenseText, expenseAmount);
    };

    handleDeleteExpense = id =>{
        console.log(id);
        this.service.deleteExpense(id);
    };
}