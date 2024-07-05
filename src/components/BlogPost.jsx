import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';
import React, { useEffect, useState } from 'react';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // TypeError: Cannot read properties of null (reading 'title')
  //   const getPost = async () => {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts/1'
  //     );
  //     const data = await response.json();
  //     setPost(data);
  //     setLoading(false);
  //   };
  //   getPost();
  // }, []);

  // handel using try catch
  useEffect(() => {
    // TypeError: Cannot read properties of null (reading 'title')
    const getPost = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts/1'
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  return (
    <>
      {loading ? (
        <p className='text-center mt-4'>Loading.......</p>
      ) : (
        <article>
          <Card title='Initalizing state with object' subTitle='reactjs'>
            <h2 className='text-orange-300 mb-3'>{post.title}</h2>
            <p className='m-0'>{post.body}</p>
          </Card>
        </article>
      )}
    </>
  );
};

export default BlogPost;
