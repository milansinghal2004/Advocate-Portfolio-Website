export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <a href="#top" className="font-display italic text-lg tracking-tight">
        Valerius<span className="text-accent">.</span>
      </a>
      <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase">
        &copy; {new Date().getFullYear()} Valerius Advocacy. All Rights Reserved.
      </p>
      <div className="flex gap-8 text-[10px] text-muted-foreground tracking-[0.25em] uppercase">
        <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
        <a href="#" className="hover:text-accent transition-colors">Terms</a>
      </div>
    </footer>
  );
}
