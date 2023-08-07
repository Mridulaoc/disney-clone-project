import React, {useEffect} from 'react'
import { styled } from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Reccommends from './Reccommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import {  collection, getDocs } from 'firebase/firestore'
 


const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let reccommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];



  useEffect(() => {

    const movieCollectionRef = collection(db, 'movies');
    getDocs(movieCollectionRef).then(response => {
      
       response.docs.forEach((doc) => {
           switch (doc.data().type) {
             case "recommend":                 
               reccommends = [...reccommends, { id: doc.id, ...doc.data() }];             
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
        }
       })
       dispatch(
        setMovies({
          reccommend: reccommends,
          original: originals,
          newDisney: newDisneys,
          trending: trending,
          })
        )    
    })
     
  },[userName]);
   
 



  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Reccommends />
      <NewDisney />
      <Originals />
      <Trending/>
    </Container>
  )
}

const Container = styled.main`

 position:relative;
 left:0;
 right:0; 
 padding: 2rem;
 height:100%;

 &:after {
  background: url("/images/home-background.png") center center / cover
  no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
 }
`



export default Home

