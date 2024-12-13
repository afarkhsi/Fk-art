import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import LOGO from './assets/fk-art.png';
import { useState } from 'react';
import './style.css';
import Filters from './components/Filters/Filters';
import { useFetch } from './utils/Hooks';
import styled from 'styled-components';
import { Loader } from './utils/styles/Atoms';
import { ThemeProvider } from './ThemeContext';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  const { data, isLoading } = useFetch('./data.json');

  let updatedData = [];

  if (search) {
    updatedData = data?.filter((card) => {
      if (
        search.toLowerCase() &&
        !card.title.toLowerCase().includes(search) &&
        search.toLowerCase() &&
        !card.categorie.toLowerCase().includes(search)
      ) {
        return false;
      }
      return true;
    });
  } else if (!search) {
    updatedData = data;
  }

  const handleOnShow = () => {
    const block = document.querySelector('.filter-container');
    if (show) {
      block.classList.add('hidden');
      block.classList.remove('active');
      setShow(false);
    } else {
      setShow(true);
      block.classList.add('active');
      block.classList.remove('hidden');
    }
  };

  // Filtre V1
  const handleOnFilter = (e) => {
    const items = document.querySelectorAll('.card-container');
    const cible = e.currentTarget.innerText;
    console.log('tout les cards: ', items);

    items?.forEach((item) => {
      const a = item?.children[1];
      const b = a.children.item(1);
      const c = b.children.item(0);

      // console.log('test item:', c.innerText);
      // console.log('item to delete :', c.innerText);
      if (c?.innerText !== cible) {
        item.classList.add('hidden');
        console.log('deleted item :', item);
      } else {
        item.classList.remove('hidden');
      }

      if (cible === 'All') {
        item.classList.remove('hidden');
        // console.log('deleted item :', item);
      }
    });
  };

  // Filtre V2
  // const handleOnFilter = (e) => {
  //   const container = document.querySelector('.cards-container');
  //   console.log(container);
  //   const items = document.querySelectorAll('.card-container');
  //   const cible = e.currentTarget.innerText;

  //   items?.forEach((item) => item.remove());
  //   updatedData = data?.filter((prop) => prop?.categorie === cible);
  //   console.log('Update:', updatedData);

  //   updatedData?.forEach((data) => {
  //     const content = document.createElement('div');
  //     content.classList.add('card-container');
  //     content.innerHTML = `
  //     <img src=${data?.img} className="card-img-top card-container_img" alt=${data?.title} />
  //     <div className="card-body card-container_content">
  //       <h5 className="card-title card-container_content_title">${data.title}</h5>
  //     </div>
  //     <ul className="list-group list-group-flush card-container_categories">
  //       <li className="list-group-item card-container_categories_item">
  //         ${data?.categorie}
  //       </li>
  //     </ul>
  //   </div>`;
  //     container.appendChild(content);
  //   });
  // };

  // const handleOnFilter = (e) => {
  // updatedData = [];
  // const cible = e.currentTarget.innerText;
  // updatedData = data?.filter((prop) => prop?.categorie === cible);
  // console.log('Update:', updatedData);

  // console.log(
  //   'nouveau:',
  //   updatedData?.filter((prop) => prop?.categorie === cible)
  // );
  // };

  console.log('render:', updatedData);

  return (
    <ThemeProvider>
      <div className="App">
        <div className="header">
          <Header />
          <img src={LOGO} className="header_logo" alt="fkart" />
          <SearchBar
            onSearch={search}
            onSearchChange={setSearch}
            placeholder="Rechercher..."
          />
        </div>
        <div className="filter" onClick={handleOnShow}>
          {' '}
          <h1 className="filter_title">Filtres</h1>
          <Filters
            data={data}
            onClick={handleOnShow}
            selectedItem={handleOnFilter}
          />
        </div>

        {isLoading ? (
          <LoaderWrapper className="loader">
            <Loader />
          </LoaderWrapper>
        ) : (
          <div className="text-center d-flex flex-row justify-content-between flex-wrap m-3 cards-container">
            {updatedData &&
              updatedData?.map((card) => (
                <Cards
                  key={card.title}
                  title={card.title}
                  img={card.img}
                  categorie={card.categorie}
                />
              ))}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
