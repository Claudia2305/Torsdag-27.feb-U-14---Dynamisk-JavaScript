/* OPPGAVE:
  Lag en ny knapp i HTML og få knappen til å console.log en beskjed du selv velger
  Lag en steg for steg liste med kommentarer for hva du må gjøre for å få det til 

  Eks. 1. lag en knapp i HTML
       2. Lage en id til knapp
       3. Hente inn id i Javascript, legge i variabel
       4. Bruke knapp til eventListener
       5. Skriver en console log i eventListener
 */

let addColor = document.querySelector('#addColor');

addColor.addEventListener('click', function () {
  console.log('dette er knapp for farger');
  let styleDiv = document.querySelector('#styleContainer');

  //styleDiv.style.backgroundColor = 'yellow';
  styleDiv.classList.add('pink');
});

let redLight = document.querySelector('#redLight');

redLight.addEventListener('click', function () {
  console.log('trafikklys rødt');
  let styleDiv = document.querySelector('#styleContainer2');

  //styleDiv.style.backgroundColor = 'yellow';
  styleDiv.classList.add('red');
  styleDiv.classList.remove('green');
  styleDiv.classList.remove('yellow');
});

let yellowLight = document.querySelector('#yellowLight');

yellowLight.addEventListener('click', function () {
  console.log('trafikklys gult');
  let styleDiv = document.querySelector('#styleContainer2');

  //styleDiv.style.backgroundColor = 'yellow';
  styleDiv.classList.add('yellow');
  styleDiv.classList.remove('red');
  styleDiv.classList.remove('green');
});

let greenLight = document.querySelector('#greenLight');

greenLight.addEventListener('click', function () {
  console.log('trafikklys grønt');
  let styleDiv = document.querySelector('#styleContainer2');

  //styleDiv.style.backgroundColor = 'yellow';
  styleDiv.classList.add('green');
  styleDiv.classList.remove('red');
  styleDiv.classList.remove('yellow');
});

//FÅ TEKST UT PÅ SIDEN
/**
1. Hent inn div ved å bruke ID
2. Lage nytt element
3. Legge til tekst på elementet
4. Legge til det nye elementet i div
5. Legge det inn i en addEventListener, så det kun skjer når vi trykker på knappen

 */

let newTextContainer = document.querySelector('#newTextContainer');

let newText = document.createElement('h1');

newText.textContent = 'Dette er ny tekst';

newTextContainer.appendChild(newText);

//ENDRE STYLING I JS
/*
classList.add = legger til en class
classlist.remove = tar bort en class
classlist.toggle = skifter mellom å legge til og ta bort klassenavn
*/

/*
1. hente inn id til div
2. hent inn id til fargeknapp
3. lag en eventlistener til knappen
4. lagge til classList med ny bakgrunnsfarge i eventlistener

*/

//OPPGAVE
/*
1. Lag en ny div med en id
2. Legg til en knapp eller bruk en av knappene som er der allerede og hent inn id til JS
3. Lag en eventlistener til knappen
4. Legg til noe tekst til div
5. lag en class med style til knappen som du legger på med classList når du trykker på knappen

Bonus!
Lag en animasjon som blir aktivert når du trykker på knappen


*/
