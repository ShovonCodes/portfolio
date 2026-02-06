import { getPortfolioData } from '../utils/data';

export default async function About() {
  const data = await getPortfolioData();
  const { personal } = data;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-8 text-white">about.ts</h1>
      
      <div className="space-y-2 text-gray-300">
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
          <span className="text-blue-300">hobbies</span>: <span className="text-orange-300">[{personal.hobbies.map(s => `"${s}"`).join(", ")}]</span>,
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
            I&apos;m a Full Stack Software Engineer with extensive experience designing and building scalable, cloud-native systems. I specialize in microservice architectures, clean system design, and writing maintainable code that stands the test of time.
            </p>
            <p className="mb-4">
            My expertise spans both backend and frontend development, with a strong focus on reliability engineering, observability, and performance tuning. I&apos;m passionate about delivering high-performance applications through comprehensive testing strategies, CI/CD automation, and data-driven optimizations.
            </p>
            <p>
            I love collaborating with cross-functional teams, mentoring fellow engineers, and continuously improving system reliability and recovery metrics in production environments.
            </p>
       </div>
    </div>
  );
}
