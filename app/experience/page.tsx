import { getPortfolioData } from '../utils/data';

export default async function Experience() {
  const data = await getPortfolioData();
  const { experience } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-8 text-white">experience.json</h1>

      <div className="text-gray-300">
         <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">1</span>
            <span>[</span>
         </div>
         
         {experience.map((job, index) => (
           <div key={index}>
              <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{2 + (index * 8)}</span>
                  <span className="pl-4">{'{'}</span>
              </div>
              <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{3 + (index * 8)}</span>
                  <span className="pl-8">
                     <span className="text-blue-300">&quot;company&quot;</span>: <span className="text-orange-300">&quot;{job.company}&quot;</span>,
                  </span>
              </div>
              <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{4 + (index * 8)}</span>
                  <span className="pl-8">
                     <span className="text-blue-300">&quot;role&quot;</span>: <span className="text-orange-300">&quot;{job.role}&quot;</span>,
                  </span>
              </div>
               <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{5 + (index * 8)}</span>
                  <span className="pl-8">
                     <span className="text-blue-300">&quot;period&quot;</span>: <span className="text-orange-300">&quot;{job.period}&quot;</span>,
                  </span>
              </div>
               <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{6 + (index * 8)}</span>
                  <span className="pl-8">
                     <span className="text-blue-300">&quot;description&quot;</span>: <span className="text-orange-300">&quot;{job.description}&quot;</span>,
                  </span>
              </div>
              <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{7 + (index * 8)}</span>
                  <span className="pl-8">
                     <span className="text-blue-300">&quot;tech&quot;</span>: [ <span className="text-orange-300">{job.tech.map(t => `"${t}"`).join(', ')}</span> ]
                  </span>
              </div>
              <div className="flex gap-4">
                  <span className="text-vscode-text-secondary select-none w-8 text-right">{8 + (index * 8)}</span>
                  <span className="pl-4">{'},'}</span>
              </div>
           </div>
         ))}

         <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">{2 + (experience.length * 8)}</span>
            <span>]</span>
         </div>
      </div>
      
       <div className="mt-8 border-t border-vscode-border pt-4">
        <h3 className="text-xl text-white mb-4">Pretty View</h3>
        <div className="space-y-8">
            {experience.map((job, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-vscode-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-vscode-accent border-4 border-vscode-bg"></div>
                    <a className="text-xl font-bold text-blue-400 hover:underline cursor-pointer">{job.company}</a>
                    <div className="text-gray-400 text-sm mb-2">{job.role}  |  {job.period}</div>
                    <p className="text-gray-300 mb-2">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {job.tech.map(t => (
                            <span key={t} className="px-2 py-0.5 bg-vscode-hover text-xs rounded text-blue-200">{t}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
