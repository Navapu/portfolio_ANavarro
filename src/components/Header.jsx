const Header = () => {
    return (
        <header className="flex h-28 justify-between items-center px-10 bg-white shadow-md sticky top-0">
            <div className="flex items-center gap-5">
                <h2 className="text-2xl font-bold text-gray-900 font-poppins">Alejandro Navarro</h2>
            </div>
            <nav>
                <ul className="flex list-none gap-5">
                    <li><a href="#home" className="text-gray-900 no-underline transition duration-500 hover:text-blue-600">Home</a></li>
                    <li><a href="#about" className="text-gray-900 no-underline transition duration-500 hover:text-blue-600">Sobre mí</a></li>
                    <li><a href="#projects" className="text-gray-900 no-underline transition duration-500 hover:text-blue-600">Proyectos</a></li>
                    <li><a href="#contact" className="text-gray-900 no-underline transition duration-500 hover:text-blue-600">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
