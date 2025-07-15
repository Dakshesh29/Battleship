/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/player/player */ \"./src/modules/player/player.js\");\n/* harmony import */ var _modules_player_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_player_player__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM/initialRender */ \"./src/modules/DOM/initialRender.js\");\n/* harmony import */ var _modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM/renderEnd */ \"./src/modules/DOM/renderEnd.js\");\n/* harmony import */ var _modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _startButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startButton */ \"./src/startButton.js\");\n/* harmony import */ var _startButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_startButton__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_DOM_renderShipStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOM/renderShipStatus */ \"./src/modules/DOM/renderShipStatus.js\");\n/* harmony import */ var _modules_DOM_renderShipStatus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_DOM_renderShipStatus__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shipSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipSelector */ \"./src/shipSelector.js\");\n/* harmony import */ var _shipSelector__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shipSelector__WEBPACK_IMPORTED_MODULE_5__);\nconsole.log('initiated'); \r\n\r\n//keep dom functions on the main.js file for easy data in/out\r\n\r\n//imports and init objects\r\n__webpack_require__.e(/*! import() */ \"src_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ \"./src/style.css\"));\r\n\r\n\r\n//DOM modules \r\n\r\n\r\n\r\n\r\n\r\n\r\n//create players object\r\nconst players = (function () {\r\n    let p1 = _modules_player_player__WEBPACK_IMPORTED_MODULE_0___default()(); \r\n    let p2 = _modules_player_player__WEBPACK_IMPORTED_MODULE_0___default()(false);\r\n\r\n    return {\r\n        p1: () => p1, \r\n        p2: () => p2,\r\n    }\r\n})();\r\n\r\nconst p1Ships = [[], [], [], [], []];\r\n\r\n//initial board render \r\n_modules_DOM_initialRender__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\r\n//render ships display \r\n_modules_DOM_renderShipStatus__WEBPACK_IMPORTED_MODULE_4___default()();\r\n\r\n//render random p1 ship selector; \r\n_shipSelector__WEBPACK_IMPORTED_MODULE_5___default()(players.p1());\r\ndocument.querySelector('.randomise').addEventListener(\"click\", () => {\r\n    players.p1().getBoard().clearBoard();\r\n    _shipSelector__WEBPACK_IMPORTED_MODULE_5___default()(players.p1());\r\n})\r\n\r\n//startButton functionality\r\n_startButton__WEBPACK_IMPORTED_MODULE_3___default()(players.p1(), players.p2());\r\n\r\n\r\n\r\n//a lil cheat\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n    if (e.code === \"Space\") {\r\n        if (document.querySelector('.startButton') === null) {\r\n            e.preventDefault();\r\n            const board = players.p2().getBoard().getGrid();\r\n            for (let row = 0; row < 10; row++) { \r\n                for (let column = 0; column < 10; column++) { \r\n                    if (board[row][column] !== 0 && board[row][column] !== 1 && board[row][column] !== -1) {\r\n                        players.p2().getBoard().receiveAttack(row, column); \r\n                    }\r\n                }\r\n            }\r\n            _modules_DOM_renderEnd__WEBPACK_IMPORTED_MODULE_2___default()(players.p1(), players.p2(), \"Player 1\");\r\n        }\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://odin-js-battleship/./src/main.js?\n}");

/***/ }),

/***/ "./src/modules/DOM/initialRender.js":
/*!******************************************!*\
  !*** ./src/modules/DOM/initialRender.js ***!
  \******************************************/
