import { useState, CSSProperties } from 'react';

export default function ChangeTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeStyles: CSSProperties = {
    backgroundColor: isDarkMode ? '#333' : '#FFF', // 다크 모드면 어두운 배경, 아니면 밝은 배경
    color: isDarkMode ? '#FFF' : '#000', // 다크 모드면 밝은 글자색, 아니면 어두운 글자색
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
      <button onClick={toggleTheme}>모드 전환</button>
    </div>
  );
}
