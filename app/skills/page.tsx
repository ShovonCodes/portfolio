import { getPortfolioData } from '../utils/data';
import { iconMap } from '../utils/iconMap';

export default async function Skills() {
  const data = await getPortfolioData();
  const { skills } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto font-mono">
        <h1 className="text-3xl font-bold mb-8 text-white">skills.css</h1>

        <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                    <h2 className="text-xl font-bold text-yellow-300 mb-4 capitalize">{category}</h2>
                    <div className="flex flex-wrap gap-3">
                        {items.map((skill) => {
                            const Icon = iconMap[skill.icon];
                            return (
                                <div
                                    key={skill.name}
                                    className="inline-flex items-center gap-2 bg-vscode-hover px-4 py-2 rounded text-sm text-gray-300 hover:text-white transition-colors"
                                >
                                    {Icon && <Icon className="w-5 h-5" />}
                                    <span>{skill.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
