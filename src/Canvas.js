import { useEffect, useRef, useState } from 'react';

const currentFrame = index => (
  `http://localhost:3000/bg/${index.toString()}.png`
)

const frameCount = 61;

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const Canvas = () => {
  
  const [frame, setFrame] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isInit, setIsInit] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    preloadImages();
  }, [])


  useEffect(() => {
    if(isMounted && !isInit) {
      const context = canvasRef.current.getContext('2d');
      const img = new Image()
      img.src = currentFrame(0); 
      img.onload= function() {
        context.drawImage(img, 0, 0);
      }
      const html = document.documentElement;
      window.addEventListener('scroll', () => {  
        const scrollTop = html.scrollTop;
        const maxScrollTop = 1600;
        const scrollFraction = scrollTop / maxScrollTop;

        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );

        setFrame(frameIndex);
        setIsInit(true);
      });
    }
   
  }, [isInit, isMounted]);

  useEffect(() => {
    if(frame) {
      const updateImage = index => {
        const context = canvasRef.current.getContext('2d');
        
        const img = new Image();
        img.src = currentFrame(index);
        img.onload= function() {
          context.clearRect(0, 0, 720, 405);
          context.drawImage(img, 0, 0);
        }
      }

      requestAnimationFrame(() => updateImage(frame));
    }
  },[frame])

  return(
    <canvas ref={canvasRef} id={'hero-lightpass'} width='720' height={'405'} />
  )
}

export default Canvas;