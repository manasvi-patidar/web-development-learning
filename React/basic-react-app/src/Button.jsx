function printHello(event) {
  console.log("Hello Cutieee, function for onClick");
  console.log(event);
}

function printBye() {
  console.log("Bye, function for onClick");
}

function printNamaste() {
  console.log("Namaste, function for mouse over");
}

function printHey() {
  console.log("Hey cutie, function for double click");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onClick={printBye}>Say Bye!</p>
      <p onMouseOver={printNamaste}>prints Namaste on hover</p>
      <button onDoubleClick={printHey}>double click me!</button>
    </div>
  );
}
