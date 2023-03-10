//Snack numero 1
const containerDom = document.getElementById('container');

const bikeArray = [
    {
        nome: 'Mountain bike',
        peso: '25',
    },
    {
        nome: 'Bici ibrida',
        peso: '21' ,
    },
    {
        nome: 'Downhill',
        peso: '28',
    },
]

let weightArray = [];

for (let i = 0; i < bikeArray.length; i++){

    let bikeWeight = bikeArray[i];

    const {peso} = bikeWeight;

    weightArray.push(peso);

}


let lessWeigth = Math.min(...weightArray);

containerDom.innerHTML = `Il peso minore tra le bici è di: ${lessWeigth} kg`;


//Snack numero 2

const squadreCalcio = [
    {
        nome : 'Milan',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        nome: 'Juve',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },
    {
        nome: 'Inter',
        'punti fatti' : 0,
        'falli subiti' : 0,
    },

]

function generatoreNumeriCasuali(max , min){
    let randomNumber = Math.floor(Math.random(max - min + 1) * max);

    return randomNumber;
}

let newTeamArray = [];

for (let i = 0; i < squadreCalcio.length; i++){
    let squadreCalcioIndex = squadreCalcio[i];

    let numberPoints = generatoreNumeriCasuali(10, 1);

    let numberFoul = generatoreNumeriCasuali(5, 1);

    squadreCalcioIndex['punti fatti'] = numberPoints;

    squadreCalcioIndex['falli subiti'] = numberFoul;

    const { nome, 'falli subiti':foul } = squadreCalcioIndex;

    newTeamArray.push(nome , foul);

}


console.log(newTeamArray);