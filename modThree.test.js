const { modThree, Standard, FA, binToArray } = require('./modThree');


describe('Mod Function Test', () => {
    test('Get correct mod of binary string', () => {
        expect(modThree('1101')).toBe(1);
        expect(modThree('1010')).toBe(1);
        expect(modThree('1011')).toBe(2);
        expect(modThree('1001')).toBe(0);
    })
})


describe('Standard Function Test', () => {
    test('Get correct FSM output', () => {
        expect(Standard('110')).toBe(0);
        expect(Standard('1010')).toBe(1);
        expect(Standard('1011')).toBe(2);
    })
})


describe('FA Advanced Test', () => {
    const setFiniteState = ['S0', 'S1', 'S2'];
    const setInputs = ['0', '1'];
    const setInitial = 'S0';
    const setStates = {
        'S0': 0,
        'S1': 1,
        'S2': 2
    };
    const setTransitionFunc = {
        'S0': { '0': 'S0', '1': 'S1' },
        'S1': { '0': 'S2', '1': 'S0' },
        'S2': { '0': 'S1', '1': 'S2' }
    };

    const faModThree = new FA(setFiniteState, setInputs, setInitial, setStates, setTransitionFunc)

    test ('Get correct final output from dynamic FSM', () => {
        expect(faModThree.execute("110")).toBe(0);
        expect(faModThree.execute("1010")).toBe(1);
        expect(faModThree.execute("1011")).toBe(2);
    })
})