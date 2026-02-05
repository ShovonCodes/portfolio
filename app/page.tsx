import { getPortfolioData } from './utils/data';
// import Image from 'next/image';

export default async function Home() {
  const data = await getPortfolioData();
  const { personal } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <div className="mb-8 animate-in fade-in duration-500">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Hi, I&apos;m <span className="text-vscode-accent">{personal.nickname}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-vscode-text-secondary mb-8">
          {personal.role}
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mb-8 border-l-4 border-vscode-accent pl-4 italic bg-white/5 py-2">
          {personal.bio}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-vscode-accent hover:bg-vscode-selection text-white rounded transition-colors"
          >
            Check out my GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-vscode-text-secondary hover:border-white text-vscode-text-secondary hover:text-white rounded transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
     
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-4 border-b border-vscode-border pb-2 w-fit">
          README.md
        </h3>
        <div className="font-mono text-sm text-gray-400 space-y-4">
           <p>
            Welcome to my portfolio! This site is designed to look and feel like a coding environment.
           </p>
           <p>
            Navigate through the <span className="text-vscode-accent font-bold">files</span> on the left to learn more about my background, skills, and projects.
           </p>
           <div className="bg-vscode-sidebar p-4 rounded-md border border-vscode-border">
              <code className="block text-green-400">
                $ npm install portfolio
              </code>
              <code className="block text-green-400">
                $ npm start
              </code>
              <code className="block text-gray-500 mt-2">
                &gt; Listening on port 3000...
              </code>
           </div>
        </div>
      </div>
    </div>
  );
}
