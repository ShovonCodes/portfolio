'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Section } from '../types';
import clsx from 'clsx';
import { FileCode, FileJson, FileType, File } from 'lucide-react';

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

const TabBar = ({ sections }: { sections: Section[] }) => {
  const pathname = usePathname();

  // Simple logic: Show all sections as tabs to allow top navigation as well? 
  // No, that might be too much. Let's just show the current one and Home.
  
  // Actually, standard web navigation pattern: The tabs act as the primary nav in this design?
  // Since we have a sidebar executing that function, the tabs can just be decorative "status" of what's open.
  // But let's make them clickable too.
  
  const activeSection = sections.find(s => s.path === pathname) || sections[0];

  return (
    <div className="flex bg-vscode-tab-inactive-bg h-9 border-b border-vscode-border overflow-x-auto scrollbar-hide">
      {sections.map((section) => {
        const isActive = pathname === section.path;
        return (
          <Link
            key={section.id}
            href={section.path}
            className={clsx(
              "flex items-center gap-2 px-3 min-w-[120px] max-w-[200px] border-r border-vscode-border cursor-pointer select-none text-sm group",
              isActive ? "bg-vscode-tab-active-bg text-gray-200" : "bg-vscode-tab-inactive-bg text-vscode-text-secondary hover:bg-vscode-hover"
            )}
          >
            {getIcon(section.icon)}
            <span className={clsx("flex-1 truncate", isActive && "text-yellow-100")}>{section.title}</span>
            <div className={clsx("opacity-0 group-hover:opacity-100 p-0.5 rounded-md hover:bg-white/20", isActive && "opacity-100")}>
                <X size={14} />
            </div>
          </Link>
        )
      })}
    </div>
  );
};

export default TabBar;
