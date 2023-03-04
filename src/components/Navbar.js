import logo1 from "../assets/logo1.png";
import resume from "../assets/resume.pdf";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <img src={logo1} className="App-logo w-10 " alt="logo" />
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:underline">
              Sample
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              Features
            </a>
          </li>
          <li className="p-4">
            <a href="#honors" className="hover:underline">
              Layouts
            </a>
          </li>
          <li className="p-4">
            <a href="#certs" className="hover:underline">
              Our Shop
            </a>
          </li>
        </ul>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4"
        >
          Buy Theme
        </a>
      </div>
    </div>
  );
}
