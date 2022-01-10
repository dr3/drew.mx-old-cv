module.exports = {
  name: 'Drew McMillan',
  title: 'Senior Fullstack Software Engineer (Web)',
  userDetails: [
    { label: 'Based in', text: 'London, UK' },
    {
      label: 'Email',
      text: 'hello@mcmill.co.uk',
      href: 'mailto:hello@mcmill.co.uk',
    },
    { label: 'Website', text: 'drew.mx', href: 'https://drew.mx' },
    {
      label: 'Linkedin',
      text: 'linkedin.com/in/dr3',
      href: 'https://www.linkedin.com/in/dr3/',
    },
  ],
  sections: [
    {
      title: 'About Me',
      subsections: [
        {
          body: [
            'Working as a Software Engineer for both household names BBC & Trainline and a fast paced startup, I have built sites in over 40 languages and have experience scaling applications to serve hundreds of millions of users. I am passionate about full stack Javascript and focus on improving performance to better serve users.',
          ],
        },
      ],
    },
    {
      title: 'Employment',
      subsections: [
        {
          labelRange: ['June 2021', 'Now'],
          title: 'Senior Web Engineer - Trainline',
          bodyList: [
            'Working to create a new GraphQL gateway from existing REST APIs to refactor large parts of our website. Using Relay to improve performance, dev experience and code quality across a large booking flow application.',
          ],
          techStack: [
            'Typescript',
            'GraphQL (Relay, Mesh)',
            'React',
            'Node',
            'Webpack',
            'Redux',
            'Babel',
          ],
        },
        {
          labelRange: ['Feb 2021', 'May 2021'],
          title: 'Software Engineer - Garaji',
          bodyList: [
            'With a small team we rebuilt the tech stack from the bottom up to create multiple apps and webpages using a single code base.',
            'Utilised React Native & Lambda to create a single application which when deployed, served multiple usecases and target audiences, both on the web and to native IOS and android. This approach was not only less costly to implement, but allowed us to develop across platforms extremely quickly to meet tight deadlines.',
          ],
          techStack: [
            'Typescript',
            'React Native (IOS & Android)',
            'Lambda',
            'React Native Web',
            'Node',
            'Webpack',
            'Redux',
            'Angular',
          ],
        },
        {
          labelRange: ['Nov 2019', 'Feb 2021'],
          title: 'Web Engineer - Trainline',
          bodyList: [
            'Worked in both mobile & desktop web feature team using AB testing and rapid iterations to serve an audience of over 96m monthly visits.',
            'In the core application team, I used data driven metrics to measure success in Performance improvement & infrastructure changes to optimise the user experience & solve department wide technical issues.',
            'Improved developer experience through the creation of CLI tools to tackle common annoyances and time sinks with deployment and performance analysis.',
            'Introduced and acted as a Performance Champion with the aim of improving customer facing performance and upskill the rest of the department in improving performance.',
            'Lead the effort to improve our Google Web Vitals scores and reduce unnecessary load times in the user booking flow.',
          ],
          techStack: [
            'Typescript',
            'React',
            'Node',
            'Webpack',
            'Redux',
            'AWS EC2',
            'S3',
          ],
        },
        {
          labelRange: ['Nov 2018', 'Nov 2019'],
          title: 'Software Engineer - BBC News',
          body: [
            'Working with the latest in full stack Javascript to build the future of BBC article pages in ReactJS. All work can be found at https://github.com/bbc/simorgh and https://github.com/bbc/psammead which are entirely opensource.',
            "Originally on the core Articles team, I become a central member of the Simorgh project. At it's core it is an Isomorphic React application that serves articles and frontpages to users both in the UK and around the world. The second deliverable, BBC World Service frontpages, were delivered with a team inexperienced on the codebase and through regular code reviews and many workshop sessions I helped guide us to delivering very rapidly.",
          ],
          techStack: [
            'Javascript',
            'React',
            'Node',
            'Webpack',
            'AWS EC2',
            'ELB',
            'Lambda',
            'S3',
          ],
        },
        {
          labelRange: ['Sept 2017', 'Nov 2018'],
          title: 'Junior Software Engineer - BBC News',
          body: [
            'Working on the front page of BBC news (bbc.co.uk/news) as well as a number of other pages such as topic pages and market data. Working part time (Sept 2017 -> June 2018) during my studies, and full time after that, to develop new features and improving existing code to be more reusable. Writing e2e and unit tests to ensure that our sites maintain functionality with a quickly changing codebase.',
          ],
          techStack: ['Javascript', 'React', 'Node', 'Ruby'],
        },
        {
          labelRange: ['Aug 2016', 'Aug 2017'],
          title: 'Trainee Web Developer - BBC News',
          body: [
            'Between my 2nd & 3rd years of university, developing new features, improvements and whole new sections of the BBC News website. Working alongside journalists & Product directly on the output of one of the world’s most successful news websites to a global audience of 100s of millions.',
          ],
          techStack: [
            'Javascript',
            'HTML',
            'PHP',
            'CSS',
            'React',
            'Node',
            'Ruby',
          ],
        },
      ],
    },
    {
      title: 'Education',
      subsections: [
        {
          label: '2014 - 2018',
          title: 'BSC Computer Science @ Aberystwyth University – 1st',
          body: [
            "1st Class Honors Degree in 'BSC Computer Science (with integrated year in industry)'",
          ],
        },
        {
          label: '2007 - 2014',
          title: 'A Levels @ Stratford upon Avon School',
          body: [
            "A Levels in Maths, Business Studies and ICT. AS Level in Physics. 12 GCSE's ranging from A* to B",
          ],
        },
      ],
    },
    // {
    // title: 'Technical Interests',
    // subsections: [
    // {
    //   label: 'Performance',
    //   body: [
    //     'In competitive market user load times of a couple seconds can mean a large amount of the audience leave your site. I have a keen and growing interest in reducing this using methods such as caching, JavaScript bundling and developing to avoid bottlenecks, such as blocking JavaScript, where possible.',
    //   ],
    // },

    // {
    //   label: 'Creating effective software',
    //   body: [
    //     'Analysing product requirements I can lead decision making and development to meet the requirements in a timely and suitable manor. Understanding available technologies quickly, I can lead others and weigh all opinions to create effective software that is performant, scalable and accessible.',
    //   ],
    // },
    // {
    //   label: 'Adapting quickly',
    //   body: [
    //     'When working in an agile team you can often move to a new software system when a new epic is begun. I am very strong at quickly understanding the new and unknown infrastructure, and developing within it. I strive to develop my skills as fast as possible and frequently explore new technologies to understand how they can be used to help better serve our audience.',
    //   ],
    // },
    // {
    //   label: 'Code analysis and review',
    //   body: [
    //     'Being a code owner of our primary applications, I have repeatedly shown I can give constructive feedback on others’ code to help them improve, as well as foresee future issues that may arise and rapidly come up with solutions to fix them. Dealing with legacy code bases I can analyse which areas are suitable to reuse and weigh the cost of redevelopment to ensure we deliver the best product possible.',
    //   ],
    // },
    // {
    //   label: 'Applying best practices',
    //   body: [
    //     'Constantly learning best practices, I am able to best solve problems using suitable technology to deliver user value. Using CD and versioning to deliver faster, ensuring best practices are followed in HTML semantics, React JS and caching are just a few of the many ways I have shown my ability to understand and apply technologies when suitable.',
    //   ],
    // },
    //   ],
    // },
    // {
    //   title: 'References',
    //   subsections: [
    //     {
    //       title: 'Kuldeep Daftary - Software Engineering Team Lead (Trainline)',
    //       body: ['kuldeep.daftary@gmail.com'],
    //     },
    //     {
    //       title:
    //         'Benjamin Hobbs - Software Engineering Manager (BBC News) & VP Engineering (Garaji)',
    //       body: ['hobbs@hey.com'],
    //     },
    //   ],
    // },
    {
      title: 'A copy of this CV can be found at https://drew.mx/cv',
    },
  ],
};
