const Footer = () => (
   
<footer className="w-full py-8 md:py-stack-lg border-t border-outline-variant/30 bg-background">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center md:text-left">

       
        <div className="font-label-mono text-label-mono text-on-surface-variant order-2 md:order-1">
          Nyoman Adi Putra. Built with precision.
        </div>

       
        <div className="flex items-center gap-6 md:gap-gutter order-1 md:order-2">
            <a href="https://github.com/dputra162005" target="_blank" rel="noopener noreferrer"
               aria-label="GitHub"
               className="text-on-surface-variant hover:text-primary transition-colors">
               
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="hidden md:inline ml-1 font-body-sm text-body-sm align-middle">GitHub</span>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer"
               aria-label="LinkedIn"
               className="text-on-surface-variant hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                </svg>
                <span className="hidden md:inline ml-1 font-body-sm text-body-sm align-middle">LinkedIn</span>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer"
               aria-label="Twitter/X"
               className="text-on-surface-variant hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.5 3.24H4.3l13.31 17.4z"/>
                </svg>
                <span className="hidden md:inline ml-1 font-body-sm text-body-sm align-middle">Twitter</span>
            </a>

            <a href="mailto:your@email.com"
               aria-label="Email"
               className="text-on-surface-variant hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
                </svg>
                <span className="hidden md:inline ml-1 font-body-sm text-body-sm align-middle">Email</span>
            </a>
        </div>
    </div>
</footer>

)

export default Footer