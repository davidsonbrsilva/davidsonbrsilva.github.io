export const projects = {
  simps:
    'Simps é um simulador de processos semióticos e uma inteligência artificial na qual presas e predadores coexistem em um ambiente virtual e interagem entre si através de processos básicos como memória associativa, percepção e foco de atenção.',
  aquascript:
    'AquaScript é uma linguagem de programação procedural desenvolvida para fins de aprendizado sobre teoria de compiladores. Apesar do termo script em seu nome, é uma linguagem de programação compilada.',
  hufzip:
    'Hufzip é um compressor de arquivos de texto baseado no algoritmo de Huffman. Possui caráter didático e foi construído com o único propósito de aprendizado sobre métodos de compressão de arquivos. Arquivos comprimidos com Hufzip possuem a extensão .hfz.',
  gongo:
    'Gongo é um chat simples construído para fins de aprendizado sobre sockets, fornecido com uma arquitetura cliente-servidor que permite que múltiplos usuários conversem simultaneamente através do protocolo TCP.',
  sparksMusicLibray:
    'Sparks Music Library é uma biblioteca de classes construída em .Net 5 para reconhecimento, extração e transposição de acordes musicais.',
  dialogger:
    'Dialogger é uma aplicação web de perguntas e respostas divertida construída para praticar desenvolvimento de UI com CSS em React e manipulação de eventos customizados em JavaScript.',
  davidsonbrsilvaGithubIo:
    'Este projeto, construído em Vue.JS, se refere ao site de portfólio que você está vendo neste momento.',
};

export const actions = {
  github: 'Ver no Github',
  website: 'Ver website',
};

export default {
  header: {
    aboutMe: 'Sobre mim',
    switchToDarkMode: 'Mudar para o Modo Escuro',
    switchToLightMode: 'Mudar para o Modo Claro',
    chooseALanguage: 'Escolha um idioma',
  },
  portfolio: {
    title: 'Davidson Bruno',
    subtitle: 'Desenvolvedor Fullstack',
    sections: {
      githubProjects: {
        title: 'Projetos',
        projects,
        actions,
      },
      mediumPosts: {
        title: 'Postagens',
      },
    },
  },
};
