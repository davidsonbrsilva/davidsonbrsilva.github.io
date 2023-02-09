export const projects = {
  simps:
    'Simps is a semiotic process simulator and an artificial intelligence in which prey and predators coexist in a virtual environment and interact with each other through basic processes such as associative memory, perception and focus of attention.',
  aquascript:
    'AquaScript is a procedural programming language developed for learning about compilers theory. Despite the script term in its name, it is a compiled programming language.',
  hufzip:
    'Hufzip is a text file compressor based on Huffman algorithm. It has a didatic character and was built for the sole purpose of learning about file compressing methods. Files compressed with Huffzip have .hfz extension.',
  gongo:
    'Gongo is a simple chat built for the purpose of learning about sockets, provided with a client-server architecture that allows multiple users to communicate simultaneously through the TCP protocol.',
  sparksMusicLibray:
    'Sparks Music Library is a library of classes built in .Net 5 for recognition, extraction and transposition of musical chords.',
  dialogger:
    'Dialogger is a fun yes-or-no question-and-answer web application built to practice UI development with CSS in React and custom event handling in JavaScript.',
  davidsonbrsilvaGithubIo: 'This project, built in Vue.JS, refers to the portfolio site you are currently viewing.',
};

export const actions = {
  github: 'View on Github',
  website: 'View website',
};

export default {
  header: {
    aboutMe: 'About me',
    switchToDarkMode: 'Change to dark mode',
    switchToLightMode: 'Change to light mode',
    chooseALanguage: 'Choose a language',
  },
  portfolio: {
    title: 'Davidson Bruno',
    subtitle: 'Fullstack Developer',
    sections: {
      githubProjects: {
        title: 'Projects',
        projects,
        actions,
      },
      mediumPosts: {
        title: 'Publishes',
      },
    },
  },
};
