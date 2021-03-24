import React from 'React';

class TabLayout extends React.Component{
    render(){
        const{
            nav_header_array,
            content_array
        }
        <div class = 'container'>
            <div class = 'nav-container'>
                <ul class = 'nav-list'>
                    {nav_header_array.map(
                        header =>(
                            <li class = 'nav-btn'>{header}</li>
                        )
                    )
                    }
                </ul>
            </div>
            <div class = 'content-container'>
                {content_array.map(
                    array => (
                        array.map(
                            content =>(
                                <div class = "subcontainer">
                                    <h1>{content.title}</h1>
                                    <h2>{content.description}</h2>
                                </div>
                            )
                        )
                        
                    )
                )}
            </div>
            

        </div>
    }
}
export default TabLayout