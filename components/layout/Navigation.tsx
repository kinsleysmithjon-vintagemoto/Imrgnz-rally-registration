export default function Navigation() {
  const links = [
    "Home",
    "About",
    "Programme",
    "Accommodation",
    "Register",
    "FAQ",
    "Contact",
  ];

  return (
    <nav className="bg-neutral-800 border-t border-neutral-700">
      <div className="mx-auto flex max-w-6xl gap-6 px-6 py-3">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium text-white hover:text-red-500"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}