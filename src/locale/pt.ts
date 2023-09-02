export const projects = {
  simps:
    'Simps é um simulador de processos semióticos e uma inteligência artificial na qual presas e predadores coexistem em um ambiente virtual e interagem entre si através de processos básicos como memória associativa, percepção e foco de atenção.',
  aquascript:
    'AquaScript é uma linguagem de programação procedural desenvolvida para fins de aprendizado sobre teoria de compiladores. Apesar do termo script em seu nome, é uma linguagem de programação compilada.',
  hufzip:
    'Hufzip é um compressor de arquivos de texto baseado no algoritmo de Huffman. Possui caráter didático e foi construído com o único propósito de aprendizado sobre métodos de compressão de arquivos. Arquivos comprimidos com Hufzip possuem a extensão .hfz.',
  gongo:
    'Gongo é um chat simples construído para fins de aprendizado sobre sockets, fornecido com uma arquitetura cliente-servidor que permite que múltiplos usuários conversem simultaneamente através do protocolo TCP.',
  sparksMusicLibrary:
    'Sparks Music Library é uma biblioteca de classes construída em .Net 5 para reconhecimento, extração e transposição de acordes musicais.',
  dialogger:
    'Dialogger é uma aplicação web de perguntas e respostas divertida construída para praticar desenvolvimento de UI com CSS em React e manipulação de eventos customizados em JavaScript.',
  davidsonbrsilvaGithubIo:
    'Este é o website que você está vendo neste momento, construído para ser um espaço de divulgação das minhas principais criações públicas.',
};

export const githubActions = {
  github: 'Ver no Github',
  website: 'Ver website',
};

export default {
  loadingMessage: 'Loading...',
  genericErrorMessage: 'Algo deu errado. Verifique sua conexão com a internet.',
  button: {
    defaultIcon: 'Ícone padrão',
    hoverIcon: 'Ícone de foco do mouse',
    activeIcon: 'Ícone de botão ativo',
  },
  aboutMe: {
    sections: {
      aboutMe: {
        closeButton: 'Fechar',
        title: 'Sobre mim',
        paragraph:
          'Obrigado por sua visita! Sou programador formado em Sistemas de Informação pela <a href="http://portal.ufvjm.edu.br/" target="_blank">Universidade Federal dos Vales do Jequitinhonha e Mucuri</a> e atualmente trabalho como Software Developer na <a href="https://mercadolivre.com.br/" target="_blank">Mercado Livre</a>. No mundo da programação, interesso-me, principalmente, por Inteligência Artificial, Compiladores e Desenvolvimento Web.',
      },
      job: {
        title: 'Precisa de mim para um trabalho?',
        paragraph1:
          'Possuo experiência de mercado em desenvolvimento de APIs com microsserviços em .Net (C#) e desenvolvimento de interfaces de usuário com React e React Native. Possuo conhecimento sólido em CSS e SASS, HTML semântico e JavaScript nas versões mais recentes a partir do ECMAScript 6. Busco, atualmente, aperfeiçoamento em frameworks como Vue e Svelte e em minhas habilidades com o inglês.',
        paragraph2:
          'Conheço as boas práticas apontadas pelas arquiteturas Clean, Onion e Hexagonal, bem como DDD (Domain-Driven Development), DevOps e construção de esteiras de CI/CD. Também me identifico bastante com assuntos relacionados à UX/UI. Veja mais informações no meu perfil do <a href="https://www.linkedin.com/in/davidsonbrsilva/" target="_blank">LinkedIn</a>.',
      },
    },
  },
  header: {
    aboutMe: 'Sobre mim',
    switchToDarkMode: 'Mudar para o Modo Escuro',
    switchToLightMode: 'Mudar para o Modo Claro',
    chooseALanguage: 'Escolha um idioma',
    seeMoreInfoAboutDeveloper: 'Veja mais informações sobre o desenvolvedor',
    curriculum: {
      label: 'Currículo',
      see: 'Ver',
      download: 'Baixar',
      copyLink: 'Copiar link',
      isCopied: 'Copiado!',
      link: 'https://resume.io/r/dZg7IkF9o',
      pdf: 'https://drive.google.com/uc?export=download&id=1B80kEGZjU6Zc-bcwBo64auMAhf1lhiep',
    },
  },
  portfolio: {
    title: 'Davidson Bruno',
    subtitle: 'Desenvolvedor Fullstack',
    sections: {
      githubProjects: {
        title: 'Projetos do Github',
        projects,
        actions: githubActions,
      },
      mediumPosts: {
        title: 'Publicações do Medium',
      },
    },
  },
};
