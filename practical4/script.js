function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Prevent consecutive operators
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
        alert('Invalid consecutive operators!');
        return; 
    }
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display').value;
    
    // Check for invalid expressions
    if (/[^0-9+\-*/.]/.test(display)) {
        alert('Invalid input detected!');
        clearDisplay();
        return;
    }
    
    try {
        const result = eval(display);
        if (isNaN(result) || !isFinite(result)) {
            alert('Invalid Calculation!');
            clearDisplay();
        } else {
            document.getElementById('display').value = result;
        }
    } catch (error) {
        alert('Error in calculation!');
        clearDisplay();
    }
}
function squareNumber() {
    const num = prompt('Enter a number to square:');
    
    if (!isNaN(num) && num !== null && num !== '') {
        const square = num * num;
        alert(`Square of ${num} is: ${square}`);
    } else {
        alert('Invalid input! Please enter a valid number.');
    }
}