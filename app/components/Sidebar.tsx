'use client';

import { ChevronRight, ChevronDown, FileJson, FileCode, FileType, File } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Section } from '../types';
import clsx from 'clsx';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'react': return <FileCode size={16} className="text-blue-400" />;
    case 'html': return <FileCode size={16} className="text-orange-400" />;
    case 'css': return <FileType size={16} className="text-blue-300" />;
    case 'typescript': return <FileCode size={16} className="text-blue-500" />;
    case 'markdown': return <File size={16} className="text-gray-400" />;
    case 'json': return <FileJson size={16} className="text-yellow-400" />;
    default: return <File size={16} />;
  }
};

const Sidebar = ({ sections }: { sections: Section[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="w-64 bg-vscode-sidebar flex flex-col font-sans text-sm border-r border-vscode-border pb-2">
      <div className="h-9 px-4 flex items-center text-xs text-vscode-text-secondary font-bold tracking-wider uppercase">
        Explorer
      </div>
      
      <div>
        <div 
          className="flex items-center px-1 py-1 cursor-pointer font-bold text-vscode-text-secondary hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <span className="ml-1 text-xs">PORTFOLIO</span>
        </div>

        {isOpen && (
          <div className="flex flex-col">
            {sections.map((section) => (
              <Link 
                key={section.id} 
                href={section.path}
                className={clsx(
                  "flex items-center gap-2 px-6 py-1 cursor-pointer hover:bg-vscode-hover border-l-2",
                  pathname === section.path ? "bg-vscode-hover border-vscode-accent text-white" : "text-vscode-text-secondary border-transparent"
                )}
              >
                {getIcon(section.icon)}
                <span>{section.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