/***/ ((module) => {

eval("{const initialRender = () => {\r\n    const P1BOARD = document.querySelector('#p1'); \r\n    const P2BOARD = document.querySelector('#p2'); \r\n\r\n    for (let player = 1; player < 3; player++) { \r\n        for (let row = 0; row < 11; row++) { \r\n            for (let column = 0; column < 11; column++) { \r\n                //render col labels\r\n                if (row === 0) {\r\n                    if (column !== 0) {\r\n                        const label = document.createElement(\"h4\"); \r\n                        const name = String.fromCharCode(64 + column);\r\n                        label.classList.add('col-label'); \r\n                        label.id = 'col-' + name;\r\n                        label.style.margin = '0'; \r\n                        label.style.textAlign = \"center\";\r\n                        label.innerHTML =  name;\r\n                        if (player === 1) { \r\n                            P1BOARD.appendChild(label);\r\n                        } else { \r\n                            P2BOARD.appendChild(label);\r\n                        }\r\n                    } else { //empty label for top left of board\r\n                        const label = document.createElement(\"div\");\r\n                        if (player === 1) { \r\n                            P1BOARD.appendChild(label);\r\n                        } else { \r\n                            P2BOARD.appendChild(label);\r\n                        }\r\n                    }\r\n                } else { //render rows\r\n                    if (column === 0) { //row labels\r\n                        const label = document.createElement(\"h4\");     \r\n                        label.classList.add('row-label'); \r\n                        label.style.textAlign = \"end\";\r\n                        label.id = 'row-' + row;\r\n                        label.style.margin = '0'; \r\n                        label.style.paddingRight = '10px';\r\n                        label.innerHTML = row;\r\n                        if (player === 1) { \r\n                            P1BOARD.appendChild(label);\r\n                        } else { \r\n                            P2BOARD.appendChild(label);\r\n                        }\r\n                    } else {\r\n                        const label = document.createElement(\"div\");\r\n                        label.classList.add('square'); \r\n                        label.style.border = '1px solid #999';\r\n                        label.style.height = '100%'; \r\n                        label.style.width = '100%';\r\n                        label.style.position = \"relative\"; \r\n                        if (player === 1) { \r\n                            label.id = \"p1-\" + row + \"-\" + column;\r\n                            P1BOARD.appendChild(label);\r\n                            label.addEventListener('dragover', (e) => {\r\n                                e.preventDefault();\r\n                                label.style.boxShadow = \"0px 0px 1px 1px lightblue\"; \r\n                                e.dataTransfer.dropEffect = 'move';\r\n                            });\r\n\r\n                            label.addEventListener('dragleave', (e) => {\r\n                                e.preventDefault();\r\n                                label.style.boxShadow = \"\"; \r\n                            });\r\n                        \r\n                            label.addEventListener('drop', (e) => {\r\n                                e.preventDefault();\r\n                                label.style.boxShadow = \"\";\r\n                                const id = e.dataTransfer.getData('text/plain');\r\n                                const draggableElement = document.getElementById(id);\r\n                                draggableElement.setAttribute(\"x\", row - 1); \r\n                                draggableElement.setAttribute(\"y\", column - 1);\r\n                                label.appendChild(draggableElement);\r\n                                e.dataTransfer.clearData();\r\n                            });\r\n                        } else { \r\n                            label.id = \"p2-\" + row + \"-\" + column;\r\n                            P2BOARD.appendChild(label);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = initialRender;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/initialRender.js?\n}");

/***/ }),

