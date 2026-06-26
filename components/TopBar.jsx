"use client";
 import { useEffect, useState } from "react"; 
 import { FaLinkedinIn, FaInstagram, FaYoutube, } from "react-icons/fa"; 
 import { Phone, Mail } from "lucide-react"; 
 export default function TopBar() { 
    const [show, setShow] = useState(true); 
    useEffect(() => { setShow(true); }, []); const logoColor = "#ff6a00"; 
    const socialLinks = [ 
        { 
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/company/gtxinfotech-sapservices/",
     },
      { 
        icon: FaInstagram, 
        link: "https://www.instagram.com/gtxinfotech/", 
    }, 
    { icon: FaYoutube, link: "https://www.youtube.com/@gtxinfotech", 

    }, 
];
 return ( 
 <div className={`w-full bg-[#0f1c4d] text-white transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`} >
     <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-4 py-2 gap-2 overflow-x-auto whitespace-nowrap"> 
        {/* LEFT: SOCIAL ICONS */} 
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0"> 
            {socialLinks.map((item, i) => { const Icon = item.icon;
             return ( 
             <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md hover:scale-110 flex-shrink-0" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = logoColor) } onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)") } > 
             <Icon size={12} className="md:w-[14px] md:h-[14px]" /> </a> ); })} 
             </div> {/* RIGHT: CONTACT INFO */} 
             <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm whitespace-nowrap flex-shrink-0"> 
                {/* PHONE */} 
                <a href="tel:+918797818499" className="flex items-center gap-1 md:gap-2 group cursor-pointer" > 
                    <Phone size={14} className="md:w-4 md:h-4 transition group-hover:scale-110" style={{ color: logoColor }} />
                     <span className="transition group-hover:text-[color:var(--logo)]" style={{ "--logo": logoColor }} > +91 8797818499 </span> 
                     </a> {/* EMAIL */} <a href="mailto:info@zisantech.com" className="flex items-center gap-1 md:gap-2 group cursor-pointer" >
                         <Mail size={14} className="md:w-4 md:h-4 transition group-hover:scale-110" style={{ color: logoColor }} /> 
                         <span className="transition group-hover:text-[color:var(--logo)]" style={{ "--logo": logoColor }} > info@zisantech.com </span> 
                         </a> </div> 
                         </div> 
                         </div> ); }