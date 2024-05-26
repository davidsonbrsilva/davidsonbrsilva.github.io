export const projects = {
  simps:
    'Simps is a semiotic process simulator and an artificial intelligence in which prey and predators coexist in a virtual environment and interact with each other through basic processes such as associative memory, perception and focus of attention.',
  aquascript:
    'AquaScript is a procedural programming language developed for learning about compilers theory. Despite the script term in its name, it is a compiled programming language.',
  hufzip:
    'Hufzip is a text file compressor based on Huffman algorithm. It has a didatic character and was built for the sole purpose of learning about file compressing methods. Files compressed with Huffzip have .hfz extension.',
  gongo:
    'Gongo is a simple chat built for the purpose of learning about sockets, provided with a client-server architecture that allows multiple users to communicate simultaneously through the TCP protocol.',
  sparksMusicLibrary:
    'Sparks Music Library is a library of classes built for recognition, extraction and transposition of musical chords.',
  dialogger:
    'Dialogger is a fun yes-or-no question-and-answer web application built to practice UI development with CSS in React and custom event handling in JavaScript.',
  davidsonbrsilvaGithubIo:
    'This is the website you are seeing right now, built to be a space for publicizing my main creations.',
  versioningWorkflow: 'Versioning Workflow is a tool for generating automatic code versions in your projects.',
};

export const githubActions = {
  github: 'View on Github',
  website: 'View website',
};

export default {
  loadingMessage: 'Loading...',
  genericErrorMessage: 'Something went wrong. Check your internet connection.',
  button: {
    defaultIcon: 'Default icon',
    hoverIcon: 'Mouse hover icon',
    activeIcon: 'Active button icon',
  },
  aboutMe: {
    sections: {
      aboutMe: {
        closeButton: 'Close',
        title: 'About me',
        paragraph:
          'Thank you for your visit! I am a developer with a degree in Information Systems from <a href="http://portal.ufvjm.edu.br/" target="_blank">Federal University of the Jequitinhonha and Mucuri Valleys</a> and I\'ve been worked as a lead developer at <a href="https://mercadolivre.com.br/" target="_blank">Mercado Livre</a>. In the programming world, I am mainly interested in Artificial Intelligence, Compilers and Web Development.',
      },
      job: {
        title: 'Need me for a job?',
        paragraph1:
          'I have market experience in developing APIs with microservices in .Net (C#) and developing user interfaces with React and React Native. I have solid knowledge in CSS and SASS, semantic HTML and JavaScript in the latest versions from ECMAScript 6. I am currently looking for improvement in my English skills.',
        paragraph2:
          'I know the best practices pointed out by the Clean, Onion and Hexagonal architectures, as well as DDD (Domain-Driven Development), DevOps and building CI/CD mats. I also relate a lot to UX/UI issues. See more information on my <a href="https://www.linkedin.com/in/davidsonbrsilva/" target="_blank">LinkedIn</a> profile.',
      },
    },
  },
  header: {
    aboutMe: 'About me',
    switchToDarkMode: 'Change to dark mode',
    switchToLightMode: 'Change to light mode',
    chooseALanguage: 'Choose a language',
    seeMoreInfoAboutDeveloper: 'Veja mais informações sobre o desenvolvedor',
    curriculum: {
      label: 'Curriculum',
      view: 'View',
      download: 'Download',
      copyLink: 'Copy link',
      isCopied: 'Copied!',
      link: 'https://rxresu.me/davidsonbrsilva/curriculum-en-us',
      pdf: 'https://storage.rxresu.me/clwlh5yxj0begtojz1wj93hhb/resumes/Curriculum (en-US).pdf',
    },
  },
  portfolio: {
    title: 'Davidson Bruno',
    subtitle: 'Fullstack Developer',
    sections: {
      githubProjects: {
        title: 'Github Projects',
        projects,
        actions: githubActions,
      },
      mediumPosts: {
        title: 'Medium Posts',
      },
    },
  },
};
