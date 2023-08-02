import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom'
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const IconBar = () => {
    return (
        <div>
            <div className="icons">

                <div className="icon active">
                    {/* <SearchIcon /> */}
                    <img src='./images/search_icon.png' alt="" />
                    <NavLink to="/all" className="link">
                        <p>All</p>
                    </NavLink>
                </div>

                <div className="icon" >
                    <DescriptionIcon />
                    <NavLink to="/news" className="link">
                        <p>News</p>
                    </NavLink>
                </div>


                <div className="icon">
                    <ImageIcon />
                    <NavLink to="/images" className="link">
                        <p>Images</p>
                    </NavLink>
                </div>

                <div className="icon">
                    <LocalOfferIcon />
                    <NavLink to="/shopping" className="link">
                        <p>Shopping</p>
                    </NavLink>
                </div>

                <div className="icon">
                    <LocationOnIcon />
                    <NavLink to="/maps" className="link">
                        <p>Maps</p>
                    </NavLink>
                </div>

                <div className="icon">
                    <MoreVertIcon />
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
    )
}

export default IconBar
