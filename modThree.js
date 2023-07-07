const modThree = bin => {
    let unsigned = 0;

    // for (let i = 0; i < bin.length; i++) {
    //     unsigned = unsigned * 2 + (bin[i] === '1' ? 1 : 0)
    // }

    for (let i = 0; i < bin.length; i++) {
        unsigned = (unsigned << 1) | (bin[i] === '1' ? 1 : 0);
    }

    return unsigned % 3
}


const Standard = (bin) => {

    const arrayString = [];

    for (let i = 0; i < bin.length; i++) {
        arrayString.push(Number(bin[i]))
    }

    function s0(index, next) {
        if (arrayString[next] === undefined) return 0;
        const shift = next + 1;

        return index === 0 ? s0(arrayString[shift], shift) : s1(arrayString[shift], shift);
    }

    function s1(index, next) {
        if (arrayString[next] === undefined) return 1;
        const shift = next + 1;
        
        return index === 0 ? s2(arrayString[shift], shift) : s0(arrayString[shift], shift);
    }
    
    function s2(index, next) {
        if (arrayString[next] === undefined) return 2;
        const shift = next + 1;

        return index === 0 ? s1(arrayString[shift], shift) : s2(arrayString[shift], shift)
    }

    return s0(arrayString[0], 0);
}

class FA {
    constructor(finiteState, finiteInput, initialState, setStates, transitionFunc) {
        this.finiteState = finiteState;
        this.finiteInput = finiteInput;
        this.initialState = initialState;
        this.setStates = setStates;
        this.transitionFunc = transitionFunc;
    }

    execute(args) {
        let state = this.initialState;
        for (let char of this.binaryToArray(args)) {
            state = this.transitionFunc[state][char];
        }

        return this.setStates[state];
    }

    binaryToArray(str) {
        return str.split('').map(Number)
    }
}

module.exports = { modThree, Standard, FA };