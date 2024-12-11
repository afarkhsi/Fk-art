import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const Wrapper = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(darkMode);
  return <div style={{ backgroundColor: darkMode ? '#000' : '#fff' }}></div>;
};

export default Wrapper;
