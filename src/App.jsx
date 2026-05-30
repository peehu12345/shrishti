import { useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import VideoMemories from './components/VideoMemories';
import OurTrio from './components/OurTrio';
import SpecialMessage from './components/SpecialMessage';
import SurpriseEnding from './components/SurpriseEnding';

function App() {
  const timelineRef = useRef(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-pink-500/30 font-sans overflow-x-hidden">
      <CustomCursor />
      <MusicPlayer />
      
      <main>
        <Hero onStart={scrollToTimeline} />
        
        <div ref={timelineRef}>
          <Timeline />
        </div>
        
        <Gallery />
        <VideoMemories />
        <OurTrio />
        <SpecialMessage />
        <SurpriseEnding />
      </main>
    </div>
  );
}

export default App;
