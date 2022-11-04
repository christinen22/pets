/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * NAME is a SPECIES of AGE year(s) old.
 * His owner is OWNER and his favorite hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];

pets.forEach((pets) => {
    console.log(pets);
});

/*function makeUL(array) {

    const list = document.createElement("ul");


for (let i = 0; i < pets.length; i++) {
    let item = document.createElement("li")

    item.appendChild(document.createTextNode(pets))

    list.appendChild(item);
}
}
*/

const petsEl = document.querySelector("ul");        //hämtar ut referens "ul" från html 

pets.forEach(pet =>  {          //forEach=funktion som gör att det körs en loop för varje objekt i listan
                                //pet => =arrow-funktion (inom parantes efter forEach) som separerar objekten pet från pet(Barksby och Meow) till två separata objekt

//let info = `<li>Pet's name is ${pet.name}</li>`  //template string, ska alltid användas när man använder en variabel ${}

let info = `<li>${pet.name} is a ${pet.species} of ${pet.age} years old. His owner is ${pet.owner.name} and his favorite hobbies are ${pet.hobbies}</li>`

petsEl.innerHTML += info;

} );
