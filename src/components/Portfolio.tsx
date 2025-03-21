
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Award, Code } from "lucide-react";

const Portfolio = () => {
  const [visitCount, setVisitCount] = useState(8450);
  const [midiPlaying, setMidiPlaying] = useState(false);

  const playAudio = () => {
    setMidiPlaying(!midiPlaying);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center items-center my-4 space-x-2">
        <button 
          onClick={playAudio}
          className="text-xs px-3 py-1 rounded bg-muted/30 hover:bg-muted/50 transition-colors"
        >
          ♫ Background Music: {midiPlaying ? "[Stop]" : "[Play]"}
        </button>
        <button className="text-xs px-3 py-1 rounded bg-muted/30 hover:bg-muted/50 transition-colors">
          [Loop]
        </button>
      </div>

      <div className="p-2 rounded bg-accent/10 border border-accent/30 text-center font-bold">
        Welcome to my Portfolio Peeps!
      </div>

      <div className="marquee">
        <span>Welcome to my portfolio website! Thanks for visiting! Check out my experience and skills below! Last updated: 02/15/2003</span>
      </div>

      <div className="flex justify-center items-center gap-4 py-2">
        <div className="h-6 w-6 animate-glow">
          <Code className="h-6 w-6 text-accent" />
        </div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-sm font-medium"
        >
          Welcome to my personal portfolio website!
        </motion.span>
        <div className="h-6 w-6 animate-glow">
          <Code className="h-6 w-6 text-accent" />
        </div>
      </div>

      <h1 className="gradient-heading text-3xl font-bold py-4">Rounak Paul's Portfolio</h1>

      <motion.div 
        className="profile"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <img 
            className="profile-image" 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" 
            alt="Rounak Paul" 
          />
          <motion.div 
            className="absolute inset-0 border-2 border-accent/50 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gradient-accent">Rounak Paul</h2>
          <p className="text-white/70">Web Developer & Software Engineer</p>
          <p className="text-white/80 leading-relaxed">
            Welcome to my personal website! I'm a passionate developer with expertise in React, .NET, and web technologies. 
            I build modern web applications that help businesses succeed in the digital world.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-3">
            <a href="mailto:paulrounak999@gmail.com" className="flex items-center gap-1.5 text-sm text-accent hover:underline">
              <Mail className="h-4 w-4" /> paulrounak999@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rounakk11/" className="flex items-center gap-1.5 text-sm text-accent hover:underline">
              <Linkedin className="h-4 w-4" /> rounakk11
            </a>
            <a href="tel:918822955038" className="flex items-center gap-1.5 text-sm text-accent hover:underline">
              <Phone className="h-4 w-4" /> (91) 8822955038
            </a>
            <a href="https://github.com/paulrounak" className="flex items-center gap-1.5 text-sm text-accent hover:underline">
              <Github className="h-4 w-4" /> paulrounak
            </a>
          </div>
        </div>
      </motion.div>

      <div className="h-px bg-white/10 my-6" />

      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-gradient-accent">My Skills</h2>
        
        <div className="p-2 border border-accent/40 bg-accent/5 rounded text-center font-medium text-white/90">
          Hot Skills For Today's Market!
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "React", level: 81 },
            { name: "HTML", level: 89 },
            { name: "CSS", level: 83 },
            { name: ".NET", level: 85 },
            { name: "C#", level: 90 },
            { name: "Git", level: 75 },
            { name: "JavaScript", level: 80 }
          ].map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-muted/20 p-3 rounded border border-white/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs text-white/70">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-level"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="h-px bg-white/10 my-6" />

      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-gradient-accent">Work Experience</h2>
        
        <motion.div 
          className="job"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            boxShadow: "0 0 20px rgba(0, 100, 255, 0.15)", 
            backgroundColor: "rgba(255, 255, 255, 0.05)" 
          }}
        >
          <div className="job-header">
            <h3 className="job-title">Associate Technical Consultant</h3>
            <div className="job-date">2024 - present</div>
          </div>
          <div className="job-company">Value-Creed</div>
          <div className="space-y-2 text-white/80">
            <p>Full stack developer using React (Frontend) and .NET (backend)</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Developed front-end components using HTML, CSS, JavaScript and React</li>
              <li>Implemented Backend API features using C# and .NET Framework</li>
              <li>Fixed bugs and improved existing codebases</li>
              <li>Participated in code reviews and team meetings</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <div className="h-px bg-white/10 my-6" />

      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-xl font-bold text-gradient-accent">Contact Me</h2>
        <p className="text-white/80">Feel free to contact me for any web development needs or questions!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="mailto:paulrounak999@gmail.com"
            className="p-3 rounded bg-muted/30 hover:bg-muted/50 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60">Email</span>
              <span className="text-sm">paulrounak999@gmail.com</span>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/rounakk11/"
            className="p-3 rounded bg-muted/30 hover:bg-muted/50 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <Linkedin className="h-5 w-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60">LinkedIn</span>
              <span className="text-sm">rounakpaul11</span>
            </div>
          </a>
          
          <a 
            href="tel:918822955038"
            className="p-3 rounded bg-muted/30 hover:bg-muted/50 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60">Phone</span>
              <span className="text-sm">(91) 8822955038</span>
            </div>
          </a>
          
          <a 
            href="https://github.com/paulrounak"
            className="p-3 rounded bg-muted/30 hover:bg-muted/50 transition-all duration-300 flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <Github className="h-5 w-5 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60">GitHub</span>
              <span className="text-sm">paulrounak</span>
            </div>
          </a>
        </div>
      </motion.div>

      <div className="h-px bg-white/10 my-6" />

      <div className="awards">
        {["Cool Site of the Day", "HTML 5 Compliant", "Hot Pick 2023", "Best of the Web"].map((award, index) => (
          <motion.div 
            key={award}
            className="award-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Award className="h-4 w-4 mx-auto mb-1" />
            {award}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 my-6">
        <button className="nav-button">« Previous</button>
        <button className="nav-button">Web Ring</button>
        <button className="nav-button">Next »</button>
      </div>

      <motion.div 
        className="guestbook"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg font-medium mb-3 text-gradient-accent">Guestbook</h3>
        
        {[
          { name: "Jane Smith", email: "jane@example.com", date: "02/15/2003", comment: "Great website! Love the design and your experience is impressive!" },
          { name: "Bob Johnson", email: "bob@example.com", date: "01/20/2003", comment: "I'm impressed with your skills. Would love to collaborate sometime!" },
          { name: "Alice Williams", email: "alice@example.com", date: "12/12/2002", comment: "Just discovered your website. Your portfolio is awesome!" }
        ].map((entry, index) => (
          <motion.div 
            key={entry.name}
            className="guestbook-entry"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
          >
            <p className="text-sm">
              <span className="font-medium text-accent">{entry.name}</span> ({entry.email}) wrote on {entry.date}:
            </p>
            <p className="text-sm text-white/80 mt-1">{entry.comment}</p>
          </motion.div>
        ))}
        
        <div className="flex gap-3 mt-3">
          <a href="#" className="text-sm text-accent hover:underline">Sign my guestbook</a> 
          <span className="text-white/50">|</span> 
          <a href="#" className="text-sm text-accent hover:underline">View all entries</a>
        </div>
      </motion.div>

      <div className="hit-counter">
        <div className="text-xs mr-2">Visitors:</div>
        {visitCount.toString().padStart(6, '0').split('').map((digit, index) => (
          <motion.div 
            key={index}
            className="counter-box"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            {digit}
          </motion.div>
        ))}
      </div>

      <div className="text-center text-xs space-y-2 opacity-60">
        <p>Best viewed with:</p>
        <div className="flex justify-center gap-2">
          <div className="border border-white/20 rounded p-1 bg-muted/20">IE 6.0</div>
          <div className="border border-white/20 rounded p-1 bg-muted/20">Netscape 4.0</div>
        </div>
        <p>Resolution: 800x600 or higher</p>
      </div>

      <div className="h-px bg-white/10 my-6" />

      <footer className="text-center text-xs text-white/60 space-y-1">
        <p>© 2003 Rounak Paul. All rights reserved.</p>
        <p>Last updated: February 15, 2003</p>
        <p><a href="#" className="text-[9px] hover:underline">This site is Y2K compliant!</a></p>
      </footer>
    </div>
  );
};

export default Portfolio;
