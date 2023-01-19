import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Users = ({onPosts}) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async()=>{
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await responce.json()
    setPosts(data)
    console.log(data);
  }
  

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <PostsUl onPosts={onPosts}>
      {posts.map((post) => (
        <ContainerUsers>
        <li key={post.id}>{post.id}.{post.name} {post.username} {post.email}</li>
        </ContainerUsers>
      ))}
    </PostsUl>
  );
};

const PostsUl = styled.ul`
  width: 90%;
  max-width: 40rem;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;
  -webkit-box-shadow: 8px 0px 25px 16px rgba(122, 44, 216, 0.23);
-moz-box-shadow: 8px 0px 25px 16px rgba(122, 44, 216, 0.23);
box-shadow: 8px 0px 25px 16px rgba(122, 44, 216, 0.23);
  list-style: none;
  border: 3px solid #741188;

&:hover{
    /* background-color: teal; */
}

& li{
    margin-bottom: 2rem;
    border: 3px solid #741188;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #741188;


}
`;

const ContainerUsers = styled.div`
    /* background-color: black; */
    
`

export default Users;