/***/ "./src/modules/DOM/renderCPU.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/renderCPU.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const renderPlayer = __webpack_require__(/*! ./renderPlayer */ \"./src/modules/DOM/renderPlayer.js\");\r\nconst renderEnd = __webpack_require__(/*! ./renderEnd */ \"./src/modules/DOM/renderEnd.js\");\r\nconst shipUpdater = __webpack_require__(/*! ../../shipUpdater */ \"./src/shipUpdater.js\");\r\n\r\nconst renderCPU = (isTurn, player, otherPlayer) => {\r\n    const P2BOARD = document.querySelector('#p2'); \r\n    const ANNOUNCER = document.querySelector(\".announcer\");\r\n    const grid = player.getBoard().getGrid();\r\n    const board = player.getBoard();\r\n\r\n    for (let row = 0; row < 10; row++) { \r\n        for (let column = 0; column < 10; column++) { \r\n            if (grid[row][column] === 1) {\r\n                const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));\r\n                square.className = 'hit';\r\n            } else if (grid[row][column] === -1) {\r\n                const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));\r\n                square.className = 'miss';\r\n            } else {\r\n                continue;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (isTurn) {\r\n        const OOF = document.createElement('div'); \r\n        OOF.classList.add('outoffocus'); \r\n        P2BOARD.appendChild(OOF);\r\n        ANNOUNCER.innerHTML = \"CPU's turn...\";\r\n        setTimeout(() => {\r\n            let cpuMove = player.cpuMove(); \r\n            let check = otherPlayer.getBoard().validAttack(cpuMove.getX(), cpuMove.getY());\r\n            while (!check) { \r\n                cpuMove = player.cpuMove(); \r\n                check = otherPlayer.getBoard().validAttack(cpuMove.getX(), cpuMove.getY());\r\n            }\r\n            otherPlayer.getBoard().receiveAttack(cpuMove.getX(), cpuMove.getY());\r\n            //otherPlayer.cpuMemory(prevMove);  \r\n            shipUpdater(otherPlayer, 1);\r\n            if (otherPlayer.getBoard().endCondition()) {\r\n                renderEnd(otherPlayer, player, \"CPU\"); \r\n                alert('CPU Wins!'); \r\n            } else {\r\n                renderPlayer(true, otherPlayer, player);\r\n                renderCPU(false, player, otherPlayer);\r\n            }\r\n        }, 1500)\r\n    } else {\r\n        if (P2BOARD.querySelector('.outoffocus') !== null) {\r\n            P2BOARD.querySelector('.outoffocus').outerHTML = \"\";\r\n        }\r\n        \r\n        for (let row = 0; row < 10; row++) { \r\n            for (let column = 0; column < 10; column++) { \r\n                if (grid[row][column] !== 1 && grid[row][column] !== -1) {\r\n                    const square = document.querySelector('#p2-' + (row + 1) + '-' + (column + 1));\r\n                    square.style.cursor = 'pointer';\r\n                    square.addEventListener(\"click\", () => {\r\n                        board.receiveAttack(row, column); \r\n                        shipUpdater(player, 2);\r\n                        if (board.endCondition()) {\r\n                            renderEnd(player, otherPlayer, \"Player 1\"); \r\n                            setTimeout(alert('Player 1 Wins!'), 500); \r\n                        } else {\r\n                            renderPlayer(false, otherPlayer);\r\n                            renderCPU(true, player, otherPlayer);\r\n                        }\r\n                    })  \r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = renderCPU;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderCPU.js?\n}");

/***/ }),

/***/ "./src/modules/DOM/renderEnd.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/renderEnd.js ***!
  \**************************************/
/***/ ((module) => {

eval("{const renderEnd = (p1, p2, winner) => {\r\n    const ANNOUNCER = document.querySelector(\".announcer\");\r\n\r\n    ANNOUNCER.innerHTML = winner + ' wins!';\r\n    document.querySelector('.outoffocus').outerHTML = '';\r\n\r\n    function removeAllEventListeners(parent) {\r\n        const newParent = parent.cloneNode(true);\r\n        parent.parentNode.replaceChild(newParent, parent);\r\n    }\r\n\r\n    removeAllEventListeners(document.querySelector(\"#p2\"));\r\n\r\n    for (let player = 1; player < 3; player++) { \r\n\r\n        let grid = null; \r\n        let board = null;\r\n        if (player === 1) {\r\n            grid = p1.getBoard().getGrid();\r\n            board = document.querySelector(\"#p1\");\r\n        } else {\r\n            grid = p2.getBoard().getGrid();\r\n            board = document.querySelector(\"#p2\");\r\n        }\r\n\r\n        for (let row = 0; row < 10; row++) { \r\n            for (let column = 0; column < 10; column++) { \r\n                const square = document.querySelector('#p' + player + '-' + (row + 1) + '-' + (column + 1));\r\n                square.style.cursor = 'auto';\r\n                if (grid[row][column] === 1) {\r\n                    square.className = 'hit';\r\n                } else if (grid[row][column] === -1) {\r\n                    square.className = 'miss';\r\n                } else {\r\n                    continue;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    setTimeout(() => {alert(winner + \" wins!\")}, 100);\r\n}\r\n\r\nmodule.exports = renderEnd;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderEnd.js?\n}");

/***/ }),

