


//Get Input Feild With Function
const getInputValue = function (inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear Input Feild 
    inputFeild.value = '';
    return inputAmount;
}


// Update Total Value With Function
const UpdateTotalFiled = function (totalFiledId, amount) {
    const totalElement = document.getElementById(totalFiledId);
    const totalText = totalElement.innerText;
    const PreviosTotalAmount = parseFloat(totalText);
    totalElement.innerText = PreviosTotalAmount + amount;
}
// Add Even On Deposit Button 
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposite-input');
    if (depositAmount > 0) {
        // Call UpdateTotalFiled Function Here
        UpdateTotalFiled('deposit-total', depositAmount)
        // Call UpdateBalence Function Here
        UpdateBalence(depositAmount, true);
    }
});







const getCurrentBalence = function () {
    const TotalBalenceElement = document.getElementById('balence-total');
    const TotalBalenceText = TotalBalenceElement.innerText;
    const TotalBalence = parseFloat(TotalBalenceText);
    return TotalBalence;
}

// Update Balence With Function
const UpdateBalence = function (amount, isAdd) {
    const TotalBalenceElement = document.getElementById('balence-total');
    const TotalBalence = getCurrentBalence();
    if (isAdd == true) {
        TotalBalenceElement.innerText = TotalBalence + amount;
    }
    else {
        TotalBalenceElement.innerText = TotalBalence - amount;
    };
}

// Add even on withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalence = getCurrentBalence();
    if (withdrawAmount > 0 && withdrawAmount < currentBalence) {
        // Call UpdateTotalFiled Function Here
        UpdateTotalFiled('withdraw-total', withdrawAmount)
        // Call UpdateBalence Function Here
        UpdateBalence(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalence) {
        alert('Please Write Amount Under Balence')
    }
});

