"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		// нет корней
		return arr;
	} else if (discriminant === 0) {
		// один корень
		let root = -b / (2 * a);
		arr.push(root);
	} else {
		// два корня
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (
		typeof percent !== 'number' ||
		typeof contribution !== 'number' ||
		typeof amount !== 'number' ||
		typeof countMonths !== 'number'
	) {
		return false;
	}
	// месячная ставка
	const monthlyRate = percent / 100 / 12;
	// сумма кредита
	const loanAmount = amount - contribution;
	// месячный платеж
	const monthlyPayment =
		loanAmount *
		(monthlyRate +
			monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
	// итоговый платеж
	const totalPayment = monthlyPayment * countMonths;
	//округление
	const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

	return roundedTotalPayment;
}