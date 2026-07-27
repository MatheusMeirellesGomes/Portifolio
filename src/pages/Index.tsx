// Página principal do portfólio
// Organiza e renderiza todas as seções do site na ordem correta

import Navigation from '@/components/Navigation'; // Barra de navegação fixa no topo
import Hero from '@/components/Hero'; // Seção inicial com nome e chamada para ação
import About from '@/components/About'; // Seção "Sobre Mim" com foto e bio
import Skills from '@/components/Skills'; // Seção de habilidades técnicas
import Certifications from '@/components/Certifications'; // Seção de certificados e cursos
import Projects from '@/components/Projects'; // Seção de projetos realizados
import Contact from '@/components/Contact'; // Seção de contato
import Footer from '@/components/Footer'; // Rodapé do site
import FloatingContact from '@/components/FloatingContact'; // Botão flutuante de contato rápido

const Index = () => {
  return (
    // Container principal que ocupa no mínimo a altura total da tela
    <main className="min-h-screen">
      <Navigation /> {/* Navegação fixa no topo */}
      <Hero /> {/* Primeira seção - apresentação */}
      <About /> {/* Segunda seção - sobre mim */}
      <Skills /> {/* Terceira seção - habilidades */}
      <Certifications /> {/* Quarta seção - certificados e cursos */}
      <Projects /> {/* Quinta seção - projetos */}
      <Contact /> {/* Sexta seção - contato */}
      <Footer /> {/* Rodapé */}
      <FloatingContact /> {/* Botão flutuante fixo em todas as seções */}
    </main>
  );
};

export default Index;
