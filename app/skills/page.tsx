import { getPortfolioData } from '../utils/data';

export default async function Skills() {
  const data = await getPortfolioData();
  const { skills } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-8 text-white">skills.css</h1>
      
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items], idx) => (
             <div key={category}>
                 <div className="flex gap-4">
                     <span className="text-vscode-text-secondary select-none w-8 text-right">{idx * 4 + 1}</span>
                     <p className="font-bold text-yellow-300">.{category.toLowerCase()} <span className="text-yellow-100">{'{'}</span></p>
                 </div>
                 <div className="flex gap-4">
                     <span className="text-vscode-text-secondary select-none w-8 text-right">{idx * 4 + 2}</span>
                     <div className="pl-4 flex flex-wrap gap-2">
                        <span className="text-blue-300">items:</span>
                        {items.map((skill, sIdx) => (
                            <span key={skill} className="text-orange-300">
                                &quot;{skill}&quot;{sIdx < items.length - 1 ? ',' : ';'}
                            </span>
                        ))}
                     </div>
                 </div>
                 <div className="flex gap-4">
                     <span className="text-vscode-text-secondary select-none w-8 text-right">{idx * 4 + 3}</span>
                     <p className="text-yellow-100">{'}'}</p>
                 </div>
             </div>
        ))}
      </div>

       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(skills).flatMap(([cat, items]) => items.map(skill => (
              <div key={skill} className="bg-vscode-hover p-2 text-center rounded text-sm text-gray-300 hover:text-white transition-colors cursor-default">
                  {skill}
              </div>
          )))}
       </div>
    </div>
  );
}
