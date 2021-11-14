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

const expected2 = [[
  {
    name: 'Ваня', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Петя', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Ваня', type: 'Magician', health: 100, level: 1, attack: 40, defence: 10,
  },
], 'Ошибка! Такой персонаж уже добавлен!'];

test('Test Team array', () => {
  const result = new Team().addAll(entrant1, entrant2, entrant3);
  expect(result[0]).toEqual(expected1);
});

test('Test Team error', () => {
  const result = new Team().addAll(entrant1, entrant2, entrant3, entrant1);
  expect(result).toEqual(expected2);
});
