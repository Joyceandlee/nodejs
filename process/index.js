// console.log(process)
let arr = ["你是谁？", "几岁了", "男还是女？"];
let index = 0;

process.stdout.write(arr[index])

process.stdin.on('data', data => {
    if (index < arr.length) {
        index++;
        process.stdout.write(arr[index])
        if (index == 3) {
            console.log(index)
        //    process.stdout.write(data.toString())
        }

    } else {
        process.exit()
    }
    // if(index<arr.length){

    // }


    // process.stdout.write('你是谁?????')
    // process.stdout.write(data.toString())


})

process.on('exit', () => {
    console.log("Nice to meet you")
})