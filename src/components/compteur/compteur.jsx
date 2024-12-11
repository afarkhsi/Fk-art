import { useState } from 'react';

const Compteur = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    firstName: 'Abdourrahman',
    lastName: 'Farkhsi',
    age: 29,
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementObjectAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const decrementObjectAge = () => {
    setPerson({ ...person, age: person.age - 1 });
  };

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <p>
        Age de {person.firstName} {person.lastName} :{person.age}
      </p>
      <button onClick={incrementObjectAge}>+1</button>
      <button onClick={decrementObjectAge}>-1</button>
    </>
  );
};

export default Compteur;
