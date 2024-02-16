
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // get the deposit amount from the deposit field
    // for input filed use .value to get value inside the input 

    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // change default string to number
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount)


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const perviousWithdrawTotalString = withdrawTotalElement.innerText;
    // change default string to number
    const perviousWithdrawTotal = parseFloat(perviousWithdrawTotalString);
    // add number total ballance
    const currentWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal ;

    // clear the deposit input value
    withdrawField.value = '';


    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceTotalString);
    const currentBalanceTotal = perviousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})
