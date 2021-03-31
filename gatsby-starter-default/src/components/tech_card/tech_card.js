import React from 'react';

class TechCard extends React.Component{
    render(){
        const {
            title,
            description,
            category,
            use_cases = [],
            logo_cdn_class,
            url
        } = this.props;
        return(
            <div class = 'container'>
                <a href = {url} class = {logo_cdn_class} aria-label = "Logo">{title}</a>
                <h2>{description}</h2>
                <h3>{category}</h3> 
                <div>
                    <h4>Use Cases: </h4>
                    {
                    use_cases.map(
                        use_case => (
                            <h5>{use_case}</h5>
                        )
                    )
                }
                </div>
                
            </div>
        )
    }
}
export default TechCard