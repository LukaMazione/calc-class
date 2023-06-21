// Stwórz kalkulator, który potrafi dodawać, odejmować, mnożyć i dzielić. Kalkulatory tym razem jest oparty na klasie.
// ⦁ Klasa w konstruktorze otrzymuje liczbę a i liczbę b. Posiada również metody: 72 add, subtract, multiply, divide. Zwracają one odpowiednie dane.
// ⦁ Dołóż do konstruktora walidację – sprawdzenie czy podane dane to liczby. Wyrzuć błąd, jeżeli nie.
// ⦁ Do metody dzielenia również dołóż sprawdzenie czy liczba b nie jest 0.
// ⦁ Przyjmij przez prompt dwie liczby. Stwórz nowy obiekt na bazie klasy i przekaż jej liczby użytkownika. Wykonaj wszystkie działania i wyświetl je w konsoli.
//     Użyć try...catch, aby złapać we. Błędy i wyświetlić użytkownikowi.

class Calc {
	constructor(a, b) {
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
			console.log('Nie dzielimy przez 0');
		}
	}
}
const valA = new Calc(prompt('Podaj liczbę A'));
const valB = new Calc(prompt('Podaj liczbę B'));
const calc = new Calc();
console.log(calc.add());
