
// step 1. add event listener to the deposit button
document.getElementById('btn-submit').addEventListener('click', function () {
    
    // get the deposit amount from the deposit field
    // for input filed use .value to get value inside the input 

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // change default string to number
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

    // step 3. get the current deposit total
    // for non-input element other than input or textarea use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const perviousDepositTotalString = depositTotalElement.innerText;
    // change default string to number
    const perviousDepositTotal = parseFloat(perviousDepositTotalString);

    const currentDepositTotal = perviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    
    // clear the deposit input value
    depositField.value = '';





})