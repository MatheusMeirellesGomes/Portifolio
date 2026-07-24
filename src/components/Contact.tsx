// Componente Contact - Seção de contato do portfólio
// Possui formulário de mensagem (abre o cliente de email padrão) e links de contato

import { motion } from 'framer-motion'; // Biblioteca de animações
import { Button } from '@/components/ui/button'; // Botão estilizado
import { Input } from '@/components/ui/input'; // Campo de texto estilizado
import { Textarea } from '@/components/ui/textarea'; // Área de texto estilizada
import { Mail, Github, Linkedin, MessageCircle, Instagram } from 'lucide-react'; // Ícones de contato
import { useState } from 'react'; // Hook para gerenciar estado

const CONTACT_EMAIL = 'matheusrmme2019@gmail.com';

const Contact = () => {
  // Estado do formulário com nome, email e mensagem
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Função executada ao enviar o formulário - abre o cliente de email padrão com os dados preenchidos
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    const subject = `Contato pelo portfólio - ${formData.name}`;
    const body = `${formData.message}\n\nEmail para retorno: ${formData.email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Título da seção com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">Contato</h2>
          <p className="text-xl text-muted-foreground">
            Vamos trabalhar juntos? Entre em contato!
          </p>
        </motion.div>

        {/* Grid com 2 colunas: formulário à esquerda, links à direita */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Coluna esquerda - Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Desliza da esquerda
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo de nome */}
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background border-border"
                  required // Campo obrigatório
                />
              </div>
              {/* Campo de email */}
              <div>
                <Input
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background border-border"
                  required
                />
              </div>
              {/* Campo de mensagem */}
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>
              {/* Botão de envio */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Coluna direita - Links de contato e disponibilidade */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} // Desliza da direita
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Conecte-se</h3>
            {/* Links de contato: Email, GitHub, LinkedIn, WhatsApp e Instagram */}
            <div className="space-y-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a
                href="https://github.com/MatheusMeirellesGomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>github.com/MatheusMeirellesGomes</span>
              </a>
              <a
                href="https://linkedin.com/in/matheusgomes0104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/matheusgomes0104</span>
              </a>
              <a
                href="https://wa.me/5531995050104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>+55 31 99505-0104</span>
              </a>
              <a
                href="https://instagram.com/gomesmatheusjj_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>@gomesmatheusjj_</span>
              </a>
            </div>

            {/* Card de disponibilidade */}
            <div className="mt-8 p-6 bg-card border border-border rounded-lg">
              <h4 className="font-bold mb-2">Disponível para:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Estágios em desenvolvimento web e programação</li>
                <li>• Estágios em infraestrutura de TI</li>
                <li>• Projetos freelance</li>
                <li>• Desenvolvimento fullstack</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
