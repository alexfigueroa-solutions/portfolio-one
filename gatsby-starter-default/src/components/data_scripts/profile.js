import React from 'React'

const ProfileArray = [
    {
        first_name: 'Alejandro',
        last_name: 'Figueroa',
        passions: [
            'Technology',
            'Mathematics',
            'Music'
        ],
        job_title: 'Full-Stack Web Developer',
        specializations: [
            'Automation',
            'Data Science',
            'Business Management System',
        ],
        years_of_dev_exp: '4 years'
    }
]
{
    ProfileArray.map(
        Profile => (
            <div class = "card">
                <div class = "card-title">
                    {Profile.job_title}
                </div>
                <div class = "first-name">
                    {Profile.first_name}
                </div>
                <div class = "last-name">
                    {Profile.last_name}
                </div>
                <div class = "passions">
                    {Profile.passions}
                </div>
                <div class = "specializations">
                    {Profile.specializations}
                </div>
                <div class = "dev-exp">
                    {Profile.years_of_dev_exp}
                </div>
            </div>
        )
    )
}