
interface Categori {
    id : number
    name : string

}
interface FilterProps {
    categories : Categori[]
    activeCatgory : number | string
    onSelectCategory : (id:number | string) => void
}

const Filter = ({ categories, activeCatgory, onSelectCategory} : FilterProps) => (
    <div className="items-center gap-stack-md mb-stack-lg glass-panel p-stack-sm rounded-xl">
        <div className="flex flex-wrap gap-2">
            <button 
                className="px-4 py-2 rounded-lg font-label-mono text-label-mono border transition-colors {{ is_null($category) ? 'bg-primary/10 text-primary border-primary/20' : 'text-on-surface-variant hover:bg-surface-variant hover:text-on-surface border-transparent' }}">
                All
            </button>
            {categories.map((item) => {
                const isAcitive = item.id === activeCatgory

                return (
                <button
                    key={item.id}
                    onClick={() => onSelectCategory(item.id)}
                    className={`px-4 py-2 rounded-lg font-label-mono text-label-mono border transition-colors ${isAcitive ? "bg-primary/10 text-primary border-primary/20" : "text-on-surface-variant hover:bg-surface-variant border-transparent"  } `}>
                    {item.name}
                </button>
                
            )})}
            
           
        </div>


    </div>
);

export default Filter;