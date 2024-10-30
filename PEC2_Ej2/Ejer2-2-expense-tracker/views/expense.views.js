class ExpenseView {
    constructor() {
        this.app = this.getElement("body");
        this.title = this.createElement("h2",{innerText:"Expense Tracker"});
        this.container = this.createElement("div",{className: "container"});
        this.subtitle = this.createElement("h4",{innerText:"Your Balance"});

        this.balance = this.createElement("h1", { id: "balance", innerText: "$0.00" });

        this.exp_container = this.createElement("div",{className:"inc-exp-container"});

        this.div_elem_plus = this.createElement("div",{className:""});
        this.div_elem_minus = this.createElement("div",{className:""});

        this.income_title = this.createElement("h4",{innerText:"Income"});
        this.expense_title = this.createElement("h4",{innerText:"Expense"});

        this.money_plus = this.createElement("p",{className:"money plus",id:"money-plus",innerText:"+$0.00"});
        this.money_minus = this.createElement("p",{className:"money minus",id:"money-minus",innerText:"-$0.00"});

        this.history_title = this.createElement("h3",{innerText:"History"});
        
        this.expense_list = this.createElement("ul",{className:"list",id:"list"});

        this.history_new_transaction = this.createElement("h3",{innerText:"Add new transaction"});

        this.form = this.createElement("form",{id:"form"});
        
        this.form_control = this.createElement("div",{className:"form-control"});
        this.text_label = this.createElement("label",{innerText:"Text", for_atr:"text"});
        this.input_text = this.createElement("input",{id:"text",type:"text",placeholder:"Enter text..."});
        this.form_control.append(this.text_label,this.input_text);

        this.form_control_amount = this.createElement("div",{className:"form-control"});
        this.amount_label = this.createElement("label", {innerHTML:"Amount <br/>(negative - expense, positive - income)",for_atr:"amount"});
        this.input_amount = this.createElement("input", {id:"amount",type:"number",placeholder:"Enter amount..."});
        this.form_control_amount.append(this.amount_label,this.input_amount);
        this.form_button = this.createElement("button", {className:"btn", innerText:"Add transaction"});
        this.form.append(this.form_control,this.form_control_amount, this.form_button);

        this.div_elem_plus.append(this.income_title, this.money_plus);
        this.div_elem_minus.append(this.expense_title, this.money_minus);

        this.exp_container.append(this.div_elem_plus,this.div_elem_minus);
        this.container.append(this.subtitle,this.balance,this.exp_container, this.history_title,this.expense_list ,this.history_new_transaction,this.form);
        this.app.append(this.title, this.container);

        this._temporaryExpenseText = "";
        this._initLocalListeners();

    }

    createElement(tag, { className = "", id = "", innerText = "",innerHTML = "", type = "", placeholder = "", for_atr = "" } = {}) {
        const element = document.createElement(tag);
        //Dividim className en un array de paraules separades i en fem spread usant ...
        if (className) element.classList.add(...className?.split(" "));
        if (id) element.id = id;
        if (innerText) element.textContent = innerText;
        if(innerHTML) element.innerHTML = innerHTML;
        if (type) element.type = type;
        if (placeholder) element.placeholder = placeholder;
        if (for_atr) element.setAttribute("for", for_atr);

        return element;
    }
    
    get _expenseText() {
        return this.input_text.value;
    }
    get _expenseAmount() {
        return this.input_amount.value;
    }

    _resetInputText() {
        this.input_text.value = "";
    }
    _resetInputAmount() {
        this.input_amount.value = "";
    }

    bindAddExpense(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            const expenseText = this._expenseText;
            const expenseAmount = this._expenseAmount;

        if (expenseText && expenseAmount) {
            handler(expenseText, expenseAmount); 
            this._resetInputText();
            this._resetInputAmount();
        } else {
            alert('Please add a text and amount');
        }
        });
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    updateBalance(expenses){
        const { balance, income, expense } = expenses.reduce(
            (totals, expense) => {
                const amount = parseFloat(expense.amount) || 0;
                totals.balance += amount;
                if (amount > 0) totals.income += amount;
                else totals.expense += amount;
                return totals;
            },
            { balance: 0, income: 0, expense: 0 }
        );
        this.balance.innerText = `$${balance.toFixed(2)}`;
        this.money_plus.innerText = `$${income.toFixed(2)}`;
        this.money_minus.innerText = `$${Math.abs(expense).toFixed(2)}`;
    }
    bindDeleteExpense(handler) {
        this.expense_list.addEventListener("click", event => {
            if (event.target.className === "delete-btn") {
                const id = event.target.parentElement.id;
                handler(id);
            }
        });
    }
    
    _initLocalListeners() {
        this.expense_list.addEventListener("input", event => {
            if (event.target.className === "editable") {
                const id = event.target.parentElement.id;
                this._temporaryExpenseText = event.target.innerText;
                
            }
        });
    }
    bindEditExpense(handler) {
        this.expense_list.addEventListener("focusout", event => {
            if (this._temporaryExpenseText) {
                const id = event.target.parentElement.id;
                handler(id, this._temporaryExpenseText);
                this._temporaryExpenseText = "";
            }
        });
    }
    
    displayExpenses(expenses) {
        this.updateBalance(expenses);
        // Delete all nodes
        while (this.expense_list.firstChild) {
            this.expense_list.removeChild(this.expense_list.firstChild);
        }
        // Show default message
        if (expenses.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Your expense history is empty.";
            this.expense_list.append(p);
        } else {
            // Create nodes
            expenses.forEach(expense => {
                const isPositive = expense.amount >= 0;
                const classType = isPositive ? "plus" : "minus";
                const rowInnerText = (isPositive ? "" : "") + expense.amount;
            
                const historyRow = this.createElement("li", { className: classType, id: expense.id});
                
                const rowSpanText = this.createElement("span", {id: "rowText", innerText: expense.text});
                rowSpanText.classList.add("editable");
                rowSpanText.contentEditable = true;

                const rowSpanAmount = this.createElement("span", {id: "rowAmount", innerText: rowInnerText });
                rowSpanAmount.classList.add("editable");
                rowSpanAmount.contentEditable = true;

                const rowButton = this.createElement("button", { className: "delete-btn", innerText: "x"});
                

                historyRow.append(rowSpanText,rowSpanAmount, rowButton);
                this.expense_list.append(historyRow);
            });
        }
        // Debugging
        console.log(expenses);
    }
}