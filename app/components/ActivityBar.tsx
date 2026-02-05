'use client';

import { Files, Search, GitGraph, Bug, Blocks, Settings, CircleUser } from 'lucide-react';
import clsx from 'clsx';

const ActivityBar = () => {
  return (
    <div className="w-12 bg-vscode-activity-bar flex flex-col justify-between py-2 items-center flex-shrink-0 border-r border-black/20 z-20">
      <div className="flex flex-col gap-4">
        <ActivityIcon icon={Files} active />
        <ActivityIcon icon={Search} />
        <ActivityIcon icon={GitGraph} />
        <ActivityIcon icon={Bug} />
        <ActivityIcon icon={Blocks} />
      </div>
      <div className="flex flex-col gap-4">
        <ActivityIcon icon={CircleUser} />
        <ActivityIcon icon={Settings} />
      </div>
    </div>
  );
};

const ActivityIcon = ({ icon: Icon, active = false }: { icon: any, active?: boolean }) => {
  return (
    <div className={clsx(
      "p-3 cursor-pointer relative hover:text-white transition-colors",
      active ? "text-white border-l-2 border-white" : "text-vscode-text-secondary border-l-2 border-transparent"
    )}>
      <Icon size={24} strokeWidth={1.5} />
    </div>
  );
};

export default ActivityBar;
