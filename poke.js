

async function setData(pokemon) {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    const data = await result.json();
    console.log(data);
    
    pokeName.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
    pokeID.innerHTML = `#${data.id}`;
    pokeTag.innerHTML = data.types[0].type.name;
    move1.innerHTML=data.abilities[0].ability.name.toUpperCase();
    move2.innerHTML=data.abilities[1].ability.name.toUpperCase();
    pokeImg.src = data.sprites.other['official-artwork'].front_default;
 }
 
 
 
 pokeBtn.addEventListener("click", e => {
    if (pokeInput.value != 0) {
       setData(pokeInput.value.toLowerCase());
    }
 });
 

 document.addEventListener("keydown", e => {
    if (e.key == "Enter") {
       if (pokeInput.value != 0) {
          setData(pokeInput.value.toLowerCase());
       }
    }
 });
 
 // Starting Functions
 setData('pikachu');
 
 