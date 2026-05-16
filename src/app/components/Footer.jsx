import { FaFacebookF, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      
   
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide text-green-400">Qurbani Hat</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A modern livestock marketplace for buying Qurbani animals like cows and goats easily. Reliable and hassle-free service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 border-b-2 border-green-500 inline-block pb-1">Contact</h2>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-green-400" />
              <span>support@qurbanihat.com</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+880 18133-09755</span>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Feni, Bangladesh</span>
            </p>
          </div>
        </div>

  
        <div>
          <h2 className="text-xl font-semibold mb-5 border-b-2 border-green-500 inline-block pb-1">Follow Us</h2>
          <p className="text-sm text-gray-400 mb-4">Stay connected for the latest updates and offers.</p>
          
          <div className="flex gap-4">
       
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
           
            <a 
              href="#" 
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Qurbani Hat. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}