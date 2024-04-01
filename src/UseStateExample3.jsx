import { useState } from 'react'
import './App.css'

let nextId = 0;


function UseStateExample3() {

  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  function handleChangeAdd() {
    setArtists([ ...artists, { id: nextId++, name: name } ]);
  }

  return (
    <>
      <h3>Array example</h3>
      <h4>** DEBUG code **</h4>
      <h4>** function UseStateExample3 **</h4>

      <h2>Inspiring Singers:</h2>

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleChangeAdd} >Add</button>

      <ul>
        {artists.map(artist => (  <li key={artist.id}>{artist.name}</li> ))}
      </ul>

    </>
  );
}

export default UseStateExample3