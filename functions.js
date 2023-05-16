const returnEmptyString = function () {
	return "";
};

const returnZeroNumber = function () {
	return 0
};

const returnEmptyArray = function () {
	return []
};

const returnEmptyObject = function () {
	return {}
};

const returnAbcString = function (value) {
	return value
};

const returnSumOfTen = function (arg1, arg2) {
	return arg1 + arg2
};

const subtraction = function (arg1, arg2) {
	return arg1 - arg2
};

const multiplication = function (arg1, arg2) {
	return arg1 * arg2
};

const division = function (arg1, arg2) {
	return arg1 / arg2
};

const returnArray = function (arg1) {
	return arg1
};

const returnFirstIndex = function (arg1) {
	return arg1[0]
};

const returnSecondIndex = function (arg1) {
	return arg1[1]
};

const returnArrayLength = function (arg1) {
	return arg1.length
};

const arraySum = function (arg1) {
	let sum = 0
	arg1.forEach(element => {
		sum += element
	});
	return sum
};

const arraySubtraction = function (arg1) {
	let sum = 0
	arg1.forEach(element => {
		sum -= element
	});
	return sum
};

const multiplicationArray = function (arg1) {
	let sum = 1
	arg1.forEach(element => {
		sum *= element
	});
	return sum
};

const divisionArray = function (arg1) {
	let sum = 1
	arg1.forEach(element => {
		sum /= element
	});
	return Number(sum.toFixed(3))
};

const oddArray = function (arg1) {
	return arg1.filter(num => {
		return num % 2 === 1
	})
};

const evenArray = function (arg1) {
	return arg1.filter(num => {
		return num % 2 === 0
	})
};

const returnFruits = function (arg1) {
	return [arg1[0], arg1[arg1.length - 1]]
};