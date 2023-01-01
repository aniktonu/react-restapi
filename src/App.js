import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';






function App() {


  const [dishes, setDishes] = useState([]);

  useEffect(() => {

    // fetch method
    // fetch('http://localhost:3001/dishes')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error.message))

    // axios method
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => console.log(response.data))
    //   .catch(error => console.log(error))


    //post method with axios
    //   axios.post('http://localhost:3000/dishes', {
    //     name: 'Pizza',
    //     price: '400'
    //   })
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))


    // }, [])

    //put method with fetch
    //   fetch('http://localhost:3000/dishes/1', {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name: 'anik',
    //       price: '500'
    //     })
    //   })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error.message))

    // }, [])

    //delete method with axios
    //   axios.delete('http://localhost:3000/dishes/1')
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))


    // }, [])

    //get method with axios
    axios.get('http://localhost:3000/dishes')
      .then(response => response.data)
      .then(data => setDishes(data))
      .catch(error =>
        setDishes({
          dishes: null,
          errMess: error.message
        })
      )
  }, [])
  console.log(dishes)



  return (
    <>
      <h1>React Restapi</h1>
    </>
  );
}

export default App;