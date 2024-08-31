const { Triangle, Square, Circle } = require('./Shape');

describe('test Shapes', () => {
  
    describe('Triangle', () => {
      it('should return when a Triangle is made', () => {
        const ts = new Triangle();
        ts.setColor("blue");
        expect(ts.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  
    describe('Square', () => {
      it('should return when a Square is made', () => {
        const ts = new Square();
        ts.setColor("yellow");
        expect(ts.render()).toEqual('<rect x="75" y="20" width="150" height="150" fill="yellow" />');
      });
    });
  
    describe('Circle', () => {
      it('should return when a Circle is made', () => {
        const ts = new Circle();
        ts.setColor("red");
        expect(ts.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
      });
    });


  });