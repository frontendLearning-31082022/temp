const from= 1;
const n=6;

for (let index = 1; index <= n; index++) {
    const first =index;
    for (let inner = 1; inner <= n; inner++) {
        const second = inner;
        console.log(`${first} * ${second} = ${first*second}`);
    }
}