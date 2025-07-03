const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Products", url: "/products" },
    { name: "Services", url: "/services" },
    { name: "Contacts", url: "/contacts" },
    { name: "Get a Quote", url: "/quote" },
  ];
  return (
    <nav className="bg-primary text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          KPJ Drilling <span className="text-xs">(Pty)Ltd</span>
        </h2>
        <ul className="list-none flex space-x-17">
          {links.map((link) => (
            <li key={link.url} className="">
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
