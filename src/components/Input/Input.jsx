/**
 *
 * @param {*} param0
 * @returns
 */

const Input = ({ value, placeholder, onChange }) => {
  return (
    <div>
      <input
        type="text"
        className="form-control searchbar"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default Input;
