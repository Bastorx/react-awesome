const reduxPersist = require("redux-persist");

global.window = global;

const localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
      return store;
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

module.exports = reduxPersist;
