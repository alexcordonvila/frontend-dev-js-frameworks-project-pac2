/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class ExpenseController {
    constructor(service, view) {
        this.service = service;
        this.view = view;
        
        this.service.bindExpenseListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindEditExpense(this.handleEditExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);

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
        this.service.deleteExpense(id);
    };
    handleEditExpense = (id, expenseText) => {
        this.service.editExpense(id, expenseText);
    };

    
}