import React, { useRef, useEffect } from 'react';


const ClickOutside= ({
  children,
  exceptionRef,
  onClick,
  className,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickListener = ( MouseEvent) => {
      let clickedInside= false;
      if (exceptionRef) {
        clickedInside =
          (wrapperRef.current &&
            wrapperRef.current.contains(target)) ||
          (exceptionRef.current && exceptionRef.current === target) ||
          (exceptionRef.current &&
            exceptionRef.current.contains(target));
      } else {
        clickedInside =
          wrapperRef.current &&
          wrapperRef.current.contains(target);
      }

      if (!clickedInside) onClick();
    };

    document.addEventListener('mousedown', handleClickListener);

    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ''}`}>
      {children}
    </div>
  );
};

export default ClickOutside;
