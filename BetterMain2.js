const CbalanceText = document.getElementById('CBalance');
const SbalanceText = document.getElementById('SBalance');
const depositButton = document.getElementById('DepositButton');
const withdrawButton = document.getElementById('WithdrawButton');
const transferButton = document.getElementById('TransferButton');

let CheckingsBalance = 5000;
let SavingsBalance = 10000;

CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;

function normalizeAccountInput(input) {
  return input ? input.trim().toUpperCase() : '';
}

// When the user clicks the deposit button, they are prompted to enter the account type and amount to deposit. The balance is updated accordingly.
depositButton.addEventListener('click', function() {
  const accountType = normalizeAccountInput(prompt('Enter the account type (Checkings[Enter C]/Savings[Enter S]):'));
  const depositAmount = parseFloat(prompt('Enter the amount to deposit:'));

  if (!depositAmount || depositAmount <= 0 || isNaN(depositAmount)) {
    alert('Enter a valid positive deposit amount.');
    return;
  }

  if (accountType === 'C') {
    CheckingsBalance += depositAmount;
    CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
  } else if (accountType === 'S') {
    SavingsBalance += depositAmount;
    SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
  } else {
    alert('Account type must be C or S.');
  }
});

// When the user clicks the withdraw button, they are prompted to enter the account type and amount to withdraw. The balance is updated accordingly.
withdrawButton.addEventListener('click', function() {
  const accountType = normalizeAccountInput(prompt('Enter the account type (Checkings[Enter C]/Savings[Enter S]):'));
  const withdrawAmount = parseFloat(prompt('Enter the amount to withdraw:'));

  if (!withdrawAmount || withdrawAmount <= 0 || isNaN(withdrawAmount)) {
    alert('Enter a valid positive withdrawal amount.');
    return;
  }

  if (accountType === 'C') {
    if (withdrawAmount <= CheckingsBalance) {
      CheckingsBalance -= withdrawAmount;
      CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
    } else {
      alert('Insufficient Checkings funds.');
    }
  } else if (accountType === 'S') {
    if (withdrawAmount <= SavingsBalance) {
      SavingsBalance -= withdrawAmount;
      SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
    } else {
      alert('Insufficient Savings funds.');
    }
  } else {
    alert('Account type must be C or S.');
  }
});

// When the user clicks the transfer button, they are prompted to enter the account type to transfer from, the account type to transfer to, and the amount to transfer. The balances are updated accordingly.
transferButton.addEventListener('click', function() {
  const fromAccount = normalizeAccountInput(prompt('Enter the account to transfer from (Checkings[Enter C]/Savings[Enter S]):'));
  const toAccount = normalizeAccountInput(prompt('Enter the account to transfer to (Checkings[Enter C]/Savings[Enter S]):'));
  const transferAmount = parseFloat(prompt('Enter the amount to transfer:'));

  if (!transferAmount || transferAmount <= 0 || isNaN(transferAmount)) {
    alert('Enter a valid positive transfer amount.');
    return;
  }

  if (fromAccount === 'C' && toAccount === 'S') {
    if (transferAmount <= CheckingsBalance) {
      CheckingsBalance -= transferAmount;
      SavingsBalance += transferAmount;
      CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
      SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
    } else {
      alert('Insufficient Checkings funds.');
    }
  } else if (fromAccount === 'S' && toAccount === 'C') {
    if (transferAmount <= SavingsBalance) {
      SavingsBalance -= transferAmount;
      CheckingsBalance += transferAmount;
      CbalanceText.textContent = `$${CheckingsBalance.toFixed(2)}`;
      SbalanceText.textContent = `$${SavingsBalance.toFixed(2)}`;
    } else {
      alert('Insufficient Savings funds.');
    }
  } else {
    alert('Transfer must be from C to S or S to C.');
  }
});
