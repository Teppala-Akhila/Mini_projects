import { useState } from "react";

const Header = ({ onSearch, onFilter, onReset }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    if (searchText.trim() === "") onReset();
    else onSearch(searchText);
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>Tollywood Movies</h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <div className="actions">
        <button className="filter-btn" onClick={onFilter}>
          Top Rated
        </button>
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Header;





// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <h1>Tollywood Movies</h1>
//       </div>

//       <div className="search-bar">
//         <input type="text" placeholder="Search for movies..." />
//         <button>Search</button>
//       </div>

//       <div className="actions">
//         <button className="filter-btn">Top Rated</button>
//         <button className="signin-btn">Sign In</button>
//       </div>
//     </div>
//   );
// };

// export default Header;



// const Header= () =>{
//     return(
//         <div className="container1">
//     <h1>Tollywood Movies</h1>
//     </div>
//     );
// };
// export default Header;