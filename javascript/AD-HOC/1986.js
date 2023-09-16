var input = "7\n73 6F 63 6F 72 72 6F" //Input
var lines = input.split('\n')

let messageHex = lines[1].split(' ')
let message = []

for (var hex of messageHex){
    message.push(String.fromCharCode(parseInt(hex, 16)))
}

console.log(message.join('')) //Print 'socorro'
