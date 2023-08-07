import React from 'react'
import { useEffect } from 'react'
import { styled } from 'styled-components'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  {selectUserName,selectUserPhoto,setSignOutState,setUserLoginDetails} from '../features/user/userSlice'


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = (props) => {
        if (!userName) {
            signInWithPopup(auth,provider).then((result) => {
                setUser(result.user);
         }).catch((error) => {
             alert(error.message);
         });   
        } else if (userName) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                navigate("/")
            })
            .catch((error) => alert(error.message));
        }
          
    }

    const setUser = (user) => { 
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo:user.photoURL,
            })
        )
    }

    useEffect((user) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate("/home");
            }
        });

    }, [userName]);
    
  return (
      <Nav>
          <Logo src="/images/logo.svg" />
          {!userName ? (<LoginBtn onClick={handleAuth}>login</LoginBtn>) : (
            <>
                    <NavMenu>
                       <a href="/home">
                           <img src="/images/home-icon.svg" alt="" />
                           <span>Home</span>
                       </a> 
                       <a>
                           <img src="/images/search-icon.svg" alt="search" />
                           <span>search</span>
                       </a> 
                       <a >
                           <img src="/images/watchlist-icon.svg" alt="watchlist" />
                           <span>watchlist</span>
                       </a> 
                       <a>
                           <img src="/images/original-icon.svg" alt="originals" />
                           <span>originals</span>
                       </a> 
                       <a>
                           <img src="/images/movie-icon.svg" alt="movies" />
                           <span>movie</span>
                       </a> 
                       <a>
                           <img src="/images/series-icon.svg" alt="series" />
                           <span>series</span>
                       </a> 
                  </NavMenu>  
            
                  <SignOut>
                      <UserImg src={userPhoto} alt={userName} />
                      <DropDown>
                          <span onClick={handleAuth}>Sign Out</span>
                      </DropDown>
                </SignOut>
                            
            </>
          
          )}
    </Nav>
  )
}

const Nav = styled.div`
    height:7rem;
    width:100%;
    background-color:#070414;
    display:flex;
    justify-content:space-between;
    align-items:center;
   `

    const Logo = styled.img`
    width:10rem;
    position:absolute;
    left:2%;
    `

    const NavMenu = styled.div`
    display:flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin-left:10%;
    position:relative;
    gap:2rem;  
    
   a{
        display:flex;
        align-items:center;
        color:#f9f9f9;
   
    img{
        height:2.5rem;
        width:2.5rem;
        padding-right
        :0.5rem;
    }
    span{
        text-transform:uppercase;
        letter-spacing:1.5px;
        position:relative;
   

    &:before {
        content:'';
        height:2px;
        background-color:#f9f9f9;
        position:absolute;
        bottom:-6px;
        left:0px;
        right:0px;
        opacity:0;
        visibility:hidden;
        transform-origin:left center;
        transform:scale(0);
        tarnsition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width:auto;
            }
    }

    &:hover{
        span:before{
            transform:scale(1);
            visibility:visible;
            opacity:1;
                    }
            }
    
    @media(max-width:768px){
        display:none;
    }        
    }`

    const LoginBtn = styled.button`
    text-transform:uppercase;
    position:absolute;
    right:2%;
    font-size:2rem;
    background-color:transparent;
    border:2px solid #f9f9f9;
    border-radius:5px;
    color:white;
    padding:1rem 2rem;
    tarnsitions:all 0.5s ease-in-out;
    cursor:pointer;
    letter-spacing:2px;
    
    &:hover{
        background-color:white;
        color:black;
    }`

const UserImg = styled.img`
    height:100%;
    border-radius:50%;
    `

const DropDown = styled.div`
    position:absolute;
    top:5rem;
    right:0;
    background:rgb(20,20,20);
    border:1px solid rgba(150,150,150,.5);
    box-shadow:rgb(0 0 0 /50%) 0px 0px 18px 0px;
    padding:1rem;
    width:10rem;
    opacity:0;
    z-index:1;
    
`    

const SignOut = styled.div`
    position:relative;
    height:5rem;
    width:5rem;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    margin-right:2rem;

    ${UserImg}{
        width:100%;
        height:100%;
    }

    &:hover{
        ${DropDown}{
            opacity:1;
            transition:opacity 1s;
        }
        
    }
`



export default Navbar


