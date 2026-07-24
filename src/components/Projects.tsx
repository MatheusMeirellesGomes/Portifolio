// Componente Projects - Seção de projetos do portfólio
// Exibe cards com imagem, descrição, tecnologias usadas e links para cada projeto

import { motion } from 'framer-motion'; // Biblioteca de animações
import { ExternalLink, Github } from 'lucide-react'; // Ícones dos botões
import { Button } from '@/components/ui/button'; // Componente de botão estilizado

const Projects = () => {
  // Array com todos os projetos - cada objeto contém as informações de um projeto
  const projects = [
    {
      title: "Disparador WhatsApp",
      description: "Sistema fullstack de gerenciamento de contatos e automação de mensagens via WhatsApp, com importação de CSV e campanhas de disparo",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Docker"], // Tecnologias usadas
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop", // Imagem de capa
      details: "Worker independente para processamento assíncrono de fila de envios, integração com WPPConnect e autenticação JWT",
      liveUrl: null,
      githubUrl: "https://github.com/MatheusMeirellesGomes/Disparador-Whatsapp"
    },
    {
      title: "LP Consultorias",
      description: "Site institucional fullstack para boutique internacional de assessoria estratégica em serviços internacionais",
      tech: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
      details: "Login e cadastro com JWT e bcrypt, chatbot baseado em regras e suporte a 4 idiomas com internacionalização em tempo real",
      liveUrl: null,
      githubUrl: "https://github.com/MatheusMeirellesGomes/Lp_Consultorias"
    },
    {
      title: "TimeAwards",
      description: "Sistema de gerenciamento inteligente de tempo, produtividade e organização de tarefas com IA",
      tech: ["Java", "PostgreSQL", "Azure OpenAI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      details: "Integração com Azure OpenAI para insights personalizados e dashboards interativos de desempenho",
      liveUrl: null,
      githubUrl: "https://github.com/MatheusMeirellesGomes/TIMEAWARDS-TI2"
    },
    {
      title: "Algorithms & Data Structures",
      description: "Repositório com mais de 500 exercícios de algoritmos, estruturas de dados e lógica de programação",
      tech: ["C", "C++", "Java"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop",
      details: "Recursividade, listas, pilhas, filas, árvores e análise de complexidade, com foco em programação orientada a objetos",
      liveUrl: null,
      githubUrl: "https://github.com/MatheusMeirellesGomes/Algorithms-data-structures"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título da seção com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Projetos</h2>
          <p className="text-xl text-muted-foreground">
            Alguns dos meus trabalhos mais recentes
          </p>
        </motion.div>

        {/* Grid com 2 colunas (em desktop) para os cards de projetos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            // Card do projeto com animação de fade-in sequencial
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden hover-glow group"
            >
              {/* Imagem de capa do projeto com efeito de zoom ao passar o mouse */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradiente escuro sobre a imagem para melhorar contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              {/* Informações do projeto */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {/* Tags das tecnologias usadas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Botões de ação - GitHub e/ou Ver Projeto */}
                <div className="flex gap-2">
                  {/* Botão GitHub - aparece apenas se o projeto tem repositório */}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild // Permite usar <a> como filho
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}
                  {/* Botão Ver Projeto - aparece apenas se tem URL do site */}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
