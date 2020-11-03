console.log("OOP")

// let animal = {
//     flysEaten: 0,
//     pastColors: [],
//     name: 'Chameleon',
//     addColor: function (color) {
//         this.pastColors.push(color)
//     },
//     eat: function () {
//         console.log(this)
//         this.flysEaten++
//     },
//     morph: function () {
//         let color = this.pastColors[Math.floor(Math.random() * this.pastColors.length)]
//         console.log(color)
//         document.querySelector('div').style.backgroundColor = color
//     }
// }









//Class is like an Object but it has additional powers 
class Animal {

    //Constructor is what is different about each class, and what properties it's initially given
    constructor(name, selector, weight) {

        //This.name maybe different depending on what you put down in here 
        this.name = name
        this.selector = selector
        this.weight = weight
        this.alive = true
    }
    eat = () => {
        console.log(`nom nom... ${this.name} is eating... nom`)
        this.weight += 50
        console.log(`now i weight ${this.weight}`)
    }
    sleep = () => {
        console.log('zzzzzzzz')
    }

}

class Chameleon extends Animal {
    constructor(name, selector, weight) {
        super(name, selector, weight)
        this.pastColors = []
    }
    //All these are just methods that every instance will have
    addColor = (color) => {
        this.pastColors.push(color)
    }
    morph = () => {
        let color = this.pastColors[Math.floor(Math.random() * this.pastColors.length)]
        document.querySelector(this.selector).style.backgroundColor = color
    }

}

let cham = new Chameleon('Chameleon', 'div', 100)

cham.eat()
cham.addColor('pink');
cham.addColor('red')
cham.addColor('green')
cham.morph()




class Penguin extends Animal {
    constructor(name, selector, weight, food) {
        super(name, selector, weight, food)
    }
}

let penguino = new Penguin('Penguino', 'div:nth-child(2)', 50)

penguino.eat()
penguino.eat()
penguino.eat()
penguino.eat()









// let animal2 = {
//     flysEaten: 0,
//     pastColors: [],
//     name: 'Chameleon',
//     addColor: function (color) {
//         this.pastColors.push(color)
//     },
//     eat: function () {
//         console.log(this)
//         this.flysEaten++
//     },
//     morph: function () {
//         let color = this.pastColors[Math.floor(Math.random() * this.pastColors.length)]
//         console.log(color)
//         document.querySelector('div:nth-child(2)').style.backgroundColor = color
//     }
// }



