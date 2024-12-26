const Work = () => {
  const projects = [
    {
      title: "Tapestry (Google X)",
      description: `As a Senior Software Engineer at Google X’s Moonshot Factory, I led the development of the Grid Operations Tool and contributed to Grid Planning Tool – Transmission, enabling real-time energy forecasting, economic dispatch, and transmission planning for power grids. These platforms helped grid operators manage real-time inflows and outflows, ensuring stable and reliable energy distribution while supporting the global clean energy transition.

I bootstrapped the frontend architecture for the Grid Operations Tool, integrating real-time APIs for solar, wind, and demand forecasts. I developed interactive dashboards for six-hour predictive insights, dispatch summaries, and curtailment analyses. These tools enabled energy planners to optimize dispatch operations, reducing energy curtailment costs by $5M annually and improving forecast accuracy by 85%.

With the Grid Planning Tool – Transmission, I built features supporting transmission metrics analysis, enabling real-time scenario modeling for infrastructure planning. Using Plotly.js, I developed data visualization dashboards for economic evaluations, congestion analysis, and predictive simulations. The tool helped grid operators reduce planning time from weeks to minutes, supporting 30 concurrent scenarios and assisting in critical decisions like coal plant decommissioning.

Our platforms impacted over 1M energy consumers in Chile and supported renewable energy partnerships with CEN, AES Corporation, and CSIRO, accelerating efforts toward a 100% renewable grid by 2050.`,
    },
    {
      title: "Tanzu CLI",
      description: `As a Staff Engineer at VMware, I spearheaded the development of Tanzu CLI v1.0.0 and Tanzu CLI v1.2.0, driving cloud-native application management through a modular, plugin-based command-line interface (CLI). I led the architecture and implementation of Tanzu CLI’s plugin system, enabling developers to create, manage, and deploy Kubernetes workloads efficiently.
To streamline development, I created the Tanzu CLI Plugin Developer Tools extension for VS Code, allowing developers to build plugins seamlessly while enabling 200% growth in plugin adoption. I also implemented the Interactive Contextual Help Framework using React.js, providing real-time user assistance, boosting developer productivity by 70%.
Additionally, I designed cross-version Configuration APIs, ensuring backward compatibility and eliminating data corruption issues, strengthening platform stability. This work enabled VMware’s CLI to scale globally, integrating with major Kubernetes-based platforms while fostering a collaborative developer ecosystem.
`,
    },
    {
      title: "Operations 360",
      description: `As a Senior Software Engineer, I redesigned J.B. Hunt’s Operations 360 Platform, driving critical improvements in fleet management and product operations. I built a modular Angular component library, reducing development time by 80% and enabling platform-wide UI standardization.

I automated customer onboarding by developing a process that cut the onboarding time from 5 hours to 30 minutes, eliminating manual file management. These innovations enhanced load visibility, improved fleet efficiency, and reduced driver empty hours by 30%.

Our platform facilitated logistics optimization across thousands of loads, earning recognition for supply chain innovation.`,
    },
    {
      title: "Careers 360",
      description: `At J.B. Hunt, I architected the Careers 360 platform, streamlining carrier onboarding and boosting platform adoption by 40%. I developed undo-redo functionalities for custom carrier settings, enabling configuration flexibility and enhancing user experience.

I optimized web services performance using EhCache and Resilience4j, reducing latency and ensuring data reliability. I also mentored interns and led cross-functional development teams, fostering innovation and skill development.

Our team’s work helped scale carrier onboarding capacity, supporting J.B. Hunt’s continued industry leadership in logistics.`,
    },
    {
      title: "USPF EDS",
      description: `At Fitch Ratings, I played a key role in developing the U.S. Public Finance EMMA Data Service (USPF EDS), enabling seamless municipal securities analysis through the Electronic Municipal Market Access (EMMA) system.

I developed APIs and data services to automate financial data collection and analysis, ensuring data accuracy and regulatory compliance. I also built user-friendly interfaces that improved decision-making for analysts and investors.

Our work strengthened Fitch Ratings’ credit evaluation capabilities, driving transparency and efficiency in the U.S. municipal securities market.`,
    },
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
