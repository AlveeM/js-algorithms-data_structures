var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));

console.log(beasts.findIndex(function(item){
    return item === 'Godzilla';
}))

console.log(beasts.find(function(item) {
    return item === 'Godzilla';
}))

console.log(beasts.includes('Godzilla'));

// all of the above function uses linear search