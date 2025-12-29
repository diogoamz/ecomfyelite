import { Button } from "@/components/ui/button";
const Header = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            {/* Logo Icon */}
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Hexagon background */}
              <path 
                d="M20 2L36.5 11.5V28.5L20 38L3.5 28.5V11.5L20 2Z" 
                className="fill-primary stroke-primary-glow" 
                strokeWidth="1"
              />
              {/* Inner E letter stylized */}
              <path 
                d="M13 12H27M13 20H24M13 28H27M13 12V28" 
                className="stroke-primary-foreground" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Accent dot */}
              <circle cx="30" cy="10" r="2" className="fill-accent" />
            </svg>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-lg leading-tight tracking-tight">
              Ecomfy<span className="text-primary"> Elite</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Mentoria</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            O que inclui
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Investimento
          </a>
        </nav>

        <Button variant="hero" size="sm" onClick={scrollToForm}>
          Aplicar Agora
        </Button>
      </div>
    </header>;
};
export default Header;