export const LOAD_LISTS = "LOAD_LISTS";

export const loadLists = () => {
  const lists = [
    { id: 1, name: "Prima lista", items: [] },
    { id: 2, name: "Seconda lista", items: [] },
  ];

  return {
    type: LOAD_LISTS,
    payload: [...lists],
  };
};
