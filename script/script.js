class Counter{
    constructor(container, counterText, minus = "−", plus = "+", reset = "Reset") {
        this.container = container;
        this.counterText = counterText;
        this.minus = minus;
        this.plus = plus;
        this.reset = reset;
        this.__init();
    }
    __init(){
        const container = document.querySelector(`.${this.container}`);
        const counterText = container.querySelector(`.${this.counterText}`);

        container.addEventListener("click", (event) => {
            if(event.target.innerHTML === this.minus){
                this.minusFunc(counterText);
            }
            else if (event.target.innerHTML === this.plus){
                this.plusFunc(counterText);
            }
            else if (event.target.innerHTML === this.reset){
                this.resetFunc(counterText);
            }
        })
    }
    minusFunc(counterText){
        counterText.textContent = +counterText.textContent - 1;
    }
    plusFunc(counterText){
        counterText.textContent = +counterText.textContent + 1;
    }
    resetFunc(counterText){
        counterText.textContent = 0;
    }
}

const counter = new Counter("counter__content", "counter__text");