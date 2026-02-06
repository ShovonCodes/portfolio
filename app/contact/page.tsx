import { getPortfolioData } from '../utils/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default async function Contact() {
  const data = await getPortfolioData();
  const { personal } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-8 text-white">contact.html</h1>
      
      <div className="text-gray-300 mb-8 space-y-2">
         <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">1</span>
             <span className="text-gray-500">&lt;!-- Contact Me --&gt;</span>
         </div>
         <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">2</span>
             <p>
                 &lt;<span className="text-blue-400">form</span> <span className="text-blue-300">action</span>=<span className="text-orange-300">&quot;mailto:{personal.email}&quot;</span>&gt;
             </p>
         </div>
         <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">3</span>
             <p className="pl-4">
                 &lt;<span className="text-blue-400">div</span> <span className="text-blue-300">class</span>=<span className="text-orange-300">&quot;socials&quot;</span>&gt;
             </p>
         </div>
         <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">4</span>
             <p className="pl-8">
                 &lt;<span className="text-blue-400">a</span> <span className="text-blue-300">href</span>=<span className="text-orange-300">&quot;{personal.github}&quot;</span>&gt;GitHub&lt;/<span className="text-blue-400">a</span>&gt;
             </p>
         </div>
         <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">5</span>
             <p className="pl-8">
                 &lt;<span className="text-blue-400">a</span> <span className="text-blue-300">href</span>=<span className="text-orange-300">&quot;{personal.linkedin}&quot;</span>&gt;LinkedIn&lt;/<span className="text-blue-400">a</span>&gt;
             </p>
         </div>
         <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">6</span>
             <p className="pl-4">
                 &lt;/<span className="text-blue-400">div</span>&gt;
             </p>
         </div>
          <div className="flex gap-4">
             <span className="text-vscode-text-secondary select-none w-8 text-right">7</span>
             <p>
                 &lt;/<span className="text-blue-400">form</span>&gt;
             </p>
         </div>
      </div>

      <div className="max-w-md bg-vscode-sidebar p-8 rounded-lg border border-vscode-border">
          <h2 className="text-xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="space-y-4">
               <a href={`mailto:${personal.email}`} className="block w-full text-center py-3 bg-vscode-accent text-white rounded hover:bg-vscode-selection transition-colors">
                   Send Email
               </a>
               <div className="flex justify-center gap-6 mt-6">
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
               </div>
          </div>
      </div>
    </div>
  );
}