/***/ "./src/modules/DOM/renderPlayer.js":
/*!*****************************************!*\
  !*** ./src/modules/DOM/renderPlayer.js ***!
  \*****************************************/
/***/ ((module) => {

eval("{const renderPlayer = (isTurn, player) => {\r\n    const P1BOARD = document.querySelector('#p1'); \r\n    const P2BOARD = document.querySelector('#p2'); \r\n    const ANNOUNCER = document.querySelector(\".announcer\");\r\n    const grid = player.getBoard().getGrid()\r\n\r\n    function removeAllEventListeners(parent) {\r\n        const newParent = parent.cloneNode(true);\r\n        parent.parentNode.replaceChild(newParent, parent);\r\n    }\r\n\r\n    for (let row = 0; row < 10; row++) { \r\n        for (let column = 0; column < 10; column++) { \r\n            if (grid[row][column] === 1) {\r\n                const square = document.querySelector('#p1-' + (row + 1) + '-' + (column + 1));\r\n                square.style.boxShadow = '';\r\n                square.className = 'hit';\r\n            } else if (grid[row][column] === -1) {\r\n                const square = document.querySelector('#p1-' + (row + 1) + '-' + (column + 1));\r\n                square.className = 'miss';\r\n            }\r\n        }\r\n    }\r\n\r\n    if (isTurn) { \r\n        const OOF = document.createElement('div'); \r\n        OOF.classList.add('outoffocus');\r\n        P1BOARD.appendChild(OOF);\r\n        ANNOUNCER.innerHTML = \"Player 1's turn...\";\r\n    } else {\r\n        P1BOARD.querySelector('.outoffocus').outerHTML = \"\";\r\n        removeAllEventListeners(P2BOARD);\r\n    }\r\n}\r\n\r\nmodule.exports = renderPlayer;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderPlayer.js?\n}");

/***/ }),

/***/ "./src/modules/DOM/renderShipStatus.js":
/*!*********************************************!*\
  !*** ./src/modules/DOM/renderShipStatus.js ***!
  \*********************************************/
/***/ ((module) => {

eval("{const renderShipStatus = () => {\r\n    const guide = [5, 4, 3, 3, 2]; \r\n\r\n    for (let player = 1; player <= 2; player++) {\r\n        let counter = 0;\r\n        let ships = null;\r\n        if (player === 1) {\r\n            ships = document.querySelectorAll(\".p1-ship\");\r\n        } else {\r\n            ships = document.querySelectorAll(\".p2-ship\");\r\n        }   \r\n\r\n        setTimeout(() => {\r\n            const width = document.querySelector('.square').offsetWidth;\r\n    \r\n            ships.forEach(ship => {\r\n                for (let i = 0; i < guide[counter]; i++) { \r\n                    const square = document.createElement(\"div\"); \r\n                    square.style.height = width - 5 + \"px\"; \r\n                    square.style.width = width - 5 + \"px\";\r\n                    square.style.borderTop = \"1px solid blue\"; \r\n                    square.style.borderBottom = \"1px solid blue\"; \r\n                    square.style.borderLeft = \"1px solid blue\"; \r\n                    if (i === guide[counter] - 1) {\r\n                        square.style.borderRight = \"1px solid blue\"; \r\n                    }\r\n                    ship.appendChild(square);\r\n                }\r\n                counter++;\r\n            })\r\n        }, 50);\r\n    }    \r\n}\r\n\r\nmodule.exports = renderShipStatus; \n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/DOM/renderShipStatus.js?\n}");

/***/ }),

