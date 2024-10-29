class ExpenseController {
    constructor(service, view) {
        this.service = service;
        this.view = view;
        
        this.service.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);


        // Display initial expenses
        this.onExpenseListChanged(this.service.expenses);
    }

    onExpenseListChanged = expenses => {
        this.view.displayExpenses(expenses);
    };

    handleAddExpense = (expenseText, expenseAmount) => {
        this.service.addExpense(expenseText, expenseAmount);
    };
}