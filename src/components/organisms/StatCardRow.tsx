import StatCard from "../molecules/StatCard"
import { stats } from "../../constant/stats"

const StatCardRow = () => {

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 hero-fade-in" style={{"--delay" : "0.75s"}}>
            {stats.map((item) => 
                (
                    <StatCard value={item.value} label={item.label}/>
                )
            )}
           
        </div>
    )
}

export default StatCardRow