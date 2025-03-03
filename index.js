// 1 11document.body.innerHTML = "Toto je Javascript pro úkol Ruleta";

/*
Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0–36. Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená. Nula není ani lichá ani sudá, ani černá ani červená.

Ruleta:
Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.
*/

/* table with numbers categorized by color and whether they are odd or even:

const numberVyber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]; //sudá černá, lichá červená
const numberVyber2 = [11, 12, 13, 14, 15, 16, 17, 18, 29, 30, 31, 32, 33, 34, 35, 36]; // sudá černá, lichá červená10
*/

const rouletteNumber = Number(prompt('Zadej celé číslo v rozmezí od 0 do 36:'));
const numberVyber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const numberVyber2 = [11, 12, 13, 14, 15, 16, 17, 18, 29, 30, 31, 32, 33, 34, 35, 36];

// Ověření, jestli vstup je číslo a v platném rozsahu
if (isNaN(rouletteNumber) || rouletteNumber < 0 || rouletteNumber > 36) {
    document.body.innerHTML += '<p>Číslo není na ruletě. Zadej celé číslo mezi 0 a 36.</p>';
} else if (rouletteNumber === 0) {
    // Pokud uživatel zadá nulu
    document.body.innerHTML += `<p>Zelené číslo: ${rouletteNumber}</p>`;
} else if (numberVyber1.includes(rouletteNumber)) {
    // Kontrola pro čísla v prvním poli
    if (rouletteNumber % 2 === 0) {
        document.body.innerHTML += `<p>Černé sudé číslo: ${rouletteNumber}</p>`;
    } else {
        document.body.innerHTML += `<p>Červené liché číslo: ${rouletteNumber}</p>`;
    }
} else if (numberVyber2.includes(rouletteNumber)) {
    // Kontrola pro čísla v druhém poli
    if (rouletteNumber % 2 === 0) {
        document.body.innerHTML += `<p>Červené sudé číslo: ${rouletteNumber}</p>`;
    } else {
        document.body.innerHTML += `<p>Černé liché číslo: ${rouletteNumber}</p>`;
    }
} 