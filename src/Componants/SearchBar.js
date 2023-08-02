import React, { useState } from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

const SearchBar = ({hidebutton}) => {

    const [input,setInput]= useState("")

    const search=(e)=>{
        e.preventDefault();
        alert(input);
    }
    return (
        <Wrapper>
            <form action="" className='search'>
                <div className="search_box">
                    <SearchIcon className='icon'/>
                    <input type="text" className='inputbox' onChange={(e)=>{setInput(e.target.value)}}/>
                    <MicIcon className='icon'/>
                </div>
                {
                    !hidebutton&& <div className="buttons">
                    
                    <Button  type="submit"varient="outlined" onClick={search}>Google Search</Button>
                    <Button  type="submit"varient="outlined">I'm Feeling Lucky</Button>
                </div>
                    }
            </form>
        </Wrapper>
    )
}

export default SearchBar

const Wrapper = styled.section`
    .search{
              
        .search_box{
            display: flex;
            gap: 1rem;
            max-width: 584px;
            height: 44px;
            border: 1px solid rgb(203, 200, 200);   
            align-items: center;
            border-radius: 24px;
            padding: 0 1rem;

          
            .inputbox{
                width: 500px;
                border: none;
                height: 100%;
                font-size: medium;
            
            
            &:focus,&:active{
                border: none;
                outline: none;
                }
            }
            .icon{
                color: gray;
            }
            &:focus,&:active,&:hover{
                box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                }  
        }
        
        .buttons{
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            gap: 3rem;
            Button{
                text-transform: capitalize;
                padding-left:16px;
                color: gray;
                font-size: medium;
                background-color: #f8f9fa;
                &:focus,&:active,&:hover{
                    border: 0.3px solid #c9cacb;
                    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
                }  
            }
        }
    }


    @media screen and (max-width: 992px){
        .search_box{
            width: 90vw;
        }
    }
`

