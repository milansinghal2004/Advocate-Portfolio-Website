export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <a href="#top" className="font-display italic text-lg tracking-tight">
        Divya Modi<span className="text-accent">.</span>
      </a>
      <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase">
        &copy; {new Date().getFullYear()} Divya Modi Advocacy. All Rights Reserved.
      </p>
      <div className="flex gap-8 text-[10px] text-muted-foreground tracking-[0.25em] uppercase">
        {/* Links removed as per request */}
      </div>
    </footer>
  );
}
