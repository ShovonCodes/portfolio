import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { getPortfolioData } from './utils/data';
import Sidebar from './components/Sidebar';
import ActivityBar from './components/ActivityBar';
import StatusBar from './components/StatusBar';
import TabBar from './components/TabBar';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Shovon | Full Stack Engineer',
  description: 'Personal Portfolio of Shovon',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPortfolioData();

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} h-screen w-screen flex flex-col bg-vscode-bg text-gray-300 overflow-hidden font-mono`}>
        <div className="flex flex-1 overflow-hidden">
            <ActivityBar />
            <div className="flex flex-1 flex-col sm:flex-row overflow-hidden">
                <Sidebar sections={data.sections} />
                <div className="flex-1 flex flex-col bg-vscode-bg min-w-0">
                    <TabBar sections={data.sections} />
                    <main className="flex-1 overflow-y-auto p-0 scrollbar-thumb-rounded">
                        {children}
                    </main>
                </div>
            </div>
        </div>
        <StatusBar />
      </body>
    </html>
  );
}
