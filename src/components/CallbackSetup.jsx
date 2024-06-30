import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React, { memo, useCallback, useEffect, useState } from 'react';

export default function CallbackSetup() {
  // console.log('todo rendered');
  const [todos, setTodo] = useState(['buy cofee']);
  const [post, setPost] = useState({});

  const addTodo = useCallback(() => {
    setTodo([...todos, `new todo${todos.length}`]);
  }, [todos]);

  // useMemo
  const getPost = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await resp.json();
    // console.log(data);
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, [todos]);

  return (
    <>
      <h1 className='pb-2'>Callback Setup</h1>
      <div className='py-3'>
        <Card title={post.title}></Card>
      </div>
      <div className='flex align-items-center flex-row gap-4 flex-wrap '>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <Button label='Add Todo' onClick={addTodo} />
      </div>
      <Counter />
    </>
  );
}

const Counter = memo(() => {
  // console.log('counter rendered');
  const [counter, setCounter] = useState(0);
  return (
    <div className='pt-4'>
      <h3>{counter}</h3>
      <Button
        label='Update Counter'
        onClick={() => {
          setCounter(counter + 1);
        }}
      />
    </div>
  );
});
