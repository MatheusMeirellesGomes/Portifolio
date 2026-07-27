// Componente Certifications - Seção de certificados, cursos e idiomas

import { motion } from 'framer-motion'; // Biblioteca de animações
import { GraduationCap, Languages, BookOpen } from 'lucide-react'; // Ícones das categorias

const Certifications = () => {
  // Array com os certificados e cursos, agrupados por categoria
  const certifications = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: 'Programação Web',
      issuer: 'PUC Minas',
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: 'Banco de Dados SQL',
      issuer: 'DataByte',
    },
    {
      icon: <Languages className="w-7 h-7" />,
      title: 'Inglês Avançado (B2 e C1)',
      issuer: 'Number One',
    },
    {
      icon: <Languages className="w-7 h-7" />,
      title: 'Espanhol Intermediário',
      issuer: 'Professora particular',
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Português e Matemática Avançada',
      issuer: 'Kumon',
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título da seção com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Certificados & Cursos</h2>
          <p className="text-xl text-muted-foreground">
            Formação complementar e idiomas
          </p>
        </motion.div>

        {/* Grid com os cards de certificados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 flex items-start gap-4 hover-glow"
            >
              <div className="text-primary flex-shrink-0">{cert.icon}</div>
              <div>
                <h3 className="font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
