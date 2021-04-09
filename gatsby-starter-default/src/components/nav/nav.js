import React from 'react';

import {Link} from 'react-scroll';


class NavBar extends React.Component{
    render(){
        const {nav_entries} = this.props;
        return(
            <div className = 'metaNavDiv'>
                <div className = 'navBarDiv'>
                    {
                        nav_entries.map(
                            nav_entry => (
                                
                                  
                                
                                <Link
                                 className = 'navEntryTitle'
                                 activeClassName = 'navEntryTitleActive'
                                 href = {nav_entry.href} 
                                 to = {nav_entry.href} 
                                 spy = {true}
                                 smooth = {true}
                                 offset = {-70}
                                 duration = {250}
                                >
                                    {nav_entry.title}
                                </Link>
                            )
                        )
                    }
                    
                </div>

            </div>
        )
    }
}
export default NavBar;