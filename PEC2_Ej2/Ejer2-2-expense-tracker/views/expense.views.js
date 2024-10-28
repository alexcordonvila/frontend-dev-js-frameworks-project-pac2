class ExpenseView {
    constructor() {
        this.app = this.getElement("#root");
        this.title = this.createElement("h2");
        this.title.textContent = "Expense Tracker";
        this.container = this.createElement("div","container");

        this.subtitle = this.createElement("h4");
        this.balance = this.createElement("h1",null,"balance");
        this.exp_container = this.createElement("div","inc-exp-container");

        this.subtitle.textContent = "Your Balance";
        this.balance.textContent = "$0.00";


        this.div_elem_plus = this.createElement("div");
        this.div_elem_minus = this.createElement("div");

        this.income_title = this.createElement("h4");
        this.expense_title = this.createElement("h4");

        this.money_plus = this.createElement("p","money plus","money-plus");
        this.money_minus = this.createElement("p","money minus","money-minus");


        this.income_title.textContent = "Income";
        this.expense_title.textContent = "Expense";
        this.money_plus.textContent ="+$0.00";
        this.money_minus.textContent ="-$0.00";


        this.div_elem_plus.append(this.income_title, this.money_plus);
        this.div_elem_minus.append(this.expense_title, this.money_minus);

        this.exp_container.append(this.div_elem_plus,this.div_elem_minus);
        this.container.append(this.subtitle,this.balance,this.exp_container);
        this.app.append(this.title, this.container);

    }


    getElement(selector) {
        const element = document.querySelector(selector);
    
        return element;
    }
    createElement(tag, className, idName) {
        const element = document.createElement(tag);
        //Dividim className en un array de paraules separades i en fem spread usant ...
        if (className) element.classList.add(...className.split(" "));
        
        if (idName) element.id = idName;
        return element;
    }
    displayExpenses(expenses) {
        
    }

}