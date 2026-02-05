import { GitBranch, RefreshCw, AlertCircle, Bell, Check } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="h-6 bg-vscode-status-bar text-white flex justify-between items-center text-xs px-2 select-none z-30">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <RefreshCw size={12} />
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <AlertCircle size={12} />
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <span className="mr-2">Ln 24, Col 52</span>
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <div className="flex items-center gap-1">
             <Check size={12} />
             <span>Prettier</span>
          </div>
        </div>
         <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
