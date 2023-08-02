import React from 'react'
import SearchBar from '../Componants/SearchBar'
import { NavLink } from 'react-router-dom'
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from 'styled-components';

const SearchHeader = () => {
    return (
        <Wrapper>
            <div className="search_header">
                <NavLink to="/">
                    <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" alt="" className='image' />
                </NavLink>
                <div className="">
                    <SearchBar hidebutton={true} />
                    <div className="icons">

                        <div className="icon active">
                            {/* <SearchIcon /> */}
                            <img src='./images/search_icon.png' alt="" className='hid'/>
                            <NavLink to="/all" className="link">
                                <p>All</p>
                            </NavLink>
                        </div>

                        <div className="icon" >
                            <DescriptionIcon className='hid' />
                            <NavLink to="/news" className="link">
                                <p>News</p>
                            </NavLink>
                        </div>


                        <div className="icon">
                            <ImageIcon className='hid' />
                            <NavLink to="/images" className="link">
                                <p>Images</p>
                            </NavLink>
                        </div>

                        <div className="icon">
                            <LocalOfferIcon className='hid' />
                            <NavLink to="/shopping" className="link">
                                <p>Shopping</p>
                            </NavLink>
                        </div>

                        <div className="icon">
                            <LocationOnIcon className='hid' />
                            <NavLink to="/maps" className="link">
                                <p>Maps</p>
                            </NavLink>
                        </div>

                        <div className="icon">
                            <MoreVertIcon className='hid' />
                            <NavLink to="/more" className="link">
                                <p>More</p>
                            </NavLink>
                        </div>


                        <div className="icon">
                            <NavLink to="/Settings" className="link setting">
                                <p>Settings</p>
                            </NavLink>
                        </div>
                        <div className="icon">
                            <NavLink to="/tools" className="link">
                                <p>Tools</p>
                            </NavLink>
                        </div>


                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SearchHeader


const Wrapper = styled.section`
     .search_header{
    
    display: grid;
    grid-template-columns: 10rem auto;
    align-items: start;
    gap: 2rem;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 100;
    margin: 1rem 2rem;
    padding: 1rem;
    border-bottom: 1px solid lightgray;
    .image{
      width: 70%;
      justify-self:start;
      
    }
    
    .icons{

      display: flex;
      margin-top: 1rem;
      column-gap:2rem;      
      color: gray;
      .icon{
        img{
          width:30px;
        }

        &:first-child{
          font-size:small; 
        }
        display:flex;     
        align-items:center;
        gap: 5px;
        font-size: smaller;
        .link{
          color: gray;
          &:hover,&:active{
            text-decoration: underline;
            
          }
        }
        .setting{
          margin-left: 2rem;
        }
      }
    }
    .active{
      color: #1a73e8
    }
  }

  

  @media screen and (max-width: 992px){
    .search_header{   
        margin: 0;     
        display: grid;
        grid-template-columns: auto;
        align-items: start;
        gap: 0;       
        .image{
            width: 10rem;
        }
        .icons{

            display: flex;
            width: 90vw;
            gap: 7px;
            overflow: scroll;
            /* margin-top: 1rem; */
            /* column-gap:2rem;       */
            color: gray;
            .icon{
            img{
                width:30px;
            }

            &:first-child{
                font-size:small; 
            }
            display:flex;     
            align-items:center;
            /* gap: 5px; */
            font-size: smaller;
            .link{
                color: gray;
                &:hover,&:active{
                text-decoration: underline;
                
                }
            }
            .setting{
                margin-left: 2rem;
            }
            }
            }
            .active{
            color: #1a73e8
            }   
  }

  .hid{
    display:none;
  }
  p{
      text-decoration: none;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 5px 10px;


  }
  }
  

`