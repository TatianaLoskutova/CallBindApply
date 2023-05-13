function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Tanya',
    age: 34,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// вот так можно поменять контекст через Bind. Также параметры можно сразу записать через запятую
// Плюс ее нужно как функцию вызвать когда нам нужно
person.logInfo.bind(lena, 'Front-end', '8-999')()

// Через метод Call. Тут не нужно как функцию вызывать. Сразу заработает
person.logInfo.call(lena, 'Front-end', '8-999')

// Через метод Apply. Тут всегда только два параметра, поэтому в массиве передаем. Тоже сразу вызывается
person.logInfo.apply(lena, ['Front-end', '8-999'])

// ==============
const array = [1, 2, 3, 4, 5];

/*function multBy(arr, n) {
    return arr.map(function(i) {
    return i * n
    })
}
console.log(multBy(array, 5))*/


Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}
console.log(array.multBy(2));



