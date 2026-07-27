import { Activity, useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react" // atau pakai icon lain / SVG manual
import Button from "../components/ui/Button"
import { Send, ArrowRight, Trash2, Home, User, Contact, Briefcase, BookOpen, Mail, FolderOpenDot, Shield,   } from "lucide-react"


const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Contact },
  { name: "Contact", path: "/contact", icon: Contact },
]

const mobileLinks = [
  { label: "Home", path: "/", icon: Home, desc: "Halaman utama" },
  { label: "About", path: "/about", icon: User, desc: "Tentang saya" },
  { label: "Skill", path: "/projects", icon: Briefcase, desc: "Skill saya" },
 
];

const moreLinks = [
    { label: "Project", path: "/projects", icon: FolderOpenDot , desc: "Karya dan project saya" },
    { label: "Certification", path: "/certification", icon: Shield, desc: "Sertifikasi yang telah diperoleh" },
    { label: "Contact", path: "/contact", icon: Contact, desc: "Hubungi saya" },
    
]

const Navigasi = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
        <div className="bg-surface/70 backdrop-blur-2xl border-b border-outline-variant/20 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
                {/* Logo */}
                <a className="flex items-center gap-2 group" href="">
                     <span className="font-headline-lg text-[20px] font-bold text-on-surface tracking-tight">
                        Jen<span className="text-primary">Seime</span>
                    </span>
                </a>
                {/* Destop Navigasi */}
                <nav className=" hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
                                    isActive
                                        ? "text-primary bg-primary/8"
                                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>


                <NavLink to="/contact">
                    <Button variant="primary" positionIcon="left" icon={<Send size={14} />} className="hidden md:flex">
                        Hire Me
                    </Button>
                </NavLink>

               

                {/* Mobile Tongole */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-on-surface">
                    {isOpen ? <X /> : <Menu />}
                </button>

            </div> 
        </div>
        
        {/* mobile menu */}
            <>
            <div onClick={() => {setIsOpen(false)}} className={`fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[60] lg:hidden duration-300 ${isOpen ? " opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none "}`}>
    
            </div>

            <div className={`fixed right-0 top-0 h-full w-[80%] max-w-[320px] bg-surface/95 backdrop-blur-2xl shadow-[-8px_0_30px_rgba(0,0,0,0.1)] z-[70] lg:hidden flex flex-col duration-300 ${isOpen ? " translate-x-0 " : " translate-x-full "}`}>
                <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/15">
                    <div className="flex items-center gap-2">
                        {/* logo mobile */}
                        <span className="font-headline-lg text-[16px] font-semibold text-on-surface">
                            Jen<span className="text-primary">Seime</span>
                        </span>
                    </div>

                    {/* close button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors duration-200">
                        <X size={20}/>
                    </button>  
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-6">
                    <div className="space-y-1">
                        {mobileLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                className={({ isActive }) =>
                                    `group flex items-center gap-3.5 px-3 py-3 rounded-2xl transition-all duration-300 ${isActive ? "text-primary bg-primary/8" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"}`

                                }
                                
                            >

                                {({ isActive }) => (
                                    <>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-primary/15 text-primary" : "bg-surface-container text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary"}`}>
                                            {/* Taruh ikon di sini jika ada */}
                                            <Icon size={18} />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-[14px] font-semibold leading-tight">{link.label}</p>
                                            <p className="text-[11px] text-on-surface-variant/60 leading-tight mt-0.5">{link.desc}</p>
                                        </div>

                                        {isActive ? <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> : 
                                            
                                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant/30 group-hover:text-on-surface-variant/60 transition-all duration-300 group-hover:translate-x-0.5">chevron_right</span>
                                        }


                                    </>
                                   
                                )}
                            </NavLink>
                            );
                        })}
                    </div>

                    <div className="my-5 mx-3 h-px bg-outline-variant/15"></div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant/60 px-4 mb-3">More</p>

                    <div className=" space-y-1">
                        {/* link More */}
                        {moreLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <NavLink to={link.path}>
                                    {({isActive}) => (
                                        <div className={`group flex items-center gap-3.5 px-3 py-3 rounded-2xl transition-all duration-300 ${isActive ? "text-primary bg-primary/8" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"}`}>
                                            {/* Icon Link */}
                                            <div className={` w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isActive ? "bg-primary/15 text-primary" : "bg-surface-container text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary"}`}>
                                                <Icon size={18}/>
                                            </div>

                                            <div className=" flex-1 min-w-0">
                                                <p className=" text-[14px] font-semibold leading-tight">{link.label}</p>
                                                <p className=" text-[11px] leading-tight text-on-surface-variant/60 mt-0.5 ">{link.desc}</p>
                                            </div>

                                            {isActive ? <div className=" bg-primary h-1.5 w-1.5 rounded-full"></div> : <span className="material-symbols-outlined text-[16px] text-on-surface-variant/30 group-hover:text-on-surface-variant/60 transition-all duration-300 group-hover:translate-x-0.5">chevron_right</span> }

                                        </div>
                                    )}
                                </NavLink>
                            )
                        })}


                    </div>

                </nav>
            </div>
            </>

    </header>
  )
}

export default Navigasi