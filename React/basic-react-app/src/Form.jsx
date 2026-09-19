function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form is sbmitted");
}

export default function Form() {
  return (
    <form>
      <input placeholder="write something" />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
