function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "#171420" }}
      className="flex items-center justify-between px-6 py-4 "
    >
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 hover:opacity-20 transition-opacity duration-500 cursor-pointer">
          <img src="/horse.svg" alt="Pinata Logo" className="w-5 h-7" />
          <span className="text-3xl font-bold text-white">Pinata</span>
        </div>

        <div className="flex items-center gap-7 text-xl font-medium">
          <a href="#" className="text-white hover:text-[#6d57ff] transition duration-500">Features</a>
          <a href="#" className="text-white hover:text-[#6d57ff] transition duration-500">Pricing Cases</a>
          <a href="#" className="text-white hover:text-[#6d57ff] transition duration-500">About</a>
          <a href="#" className="text-white hover:text-[#00cc92] hover:underline transition duration-500">Blog</a>
          <a href="#" className="text-white hover:text-[#00cc92] hover:underline transition duration-500">Docs</a>
          <a href="#" className="text-white hover:text-[#00cc92] hover:underline transition duration-500">Case studies</a>
        </div>
      </div>

      <div className="flex items-center gap-6 text-xl font-medium">
        <a href="#" className="text-white hover:text-[#6d57ff] transition duration-500">Log in</a>
        <button className="bg-[#6d57ff] text-white px-6 py-2 rounded-full hover:bg-[#582CD6] transition duration-500">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