/***/ "./src/modules/gameboard/gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/gameboard/gameboard.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const ship = __webpack_require__(/*! ../ship/ship */ \"./src/modules/ship/ship.js\"); \r\n\r\nconst gameboard = () => {   \r\n    let grid = []; \r\n    for (let i = 0; i < 10; i++) {\r\n        grid.push([]);\r\n        for (let j = 0; j < 10; j++) {\r\n            grid[i].push(0);\r\n        }\r\n    }\r\n\r\n    const playerShips = [ship(\"Destroyer\"), ship(\"Carrier\"), ship(\"Battleship\"), ship(\"Warship\"), ship(\"Cruiser\")];\r\n    let shipCoords = [];\r\n\r\n    const clearBoard = () => {\r\n        shipCoords = []; \r\n        console.log(\"board cleared!\");\r\n        for (let row = 0; row < 10; row++) { \r\n            for (let column = 0; column < 10; column++) { \r\n                grid[row][column] = 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    const checkFree = (shipLength, startX, startY, orientation) => {\r\n        if (orientation === \"horizontal\") {\r\n            if (startY + shipLength < 10) {\r\n                for (let i = startY; i < startY + shipLength; i++) {\r\n                    if (grid[startX][i] !== 0) {\r\n                        return false;\r\n                    }\r\n                } \r\n                return true;\r\n            } else {\r\n                return false;\r\n            }\r\n        } else {\r\n            if (startX + shipLength < 10) {\r\n                for (let i = startX; i < startX + shipLength; i++) {\r\n                    if (grid[i][startY] !== 0) {\r\n                        return false;\r\n                    }\r\n                } \r\n\r\n                return true;\r\n            } else {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    const checkAllShipsPlaced = () => {\r\n        const countShips = grid.flat().filter(element => element !== 0).length;\r\n        if (countShips === 17) {\r\n            return true; \r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    const removeShip = (x, y, orientation=\"horizontal\") => {\r\n\r\n    }\r\n\r\n    const placeShip = (ship, x, y, orientation=\"horizontal\") => {\r\n        if (checkFree(ship.length, x, y, orientation)) {\r\n            const temp = [];\r\n            if (orientation === \"horizontal\") {\r\n                for (let i = y; i < y + ship.length; i++) {\r\n                    grid[x][i] = ship; \r\n                    temp.push([x, i]); \r\n                }\r\n                shipCoords.push(temp);\r\n            } else {\r\n                for (let i = x; i < x + ship.length; i++) {\r\n                    grid[i][y] = ship; \r\n                    temp.push([i, y]); \r\n                }\r\n                shipCoords.push(temp);\r\n            }\r\n        }\r\n    }\r\n\r\n    const randomiseShips = () => {\r\n        playerShips.forEach(ship => {\r\n            const ori = Math.floor(Math.random() * 2);\r\n            switch (ship.length) {\r\n                case 5: \r\n                    if (ori === 0) {\r\n                        const orientation = 'vertical'; \r\n                        let x = Math.floor(Math.random() * 6); \r\n                        let y = Math.floor(Math.random() * 10);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break \r\n                    } else {\r\n                        const orientation = 'horizontal'\r\n                        let x = Math.floor(Math.random() * 10); \r\n                        let y = Math.floor(Math.random() * 6);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    }\r\n                case 4: \r\n                    if (ori === 0) {\r\n                        const orientation = 'vertical'; \r\n                        let x = Math.floor(Math.random() * 7); \r\n                        let y = Math.floor(Math.random() * 10);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    } else {       \r\n                        const orientation = 'horizontal';              \r\n                        let x = Math.floor(Math.random() * 10); \r\n                        let y = Math.floor(Math.random() * 7);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    }\r\n                case 3: \r\n                    if (ori === 0) {\r\n                        const orientation = 'vertical'; \r\n                        let x = Math.floor(Math.random() * 8); \r\n                        let y = Math.floor(Math.random() * 10);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    } else {\r\n                        const orientation = 'horizontal';\r\n                        let x = Math.floor(Math.random() * 10); \r\n                        let y = Math.floor(Math.random() * 8);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    }\r\n                case 2: \r\n                    if (ori === 0) {\r\n                        const orientation = 'vertical'; \r\n                        let x = Math.floor(Math.random() * 9); \r\n                        let y = Math.floor(Math.random() * 10);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    } else {\r\n                        const orientation = 'horizontal';\r\n                        let x = Math.floor(Math.random() * 10); \r\n                        let y = Math.floor(Math.random() * 9);\r\n                        let check = checkFree(ship.length, x, y, orientation);\r\n                        if (!check) {\r\n                            while (!check) {\r\n                                x = Math.floor(Math.random() * 6); \r\n                                y = Math.floor(Math.random() * 10);\r\n                                check = checkFree(ship.length, x, y, orientation);\r\n                            }\r\n                        }\r\n                        placeShip(ship, x, y, orientation);\r\n                        break\r\n                    }\r\n            }\r\n        })\r\n    }\r\n\r\n    const receiveAttack = (x, y) => {\r\n        if (grid[x][y] === 0) {\r\n            console.log('miss! at ' + x + \" \" + y);\r\n            grid[x][y] = -1;\r\n            return false;\r\n        } else if (grid[x][y] === -1 || grid[x][y] === 1 ) {\r\n            console.log('invalid target');\r\n        } else {\r\n            console.log('hit! at ' + x + \" \" + y);\r\n            grid[x][y].hit();\r\n            grid[x][y] = 1;\r\n            return true;\r\n        }\r\n    }\r\n\r\n    const validAttack = (x, y) => {\r\n        if (grid[x][y] === -1 || grid[x][y] === 1 ) {\r\n            return false;\r\n        } \r\n\r\n        return true;\r\n    }\r\n\r\n    const endCondition = () => {\r\n        const noShips = grid.every(subArray => subArray.every(Number.isInteger)); \r\n        const played = grid.some(row => row.includes(1)); \r\n        if ((noShips && played)) {\r\n            return true; \r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    return {\r\n        getGrid: () => grid, \r\n        getShips: () => playerShips, \r\n        getShipCoords: () => shipCoords,\r\n        checkAllShipsPlaced,\r\n        clearBoard,\r\n        placeShip, \r\n        receiveAttack, \r\n        endCondition,\r\n        randomiseShips,\r\n        validAttack\r\n    }\r\n}\r\n\r\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/gameboard/gameboard.js?\n}");

