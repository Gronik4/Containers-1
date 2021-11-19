import Team from '../app';

const entrant1 = {
  name: 'Ваня', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
};
const entrant2 = {
  name: 'Петя', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
};
const entrant3 = {
  name: 'Ваня', type: 'Magician', health: 100, level: 1, attack: 40, defence: 10,
};

const expected1 = [
  {
    name: 'Ваня', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Петя', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Ваня', type: 'Magician', health: 100, level: 1, attack: 40, defence: 10,
  },
];

test('Test Team array', () => {
  const result = new Team().addAll(entrant1, entrant2, entrant3);
  expect(result[0]).toEqual(expected1);
});

test('Test Team error', () => {
  const result1 = new Team();
  result1.member.add(entrant1, entrant2, entrant3);
  const result = () => result1.add(entrant1);
  expect(result).toThrowError('Ошибка! Такой персонаж уже добавлен!');
});

test('Test class Team on a output array', () => {
  const result1 = new Team().addAll(entrant1, entrant2, entrant3);
  expect(Array.isArray(result1)).toBeTruthy();
});
