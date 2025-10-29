import { useEffect, useState, useRef } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  target: string;
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    target: ''
  });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let followerAnimationFrame: number;

    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setCursor(prev => ({
          ...prev,
          x: e.clientX,
          y: e.clientY
        }));
        setIsVisible(true);
      });
    };

    const updateFollowerPosition = () => {
      setCursor(prev => {
        setFollowerPosition(prevFollower => {
          const diffX = prev.x - prevFollower.x;
          const diffY = prev.y - prevFollower.y;
          
          return {
            x: prevFollower.x + diffX * 0.1,
            y: prevFollower.y + diffY * 0.1
          };
        });
        return prev;
      });
      
      followerAnimationFrame = requestAnimationFrame(updateFollowerPosition);
    };

    // Start follower animation
    followerAnimationFrame = requestAnimationFrame(updateFollowerPosition);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select');
      
      setCursor(prev => ({
        ...prev,
        isHovering: isInteractive,
        target: isInteractive ? target.tagName.toLowerCase() : ''
      }));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursor(prev => ({
        ...prev,
        isHovering: false,
        target: ''
      }));
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
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
          className={`transition-all duration-300 ease-out ${
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
          className={`transition-all duration-500 ease-out ${
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
