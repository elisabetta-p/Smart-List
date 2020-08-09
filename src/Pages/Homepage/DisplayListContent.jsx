import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../Redux";
import { HeartTwoTone } from "@ant-design/icons";

const DisplayListContent = (props) => {
  const allCategories = useSelector((store) => store.lists.categories);
  /**
   * Removes any duplicates from the category array I get from the items inside the list
   * @returns {number[]} contains the ids of the categories that are present inside this list
   */
  const removeDuplicatesFromCategories = () => {
    const categoriesInListWithDuplicates = props.list.items.map(
      (item) => item.category
    );
    const uniqueSet = new Set(categoriesInListWithDuplicates);
    return [...uniqueSet];
  };

  /**
   * Returns the names of the categories contained in the specific list associated with their id.
   * It also uses the generic list of categories to find the names.
   * @param {number[]} categories array containing the ids of the categories associated with the specific list
   * @returns {string[]}
   */

  const getTheNamesOfTheCategories = (categories) => {
    let names = [];
    categories.forEach((category) => {
      allCategories.map((cat) => {
        if (cat.id === category) {
          names = [...names, { name: cat.name, id: cat.id }];
        }
      });
    });
    return names;
  };

  const loadTheItems = (id) => {
    return props.list.items.map((item, index) =>
      item.category === id ? (
        <li key={index} className="single-item-in-list">
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="checkbox" className="inside-li" />{" "}
            <span className="inside-li">{item.name}</span>
            {item.isFav ? <HeartTwoTone twoToneColor="#faaca8" /> : null}
          </span>
        </li>
      ) : null
    );
  };

  const categories = removeDuplicatesFromCategories(props.list);
  const categoryNames = [...getTheNamesOfTheCategories(categories)];
  console.log(categoryNames);

  return (
    <div id="display-list">
      {categoryNames.map((cat) => (
        <ul>
          <h2 className="list-name-homepage category-name-display">
            {cat.name}
          </h2>
          <span className="scroll-items list-items">
            {loadTheItems(cat.id)}
          </span>
        </ul>
      ))}
    </div>
  );
};

export default DisplayListContent;
