import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'


const SearchResultLInk = () => {
  return (
    <Wrapper>
           <NavLink to={"/"} className="text-dark underline">
            <div className="search_link">
              <div className="siteicon">
                <img src="https://www.rentonsmile.com/wp-content/uploads/2017/08/google-single-letter-logo.png" alt="" />
              </div>
              <div to={"/"} className="link text-decoration-none ">
                <h5 className="link text-decoration-none my-0 underline">Google</h5>
                <small className='text-secondary text-decoration-none '>mylink</small>
              </div>
            </div>
            <div className="search-title">
              <h4 className='text-primary '>Alok ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque itaque quis reprehenderit excepturi enim obcaecati quod in saepe?</h4>
              <p className='text-decoration-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus quasi tempora odio repellendus, voluptate impedit illum facere quo inventore omnis, harum ullam voluptatum eius perspiciatis nulla nobis iure facilis?</p>
            </div>


          </NavLink>
    </Wrapper>
  )
}

export default SearchResultLInk


const Wrapper = styled.section`
   
      text-decoration: none;
      .search_link
      {
        display: flex;
        gap: 1rem;
      
        align-items:center; 
        .siteicon{
          width: 30px;
          height:30px;
          background-color: lightgray;
          border-radius: 50%;
          display: grid;
          place-items: center;  
         img{
            width:80%;

          } 
        }
      .link{
          h5{
            color:black;
          }
          &:hover,&:active{
            text-decoration: underline;
          }
        }
      }
      .underline{
        text-decoration: none;
      }
      .underline:hover,.underline:active{
        text-decoration: underline;
      
      }
    
`