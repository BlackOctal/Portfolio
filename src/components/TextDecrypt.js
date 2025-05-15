// TextDecrypt.js
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const TextDecrypt = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(true);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  useEffect(() => {
    let interval = null;
    let iteration = 0;
    
    const decrypt = () => {
      interval = setInterval(() => {
        setDisplayText(text.split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(''));
        
        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypting(false);
        }
        
        iteration += 1/3;
      }, 30);
    };
    
    decrypt();
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <span className={isDecrypting ? styles.monospace : ''}>{displayText}</span>;
};

export default TextDecrypt;