import React from 'react';

const profile_array = [
    {
        label: 'First Name',
        value: 'Alejandro'
    },
    {
        label: 'Last Name',
        value: 'Figueroa'
    },
    {
        label: 'Common Alias',
        value: 'Alex'
    },
    {
        label: 'What I Do',
        value: 'I apply technical and creative software solutions to business problems.'
    }
];
class ProfileCard extends React.Component{
    render(){
        
        return(
            <div class = 'container'>
                {
                    profile_array.map(
                        profile_obj =>(
                            <div class = 'obj-container'>
                                <h3 class = 'label'>{profile_obj.label}</h3>
                                <h2 class = 'value'>{profile_obj.value}</h2>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}
export default ProfileCard