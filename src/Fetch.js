import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const [num, setNum] = useState(1);
  const [output, setOutput] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);
        if (!response.ok) {
          throw new Error('Issue in response !');
        }
        const data = await response.json();
        setOutput(data);
      } catch (error) {
        console.error('error while fetching data');
      }
    }
    fetching();
  }, [num]);

  const handleClick = () => {
    setNum(num + 1);
  }
  return (
    <div>
      {output ? <div>
        <h1>Title : {output.title}</h1>
        <p1>Body : {output.body}</p1>
      </div> : <div>Loading...</div>}

      <button onClick={handleClick}>next</button>
    </div>
  )
}

export default Fetch
