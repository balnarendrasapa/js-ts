function getData(id: number){
    const prom = new Promise<number>((resolve) => { 
        setTimeout(() => { 
            console.log('Async task started '+ id);
            resolve(345); 
        }, 4000);
    });
    return prom;
}
const temp = getData(1);
console.log(temp);
async function main() {

    console.log(await temp);
    console.log("abc");
}

(async () => {
    await main();
    console.log("def");
})();

console.log("ghi");