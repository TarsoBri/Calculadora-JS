
    const display = document.querySelector('#displayInput');
    const btnEqual = document.querySelector('.equal');
    const btnPoint = document.querySelector('.point');
    const btnsNumbers = document.querySelectorAll('.num');
    const btnsOperators = document.querySelectorAll('.operator');

    var operator = null;
    var currentValue = '';
    var previousValue = '';
    var calculating = false;


    
    
    function updatyDisplay(){
        display.value = currentValue;
    }
    
    function insertNumber(event){
        
        if(calculating){
            currentValue = event.target.textContent;
            calculating = false;
        } else{
            currentValue += event.target.textContent;
        }
        
        updatyDisplay();
    }

    function insertOperador (event){
        if (currentValue !== "") {
            if (!calculating) {
                if (operator !== null){
                    calculate()
                };
                previousValue = currentValue;
                currentValue = "";
          }
          operator = event.target.textContent;
        }
    };
    
    function insertPoint(){
        if(currentValue.indexOf('.') === -1){
            console.log(currentValue.indexOf('.'))
            currentValue += '.';
            updatyDisplay();
        }
    }
    
    function calculate(){
        var result = null;
        var previousValueConverted = parseFloat(previousValue);
        var currentValueConverted = parseFloat(currentValue);

        switch(operator){
            case '+':
                result = previousValueConverted + currentValueConverted;
                break;
            case '-':
                result = previousValueConverted - currentValueConverted;
                break;
            case '*':
                result = previousValueConverted * currentValueConverted;
                break;
            case '/':
                result = previousValueConverted / currentValueConverted;
                break;
        }

        currentValue = String(result);
        console.log(currentValue);
        previousValue = currentValue;
        calculating = true;
        updatyDisplay();
    }
    
    
    btnsNumbers.forEach((btn) => btn.addEventListener('click', insertNumber));
    btnsOperators.forEach((btn) => btn.addEventListener('click', insertOperador));
    btnPoint.addEventListener('click', insertPoint);
    btnEqual.addEventListener('click', calculate);
    