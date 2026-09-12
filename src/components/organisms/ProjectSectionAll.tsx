import { useEffect, useState } from "react"
import Badge from "../atoms/Badge"
import Heading from "../atoms/Heading"
import CardProject from "../molecules/CardProject"
import Filter from "../molecules/Filter"
import Pagination from "../organisms/Pagination"
import { getProjects } from "../../services/projects.service"
import type { ProjectItem, PaginationMeta } from "../../types/project"
import { getCategories } from "../../services/categories.service"
import type { CategoryItem } from "../../types/category"




const ProjectSectionAll = () => {
    const [error, setError] = useState<string | null>(null);


    const [selectedCategory, setSelectedCategory] = useState<number | string>("all");

    // data kategori
    const [categories, setCategories] = useState<CategoryItem[]>([]);

    



    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const [meta, setMeta] = useState<PaginationMeta | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
   
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getProjects(currentPage, selectedCategory);
                // response.data berisi array item project dari API Laravel
                setProjects(response?.data || []);
                if (response?.meta) {
                    setMeta(response.meta);
                }
            } catch (err) {
                console.error("Gagal mengambil data project:", err);
                setError("Gagal memuat project dari API. Pastikan server backend aktif.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [currentPage,selectedCategory]);


    useEffect( () => {
        const fetchCategories = async () => {
            
            try {
                const respone = await getCategories();

                setCategories(respone?.data || []);
            } catch (err) {
                console.error("Gagal mengambil data project:", err);
                setError("Gagal memuat project dari API. Pastikan server backend aktif.");
            }
        };

        fetchCategories();
    },[])

    return (
        <>
            <header className="b-stack-xl text-center md:text-left">
                <Badge warna="biru" icon="work" label="Portofolio"/>
                <Heading as={"h2"}>
                    Selected <span className="text-primary">Projects</span>
                </Heading>
                <p 
                    className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-3 leading-relaxed hero-fade-in" 
                    style={{ "--delay": "0.1s" } as React.CSSProperties}
                >
                    A curated collection of digital experiences crafted with performance and user experience at the core.
                </p>
            </header>

            <Filter 
                categories={categories} 
                activeCatgory={selectedCategory} 
                onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                }}
            />

            {loading ? (
                /* Skeleton Loader saat data sedang dimuat */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="rounded-xl glass-panel p-4 flex flex-col gap-3 animate-pulse">
                            <div className="h-48 bg-surface-container-high rounded-lg w-full"></div>
                            <div className="h-5 bg-surface-container-high rounded w-3/4"></div>
                            <div className="h-4 bg-surface-container-high rounded w-full"></div>
                            <div className="h-4 bg-surface-container-high rounded w-2/3"></div>
                            <div className="flex gap-2 mt-2">
                                <div className="h-6 w-16 bg-surface-container-high rounded-lg"></div>
                                <div className="h-6 w-16 bg-surface-container-high rounded-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                /* Tampilan Error */
                <div className="text-center py-12 glass-panel rounded-xl p-6">
                    <span className="material-symbols-outlined text-4xl text-red-400 mb-2">error</span>
                    <p className="text-red-400 font-medium mb-3">{error}</p>
                    <button 
                        onClick={() => setCurrentPage(1)} 
                        className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                    >
                        Coba Lagi
                    </button>
                </div>
            ) : projects.length === 0 ? (
                /* Tampilan jika data kosong */
                <div className="text-center py-10 text-on-surface-variant">
                    Tidak ada project ditemukan untuk kategori ini.
                </div>
            ) : (
                /* Render Daftar Project */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {projects.map((item) => (
                        <CardProject 
                            key={item.id}
                            judul={item.title} 
                            deskripsi={item.description}
                            stack={item.technology} 
                            img={item.image}
                            code={item.github_link}
                            liveDemo={item.link}
                            slug={item.slug}
                        />
                    ))}
                </div>
            )}

            {/* Pagination dari meta API */}
            <Pagination 
                currentPage={meta?.current_page || 1}
                lastPage={meta?.last_page || 1}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
};

export default ProjectSectionAll;
