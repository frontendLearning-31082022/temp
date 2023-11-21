function multiply(number) {
    const first = 1;

    const firstArr = allNumbers(first, number);
    const secondArr = firstArr;
    const multuplyTable = generateMultiplyTable(firstArr, secondArr);
    multuplyTable.forEach(x => console.log(x));
}
function allNumbers(first, number) {
    if (first != 1) throw new Error('not created non from 1 numbers');

    return Array.from(Array(number).keys()).map(x => x + 1);
}

function generateMultiplyTable(firstArr, secondArr) {
    let result = [];
    firstArr.forEach((e) => {
        const oneLoop = secondArr.map(x => `${e} * ${x} = ${x * e}`);
        result = result.concat(oneLoop);
    });
    return result;
}

const n = 6;
multiply(n);