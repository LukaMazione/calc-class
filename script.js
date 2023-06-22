// Stwórz kalkulator, który potrafi dodawać, odejmować, mnożyć i dzielić. Kalkulator tym razem jest oparty na klasie. OK
// ⦁ Klasa w konstruktorze otrzymuje liczbę a i liczbę b. Posiada również metody: add, subtract, multiply, divide. Zwracają one odpowiednie dane. OK
// ⦁ Dołóż do konstruktora walidację – sprawdzenie czy podane dane to liczby. Wyrzuć błąd, jeżeli nie. OK
// ⦁ Do metody dzielenia również dołóż sprawdzenie czy liczba b nie jest 0. OK
// ⦁ Przyjmij przez prompt dwie liczby. Stwórz nowy obiekt na bazie klasy i przekaż jej liczby użytkownika. Wykonaj wszystkie działania i wyświetl je w konsoli.
//     Użyj try...catch, aby złapać ew. błędy i wyświetlić użytkownikowi.

class Calc {
	constructor(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw new Error('Given value is not a number');
		}
		this.a = a;
		this.b = b;
	}

	add() {
		return this.a + this.b;
	}

	subtract() {
		return this.a - this.b;
	}

	multiply() {
		return this.a * this.b;
	}

	divide() {
		if (this.b !== 0) {
			return this.a / this.b;
		} else {
			throw new Error('spadaj');
		}
	}
}
try {
	const valA = Number(prompt('Podaj liczbę A'));
	const valB = Number(prompt('Podaj liczbę B'));
	const calc = new Calc(valA, valB);
    console.log(calc.add());
    console.log(calc.divide());
} catch (error) {
	console.log('error');
	console.log(error);
	console.log('error');
	console.error(error);
}
