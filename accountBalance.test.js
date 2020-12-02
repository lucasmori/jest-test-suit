const accountBalance = require('./accountBalance')

describe('Test suit for account', () => {
    it('Should return account balance', () => {
        const transactions = [{
                name: 'Salary',
                type: 'income',
                value: 5000.00,
            },
            {
                name: 'Keyboard',
                type: 'outcome',
                value: 550.00,
            },
            {
                name: 'Headset',
                type: 'outcome',
                value: 600.00,
            }
        ];

        expect(accountBalance.balance(transactions)).toEqual({
            income: {
                names: ['Salary'],
                value: 5000.00
            },
            outcome: {
                names: ['Keyboard', 'Headset'],
                value: 1150.00
            },
            total: {
                names: ['Salary', 'Keyboard', 'Headset'],
                value: 3850.00
            }
        })
    });
});