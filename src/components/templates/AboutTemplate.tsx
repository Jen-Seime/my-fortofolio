import AboutSection from "../organisms/AboutSection"
import Footer from "../organisms/Footer"
import Navbar from "../organisms/Navbar"
import ExperienceEvolution from "../organisms/ExperienceEvolution"
import AcademicFoundation from "../organisms/AcademicFoundation"
import FutureTrajectory from "../organisms/FutureTrajectory"
import { useEffect, useState } from "react"
import type { ProfilItem } from "../../types/profil"
import { getProfiles } from "../../services/profiles.service"
import type { experienceItem } from "../../types/experience"
import { getExperiences } from "../../services/experiences.service"
import type { EducationItem } from "../../types/education"
import { getEducations } from "../../services/educations.service"

const AboutTemplate = () => {

    const [profiles, setProfiles] = useState<ProfilItem>();
    const [loadingProfil, setLoadingProfil] = useState<boolean>(false);

    useEffect(() => {
        const fetchProfiles = async() => {
            setLoadingProfil(true);
            try {
                const response = await getProfiles();
                setProfiles(response.data);

            } catch (err) {
                console.error("Gagal mengambil data profil:", err);
            } finally {
                setLoadingProfil(false);
            }
        }

        fetchProfiles();
    }, []);


    const [experiences, setExperiences] = useState<experienceItem[]>([]);
    const [expLoading, setExpLoading] = useState<boolean>(false);


    useEffect(() => {
        const fetchExperiences = async() => {
            setExpLoading(true);

            try {
                const response = await getExperiences();
                setExperiences(response.data);
            } catch (err) {
                console.error("Gagal mengambil data pengalaman:", err);
            } finally {
                setExpLoading(false);
            }
        }

        fetchExperiences();
    }, []);

    const [education, setEducation] = useState<EducationItem[]>([])
    const [loadingEdu, setLoadingEdu] = useState<boolean>(false);

    useEffect(() => {
        const fetchEducations = async () => {
            setLoadingEdu(true);
            try {
                const response = await getEducations();
                setEducation(response.data);
            }catch (err) {
                console.error("Gagal mengambil data pengalaman:", err);
            }finally {
                setLoadingEdu(false)
            }
        };

        fetchEducations();
    },[])


     


    return (

        <>
            <Navbar/>

            <main className="relative z-10 pt-28 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-20">

             <AboutSection isLoading={loadingProfil} data={profiles}/>

             <ExperienceEvolution data={experiences} isLoading={expLoading}/>

             <AcademicFoundation isLoading={loadingEdu} data={education}/>

             {/* <FutureTrajectory/> */}

            </main>

            <Footer/>
        </>
    )
    
}

export default AboutTemplate