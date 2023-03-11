const parImpar = process.argv[2]
const numero = process.argv[3]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
const numeroAleatorioEntreZeroeDez = getRndInteger(0, 10)


const ganhou = "ganhou"
const perdeu = "perdeu"
const ganhouOuPerdeu = (a, b)=>{
    const resultado = Number(numero) + numeroAleatorioEntreZeroeDez
    if(resultado % 2 === 0 && parImpar === 'par'){
       return a
    }else if(resultado % 2 === 1 && parImpar === 'impar'){
return a
    }else {
        return b
    }
}


if(parImpar === 'par' && Number(numero) % 2 === 0 || Number(numero) % 2 === 1 && parImpar === 'par'){
console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${Number(numero) + numeroAleatorioEntreZeroeDez}. ${ganhouOuPerdeu("ganhou", "perdeu")}`);
}else{
 console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${Number(numero) + numeroAleatorioEntreZeroeDez}. ${ganhouOuPerdeu("ganhou", "perdeu")}`)  
}