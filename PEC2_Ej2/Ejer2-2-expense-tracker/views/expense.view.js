class TodoView {
    constructor() {
    }


    getElement(selector) {
        const element = document.querySelector(selector);
    
        return element;
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }
    displayExpenses(expenses) {
        
    }

}