
import { useEffect, useState } from "react"
import Footer from "../organisms/Footer"
import Navbar from "../organisms/Navbar"
import SkillSection from "../organisms/SkillSection"
import StatCardRow from "../organisms/StatCardRow"

import { getSkills } from "../../services/skills.service"
import type { categorySkill } from "../../types/skill"






const SkillTemplate = () => {

  const [skills, setSkills] = useState<categorySkill[]>([]);

  const [loadingSkill, setLoadingSkill] = useState<boolean>(false);

  const totalSkill = skills.reduce((total, item) => total + (item.skills?.length || 0),0)

  const skillRingkasan = [

    { value: `${totalSkill}`, label: "Total Skills" },
    { value: `${skills.length}`, label: "Categories" },
    { value: "∞", label: "Learning" },

  ];


  useEffect( () => {
    const fetchSkills = async() => {

      setLoadingSkill(true);

      try {

        const response = await getSkills();
        setSkills(response.data);

      } catch (arr) {
        console.log(`${arr}`)
      } finally {
        setLoadingSkill(false);
      }
    }

    fetchSkills();
  },[])





  return (
    <>
      <Navbar/>
      <main className="relative z-10 pt-28 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-20">
          <SkillSection isLoading={loadingSkill} data={skills} />

          <StatCardRow className="md:!grid-cols-3  !mt-0"   items={skillRingkasan}/>

          
      </main>

      <Footer/>
           
    </>
  )
}

export default SkillTemplate