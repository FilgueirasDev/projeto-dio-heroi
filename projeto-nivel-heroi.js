const nomeHeroi = 'Fernando';
const xpHeroi = 2000;
let nivelHeroi = '';


if (xpHeroi < 1000) {
    nivelHeroi = 'Ferro';
} if (xpHeroi > 1001 && xpHeroi <= 2000) {
    nivelHeroi = 'Bronze';
} if (xpHeroi > 2001 && xpHeroi <= 5000) {
    nivelHeroi = 'Prata';
} if (xpHeroi > 5001 && xpHeroi <= 7000) {
    nivelHeroi = 'Ouro';
} if (xpHeroi > 7001 && xpHeroi <= 8000) {
    nivelHeroi = 'Platina';
} if (xpHeroi > 8001 && xpHeroi <= 9000) {
    nivelHeroi = 'Ascendente';
} if (xpHeroi > 9001 && xpHeroi <= 10000) {
    nivelHeroi = 'Imortal';
} else if (xpHeroi > 10000) {
    nivelHeroi = 'Radiante';
}


console.log(`O Héroi de nome ${nomeHeroi} está no nível ${nivelHeroi}!`);