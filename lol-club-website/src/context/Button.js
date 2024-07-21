import React from 'react';
import translations from "../language";

function Button({ lang, children, toggleLanguage }) { 
  const handleOnClick = () => { 
    toggleLanguage(lang);
  };

  return (
    <button onClick={handleOnClick}>{children}</button>
  );
}

export default Button;
