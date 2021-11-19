export default class Team {
  constructor() {
    this.member = new Set();
    this.output = [];
  }

  add(intern) {
    if (this.member.has(intern)) {
      throw new Error('Ошибка! Такой персонаж уже добавлен!');
    } else { this.member.add(intern); }
  }

  addAll(...rest) {
    for (const item of rest) {
      this.add(item);
    }
    this.toArray(this.member);
    return [this.output, this.err];
  }

  toArray(set) {
    this.output = Array.from(set);
  }
}
