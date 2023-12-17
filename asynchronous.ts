function getData(id: number){
    const prom = new Promise<void>((resolve) => { 
        setTimeout(() => { 
            console.log('Async task started '+ id);
            resolve(); 
        }, 4000);
    });
    return prom;
}

const temp = getData(1);

function greet(name:string, greeting=undefined) {
    if (name === undefined || greeting === undefined) {
        console.log('One or more parameters are undefined');
    } else {
        console.log(`${greeting}, ${name}!`);
    }
}

greet('John');
temp.then(() => {});