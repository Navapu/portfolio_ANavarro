const Header = () => {
    return (
        <header className="flex h-28 justify-between items-center px-10 bg-[#1F2937] shadow-md">
            <div className="flex items-center gap-5">
                <h2 className="text-2xl font-bold text-[#F3F4F6] font-poppins">Alejandro Navarro</h2>
            </div>
            <nav>
                <ul className="flex list-none gap-5">
                    <li><a href="#home" className="text-[#F3F4F6] no-underline transition duration-500 hover:text-blue-500">Home</a>
                    </li>
                    <li><a href="#about" className="text-[#F3F4F6] no-underline transition duration-500 hover:text-blue-500">Sobre mí</a> </li>
                    <li><a href="#projects" className="text-[#F3F4F6] no-underline transition duration-500 hover:text-blue-500">Proyectos</a> </li>
                    <li><a href="#contact" className="text-[#F3F4F6] no-underline transition duration-500 hover:text-blue-500">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
