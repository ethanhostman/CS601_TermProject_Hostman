//this allows for the Vue app to be created
const { createApp } = Vue

let gastly = "images/Gastly.jpeg"
let bulbasaur = "images/Bulbasaur.jpeg";
let gengar = "images/Gengar.jpeg";
let venusaur = "images/Venusaur.jpeg";
let eevee = "images/Eevee.jpeg";
let vaporeon = "images/Vaporeon.jpeg";
let flareon = "images/Flareon.jpeg";
let jolteon = "images/Jolteon.jpeg";
//this const list will allow for easy manipulation of images
const pokemon = [gastly, bulbasaur, gengar, venusaur, eevee, vaporeon, flareon, jolteon]
createApp({
  data() {
    return {
      message: 'Hello Vue!',
      pokemon,
      pokemon1: pokemon[2],
      pokemon2: pokemon[3],
      pokemon3: pokemon[4],
    }
  },
  //these methods will link to mouse events and button clicks to change the images
  methods: {
      updateG(){
          this.pokemon1 = this.pokemon[0];
      },
      resetG(){
          this.pokemon1 = this.pokemon[2];
      },
      updateB(){
          this.pokemon2 = this.pokemon[1];
      },
      resetB(){
          this.pokemon2 = this.pokemon[3];
      },
      evolveV(){
        this.pokemon3 = this.pokemon[5];
      },
      evolveF(){
        this.pokemon3 = this.pokemon[6];
      },
      evolveJ(){
        this.pokemon3 = this.pokemon[7];
      },
      reset(){
        this.pokemon3 = this.pokemon[4];
      }
  },
}).mount('#app')