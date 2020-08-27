import React from "react";
import { useSelector } from "react-redux";
import { HeartTwoTone } from "@ant-design/icons";
import { checkItem, deleteItem } from "../../Redux";
import { useDispatch } from "react-redux";

const DisplayListContent = (props) => {
  const allCategories = useSelector((store) => store.user.categories);
  const dispatch = useDispatch();
  const items = useSelector((store) => [...store.lists.listDisplayed.items]);
  const typeOfList = useSelector((store) => store.lists.listDisplayed.type);
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
      return allCategories.map((cat) => {
        if (cat.id === category) {
          return (names = [...names, { name: cat.name, id: cat.id }]);
        }
      });
    });
    return names;
  };

  const loadTheItems = (categoryId) => {
    return items.map((item, index) =>
      item.category === categoryId ? (
        <tr key={index} className="single-item-in-list">
          <td style={{ width: "1rem" }}>
            <input
              type="checkbox"
              className="inside-td"
              checked={item.isChecked}
              role="checkbox"
              aria-checked="false"
              onChange={() => {
                dispatch(checkItem(item.id));
              }}
            />
          </td>
          <td>
            <span className="inside-td">{item.name}</span>
          </td>
          <td>{item.isFav ? <HeartTwoTone twoToneColor="#faaca8" /> : null}</td>
          {typeOfList === "todo" ? (
            <td style={{ minWidth: "3rem" }}>
              <span className="inside-td" style={{ width: "100%" }}>
                {item.dueDate.getDate()}-{item.dueDate.getMonth() + 1}-
                {item.dueDate.getFullYear()} {item.dueDate.getHours()}:
                {item.dueDate.getMinutes()}
              </span>
            </td>
          ) : null}
          <td style={{ width: "3rem", textAlign: "center" }}>
            <button className="button button-list button-inside-td">
              Edit item
            </button>
          </td>
          <td style={{ width: "3rem" }}>
            <button
              className="button button-list button-inside-td delete-button"
              onClick={() => dispatch(deleteItem(item.id, typeOfList))}
            >
              Delete item
            </button>
          </td>
        </tr>
      ) : null
    );
  };

  const categories = removeDuplicatesFromCategories(props.list);
  const categoryNames = [...getTheNamesOfTheCategories(categories)];
  return (
    <div id="display-list">
      <table>
        {categoryNames.map((cat, index) => (
          <React.Fragment key={index}>
            <thead className="list-name-homepage category-name-display">
              {cat.name}
            </thead>
            <tbody>{loadTheItems(cat.id)}</tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default DisplayListContent;
