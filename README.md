# lsystem-ts

A simple TypeScript implementation of an [Lindenmayer System](https://en.wikipedia.org/wiki/L-system).

The `LSystem` class accepts an object as argument that needs the following:

- `axiom`: the starting string
- `productions`: the production rules for the system
- `functions`: a set of functions associated with each character in the system's alphabet

# Examples

## Hilbert Curve

![](https://raw.githubusercontent.com/premshree/lsystem-ts/master/examples/hilbert.png)

<details>
  <summary>code</summary>

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// translate to center of canvas
ctx.translate(canvas.width / 1.5, canvas.height / 1.5);
ctx.rotate(Math.PI / 2);
ctx.lineWidth = 1;

var hilbert = new LSystem({
  axiom: "A",
  productions: {
    A: "lBfrAfArfBl",
    B: "rAflBfBlfAr"
  },
  functions: {
    f: () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.width / Math.pow(2, hilbert.generations + 1));
      ctx.stroke();
      ctx.translate(0, canvas.width / Math.pow(2, hilbert.generations + 1));
    },
    l: () => ctx.rotate((Math.PI / 180) * 90),
    r: () => ctx.rotate((Math.PI / 180) * -90)
  }
});

hilbert.produce(6);
```

 </details>

## Sierpinski Arrowhead Curve

![](https://raw.githubusercontent.com/premshree/lsystem-ts/master/examples/sierpinski-arrowhead.png)

<details>
  <summary>code</summary>
  
```js
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// translate to center of canvas
ctx.translate(canvas.width / 4, canvas.height / 2);
ctx.rotate((Math.PI / 180) * 270);
ctx.lineWidth = 0;

var sierpinskiArrowHead = new LSystem({
    axiom: 'A',
    productions: {
        A: 'B-A-B',
        B: 'A+B+A',
    },
    functions: {
        A: () => {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(
                0,
                canvas.height / Math.pow(2, sierpinskiArrowHead.generations + 1),
            );
            ctx.stroke();
            ctx.translate(
                0,
                canvas.height / Math.pow(2, sierpinskiArrowHead.generations + 1),
            );
            ctx.closePath();
        },
        B: () => {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(
                0,
                canvas.height / Math.pow(2, sierpinskiArrowHead.generations + 1),
            );
            ctx.stroke();
            ctx.translate(
                0,
                canvas.height / Math.pow(2, sierpinskiArrowHead.generations + 1),
            );
            ctx.closePath();
        },
        '+': () => {
            ctx.rotate((Math.PI / 180) * -60);
        },
        '-': () => {
            ctx.rotate((Math.PI / 180) * 60);
        },
    },
});

sierpinskiArrowHead.produce(10);

```

</details>

## Dragon Curve

![](https://raw.githubusercontent.com/premshree/lsystem-ts/master/examples/dragon.png)

<details>
  <summary>code</summary>

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// translate to center of canvas
ctx.translate(canvas.width / 3, canvas.height / 2);
ctx.rotate(Math.PI);

var dragon = new LSystem({
  axiom: "FX",
  productions: {
    X: "X+YF+",
    Y: "-FX-Y"
  },
  functions: {
    F: () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.height / (dragon.generations + 100));
      ctx.stroke();
      ctx.translate(0, canvas.height / (dragon.generations + 100));
      ctx.closePath();
    },
    "+": () => {
      ctx.rotate((Math.PI / 180) * +90);
    },
    "-": () => {
      ctx.rotate((Math.PI / 180) * -90);
    }
  }
});

dragon.produce(10);
```

</details>

## Fractal Plant

![](https://raw.githubusercontent.com/premshree/lsystem-ts/master/examples/fractal-plant.png)

<details>
  <summary>code</summary>
  
```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// translate to center of canvas
ctx.translate(canvas.width / 3, canvas.height);
ctx.scale(-1, 1);
ctx.rotate((Math.PI / 180) * 150);
ctx.lineWidth = 0.3;

var plant = new LSystem({
  axiom: "X",
  productions: {
    X: "F+[[X]-X]-F[-FX]+X",
    F: "FF"
  },
  functions: {
    F: () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, canvas.width / Math.pow(2, plant.generations + 2));
      ctx.stroke();
      ctx.translate(0, canvas.width / Math.pow(2, plant.generations + 2));
    },
    "+": () => {
      ctx.rotate((Math.PI / 180) * 25);
    },
    "-": () => {
      ctx.rotate((Math.PI / 180) * -25);
    },
    "[": () => {
      ctx.save();
    },
    "]": () => {
      ctx.restore();
    }
  }
});

plant.produce(10);

```
</details>
