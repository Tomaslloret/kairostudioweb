import { ArrowUp } from "lucide-react";

const KaironLogo = ({ light = false }: { light?: boolean }) => (
  <a href="/" className="flex items-center gap-2 group">
    <div className={`relative w-10 h-10 rounded-lg flex items-center justify-center ${light ? 'bg-primary' : 'bg-primary'}`}>
      <img src="/favicon.ico" alt="Kairon" className="w-8 h-8 object-contain" />
      <ArrowUp className="absolute -top-1 -right-1 w-3.5 h-3.5 animate-arrow-up text-white" />
    </div>
    <div className="flex flex-col leading-tight">
      <span className={`font-heading font-bold text-lg tracking-tight ${light ? 'text-primary-foreground' : 'text-primary'}`}>
        KAIRON
      </span>
      <span className={`font-heading text-[10px] tracking-[0.3em] uppercase ${light ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
        STUDIO
      </span>
    </div>
  </a>
);

export default KaironLogo;
