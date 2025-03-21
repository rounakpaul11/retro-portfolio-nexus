
import { ReactNode, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

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
      drag={!isMaximized && !isMinimized}
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ cursor: "grabbing" }}
      style={{
        position: isMaximized ? "fixed" : "relative"
      }}
    >
      <div 
        className="window-header cursor-grab active:cursor-grabbing"
        onDoubleClick={handleMaximize}
      >
        <div className="window-title">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <button onClick={handleMinimize} className="window-button window-button-minimize">
            <Minus className="h-2 w-2 opacity-0" />
          </button>
          <button onClick={handleMaximize} className="window-button window-button-maximize">
            <Square className="h-2 w-2 opacity-0" />
          </button>
          <button onClick={handleClose} className="window-button window-button-close">
            <X className="h-2 w-2 opacity-0" />
          </button>
        </div>
      </div>

      <div className="nav-bar">
        <button className="nav-button">File</button>
        <button className="nav-button">Edit</button>
        <button className="nav-button">View</button>
        <button className="nav-button">Favorites</button>
        <button className="nav-button">Tools</button>
        <button className="nav-button">Help</button>
      </div>

      <div className="nav-bar">
        <button className="nav-button">Back</button>
        <button className="nav-button">Forward</button>
        <button className="nav-button">Refresh</button>
        <button className="nav-button">Home</button>
      </div>

      <div className="address-bar">
        Address: <span className="address-text">http://www.rounak-paul.com/index.html</span>
      </div>

      <div className="window-content scrollbar-none overflow-y-auto" style={{ 
        maxHeight: isMaximized ? 'calc(100vh - 120px)' : '70vh' 
      }}>
        {children}
      </div>

      <div className="status-bar">
        <div>Done</div>
        <div>Internet | Protected Mode: Off</div>
      </div>
    </motion.div>
  );
};

export default WindowsWindow;
