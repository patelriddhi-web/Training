var item = localStorage.getItem('shape')
var a = document.getElementById('selectedValue')
a.innerText = this.item

var result;

class Shape {
  area() {
    return 0
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name
  }
}

class Circle extends Shape {
  constructor(d) {
    super()
    this.diameter = d
  }

  area() {
    return Math.PI * this.diameter
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super()
    this.width = w
    this.height = h
  }

  area() {
    return this.width * this.height
  }
}

class Square extends Shape {
  constructor(s) {
    super()
    this.side = s
  }

  area() {
    return this.side * this.side
  }
}

class Ellipse extends Shape {
  constructor(a, b) {
    super()
    this.Aaxis = a
    this.Baxis = b
  }

  area() {
    return this.Aaxis * this.Baxis * Math.PI
  }
}
function showText() {
  switch (item) {
    case 'rectangle':
      {
        document.getElementById('circle').style.display = 'none'
        document.getElementById('square').style.display = 'none'
        document.getElementById('ellipse').style.display = 'none'
        document.getElementById('rectangle').style.display = 'block'
      }
      break
    case 'circle':
      {
        document.getElementById('circle').style.display = 'block'
        document.getElementById('square').style.display = 'none'
        document.getElementById('ellipse').style.display = 'none'
        document.getElementById('rectangle').style.display = 'none'
      }
      break
    case 'square':
      {
        document.getElementById('circle').style.display = 'none'
        document.getElementById('square').style.display = 'block'
        document.getElementById('ellipse').style.display = 'none'
        document.getElementById('rectangle').style.display = 'none'
      }
      break
    case 'ellipse':
      {
        document.getElementById('circle').style.display = 'none'
        document.getElementById('square').style.display = 'none'
        document.getElementById('ellipse').style.display = 'block'
        document.getElementById('rectangle').style.display = 'none'
      }
      break
  }
}

showText()

function goToStep3() {
  switch (item) {
    case 'rectangle':
      {
        var a = new Rectangle(
          document.getElementById('height').value,
          document.getElementById('width').value,
        )
        this.result = a.area()
      }
      break;
    case 'circle':
      {
          console.log('coming to circle')
        var a = new Circle(document.getElementById('dia').value)
        this.result = a.area()
        console.log(result)
      }
      break;
    case 'square':
      {
        var a = new Square(document.getElementById('side').value)
        console.log(a.area())
        this.result = a.area()
      }
      break;
    case 'ellipse':
      {
        var a = new Ellipse(
          document.getElementById('a').value,
          document.getElementById('b').value,
        )
        this.result = a.area()
      }
      break;
  }

  localStorage.setItem('result', this.result)
  location.href = 'step3.html'
}
