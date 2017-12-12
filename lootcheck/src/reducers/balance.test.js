import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const action = { type: constants.SET_BALANCE, balance };

        expect(balanceReducer(undefined, action))
            .toEqual(balance);
    });

    it('deposits into the balance', () => {
        const initialState = 5;
        const deposit = 10;
        const action = { type: constants.DEPOSIT, deposit };

        expect(balanceReducer(initialState, action))
            .toEqual(deposit+initialState);
    });

    it('withdraw from the balance', () => {
        const initialState = 15;
        const withdraw = 10;
        const action = { type: constants.WITHDRAW, withdraw };

        expect(balanceReducer(initialState, action))
            .toEqual(initialState-withdraw);
    });
})