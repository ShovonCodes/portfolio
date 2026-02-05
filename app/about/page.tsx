import { getPortfolioData } from '../utils/data';

export default async function About() {
  const data = await getPortfolioData();
  const { personal } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-8 text-white">about.ts</h1>
      
      <div className="space-y-6 text-gray-300">
        <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">1</span>
            <p>
              <span className="text-purple-400">const</span> <span className="text-blue-400">aboutMe</span> = {'{'}
            </p>
        </div>
        <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">2</span>
            <p className="pl-4">
              <span className="text-blue-300">name</span>: <span className="text-orange-300">&quot;{personal.name}&quot;</span>,
            </p>
        </div>
        <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">3</span>
            <p className="pl-4">
              <span className="text-blue-300">role</span>: <span className="text-orange-300">&quot;{personal.role}&quot;</span>,
            </p>
        </div>
        <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">4</span>
            <p className="pl-4">
              <span className="text-blue-300">location</span>: <span className="text-orange-300">&quot;{personal.location}&quot;</span>,
            </p>
        </div>
        <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">5</span>
            <p className="pl-4">
              <span className="text-blue-300">bio</span>: <span className="text-orange-300">&quot;{personal.bio}&quot;</span>,
            </p>
        </div>
        <div className="flex gap-4">
            <span className="text-vscode-text-secondary select-none w-8 text-right">6</span>
            <p>{'};'}</p>
        </div>
      </div>

       <div className="mt-12 text-gray-300 leading-relaxed">
          <h2 className="text-2xl text-white mb-4">{'/* More about me */'}</h2>
          <p className="mb-4">
            I am a passionate developer who loves to create things on the web. with a background in Computer Science, I have been coding for several years and have experience with a variety of technologies.
          </p>
          <p>
             When I&apos;m not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
          </p>
       </div>
    </div>
  );
}
