import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({ options, className = '',isFocused= false, ...props }, ref) {
  const select = ref ? ref : useRef();

  
  useEffect(() => {
    if (isFocused) {
        input.current.focus();
    }
}, []);

  

  return (
    <select
      {...props}
      ref={select}
      className={`border-gray-300 focus:border-indigo-  focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
