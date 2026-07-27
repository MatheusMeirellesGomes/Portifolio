// Componente FloatingContact - Botão flutuante de contato rápido
// Fica fixo no canto da tela e abre um menu com os principais links de contato

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // Biblioteca de animações
import { Bot, X, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react'; // Ícones

const FloatingContact = () => {
  // Estado que controla se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Links exibidos no menu, na ordem em que aparecem
  const links = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5531995050104',
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/MatheusMeirellesGomes',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/matheusgomes0104',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/gomesmatheusjj_',
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu de links - aparece apenas quando isOpen é true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="flex flex-col items-end gap-3">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center gap-3 group"
              >
                {/* Rótulo com o nome do link */}
                <span className="bg-card border border-border rounded-md px-3 py-1 text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  {link.name}
                </span>
                {/* Ícone circular */}
                <span className="w-11 h-11 flex items-center justify-center rounded-full bg-card border border-primary/50 text-primary hover-glow">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão principal - alterna entre ícone de robô e X */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Fechar menu de contato' : 'Abrir menu de contato'}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover-glow animate-glow-pulse"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
