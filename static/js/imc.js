const inptPeso = document.querySelector('#peso')
const inptAltura = document.querySelector('#altura')
const inptIdade = document.querySelector('#idade')
const inptHomem = document.querySelector('#homem')
const inptMulher = document.querySelector('#mulher')
const inptSexo = document.querySelector('#sexo')
const btn = document.querySelector('#btn')
const resultados = document.querySelector('#resultado')
const atividade = document.querySelector('#atividade')

const sedentario = document.querySelector('#sedentario')
const leveA = document.querySelector('#leveA')
const moderado = document.querySelector('#moderado')
const altoA = document.querySelector('#altoA')
const extremoA = document.querySelector('#extremoA')

function calcTmb(){
    if(inptSexo.value === inptHomem.value){
        if(atividade.value === sedentario.value){
            resultados.innerHTML = ''
            let proteina = Number(inptPeso.value) * 0.8
            let resul = 1.2 * resultadoHomem() 
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
            resultados.appendChild(p).innerHTML += `<br>Recomendado consumo de : <b>${proteina.toFixed(2)}</b> g de Proteina Por dia`
        } 
        if(atividade.value === leveA.value){
            resultados.innerHTML = ''
            let resul = 1.375 * resultadoHomem()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }
        if(atividade.value === moderado.value){
            resultados.innerHTML = ''
            let resul = 1.55 * resultadoHomem()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }
        if(atividade.value === altoA.value){
            resultados.innerHTML = ''
            let resul = 1.725 * resultadoHomem()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }
        if(atividade.value === extremoA.value){
            resultados.innerHTML = ''
            let resul = 1.9 * resultadoHomem()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }

    }
    else if(inptSexo.value === inptMulher.value){
        if(atividade.value === sedentario.value){
            resultados.innerHTML = ''
            let resul = 1.2 * resultadoMulher() 
            let proteina = Number(inptPeso.value) * 0.8
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
            resultados.appendChild(p).innerHTML += `<br>Recomendado consumo de : <b>${proteina.toFixed(2)}</b> g de Proteina Por dia`
        } 
        if(atividade.value === leveA.value){
            resultados.innerHTML = ''
            let resul = 1.375 * resultadoMulher()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }
        if(atividade.value === moderado.value){
            resultados.innerHTML = ''
            let resul = 1.55 * resultadoMulher()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }
        if(atividade.value === altoA.value){
            resultados.innerHTML = ''
            let resul = 1.725 * resultadoMulher()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }
        if(atividade.value === extremoA.value){
            resultados.innerHTML = ''
            let resul = 1.9 * resultadoMulher()
            let p = createP('p')
            resultados.appendChild(p).innerHTML = `TMB estimada: <strong>${resul.toFixed(2)}</strong> kcal<br>`
        }

    }
}

btn.addEventListener('click', function(e){
    calcTmb()
    

})

function resultadoHomem(){
    let resul = tbmHomem(Number(inptPeso.value),Number(inptAltura.value),Number(inptIdade.value))
    return resul.toFixed(2)
}

function resultadoMulher(){
    let resul = tbmMulher(Number(inptPeso.value),Number(inptAltura.value),Number(inptIdade.value))
    return resul.toFixed(2)
}

function createP(p){
    return document.createElement(p)
}
function tbmHomem(peso,altura,idade){
    return 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
}
function tbmMulher(peso,altura,idade){
    return 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)
    
}


