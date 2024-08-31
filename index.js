const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./Lib/Shape');

class s {
        constructor () {
            this.text = ""
            this.shape = ""
        }
        render() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
        }
        st(t, tc) {
            this.text = `<text x="150" y="100" font-size="40" text-anchor="middle" fill="${tc}">${t}</text>`
        }
        ss(s) {
            this.shape = s.render()
        }
    
}
const questions = [
    {
    type: 'input',
    name: 'text',
    message: ('What do you wish to put in the logo(3 letters)?'),
  },
  {
    type: 'input',
    name: 'tcolor',
    message: ('What color do you want the text to be(key word or hexadecimal)?'),
  },
  {
    type: 'list',
    message: ('What shape do you want to be around the Logo?'),
    name: 'shape',
    choices: ['triangle', 'square', 'circle'],
  },
  {
    type: 'input',
    name: 'scolor',
    message: ('What color do you want the shape to be to be(key word or hexadecimal)?'),
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Open up the logo.vg file to look at your new logo!')
      );
}

async function init() {
    const data = await inquirer.prompt(questions);
    let logo;
    if (data.text.length < 1 || data.text.length > 3 ) {
        console.log('Please make the text in the logo 1-3 letters')
        return;
    }
    if (data.shape == "triangle") {
        logo = new Triangle();
        let svg = new s();
        logo.setColor(data.scolor)
        svg.st(data.text, data.tcolor);
        svg.ss(logo);
        writeToFile(`logo.svg`, svg.render())
        return;
    } else if (data.shape == "square") {
        logo = new Square();
        let svg = new s();
        logo.setColor(data.scolor)
        svg.st(data.text, data.tcolor);
        svg.ss(logo);
        writeToFile(`logo.svg`, svg.render())
        return;
    } else if (data.shape == "circle") {
        logo = new Circle();
        let svg = new s();
        logo.setColor(data.scolor)
        svg.st(data.text, data.tcolor);
        svg.ss(logo);
        writeToFile(`logo.svg`, svg.render())
        return;
    }
}

init();

