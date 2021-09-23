export default class Parser {
  static parseObject(obj) {
    const clean = [];
    obj.forEach(elem => {
      clean.push({
        title: elem.title,
        text: elem.body.children[0].children[0].value
      });
    });
    return clean;
  }
}
