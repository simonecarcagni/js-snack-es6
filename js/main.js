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

    console.log(weightArray);
}


let lessWeigth = Math.min(...weightArray);

containerDom.innerHTML = `Il peso minore tra le bici è di: ${lessWeigth} kg`;