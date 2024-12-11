import Input from '../Input/Input';
import './style.css';

/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string)=> void} onChange
 */

const SearchBar = ({ onSearch, onSearchChange, placeholder }) => {
  return (
    <div className="header_seachBar">
      <Input
        value={onSearch}
        onChange={onSearchChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
