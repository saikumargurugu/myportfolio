
export const resumeRoutData = [
    { title: 'About Me', route: 'aboutme' },
    { title: 'Educational', route: 'edu' },
    { title: 'Skils', route: 'skils' },
    { title: 'Tools Worked', route: 'tools' },
    { title: 'Work History', route: 'work' },
    { title: 'Certificates', route: 'certificates' },
]


export const toolsUsed = [
    {
        title: 'Git Version Control',
        image: 'git.png',
        description: `Git is a version control system.
                     It helps us to maintain and mange code.This is very usefull 
                     when the team is large and track code.`,
        otherPoints: {
            examples: [
                'Git Hub',
                'Git Lab',
                'BitBucket'
            ]
        },
        link: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control'
    },
    {
        title: 'Docker',
        image: 'docker.png',
        description: `Docker is a Virtual Machien which helps us 
        manintain same enviorment setup anywhere, this runs on linux server.
        these create an images that we can run on docker.`,
        otherPoints: { examples: [] },
        link: 'https://www.docker.com/'
    },
    {
        title: 'Click Up',
        image: 'clickup.jpg',
        description: `ClickUp is workspace and work management tool that 
        hepls to track development process.This easys the relese process.`,
        otherPoints: { examples: [] },
        link: 'https://clickup.com/'

    },
    {
        title: 'Sentry',
        image: 'sentry.png',
        description: `Sentry is error reporting tool that reports us
            issue occured to  user provides additional  information.`,
        otherPoints:{ examples: [] },
        link: 'https://sentry.io/welcome/'
    }
    ]

export const Skils = {
        'frontend': [
            {
                title: 'HTML',
                image: 'html.png',
                description: `Git is a version control system.
                         It helps us to maintain and mange code.This is very usefull 
                         when the team is large and track code.`,
                otherPoints: {
                    examples: [
                    ]
                },
                link: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control'
            },
            {
                title: 'CSS',
                image: 'css.png',
                description: `Docker is a Virtual Machien which helps us 
            manintain same enviorment setup anywhere, this runs on linux server.
            these create an images that we can run on docker.`,
                otherPoints: { examples: [] },
                link: 'https://www.docker.com/'
            },
            {
                title: 'React JS',
                image: 'react.png',
                description: `ClickUp is workspace and work management tool that 
            hepls to track development process.This easys the relese process.`,
                otherPoints: { examples: [] },
                link: 'https://clickup.com/'

            },
            {
                title: 'Redux',
                image: 'redux.png',
                description: `Sentry is error reporting tool that reports us
                issue occured to  user provides additional  information.`,
                otherPoints: { examples: [] },
                link: 'https://sentry.io/welcome/'
            },
            {
                title: 'Java Script',
                image: 'js.png',
                description: `Sentry is error reporting tool that reports us
                issue occured to  user provides additional  information.`,
                otherPoints: { examples: [] },
                link: 'https://sentry.io/welcome/'
            },
        ],
        'backend': [
            {
                title: 'Python',
                image: 'python.png',
                description: `Git is a version control system.
                         It helps us to maintain and mange code.This is very usefull 
                         when the team is large and track code.`,
                otherPoints: {
                    examples: [
                    ]
                },
                link: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control'
            },
            {
                title: 'Django',
                image: 'django.png',
                description: `Docker is a Virtual Machien which helps us 
            manintain same enviorment setup anywhere, this runs on linux server.
            these create an images that we can run on docker.`,
                otherPoints: { examples: [] },
                link: 'https://www.docker.com/'
            },
            {
                title: 'Rest Frame Work',
                image: 'restframework.png',
                description: `ClickUp is workspace and work management tool that 
            hepls to track development process.This easys the relese process.`,
                otherPoints: { examples: [] },
                link: 'https://clickup.com/'

            }
        ],
        'database': [
            {
                title: 'Postgress',
                image: 'psql.png',
                description: `Git is a version control system.
                     It helps us to maintain and mange code.This is very usefull 
                     when the team is large and track code.`,
                otherPoints: {
                    examples: [
                    ]
                },
                link: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control'
            },
            {
                title: 'DynamoDb',
                image: 'dynamoDB.png',
                description: `Docker is a Virtual Machien which helps us 
        manintain same enviorment setup anywhere, this runs on linux server.
        these create an images that we can run on docker.`,
                otherPoints: { examples: [] },
                link: 'https://www.docker.com/'
            }
        ]
    }

export const works=[
    'Aerosimple'
]

export const workHistory={
    'Aerosimple':{
        'company_name': 'Aerosimple Technoliges',
        'type': 'Product based',
        'image':'aerosimple.jpg',
        'description':`For the past 2+ years working on developing a responsive user interface and API's for Machine Critical Application
        used in Airports by accomplishing the new features, bug fixes in a stipulated time by collaborating with team or
        working independently sometimes to meet the requirements and feedback from the Airports(Clients).`,
        'other_points':[
            `Working on developing and implementing user interface React.js and developing REST api's using Django
                RestFramework,Django.`,
            `Maintaining existing code base and implementing new features and enhancements.
            Working on Immediate Bug fixes with highpriority.`,
            `writing test casees to make sure that AIP takes desired request and gives requeried response and with relevant
                status codes.`,
            `working with docker to make sure that applicatio works in any enviorment and satsfiying dependencies.
                Participating in Code Reviews and CodeRefactoring.`,
            `Mentoring interns and junior softwareengineers.`,
            `Working with mobile team to notify and enhancing the API's according to theirrequirement.`
        ],
        'Projects': [
            {
                
                'name':'AeroSimple(B2B Aplication)',
                'link':'https://www.aerosimple.com/',
                'my_role':{
                    'My role' : 'Full Stack Developer',
                    'Frontend' : 'HTML, CSS, JavaScript, React.js, Redux',
                    'backend': 'Python, Django, Django Rest framework, Node.js',
                    'Database': 'Postgres SQL, Dynamo DB'
                },
                'description':`Aerosimple makes airport operations and management simple, easily connecting operations and
                regulators to ultimately make airports maintenance easier and safer.`,
                'Modules Developed and Worked':{
                    'User And Roles Manageement':`Every users will
                     have his/her respective role in Airport 
                    Management And restrictions to his duties. To
                    mange his/her restrictions they asing a role to user
                     and he can manage the duties asinged to that role.`,
                    'WorkOrderManagement':`Identify, assign and resolve work
                    orders which usually takes more time is reduced to fraction
                    of minutes,so that it will be easier for the Airport Authorities 
                    to assign tasks to related persons quickly and verify
                    them. Basing on the client feedback, new enhancements are added.`,
                    'Preventative Maintaince':`To automatically create workorder by
                     scheduling when workorder should be created and give the input Priorly`,
                    'AssetManagement':`Asset Management is to maintain the list of assets
                    that airport has owned. Displaying all the assets on map and
                    creating a work order is any of the asset is not functioning
                    as expected. It helps in racking list of
                    work orders created on the asset.`
                }
            },
        ]
    }   
}


export const contactData=[
    {
        'name':'Phone',
        'type': 'Number',
        'content':7013166331,
    },
    {
        'name':'Email',
        'type': 'Text',
        'content':'saikumargurugubelli1234@gmail.com',
    },
]