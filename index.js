const washBtn = document.getElementById('wash-btn')
const mowBtn = document.getElementById('mow-btn')
const pullBtn = document.getElementById('pull-btn')
const costList = document.getElementById('cost-list')
const taskList = document.getElementById('task-list')
const totalAmount = document.getElementById('totalAmount-el')
const lightBlueBtn = document.getElementById('lightBlue-btn')

let serviceArray = []
let costArray =[]
let totalCost = 0
let alreadyWashed = false
let alreadyMowed = false
let alreadyPulled = false
console.log(alreadyWashed)

function render(){
    taskList.innerHTML += `${serviceArray} <br>`
    costList.innerHTML += `${costArray} <br>`
    totalAmount.innerHTML = `$ ${totalCost}`
    serviceArray = []
    costArray = []

}


washBtn.addEventListener('click', function(){
    if (alreadyWashed === false){
        serviceArray.push('Wash Car')
        costArray.push('$ 10')
        totalCost += 10
        alreadyWashed = true
        render()
        
    } else {

    }
})

mowBtn.addEventListener('click', function(){
    if (alreadyMowed === false){
        serviceArray.push('Mow Lawn')
        costArray.push('$ 20')
        totalCost += 20
        alreadyMowed = true
        render()
    } else {

    }
})

pullBtn.addEventListener('click', function(){
    if (alreadyPulled === false){
        serviceArray.push('Pull Weeds')
        costArray.push('$ 30')
        totalCost += 30
        alreadyPulled = true
        render()
    } else {
        
    }
})

lightBlueBtn.addEventListener('click', function(){
    alert("Order Complete")
    taskList.innerHTML = ``
    costList.innerHTML = ``
    totalAmount.innerHTML = ``
    serviceArray = []
    costArray = []
    totalCost = 0
})


