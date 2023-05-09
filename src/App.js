import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';
import { setType, fetchUsers } from './store/users';

const App = () => {

  const movies  = useSelector((state) => state.movies.list) // connects to the store and gives the store data
  const users = useSelector((state) => state.users);
  // and it's always listening for changes
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()).then((res) => {
      console.log(res)
    }); 
  },[])


  console.log(movies);
  return (
    <div>
      {movies.map(data => {
        return (
          <ul key={data.id}>
            <li>{data.title}</li>
          </ul>
        )
      })}
      <hr />
      <button onClick={() => dispatch(addMovie({id: 3, title: 'Batman'}))}>Add movie</button>
      <hr />
      <p>User types</p>
      <span>{users.type}</span>
      <button onClick={() => dispatch(setType('Admin'))}>Set type</button>
      <hr />
      <button onClick={() => dispatch(fetchUsers())}> Get Users</button>

      {users.loading ? 'Loading...' : null} 
      <ul>
      {users.users &&  users.users.map(eachUser => {
        return(
            <li key={eachUser.id}>{eachUser.name}</li>
        )
      })}
      </ul>
    </div>
  )
}

export default App;
