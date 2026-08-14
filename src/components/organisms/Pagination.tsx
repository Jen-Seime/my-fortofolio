const Paginatino = () => (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Tombol Previous */}
      <button
       
        className={`flex items-center justify-center w-10 h-10 rounded-lg border text-sm transition-all 
          `}
      >
        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      {/* Angka Halaman */}
      
        <button
          
          className={`w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer 
            `}
        >
         
        </button>
      
      {/* Tombol Next */}
      <button
        
       
        className={`flex items-center justify-center w-10 h-10 rounded-lg border text-sm transition-all 
          
             border-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed opacity-50
            border-outline-variant/30 text-on-surface hover:bg-primary/10 hover:text-primary hover:border-primary/30 cursor-pointer"
        `}
      >
        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>
    </div>
)

export default Paginatino