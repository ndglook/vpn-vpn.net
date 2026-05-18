export function Footer() {
  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} VPN под ключ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
