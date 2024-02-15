
// step 1. add event listener to the deposit button
document.getElementById('btn-submit').addEventListener('click', function () {
    
    // get the deposit amount from the deposit field
    // for input filed use .value to get value inside the input 

    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    // console.log(depositAmount);

    // step 3. get the current deposit total
    // for non-input element other than input or textarea use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
    





})