import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import logo from '../../assets/Picsart_24-11-20_00-21-43-451.png'

const Footer = () => {
  return (
    <footer className="bg-cyan-50 text-blue-600 py-8">
      <div className="container mx-auto px-4">
    
        <div className="flex flex-col md:flex-row justify-between items-center">
      
          <div className="mb-4 md:mb-0 text-center">
           
      <div className='flex items-center'>
      <GiThreeLeaves className='text-green-800 md:text-4xl text-2xl' />
   
      <img className='lg:w-[220px] md:w-[150px] w-[80px] ' src={logo} alt="logo"/>

     
      </div>
            <p className="text-sm text-gray-800">© {new Date().getFullYear()} EcoVenture. All rights reserved.</p>
          </div>

         
          <div className="flex gap-6 mb-4 md:mb-0 text-sm">
            <a href="/about" className="hover:text-blue-400 transition">About Us</a>
            <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
            <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a>
          </div>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

       
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-800">Subscribe to our newsletter for updates</p>
          <form className="mt-4 flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
