document.querySelector('.button').addEventListener('click', () => {
    let amount = Number(document.querySelector('#amount').value);
    let term = Number(document.querySelector('#term').value);
    let rate = Number(document.querySelector('#rate').value);
    let repayment = document.querySelector('#repayment');
    let interestOnly = document.querySelector('#interestOnly');

    if (amount <= 0) {
        let input1 = document.querySelector('.input1');
        input1.classList.add('redBorder');

        let sideAmount = document.querySelector('.sideAmount');
        sideAmount.classList.add('redBack');

        let requiredAmount = document.querySelector('.requiredAmount');
        requiredAmount.style.display = 'inline';
        return
    } else if (term <= 0) {
        let input2 = document.querySelector('.input2');
        input2.classList.add('redBorder');

        let sideTerm = document.querySelector('.sideTerm');
        sideTerm.classList.add('redBack');

        let requiredTerm = document.querySelector('.requiredTerm');
        requiredTerm.style.display = 'inline';
        return
    } else if (rate <= 0) {
        let input3 = document.querySelector('.input3');
        input3.classList.add('redBorder');

        let sideRate = document.querySelector('.sideRate');
        sideRate.classList.add('redBack');

        let requiredRate = document.querySelector('.requiredRate');
        requiredRate.style.display = 'inline';
        return
    } else if (!repayment.checked && !interestOnly.checked) {
        let requiredType = document.querySelector('.requiredType');
        requiredType.style.display = 'inline';
        return
    }

    if (repayment.checked) {
        let monthlyRate = (rate / 100) / 12;

        let totalPayments = term * 12;

        let monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);

        document.querySelector('.monthlyRepayments').innerHTML = `$${monthlyPayment.toFixed(2)}`;
        document.querySelector('.totalRepayments').innerHTML = `$${(monthlyPayment * totalPayments).toFixed(2)}`;
    } else if (interestOnly.checked) {
        let monthlyRate = (rate / 100) / 12;
        let totalPayments = term * 12;
        let interestOnlyPayment = amount * monthlyRate;

        document.querySelector('.monthlyRepayments').innerHTML = `$${interestOnlyPayment.toFixed(2)}`;
        document.querySelector('.totalRepayments').innerHTML = `$${(interestOnlyPayment * totalPayments).toFixed(2)}`;
    }

    document.querySelector('.empty').style.display = 'none';
    document.querySelector('.full').style.display = 'flex';
})

document.querySelector('#clear').addEventListener('click', () => {
    location.reload()
})