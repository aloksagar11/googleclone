import React from 'react'
import { styled } from 'styled-components'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from '../Componants/SearchBar';

const Home = () => {
    return (
        <Wrapper>
            <div className="header">
                <div className="header_left">
                    <p>About</p>
                    <p>Store</p>

                </div>
                <div className="header_right">
                    <p>Gmail</p>
                    <p>Images</p>
                    <AppsIcon/>
                    <AccountCircleIcon className='avataricon'/>

                </div>
            </div>

            <div className="home_body">
                <div className="logoimage">

                <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" alt="" />
                </div>
                <div className="search_container">
                    <SearchBar/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.section`
    .header{
        display: flex;
        justify-content: space-between;
        
        margin: 1rem 2rem;


        .header_left{
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;    
        }

        .header_right{
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            .avataricon{
                color: gray ;
                font-size: 2rem;
            }
        }
    }
    
    .home_body{
        margin-top:5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 300px;
            
           
        }
        
    }

    
    @media screen and (max-width: 768px){
        .home_body{
        
        img{
            width: 50vw;
            
           
        }
    }
`