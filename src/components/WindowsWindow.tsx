
import { ReactNode, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface WindowsWindowProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultPosition?: { x: number; y: number };
  className?: string;
  onClose?: () => void;
}

const WindowsWindow = ({ 
  title, 
  icon, 
  children, 
  defaultPosition = { x: 0, y: 0 },
  className = "",
  onClose
}: WindowsWindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useIsMobile();

  // Auto-maximize on mobile devices
  useEffect(() => {
    if (isMobile) {
      setIsMaximized(true);
    }
  }, [isMobile]);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const windowVariants: Variants = {
    maximized: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0,
      width: "100%",
      height: "100%",
      borderRadius: 0,
      zIndex: 40,
      x: 0,
      y: 0
    },
    normal: {
      width: "auto",
      height: "auto",
      borderRadius: "var(--radius)",
      zIndex: 30,
      x: position.x,
      y: position.y
    },
    minimized: {
      scale: 0.1,
      opacity: 0,
      y: 300,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`window shadow-xl backdrop-blur-sm ${className}`}
      variants={windowVariants}
      initial="normal"
      animate={
        isMaximized 
          ? "maximized" 
          : isMinimized 
            ? "minimized" 
            : "normal"
      }
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      drag={!isMaximized && !isMinimized && !isMobile}
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ cursor: "grabbing" }}
      style={{
        position: isMaximized ? "fixed" : "relative",
        maxWidth: isMobile ? "100%" : "calc(100vw - 2rem)",
        maxHeight: isMobile ? "100%" : "calc(100vh - 2rem)",
        overflow: "hidden"
      }}
    >
      <div 
        className="window-header cursor-grab active:cursor-grabbing flex items-center justify-between px-3 py-2"
        onDoubleClick={handleMaximize}
      >
        <div className="window-title flex items-center overflow-hidden">
          {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
          <span className="truncate text-sm md:text-base">{title}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <button 
            onClick={handleMinimize} 
            className="window-button window-button-minimize w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
            aria-label="Minimize"
          >
            <Minus className="h-2 w-2 opacity-0" />
          </button>
          <button 
            onClick={handleMaximize} 
            className="window-button window-button-maximize w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
            aria-label="Maximize"
          >
            <Square className="h-2 w-2 opacity-0" />
          </button>
          <button 
            onClick={handleClose} 
            className="window-button window-button-close w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-2 w-2 opacity-0" />
          </button>
        </div>
      </div>

      <div className="nav-bar flex overflow-x-auto scrollbar-none">
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
          <button key={item} className="nav-button whitespace-nowrap text-xs">
            {item}
          </button>
        ))}
      </div>

      <div className="nav-bar flex overflow-x-auto scrollbar-none">
        {["Back", "Forward", "Refresh", "Home"].map((item) => (
          <button key={item} className="nav-button whitespace-nowrap text-xs">
            {item}
          </button>
        ))}
      </div>

      <div className="address-bar px-2 py-1 text-xs flex items-center overflow-hidden">
        Address: <span className="address-text truncate ml-1">http://www.rounak-paul.com/index.html</span>
      </div>

      <div className="window-content scrollbar-none overflow-y-auto" style={{ 
        maxHeight: isMaximized 
          ? isMobile 
            ? 'calc(100vh - 130px)' 
            : 'calc(100vh - 120px)' 
          : isMobile 
            ? '60vh' 
            : '70vh' 
      }}>
        {children}
      </div>

      <div className="status-bar text-xs px-2 py-1 flex justify-between items-center">
        <div>Done</div>
        <div className="hidden sm:block">Internet | Protected Mode: Off</div>
      </div>
    </motion.div>
  );
};

export default WindowsWindow;
