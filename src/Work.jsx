const Work = () => {
  const projects = [
    { title: "Project One", description: "A cool project.", link: "#" },
    { title: "Project Two", description: "Another cool project.", link: "#" },
  ];

  return (
    <section id="work" className="bg-darkBg py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-primary font-semibold mb-6">My Work</h2>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx} className="mb-6">
              <h3 className="text-textLight text-xl">{project.title}</h3>
              <p className="text-textMain">{project.description}</p>
              <a href={project.link} className="text-primary hover:underline">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
