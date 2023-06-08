function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 9], [6])); // false, ������ ��������
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, ������ ��������
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, ������ ��������
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, ������ �������, ���� � ���������� ��������
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true


function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
	const averageAge = filteredUsers.length > 0 ? totalAge / filteredUsers.length : 0;
	return averageAge;
}

const people = [{
		firstName: "���������",
		secondName: "������",
		age: 17,
		gender: "�������"
	},
	{
		firstName: "����",
		secondName: "�������",
		age: 21,
		gender: "�������"
	},
	{
		firstName: "�������",
		secondName: "�������",
		age: 40,
		gender: "�������"
	},
	{
		firstName: "�������",
		secondName: "���������",
		age: 37,
		gender: "�������"
	},
	{
		firstName: "�����",
		secondName: "�����������",
		age: 18,
		gender: "�������"
	},
	{
		firstName: "�������",
		secondName: "������",
		age: 17,
		gender: "�������"
	},
	{
		firstName: "Ը���",
		secondName: "��������",
		age: 50,
		gender: "�������"
	},
	{
		firstName: "�������",
		secondName: "������",
		age: 35,
		gender: "�������"
	},
	{
		firstName: "������",
		secondName: "�������",
		age: 49,
		gender: "�������"
	},
	{
		firstName: "�����",
		secondName: "���������",
		age: 25,
		gender: "�������"
	},
	{
		firstName: "������",
		secondName: "�����",
		age: 22,
		gender: "�������"
	},
	{
		firstName: "���������",
		secondName: "�������",
		age: 40,
		gender: "�������"
	},
	{
		firstName: "����",
		secondName: "�������",
		age: 35,
		gender: "�������"
	},
	{
		firstName: "�������",
		secondName: "�������",
		age: 19,
		gender: "�������"
	},
];

console.log(getUsersNamesInAgeRange(people, "�������")); // 32
console.log(getUsersNamesInAgeRange(people, "�������")); // 27.4
console.log(getUsersNamesInAgeRange([], "�������")); // 0
console.log(getUsersNamesInAgeRange(people, "�������������")); // 0