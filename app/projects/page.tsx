import { getPortfolioData } from '../utils/data';
import { ExternalLink, Github } from 'lucide-react';

export default async function Projects() {
  const data = await getPortfolioData();
  const { projects } = data;

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-8 text-white">projects.tsx</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-vscode-sidebar border border-vscode-border p-4 rounded hover:border-vscode-accent transition-colors group">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300">
                    &lt;{project.title} /&gt;
                </h3>
                <div className="flex gap-2">
                     {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                     )}
                     {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={18} />
                        </a>
                     )}
                </div>
             </div>
             
             <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden text-ellipsis leading-relaxed">
                {project.description}
             </p>

             <div className="flex flex-wrap gap-2 mt-auto">
                 {project.tech.map(t => (
                    <span key={t} className="text-xs text-orange-300 bg-white/5 px-2 py-1 rounded">
                        {t}
                    </span>
                 ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
