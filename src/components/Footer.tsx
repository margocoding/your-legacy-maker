const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">R</span>
        </div>
        <span className="text-foreground font-bold text-sm">ReputGuard</span>
      </div>
      <p className="text-muted-foreground text-sm">© 2024 ReputGuard. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;
