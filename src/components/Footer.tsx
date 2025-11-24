import { Instagram, Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark dark:bg-primary-dark text-foreground border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dra. Vitória Medeiros</h3>
                <p className="text-sm text-muted-foreground">
                  Harmonização Orofacial
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especialista dedicada a transformar sorrisos e devolver a confiança que cada mulher merece. Sua jornada de amor próprio começa aqui.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#procedimentos"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Procedimentos
                </a>
              </li>
              <li>
                <a
                  href="#transformacoes"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Transformações
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/dra.vitoriamedeiross"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">@dra.vitoriamedeiross</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/dravitoriamedeiross"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@dravitoriamedeiross"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="text-sm">YouTube</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2025 Dra. Vitória Medeiros. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                Política de Privacidade
              </a>
              <span>|</span>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
