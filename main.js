const promiseArr = [doSomething(10000, 'P1'), doSomething(12000, 'P2')];

function doSomething(val, name) {
    return new Promise((resolve, reject) => {
        for(i = 0; i < val; i++){
            if(i % 100 == 0)
                console.log(name, ': ', i);
        }
        resolve('End')
    })
}

async function main(){
    let respone = await Promise.all(promiseArr);
}

main();