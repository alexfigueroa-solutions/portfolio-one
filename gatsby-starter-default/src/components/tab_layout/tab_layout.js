import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../general.scss";
class TabLayout extends React.Component{
    render(){
        const{
            nav_header_array,
            content_array
        } = this.props;
        return(
        <Tabs className = 'tabComponent'>
            <div className = 'tabNavDiv'>
                <TabList className = 'tabNavList'>
                    {nav_header_array.map(
                        header =>(
                            <Tab className = 'tabNavBtn'>{header}</Tab>
                        )
                    )
                    }
                </TabList>
            </div>
            {/*Tab Content Area: maps content_array to   */}
            <div className = 'tabContentDiv'>
                {content_array.map(
                    array => (
                        <TabPanel className = 'tabContentSubDiv'>
                            {
                            array.map(
                                content =>(
                                    <div>
                                        <h1>{content.title}</h1>
                                        <h2>{content.description}</h2>
                                    </div>
                                )
                            )
                            }
                        </TabPanel>
                        
                        
                    )
                )}
            </div>
            

        </Tabs>
        )
    }
}
export default TabLayout