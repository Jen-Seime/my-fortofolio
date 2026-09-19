
import type { categorySkill, skillItem } from "../../types/skill"



interface CardSkillProps {
    categoryData: categorySkill
    index: number
}

const varianColor: Record<string, string> = {
    beginer: "bg-secondary/8 text-secondary border-secondary/15",
    beginner: "bg-secondary/8 text-secondary border-secondary/15",
    advanced: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    expert: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    intermediate: "bg-amber-500/10 text-amber-600 border-amber-500/20"
}

interface SkillListProps {
    skill: skillItem
}

const cardGradients = [
    "from-blue-500 via-cyan-400 to-blue-500/40",        // Biru / Cyan
    "from-emerald-500 via-teal-400 to-emerald-500/40",  // Hijau / Teal
    "from-purple-500 via-pink-500 to-purple-500/40",    // Ungu / Pink
    "from-amber-500 via-orange-400 to-amber-500/40",    // Oranye / Amber
];

const SkillList = ({ skill }: SkillListProps) => {
    const levelKey = skill.level?.toLowerCase();
    const colorClass = varianColor[levelKey] || "bg-secondary/8 text-secondary border-secondary/15";
   
    return (
        <div className="group/item flex items-center justify-between py-3 px-3 -mx-3 rounded-xl hover:bg-primary/4 transition-all duration-300 cursor-default">
            <div className="flex items-center gap-3">
                {/* icon skill */}
                <div className="w-9 h-9 bg-surface-container rounded-xl flex justify-center items-center overflow-hidden group-hover:bg-primary/8 transition-all duration-300">
                    <img className="w-5 h-5 object-contain" src={skill.image} alt={skill.name} />
                </div>
                <span className="text-on-surface transition-colors duration-300 font-semibold text-[14px] group-hover:text-secondary">
                    {skill.name}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border transition-all duration-300 ${colorClass}`}>
                    {skill.level}
                </span>
            </div>
        </div>
    )
}

const CardSkill = ({ categoryData, index }: CardSkillProps) => {
    const warna = cardGradients[index % cardGradients.length]
    return (
    <div className="group relative bg-surface/80 border border-outline-variant/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">

        {/* Card accent top bar */}
        <div className={`h-1 bg-gradient-to-r ${warna}`}></div>

        <div className="p-6 md:p-8">
            {/* header skill */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    {/* icon */}
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                            web
                        </span>
                    </div>

                    {/* title */}
                    <div>
                        <h2 className="text-[18px] font-bold text-on-surface leading-tight">
                            {categoryData.category}
                        </h2>
                        <p className="text-[11px] text-on-surface-variant mt-0.5">
                            Skills
                        </p>
                    </div>
                </div>    
            </div>

            {/* skill list */}
            <div className="space-y-1">
                {categoryData.skills?.map((item) => (
                    <SkillList key={item.id} skill={item} />
                ))}
            </div>
        </div>
        
    </div>
)
}

export default CardSkill


