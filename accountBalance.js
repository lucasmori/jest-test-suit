module.exports = {
    balance: transactions =>
        transactions.reduce((acc, transaction) => {
            switch (transaction.type) {
                case 'income':
                    acc.income.value += transaction.value;
                    acc.income.names.push(transaction.name);
                    break;
                case 'outcome':
                    acc.outcome.value += transaction.value;
                    acc.outcome.names.push(transaction.name);
                    break;
            }
            acc.total.names.push(transaction.name)
            acc.total.value = acc.income.value - acc.outcome.value;
            return acc;
        }, { income: { names: [], value: 0 }, outcome: { names: [], value: 0 }, total: { names: [], value: 0 } })
}