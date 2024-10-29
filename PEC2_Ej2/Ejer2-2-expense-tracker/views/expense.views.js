class ExpenseView {
    constructor() {
        this.app = this.getElement("#root");
        this.title = this.createElement("h2",{innerText:"Expense Tracker"});
        this.container = this.createElement("div",{className: "container"});

        this.subtitle = this.createElement("h4",{innerText:"Your Balance"});

        this.balance = this.createElement("h1", { id: "balance", innerText: "$0.00" });
        this.balance = this.createElement("h1",{id: "balance", innerText:"$0.00"});

        this.exp_container = this.createElement("div",{className:"inc-exp-container"});

        this.div_elem_plus = this.createElement("div",{className:""});
        this.div_elem_minus = this.createElement("div",{className:""});

        this.income_title = this.createElement("h4",{innerText:"Income"});
        this.expense_title = this.createElement("h4",{innerText:"Expense"});

        this.money_plus = this.createElement("p",{className:"money plus",id:"money-plus",innerText:"+$0.00"});
        this.money_minus = this.createElement("p",{className:"money minus",id:"money-minus",innerText:"-$0.00"});

        this.history_title = this.createElement("h3",{innerText:"History"});
        this.history_list = this.createElement("ul",{className:"list",id:"list"});

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
        this.container.append(this.subtitle,this.balance,this.exp_container, this.history_title,this.history_list ,this.history_new_transaction,this.form);
        this.app.append(this.title, this.container);

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
    getElement(selector) {
        const element = document.querySelector(selector);
    
        return element;
    }
    displayExpenses(expenses) {
        
    }

}