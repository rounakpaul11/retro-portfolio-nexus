
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import WindowsWindow from "@/components/WindowsWindow";
import Portfolio from "@/components/Portfolio";
import { Monitor } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [desktopItems, setDesktopItems] = useState([
    { id: "portfolio", label: "My Portfolio", icon: <Monitor className="h-6 w-6" />, isOpen: false }
  ]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const toggleWindow = (id: string) => {
    setDesktopItems(items => 
      items.map(item => 
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <div className="min-h-screen p-4 relative">
          {/* Desktop Icons */}
          <div className="grid grid-cols-1 gap-4 absolute top-4 left-4">
            {desktopItems.map(item => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center justify-center w-20 h-20 text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
                onDoubleClick={() => toggleWindow(item.id)}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded group-hover:bg-accent/20 transition-colors border border-white/10 mb-1">
                  {item.icon}
                </div>
                <span className="text-xs bg-black/50 px-1 backdrop-blur-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Windows */}
          <AnimatePresence>
            {desktopItems.find(item => item.id === "portfolio" && item.isOpen) && (
              <motion.div
                key="portfolio-window"
                className="flex justify-center items-center min-h-[calc(100vh-2rem)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <WindowsWindow 
                  title="Portfolio - Rounak Paul - Internet Explorer" 
                  icon={<Monitor className="h-4 w-4" />}
                  onClose={() => toggleWindow("portfolio")}
                  className="w-full max-w-4xl mx-auto animate-window-appear"
                >
                  <Portfolio />
                </WindowsWindow>
              </motion.div>
            )}
          </AnimatePresence>

          {/* If no windows are open, show a helper message */}
          {!desktopItems.some(item => item.isOpen) && (
            <motion.div 
              className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-sm text-white/80">Double-click on "My Portfolio" to view Rounak's portfolio</p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
