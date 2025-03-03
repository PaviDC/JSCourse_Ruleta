// 1 11document.body.innerHTML = "Toto je Javascript pro úkol Ruleta";

/*
Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0–36. Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená. Nula není ani lichá ani sudá, ani černá ani červená.

Ruleta:
Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.
*/

/* table with numbers categorized by color and whether they are odd or even:

Color	        Odd Numbers (lichá)                            	                        Even Numbers (sudá)
🔴 Red	        1, 3, 5, 7, 9, 19, 21, 23, 25, 27                          	        12, 14, 16, 18, 30, 32, 34, 36
⚫ Black	        11, 13, 15, 17, 29, 31, 33, 35                         	            2, 4, 6, 8, 10, 20, 22, 24, 26, 28
🟢 Green	            0	

1-10, 19-28 = odd (lichá) are red and black are even
11-18, 29-36 = odd (lichá) are black and red are even (sudá)

*/


// creating prompt for asking any number 0-36 


const rouletteNumber = Number(prompt('Zadej celé číslo v rozmezí od 0 do 36:'));
const numberVyber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const numberVyber2 = [11, 12, 13, 14, 15, 16, 17, 18, 29, 30, 31, 32, 33, 34, 35, 36]


// Ověření, jestli vstup je číslo a v platném rozsahu
if (rouletteNumber < 0 || rouletteNumber > 36) {
    document.body.innerHTML += '<p>Neplatný vstup. Zadejte celé číslo mezi 0 a 36.</p>';
} else if (rouletteNumber > 0 || rouletteNumber < 36 ) {
    document.body.innerHTML += '<p>Zelené číslo, 0</p>';
} else if (rouletteNumber.includes(numberVyber1)) {
    if (numberVyber1 % 2 === 0) {
        document.body.innerHTML += `<p>Černé sudé číslo: ${rouletteNumber}</p>`;
    } else {
        document.body.innerHTML += `<p>Červené liché číslo: ${rouletteNumber}</p>`;
    }
} else if (rouletteNumber.includes(numberVyber1)) {
    if (numberVyber1 % 2 === 0) {
        document.body.innerHTML += `<p>Černé sudé číslo: ${rouletteNumber}</p>`;
    } else {
        document.body.innerHTML += `<p>Červené liché číslo: ${rouletteNumber}</p>`;
    }
  
} else {
    document.body.innerHTML += `<p>Číslo ${rouletteNumber} není v předdefinovaném výběru.</p>`;
};

  /*if (age >= 15 && age <= 18) {
      document.body.innerHTML += '<p>Jsi mladistvým intelektuálem</p>';
    }
*/
/*
const age = 21;
age > 18; // ⟶ true
age > 21; // ⟶ false
age >= 21; // ⟶ true
age === 21; // ⟶ true
age !== 21; // ⟶ false
V JavaScriptu můžete narazit i na operátory == a !=. Ty však nebudeme nikdy používat! Jde o zastaralé operátory, které v některých případech mohou zanést do našeho programu nechtěné chyby a zmatky.
*/

//document.body.innerHTML += rouletteNumber;
//const zeroNumber = 0;

//if (zeroNumber = 0) {
 //   document.body.innerHTML = "<h1> This is green zero </h1>";
//}

//const redNumber = ; // 1-10, 19-28 = odd (lichá) are red also 11-18, 29-36  even (sudá) are red
//const blackNumber = ; //1-10, 19-28 = even are black also 11-18, 29-36 = odd are black
/*const oddNumber = [1,3,5,7,9,11,13,15,17,29,31,33,35]; //Square brackets: alt gr + F, G  Eng keyboard only [] 
const evenNumber = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
const greenNumber = 0;
const blackNumber = [11, 13, 15, 17, 29, 31, 33, 35, 2, 4, 6, 8, 10, 20, 22, 24, 26, 28];

const rouletteNumber = prompt("Enter any number from 0 to 36.");

    if (rouletteNumber === greenNumber) {
    document.body.innerHTML += "<p>" + "This is green zero" + "</p>";
}   else if (rouletteNumber === oddNumber) {
    document.body.innerHTML += "<p>" + "This is odd number" + "</p>";
}       else (rouletteNumber === evenNumber) {
        document.body.innerHTML += "<p>" + "This is even number" + "</p>"
}
       


oddNumber === redNumber

*/
/*
const name = prompt('Zadejte své jméno:');
const age = Number(prompt('Zadejte svůj věk:'));
const heslo = prompt('Zadejte nové heslo:');

if (age >= 65) {
  document.body.innerHTML += '<p>Věk je v pořádku</p>.';
  if (heslo.length <= 8) {
    document.body.innerHTML += '<p>Slabé heslo</p>.';
  } else {
    document.body.innerHTML += '<p>Heslo je v pořádku</p>.';
  }
} else {
  document.body.innerHTML += '<p>Nízký věk</p>.';
}

if (age >= 15 && age <= 18) {
    document.body.innerHTML += '<p>Jsi mladistvým intelektuálem</p>';
  }
*/