export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getAllListFromLocalStorage = () => {
  return Object.keys(localStorage).sort();
};

export const removeListFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
