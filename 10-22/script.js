console.log("HELLO WORLD!!")

//document.addEventListener("click", function(){ ... }) 

//event listener 
//document.onclick = function (event) {
// console.log(event)
// console.log("I clicked the document")
//}




//Multiple items 
// let buttons = document.querySelectorAll('button')
// for (let button of buttons) {
//     //Attach listener to each item
//     button.onclick = function (event) {
//         console.log(this, event)
//     }
// }


// document.querySelector("h4").onclick = function (e) {
//     console.log(this)
// }



// document.querySelector(".content").onmouseover = function (e) {
//     console.log("I moused over the div with class content")
// }





//document.querySelector('button').onclick = function (event) {


// let fruit = document.querySelector('#fruit')
// console.log(fruit.innerHTML)
// fruit.innerHTML = 'peach'  
//document.querySelector('#fruit').innerHTML = 'strawberries'


//}


//Get all the buttons
let buttons = document.querySelectorAll('button')
for (let button of buttons) {
    //For each button add an event listener
    button.onclick = function (event) {

        //Get this text when i click it. 
        let fruit = this.innerHTML;

        //Find the div with id fruit and add the text 
        document.querySelector('#fruit').innerText = fruit
    }
}