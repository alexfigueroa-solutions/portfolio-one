

//store array of projects in var


const TechArrary = [
    {
        databases: [
            'SQLlite',
            'Postgres',
            'Neo4j'
        ],
        front_end: [
            'ReactJS',
            'Javascript',
            'GatsbyJS',
            'Prismic',
            'HTML5',
            'CSS3',
            'SCSS',
            'Bootstrap',
            'Jquery',
            'AJAX'
        ],
        back_end: [
            'Django',
            'Python',
            'Java'
        ],
        data_science: [
            'Pandas',
            'Numpy',
            'Scipy',
            'Matplotlib',
            'Seaborn',
            'R',
            'R Shiny',
            'D3.js'
        ],
        automation: [
            'Selenium',
            'BeautifulSoup4 (bs4)',
            'Arduino'
        ],
        dev_ops: [
            'Git',
            'Github',
            'Docker',
            'Heroku',
            'Powershell Terminal',
            'Bash Terminal'
        ]
    }
]
{
    TechArrary.map(
        Tech => (
            <div class = 'card'>
                <div class = "databases">
                    {Tech.databases}
                </div>
                <div class = "front-end">
                    {Tech.front_end}
                </div>
                <div class = "back-end">
                    {Tech.back_end}
                </div>
                <div class = "data-science">
                    {Tech.data_science}
                </div>
                <div class = "automation">
                    {Tech.automation}
                </div>
                <div class = "dev-ops">
                    {Tech.dev_ops}
                </div>
            </div>
        )
    )
}