/***/ }),

/***/ "./src/modules/player/player.js":
/*!**************************************!*\
  !*** ./src/modules/player/player.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const gameboard = __webpack_require__(/*! ../gameboard/gameboard */ \"./src/modules/gameboard/gameboard.js\"); \r\n\r\nconst player = (real=true) => {\r\n    const board = gameboard(); \r\n\r\n    if (real) {\r\n        \r\n        return { \r\n            getBoard: () => board,\r\n        };\r\n    } else if (!real) {\r\n        let queue = [];\r\n\r\n        const cpuMove = () => {\r\n            let x = null; \r\n            let y = null;\r\n\r\n            if (queue === undefined || queue.length == 0) {\r\n                x = Math.floor(Math.random() * 10);\r\n                y = Math.floor(Math.random() * 10);\r\n            } else {\r\n                let coords = queue.shift(); \r\n                x = coords[0]; \r\n                y = coords[1];\r\n            }\r\n            \r\n            return {\r\n                getX: () => x, \r\n                getY: () => y,\r\n            }\r\n        }\r\n\r\n        //make a smarter ai\r\n        const cpuMemory = (prevMove, hit) => {\r\n            if (hit) {\r\n                const directions = [\r\n                    [1, 0], // down\r\n                    [-1, 0], // up\r\n                    [0, 1], // right\r\n                    [0, -1] // left\r\n                ];\r\n\r\n                function isValid(x, y) {\r\n                    return x >= 0 && x < gridSize && y >= 0 && y < gridSize;\r\n                }\r\n\r\n                for (const [dx, dy] of directions) {\r\n                    const nx = lastHit[0] + dx;\r\n                    const ny = lastHit[1] + dy;\r\n\r\n                    if (isValid(nx, ny) && grid[nx][ny] === 1) {\r\n                        x = nx;\r\n                        y = ny;\r\n                        direction = [dx, dy];\r\n                        consecutiveHits++;\r\n                        break;\r\n                    }\r\n\r\n                }\r\n                queue.push([])\r\n                \r\n            }\r\n        }\r\n\r\n        return { \r\n            getBoard: () => board, \r\n            cpuMove,\r\n            cpuMemory,\r\n        };\r\n    }\r\n}\r\n\r\nmodule.exports = player;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/player/player.js?\n}");

