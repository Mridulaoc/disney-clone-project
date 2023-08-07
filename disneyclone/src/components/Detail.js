import {useState,useEffect} from 'react'
import { styled } from 'styled-components'
import { useParams } from "react-router-dom"
import db from "../firebase"
import { collection, doc, getDoc } from 'firebase/firestore'

const Detail = (props) => {

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const docRef = doc(db, "movies", id);
    const docSnap =  getDoc(docRef);
    docSnap.then(response => {
      
      if (response.exists) {
        setMovieDetails(response.data());
      }
      else {
        console.log("No details found");
      }
    })
      .catch((err) => {
        console.log("Error: " + err);
      });
    },[id])    

  return (
      <Container>
          <BgImg>
              <img src={movieDetails.backgroundImg} alt="" />
          </BgImg>
          <Content>
              <Title>
                <img src={movieDetails.titleImg} alt="" />                  
              </Title>
              <Controls>
                  <PlayBtn>
                      <img src="/images/play.png" alt="" />
                      <span>play</span>
                  </PlayBtn>
                  <TrailerBtn>
                      <img src="/images/trailer.png" alt="" />
                      <span>trailer</span>
                  </TrailerBtn>
                  <AddList>
                      <img src="/images/plus.png" alt="" />
                  </AddList>
                  <WatchGroup>
                      <img src="/images/group watch.png" alt="" />
                  </WatchGroup>
              </Controls>
              <SubTitle>
                       {movieDetails.subTitle}
              </SubTitle>
              <Description>
                        {movieDetails.description}
              </Description>              
          </Content>         
    </Container>
  )
}


const Container = styled.div`
  display:block;
  height:100%;
  position:relative;
 

`;


const BgImg = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    position:fixed;
    right:0;
    left:0;
    z-index:-1;
    img{
    height:100%;
    width:100%; 
   @media (max-width:768px) { 
          width:initial;
     }       
}`

const Content = styled.div`
position:fixed;
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
margin:10rem 5rem;`

const Title = styled.div`
    
    img{
        height:20rem;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
    margin:1rem 0;
    cursor:pointer;`

const PlayBtn = styled.div`
    display: flex;
    gap:1rem;
    background: #ffffffc2;
    padding: 2rem 3.5rem;
    border-radius: 4px;
    border: 2px solid #ffffffc2;


  img{
    height:2rem;
  }
  span{
    text-transform:uppercase;
    color:black;
    font-size:2rem;
    letter-spacing:2px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

`

const TrailerBtn = styled(PlayBtn)`
    background-color: #000000b3;
    border: 3px solid #ffffffa3;

    span{
      color: white;
    }
   
}`

const AddList = styled.div`
background-color: #000000b3;
height:6.5rem;
width:6.5rem;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
border: 3px solid #ffffffc2;
  img{
    height:3rem;
  }
`

const WatchGroup = styled(AddList)`   
img{
  height:3rem;
}
`

const SubTitle = styled.p`
  font-size:1.8rem;
  margin:1rem;
`

const Description = styled.p`

  font-size:2rem;
  max-width:80%;
  margin:1rem;
  line-height:1.5;

`







export default Detail
