// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"LRMT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card(number, shape) {
  _classCallCheck(this, Card);

  this.number = number || 0;
  this.shape = shape || "a";
};

exports.default = Card;
},{}],"GsQf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.cards = [];
  }

  _createClass(Storage, [{
    key: "getCards",
    value: function getCards() {
      return this.cards;
    }
  }, {
    key: "addCard",
    value: function addCard(card) {
      this.cards.push(card);
    }
  }, {
    key: "shuffleCards",
    value: function shuffleCards() {
      this.cards = this.cards.sort(function () {
        return Math.random() - 0.5;
      });
      this.sortCardInRow();
    }
  }, {
    key: "sortCardInRow",
    value: function sortCardInRow() {
      var _ref;

      var sortedCards = [];
      var ROWS = 4;
      var CARDSINROW = 13;

      for (var i = 0; i <= ROWS - 1; i++) {
        var index = i * CARDSINROW;
        var row = this.cards.slice(index, index + CARDSINROW);
        row.sort(function (a, b) {
          return a.shape - b.shape;
        });
        sortedCards.push(row);
      }

      console.log(sortedCards);

      var flattenSortedCards = (_ref = []).concat.apply(_ref, sortedCards);

      this.cards = flattenSortedCards;
      console.log(this.cards);
    }
  }]);

  return Storage;
}();

exports.default = Storage;
},{}],"AB0e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UIClass = /*#__PURE__*/function () {
  function UIClass(table) {
    _classCallCheck(this, UIClass);

    this.table = table;
  }

  _createClass(UIClass, [{
    key: "createCardElement",
    value: function createCardElement(card) {
      var cardDiv = document.createElement('div');
      var cardFront = document.createElement('div');
      var cardBack = document.createElement('div');
      cardDiv.classList.add("card");
      cardFront.classList.add("card__face", "card__face--front");
      cardBack.classList.add("card__face", "card__face--back");
      cardDiv.appendChild(cardFront);
      cardDiv.appendChild(cardBack);
      cardBack.dataset.number = card.number;
      cardBack.dataset.shape = card.shape;
      return cardDiv;
    }
  }, {
    key: "showCards",
    value: function showCards(cards) {
      var _this = this;

      this.table.innerHTML = "";
      var cardsElements = cards.map(function (card) {
        return _this.createCardElement(card);
      });
      cardsElements.forEach(function (cardElement) {
        return _this.table.appendChild(cardElement);
      });
      setTimeout(function () {
        var allCards = document.querySelectorAll('.card');
        var animationDelay = 0;
        allCards.forEach(function (card) {
          animationDelay += 100;
          setTimeout(function () {
            card.classList.add('card--show');
          }, animationDelay);
        });
      }, 10);
    }
  }]);

  return UIClass;
}();

exports.default = UIClass;
},{}],"KIzB":[function(require,module,exports) {
"use strict";

var _card = _interopRequireDefault(require("./card.mjs"));

var _storage = _interopRequireDefault(require("./storage.mjs"));

var _UI = _interopRequireDefault(require("./UI.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var counter = 1;
var tableElement = document.querySelector(".table");
document.addEventListener('DOMContentLoaded', function () {
  var UI = new _UI.default(tableElement);
  var storage = new _storage.default();
  var instructionHeading = document.querySelector('h1');

  var resetTable = function resetTable() {
    storage.shuffleCards();
    UI.showCards(storage.getCards());
  };

  var generateCards = function generateCards() {
    var counter = 0;

    for (var i = 1; i <= 4; i++) {
      for (var j = 1; j <= 13; j++) {
        counter++;
        var card = new _card.default(counter, i);
        storage.addCard(card);
      }
    }
  };

  generateCards();
  UI.showCards(storage.getCards());
  storage.sortCardInRow();
  document.addEventListener('keyup', function (e) {
    if (e.key == ' ') {
      resetTable();
    }
  });
  instructionHeading.addEventListener('click', resetTable);
});
},{"./card.mjs":"LRMT","./storage.mjs":"GsQf","./UI.mjs":"AB0e"}]},{},["KIzB"], null)
//# sourceMappingURL=main.e9d6f745.js.map