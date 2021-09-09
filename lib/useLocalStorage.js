const { useState, useEffect } = require('react');

export default function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = useState(defaultValue);

  // Persist data state after refresh
  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setState(JSON.parse(data));
    }
  }, [key]);

  // Set data in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
