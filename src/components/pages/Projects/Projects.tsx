const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "My Portfolio Web",
      category: "Frontend",
      description: "Website portofolio interaktif dan modern yang dibangun dengan React, TypeScript, dan Vite.",
      tags: ["React", "TypeScript", "CSS3", "Vite"],
      icon: "💼",
    },
    {
      id: 2,
      title: "Task Management Board",
      category: "Web App",
      description: "Aplikasi pengelola tugas dengan fitur Drag and Drop dan penyimpanan lokal.",
      tags: ["React", "Custom Hooks", "LocalStorage"],
      icon: "📋",
    },
    {
      id: 3,
      title: "E-Commerce Mini Store",
      category: "Fullstack / API",
      description: "Simulasi katalog toko online dengan sistem keranjang belanja dan integrasi REST API.",
      tags: ["React", "Context API", "REST API"],
      icon: "🛒",
    },
  ]

  return (
    <>
      <header className="hero" style={{ padding: "4rem 0 2rem" }}>
        <span className="badge">📁 Galeri Karya</span>
        <h1 className="hero-title">Semua Project Saya</h1>
        <p className="hero-subtitle">
          Daftar beberapa aplikasi dan project yang telah saya kembangkan.
        </p>
      </header>

      <section className="section">
        <div className="projects-grid">
          {projects.map((item) => (
            <div key={item.id} className="project-card">
              <div className="project-preview">{item.icon}</div>
              <div className="project-content">
                <span className="tag" style={{ marginBottom: "0.5rem", display: "inline-block" }}>{item.category}</span>
                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">{item.description}</p>
                <div className="project-tags">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
