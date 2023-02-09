export function saveToLocalStorage(key, todos) {
  localStorage.setItem(key, JSON.stringify(todos));
}

export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
