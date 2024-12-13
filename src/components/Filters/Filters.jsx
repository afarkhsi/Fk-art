import './style.css';
// const Filters = ({ categorie }) => {
//   return (
//     <div className="filter-container">
//       <h2 className="filter-container_item">{categorie}</h2>
//     </div>
//   );
// };

// export default Filters;

const Filters = ({ data, selectedItem }) => {
  const searchFilters = data?.map((x) => x.categorie);
  const filtersArray = [...new Set(searchFilters)];
  return (
    <div className="filter-container hidden">
      <h2 onClick={selectedItem} className="filter-container_item">
        All
      </h2>
      {filtersArray &&
        filtersArray.map((filter) => (
          <h2
            key={filter}
            onClick={selectedItem}
            className="filter-container_item"
          >
            {filter}
          </h2>
        ))}
    </div>
  );
};

export default Filters;
