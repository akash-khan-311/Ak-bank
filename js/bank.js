
function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const inputAmount = parseFloat(inputAmountText);
    inputFeild.value = '';
    return inputAmount;
}





// Add Even Listener On Deposit Button 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Get Deposit Input Velue 

    const NewAmount = getInputValue('deposite-input')

    // Get Deposit Output

    const depositTotal = document.getElementById('deposit-total');

    const previuosDepositAmount = depositTotal.innerText;
    const previuosDepositAmount2 = parseFloat(previuosDepositAmount);
    const newDepositAmount = NewAmount;

    const TotalDepositAmount = previuosDepositAmount2 + newDepositAmount;

    depositTotal.innerText = TotalDepositAmount;

    // uptade balence amount 
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const newBalence = parseFloat(balenceTotalText);
    const totalBalenceAmount = newBalence + newDepositAmount;

    balenceTotal.innerText = totalBalenceAmount;



    //clear the input feild 



});


// Add even listener on withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const NewWithdrawTotal = parseFloat(withdrawTotalText);


    const NewWithdrawAmount = getInputValue('withdraw-input')

    const TotalWithdrawAmount = NewWithdrawTotal + NewWithdrawAmount;

    withdrawTotal.innerText = TotalWithdrawAmount;

    // Update Balence Account 
    const MainBalenceTotal = document.getElementById('balence-total');
    const MainBalenceText = MainBalenceTotal.innerText;
    const BalenceAmount = parseFloat(MainBalenceText);


    const totalBalence = BalenceAmount - NewWithdrawAmount;

    MainBalenceTotal.innerText = totalBalence;







})