import { useContext, useState } from "react";
import { PostList } from "../Store/PasswordStore";

const PasswordSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Accessing the password list from context
  const { passwordList } = useContext(PostList);

  // Handling input change
  const onChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtering the list based on the search query
  const filterList = passwordList.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="search" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          onChange={onChangeHandler}
          id="search"
          placeholder="Search..."
        />
      </div>

      {searchQuery &&  <ul className="list-group">
        {filterList.map((list) => (
          <li key={list.id} className="list-group-item">
            {list.title} {list.password}
          </li>
        ))}
      </ul> }
     
    </div>
  );
};

export default PasswordSearch;
