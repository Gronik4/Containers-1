export default class Team {
  constructor() {
    this.member = new Set();
    this.output = [];
    this.err = '';
  }

  add(intern) {
    try {
      if (this.member.has(intern)) {
        throw new Error('Ошибка! Такой персонаж уже добавлен!');
      } else { this.member.add(intern); }
    } catch (e) {
      this.err = e.message;
    }
  }

  addAll(...rest) {
    const allMember = rest;
    for (const item of allMember) {
      this.add(item);
    }
    this.toArray(this.member);
    return [this.output, this.err];
  }

  toArray(set) {
    for (const item of set) {
      this.output.push(item);
    }
  }
}
