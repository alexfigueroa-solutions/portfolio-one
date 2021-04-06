import React from 'react';

class TabLayout extends React.Component{
    render(){
        const{
            nav_header_array,
            content_array
        } = this.props;
        return(
        <div className = 'tabComponent'>
            <div className = 'tabNavDiv'>
                <ul className = 'tabNavList'>
                    {nav_header_array.map(
                        header =>(
                            <li className = 'tabNavBtn'>{header}</li>
                        )
                    )
                    }
                </ul>
            </div>
            {/*Tab Content Area: maps content_array to   */}
            <div className = 'tabContentDiv'>
                {content_array.map(
                    array => (
                        array.map(
                            content =>(
                                <div class = "tabContentSubDiv">
                                    <h1>{content.title}</h1>
                                    <h2>{content.description}</h2>
                                </div>
                            )
                        )
                        
                    )
                )}
            </div>
            

        </div>
        )
    }
}
export default TabLayout