/***/ }),

/***/ "./src/modules/ship/ship.js":
/*!**********************************!*\
  !*** ./src/modules/ship/ship.js ***!
  \**********************************/
/***/ ((module) => {

eval("{const ship = (name) => {\r\n    let hitCount = 0; \r\n    let length = 0;\r\n    const hit = () => {\r\n        hitCount++;\r\n    }\r\n\r\n    switch (name) {\r\n        case \"Destroyer\": \r\n            length = 5; \r\n            break; \r\n\r\n        case \"Carrier\": \r\n            length = 4; \r\n            break; \r\n\r\n        case \"Battleship\": \r\n            length = 3; \r\n            break; \r\n\r\n        case \"Warship\": \r\n            length = 3; \r\n            break; \r\n\r\n        case \"Cruiser\": \r\n            length = 2; \r\n            break;\r\n    }\r\n    \r\n\r\n    const isSunk = () => {\r\n        if (hitCount === length) {\r\n            return true;\r\n        } \r\n    }\r\n\r\n    \r\n\r\n    return {\r\n        name,\r\n        length,\r\n        hit,\r\n        isSunk,\r\n    }\r\n}\r\n\r\nmodule.exports = ship;\n\n//# sourceURL=webpack://odin-js-battleship/./src/modules/ship/ship.js?\n}");

/***/ }),

/***/ "./src/shipSelector.js":
/*!*****************************!*\
  !*** ./src/shipSelector.js ***!
  \*****************************/
/***/ ((module) => {

eval("{const shipSelector = (player) => {\r\n    player.getBoard().randomiseShips(); \r\n    const ships = player.getBoard().getShips();\r\n    const shipCoords = player.getBoard().getShipCoords();\r\n    let counter = 0;\r\n\r\n    for (let row = 0; row < 10; row++) { \r\n        for (let column = 0; column < 10; column++) { \r\n            document.querySelector('#p1-' + (row + 1) + \"-\" + (column + 1)).innerHTML = '';\r\n        }\r\n    }\r\n\r\n    setTimeout(() => {\r\n        \r\n        const width = document.querySelector('.square').offsetWidth; \r\n\r\n        ships.forEach(ship => {\r\n            const shipElement = document.createElement('div'); \r\n            shipElement.classList.add(\"shipElement\");\r\n            shipElement.id = ship.name\r\n            shipElement.draggable = true;\r\n            const x = shipCoords[counter][0][0]; \r\n            const y = shipCoords[counter][0][1]; \r\n            shipElement.setAttribute(\"x\", x);\r\n            shipElement.setAttribute(\"y\", y);   \r\n    \r\n            if (x === shipCoords[counter][1][0]) {\r\n                shipElement.setAttribute(\"orientation\", \"horizontal\");\r\n                shipElement.style.width = ship.length * width - (ship.length - 1 * 1) + \"px\";\r\n                shipElement.style.height = width + \"px\";\r\n            } else if (y === shipCoords[counter][1][1]) {\r\n                shipElement.setAttribute(\"orientation\", \"vertical\");\r\n                shipElement.style.height = ship.length * width - (ship.length - 1 * 1) + \"px\";\r\n                shipElement.style.width = width + \"px\";\r\n            }\r\n    \r\n            shipElement.addEventListener(\"dragstart\", (e) => {\r\n                e.dataTransfer.setData(\"text\", e.target.id);\r\n            })\r\n            shipElement.addEventListener(\"click\", (e) => {\r\n                if (shipElement.offsetWidth > shipElement.offsetHeight) {\r\n                    shipElement.setAttribute(\"orientation\", \"vertical\");\r\n                    shipElement.style.height = ship.length * width - (ship.length - 1 * 1) + \"px\";\r\n                    shipElement.style.width = width + \"px\";\r\n                } else {\r\n                    shipElement.setAttribute(\"orientation\", \"horizontal\");\r\n                    shipElement.style.width = ship.length * width - (ship.length - 1 * 1) + \"px\";\r\n                    shipElement.style.height = width + \"px\";\r\n                }\r\n            })\r\n    \r\n            document.querySelector('#p1-' + (x + 1) + \"-\" + (y + 1)).appendChild(shipElement);\r\n    \r\n            counter++; \r\n        });\r\n    }, 50); \r\n\r\n\r\n}\r\n\r\nmodule.exports = shipSelector;\n\n//# sourceURL=webpack://odin-js-battleship/./src/shipSelector.js?\n}");

/***/ }),

