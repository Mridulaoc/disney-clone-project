import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/movieSlice';
    
const NewDisney = (props) => {   
    
    const movies = useSelector(selectNewDisney);
    return (
        <Container>
            <h4>New To Disney+</h4>
            <Content>
                {movies && movies.map((movie, key) => (
                    <Wrap key={key}>
                      <Link to={'/detail/'+movie.id}>
                      <img src={movie.cardImg} alt={movie.title} />
                  </Link>
              </Wrap>  
                )
              )}              
            </Content>
      </Container>
    )
    }


    
    const Container = styled.div`
       margin-top:5rem;
    
    `
    const Content = styled.div`
    
     padding:3rem 0 2rem;
     display:grid;
     grid-template-columns:repeat(4,minmax(0,1fr));
     grid-gap:2.5rem;
     gap:2.5rem;
    
     @media(max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr));
     }
     `
    const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: .3rem solid rgba(249, 249, 249, 0.1);
    
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
      }
        
    &:hover{
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-color: rgba(249,249,249,0.8);
        transform:scale(1.1);  
    `
    

export default NewDisney
