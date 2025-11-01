import { useEffect, useState, useRef } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false
  });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;
    let followerAnimationFrame: number;
    let rafActive = true;

    const updateMousePosition = (e: MouseEvent) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY };
      
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        if (!rafActive) return;
        setCursor(prev => ({
          ...prev,
          x: cursorPosRef.current.x,
          y: cursorPosRef.current.y
        }));
        setIsVisible(true);
      });
    };

    const updateFollowerPosition = () => {
      if (!rafActive) return;
      
      const diffX = cursorPosRef.current.x - followerPosRef.current.x;
      const diffY = cursorPosRef.current.y - followerPosRef.current.y;
      
      followerPosRef.current = {
        x: followerPosRef.current.x + diffX * 0.1,
        y: followerPosRef.current.y + diffY * 0.1
      };
      
      setFollowerPosition(followerPosRef.current);
      followerAnimationFrame = requestAnimationFrame(updateFollowerPosition);
    };

    // Start follower animation
    followerAnimationFrame = requestAnimationFrame(updateFollowerPosition);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select');
      
      setCursor(prev => ({
        ...prev,
        isHovering: isInteractive
      }));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursor(prev => ({
        ...prev,
        isHovering: false
      }));
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      rafActive = false;
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(followerAnimationFrame);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`transition-all duration-200 ease-out ${
            cursor.isHovering 
              ? 'w-8 h-8 bg-transparent border-2 border-blue-500' 
              : 'w-3 h-3 bg-blue-500'
          } ${
            cursor.isClicking 
              ? 'scale-75' 
              : 'scale-100'
          } rounded-full shadow-lg`}
        />
      </div>

      {/* Follower cursor */}
      <div
        ref={followerRef}
        className={`fixed pointer-events-none z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-15' : 'opacity-0'
        }`}
        style={{
          left: followerPosition.x,
          top: followerPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className={`transition-all duration-300 ease-out ${
            cursor.isHovering 
              ? 'w-20 h-20 bg-blue-100' 
              : 'w-12 h-12 bg-blue-200'
          } rounded-full`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