/***/ "./src/shipUpdater.js":
/*!****************************!*\
  !*** ./src/shipUpdater.js ***!
  \****************************/
/***/ ((module) => {

eval("{const shipUpdater = (player, playerNo) => {\r\n    const ships = player.getBoard().getShips(); \r\n    const displayShips = document.querySelectorAll(\".p\" + playerNo + \"-ship\");\r\n    let counter = 0;\r\n\r\n    displayShips.forEach((ship) => {\r\n        if (ships[counter].isSunk()) {\r\n            let count = 0;\r\n            for (const child of ship.children) {\r\n                child.style.border = \"1px solid red\";\r\n                if (count !== ships[counter].length - 1) {\r\n                    child.style.borderRight = '0';\r\n                }\r\n                count++; \r\n            }\r\n        }\r\n        counter++;\r\n    })\r\n}\r\n\r\nmodule.exports = shipUpdater;\n\n//# sourceURL=webpack://odin-js-battleship/./src/shipUpdater.js?\n}");

/***/ }),

/***/ "./src/startButton.js":
/*!****************************!*\
  !*** ./src/startButton.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const renderPlayer = __webpack_require__(/*! ./modules/DOM/renderPlayer */ \"./src/modules/DOM/renderPlayer.js\");\r\nconst renderCPU = __webpack_require__(/*! ./modules/DOM/renderCPU */ \"./src/modules/DOM/renderCPU.js\");\r\n\r\n\r\nconst startButton = (p1, p2) => {\r\n    const STARTBUTTON = document.querySelector('.startButton');\r\n    const RANDOMBUTTON = document.querySelector(\".randomise\");\r\n    const RANDOMCONTAINER = document.querySelector(\".above-board-rand\");\r\n    const SHIPS = p1.getBoard().getShips();\r\n    let flag = false; \r\n    let counter = 0; \r\n\r\n    STARTBUTTON.addEventListener(\"click\", () => {\r\n        p1.getBoard().clearBoard(); \r\n        const SHIPELEMENTS = document.querySelectorAll(\".shipElement\");\r\n        SHIPELEMENTS.forEach(element => {\r\n            const name = element.id;\r\n            const x = Number(element.getAttribute(\"x\"));\r\n            const y = Number(element.getAttribute(\"y\"));\r\n            const orientation = element.getAttribute(\"orientation\"); \r\n            let curr = null;\r\n            SHIPS.forEach(ship => {\r\n                if (ship.name === name) { \r\n                    curr = ship; \r\n                }\r\n            })\r\n            p1.getBoard().placeShip(curr, x, y, orientation);  \r\n            counter++;\r\n        }); \r\n\r\n        flag = p1.getBoard().checkAllShipsPlaced();\r\n\r\n        if (!flag) {\r\n            p1.getBoard().clearBoard();\r\n            alert(\"placed your ships in valid places\");\r\n        } else {\r\n            p2.getBoard().randomiseShips();\r\n            renderPlayer(true, p1);\r\n            renderCPU(false, p2, p1);\r\n            RANDOMBUTTON.outerHTML = \"\";\r\n            RANDOMCONTAINER.className = \"above-board\";\r\n        }        \r\n    })\r\n}\r\n\r\nmodule.exports = startButton;\r\n\n\n//# sourceURL=webpack://odin-js-battleship/./src/startButton.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "odin-js-battleship:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodin_js_battleship"] = self["webpackChunkodin_js_battleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;