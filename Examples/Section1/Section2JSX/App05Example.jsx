import './App.css';

function App() {
  const firstName = 'John';
  const lastName = 'Wick';
  const age = 28;
  const job = 'Gentleman';

  const myArray = [1,2,3,4];

  const myObject = {
    name: 'John',
    aged: 30
  }

  //para hacer uso de una funcion en el h3
  const getFullName = (firstName,lastName) => `${firstName} ${lastName}`;
  
  const inputPlaceholder = 'Enter your details';

  //agregar un input por medio de una funcion
  const detailsInputBox =  <input placeholder={inputPlaceholder} autoComplete/>;

  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName,lastName)}</h3> 
      <p>Age: {myObject.aged}</p>
      <p>Job: {job}</p>

      <p>{myArray[0]}</p>
      {detailsInputBox}
    </div>
  );
}

export default App;
