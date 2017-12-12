import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';


describe('Wallet', () => {
    const props = { balance: 20 };
    const wallet = shallow(<Wallet  {...props} />);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balancefrom props', () => {
        expect(wallet.find('.balance').text()).toBe("Wallet balance: 20");
    });
});