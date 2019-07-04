import React, { useState, useEffect} from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    alert('inside useEffect');
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        setPosts(result.data);
      })
  }, []);

  return (
    <>
      <h2>Post List</h2>
      {
        posts.length > 0 ? 
          (posts.map(p => <div key={p.id}>{p.title}</div>)) 
          : (<h3>loading...</h3>)
      }
    </>
  );
}
 
export default PostList;