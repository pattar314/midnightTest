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

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"\";\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n/* provided dependency */ var __react_refresh_init_socket__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js\");\n/* global __react_refresh_error_overlay__, __react_refresh_init_socket__, __resourceQuery */\n\nconst errorEventHandlers = __webpack_require__(/*! ./utils/errorEventHandlers */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js\");\nconst formatWebpackErrors = __webpack_require__(/*! ./utils/formatWebpackErrors */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js\");\n\n// Setup error states\nlet isHotReload = false;\nlet hasRuntimeErrors = false;\n\n/**\n * Try dismissing the compile error overlay.\n * This will also reset runtime error records (if any),\n * because we have new source to evaluate.\n * @returns {void}\n */\nfunction tryDismissErrorOverlay() {\n  __react_refresh_error_overlay__.clearCompileError();\n  __react_refresh_error_overlay__.clearRuntimeErrors(!hasRuntimeErrors);\n  hasRuntimeErrors = false;\n}\n\n/**\n * A function called after a compile success signal is received from Webpack.\n * @returns {void}\n */\nfunction handleCompileSuccess() {\n  isHotReload = true;\n\n  if (isHotReload) {\n    tryDismissErrorOverlay();\n  }\n}\n\n/**\n * A function called after a compile errored signal is received from Webpack.\n * @param {string} errors\n * @returns {void}\n */\nfunction handleCompileErrors(errors) {\n  isHotReload = true;\n\n  const formattedErrors = formatWebpackErrors(errors);\n\n  // Only show the first error\n  __react_refresh_error_overlay__.showCompileError(formattedErrors[0]);\n}\n\n/**\n * Handles compilation messages from Webpack.\n * Integrates with a compile error overlay.\n * @param {*} message A Webpack HMR message sent via WebSockets.\n * @returns {void}\n */\nfunction compileMessageHandler(message) {\n  switch (message.type) {\n    case 'ok':\n    case 'still-ok':\n    case 'warnings': {\n      // TODO: Implement handling for warnings\n      handleCompileSuccess();\n      break;\n    }\n    case 'errors': {\n      handleCompileErrors(message.data);\n      break;\n    }\n    default: {\n      // Do nothing.\n    }\n  }\n}\n\n// Only register if we're in non-production mode and if window is defined\nif ( true && typeof window !== 'undefined') {\n  // Registers handlers for compile errors\n  __react_refresh_init_socket__(compileMessageHandler, __resourceQuery);\n  // Registers handlers for runtime errors\n  errorEventHandlers.error(function handleError(error) {\n    hasRuntimeErrors = true;\n    __react_refresh_error_overlay__.handleRuntimeError(error);\n  });\n  errorEventHandlers.unhandledRejection(function handleUnhandledPromiseRejection(error) {\n    hasRuntimeErrors = true;\n    __react_refresh_error_overlay__.handleRuntimeError(error);\n  });\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const safeThis = __webpack_require__(/*! ./utils/safeThis */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js\");\n\nif ( true && typeof safeThis !== 'undefined') {\n  // Only inject the runtime if it hasn't been injected\n  if (!safeThis.__reactRefreshInjected) {\n    const RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ \"react-refresh/runtime\");\n    // Inject refresh runtime into global scope\n    RefreshRuntime.injectIntoGlobalHook(safeThis);\n\n    // Mark the runtime as injected to prevent double-injection\n    safeThis.__reactRefreshInjected = true;\n  }\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/**\n * @callback EventCallback\n * @param {string | Error | null} context\n * @returns {void}\n */\n/**\n * @callback EventHandler\n * @param {Event} event\n * @returns {void}\n */\n\n/**\n * A function that creates an event handler for the `error` event.\n * @param {EventCallback} callback A function called to handle the error context.\n * @returns {EventHandler} A handler for the `error` event.\n */\nfunction createErrorHandler(callback) {\n  return function errorHandler(event) {\n    if (!event || !event.error) {\n      return callback(null);\n    }\n    if (event.error instanceof Error) {\n      return callback(event.error);\n    }\n    // A non-error was thrown, we don't have a trace. :(\n    // Look in your browser's devtools for more information\n    return callback(new Error(event.error));\n  };\n}\n\n/**\n * A function that creates an event handler for the `unhandledrejection` event.\n * @param {EventCallback} callback A function called to handle the error context.\n * @returns {EventHandler} A handler for the `unhandledrejection` event.\n */\nfunction createRejectionHandler(callback) {\n  return function rejectionHandler(event) {\n    if (!event || !event.reason) {\n      return callback(new Error('Unknown'));\n    }\n    if (event.reason instanceof Error) {\n      return callback(event.reason);\n    }\n    // A non-error was rejected, we don't have a trace :(\n    // Look in your browser's devtools for more information\n    return callback(new Error(event.reason));\n  };\n}\n\n/**\n * Creates a handler that registers an EventListener on window for a valid type\n * and calls a callback when the event fires.\n * @param {string} eventType A valid DOM event type.\n * @param {function(EventCallback): EventHandler} createHandler A function that creates an event handler.\n * @returns {register} A function that registers the EventListener given a callback.\n */\nfunction createWindowEventHandler(eventType, createHandler) {\n  /**\n   * @type {EventHandler | null} A cached event handler function.\n   */\n  let eventHandler = null;\n\n  /**\n   * Unregisters an EventListener if it has been registered.\n   * @returns {void}\n   */\n  function unregister() {\n    if (eventHandler === null) {\n      return;\n    }\n    window.removeEventListener(eventType, eventHandler);\n    eventHandler = null;\n  }\n\n  /**\n   * Registers an EventListener if it hasn't been registered.\n   * @param {EventCallback} callback A function called after the event handler to handle its context.\n   * @returns {unregister | void} A function to unregister the registered EventListener if registration is performed.\n   */\n  function register(callback) {\n    if (eventHandler !== null) {\n      return;\n    }\n    eventHandler = createHandler(callback);\n    window.addEventListener(eventType, eventHandler);\n\n    return unregister;\n  }\n\n  return register;\n}\n\nmodule.exports = {\n  error: createWindowEventHandler('error', createErrorHandler),\n  unhandledRejection: createWindowEventHandler('unhandledrejection', createRejectionHandler),\n};\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/**\n * @typedef {Object} WebpackErrorObj\n * @property {string} moduleIdentifier\n * @property {string} moduleName\n * @property {string} message\n */\n\nconst friendlySyntaxErrorLabel = 'Syntax error:';\n\n/**\n * Checks if the error message is for a syntax error.\n * @param {string} message The raw Webpack error message.\n * @returns {boolean} Whether the error message is for a syntax error.\n */\nfunction isLikelyASyntaxError(message) {\n  return message.indexOf(friendlySyntaxErrorLabel) !== -1;\n}\n\n/**\n * Cleans up Webpack error messages.\n *\n * This implementation is based on the one from [create-react-app](https://github.com/facebook/create-react-app/blob/edc671eeea6b7d26ac3f1eb2050e50f75cf9ad5d/packages/react-dev-utils/formatWebpackMessages.js).\n * @param {string} message The raw Webpack error message.\n * @returns {string} The formatted Webpack error message.\n */\nfunction formatMessage(message) {\n  let lines = message.split('\\n');\n\n  // Strip Webpack-added headers off errors/warnings\n  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js\n  lines = lines.filter(function (line) {\n    return !/Module [A-z ]+\\(from/.test(line);\n  });\n\n  // Remove leading newline\n  if (lines.length > 2 && lines[1].trim() === '') {\n    lines.splice(1, 1);\n  }\n\n  // Remove duplicated newlines\n  lines = lines.filter(function (line, index, arr) {\n    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();\n  });\n\n  // Clean up the file name\n  lines[0] = lines[0].replace(/^(.*) \\d+:\\d+-\\d+$/, '$1');\n\n  // Cleans up verbose \"module not found\" messages for files and packages.\n  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {\n    lines = [\n      lines[0],\n      lines[1]\n        .replace('Error: ', '')\n        .replace('Module not found: Cannot find file:', 'Cannot find file:'),\n    ];\n  }\n\n  message = lines.join('\\n');\n\n  // Clean up syntax errors\n  message = message.replace('SyntaxError:', friendlySyntaxErrorLabel);\n\n  // Internal stacks are generally useless, so we strip them -\n  // except the stacks containing `webpack:`,\n  // because they're normally from user code generated by webpack.\n  message = message.replace(/^\\s*at\\s((?!webpack:).)*:\\d+:\\d+[\\s)]*(\\n|$)/gm, ''); // at ... ...:x:y\n  message = message.replace(/^\\s*at\\s((?!webpack:).)*<anonymous>[\\s)]*(\\n|$)/gm, ''); // at ... <anonymous>\n  message = message.replace(/^\\s*at\\s<anonymous>(\\n|$)/gm, ''); // at <anonymous>\n\n  return message.trim();\n}\n\n/**\n * Formats Webpack error messages into a more readable format.\n * @param {Array<string | WebpackErrorObj>} errors An array of Webpack error messages.\n * @returns {string[]} The formatted Webpack error messages.\n */\nfunction formatWebpackErrors(errors) {\n  let formattedErrors = errors.map(function (errorObjOrMessage) {\n    // Webpack 5 compilation errors are in the form of descriptor objects,\n    // so we have to join pieces to get the format we want.\n    if (typeof errorObjOrMessage === 'object') {\n      return formatMessage([errorObjOrMessage.moduleName, errorObjOrMessage.message].join('\\n'));\n    }\n    // Webpack 4 compilation errors are strings\n    return formatMessage(errorObjOrMessage);\n  });\n  if (formattedErrors.some(isLikelyASyntaxError)) {\n    // If there are any syntax errors, show just them.\n    formattedErrors = formattedErrors.filter(isLikelyASyntaxError);\n  }\n  return formattedErrors;\n}\n\nmodule.exports = formatWebpackErrors;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js ***!
  \************************************************************************************/
/***/ ((module) => {

eval("/* global globalThis */\n/*\n  This file is copied from `core-js`.\n  https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global.js\n\n  MIT License\n  Author: Denis Pushkarev (@zloirock)\n*/\n\nconst check = function (it) {\n  return it && it.Math == Math && it;\n};\n\nmodule.exports =\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  Function('return this')();\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global __webpack_require__ */\nconst Refresh = __webpack_require__(/*! react-refresh/runtime */ \"react-refresh/runtime\");\n\n/**\n * Extracts exports from a webpack module object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {*} An exports object from the module.\n */\nfunction getModuleExports(moduleId) {\n  return __webpack_require__.c[moduleId].exports;\n}\n\n/**\n * Calculates the signature of a React refresh boundary.\n * If this signature changes, it's unsafe to accept the boundary.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {string[]} A React refresh boundary signature array.\n */\nfunction getReactRefreshBoundarySignature(moduleExports) {\n  const signature = [];\n  signature.push(Refresh.getFamilyByType(moduleExports));\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return signature;\n  }\n\n  for (let key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    signature.push(key);\n    signature.push(Refresh.getFamilyByType(moduleExports[key]));\n  }\n\n  return signature;\n}\n\n/**\n * Creates a helper that performs a delayed React refresh.\n * @returns {enqueueUpdate} A debounced React refresh function.\n */\nfunction createDebounceUpdate() {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  let refreshTimeout;\n\n  /**\n   * Performs react refresh on a delay and clears the error overlay.\n   * @param {function(): void} callback\n   * @returns {void}\n   */\n  function enqueueUpdate(callback) {\n    if (typeof refreshTimeout === 'undefined') {\n      refreshTimeout = setTimeout(function () {\n        refreshTimeout = undefined;\n        Refresh.performReactRefresh();\n        callback();\n      }, 30);\n    }\n  }\n\n  return enqueueUpdate;\n}\n\n/**\n * Checks if all exports are likely a React component.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {boolean} Whether the exports are React component like.\n */\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return false;\n  }\n\n  let hasExports = false;\n  let areAllExportsComponents = true;\n  for (let key in moduleExports) {\n    hasExports = true;\n\n    // This is the ES Module indicator flag\n    if (key === '__esModule') {\n      continue;\n    }\n\n    // We can (and have to) safely execute getters here,\n    // as Webpack manually assigns harmony exports to getters,\n    // without any side-effects attached.\n    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281\n    const exportValue = moduleExports[key];\n    if (!Refresh.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n\n  return hasExports && areAllExportsComponents;\n}\n\n/**\n * Checks if exports are likely a React component and registers them.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).\n * @param {*} moduleExports A Webpack module exports object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {void}\n */\nfunction registerExportsForReactRefresh(moduleExports, moduleId) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    // Register module.exports if it is likely a component\n    Refresh.register(moduleExports, moduleId + ' %exports%');\n  }\n\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over the exports.\n    return;\n  }\n\n  for (let key in moduleExports) {\n    // Skip registering the ES Module indicator\n    if (key === '__esModule') {\n      continue;\n    }\n\n    const exportValue = moduleExports[key];\n    if (Refresh.isLikelyComponentType(exportValue)) {\n      const typeID = moduleId + ' %exports% ' + key;\n      Refresh.register(exportValue, typeID);\n    }\n  }\n}\n\n/**\n * Compares previous and next module objects to check for mutated boundaries.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).\n * @param {*} prevExports The current Webpack module exports object.\n * @param {*} nextExports The next Webpack module exports object.\n * @returns {boolean} Whether the React refresh boundary should be invalidated.\n */\nfunction shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {\n  const prevSignature = getReactRefreshBoundarySignature(prevExports);\n  const nextSignature = getReactRefreshBoundarySignature(nextExports);\n\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n\n  for (let i = 0; i < nextSignature.length; i += 1) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nmodule.exports = Object.freeze({\n  enqueueUpdate: createDebounceUpdate(),\n  getModuleExports: getModuleExports,\n  isReactRefreshBoundary: isReactRefreshBoundary,\n  shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,\n  registerExportsForReactRefresh: registerExportsForReactRefresh,\n});\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ansiHTML = __webpack_require__(/*! ansi-html */ \"ansi-html\");\nconst HtmlEntities = __webpack_require__(/*! html-entities */ \"html-entities\");\nconst theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst formatFilename = __webpack_require__(/*! ../utils/formatFilename */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js\");\n\nansiHTML.setColors(theme);\n\nconst entities = new HtmlEntities.Html5Entities();\n\n/**\n * @typedef {Object} CompileErrorTraceProps\n * @property {string} errorMessage\n */\n\n/**\n * A formatter that turns Webpack compile error messages into highlighted HTML source traces.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {CompileErrorTraceProps} props\n * @returns {void}\n */\nfunction CompileErrorTrace(document, root, props) {\n  const errorParts = props.errorMessage.split('\\n');\n  const errorMessage = errorParts\n    .splice(1, 1)[0]\n    // Strip filename from the error message\n    .replace(/^(.*:)\\s.*:(\\s.*)$/, '$1$2');\n  errorParts[0] = formatFilename(errorParts[0]);\n  errorParts.unshift(errorMessage);\n\n  const stackContainer = document.createElement('pre');\n  stackContainer.innerHTML = entities.decode(ansiHTML(entities.encode(errorParts.join('\\n'))));\n  stackContainer.style.fontFamily = [\n    '\"Operator Mono SSm\"',\n    '\"Operator Mono\"',\n    '\"Fira Code Retina\"',\n    '\"Fira Code\"',\n    '\"FiraCode-Retina\"',\n    '\"Andale Mono\"',\n    '\"Lucida Console\"',\n    'Menlo',\n    'Consolas',\n    'Monaco',\n    'monospace',\n  ].join(', ');\n  stackContainer.style.margin = '0';\n  stackContainer.style.whiteSpace = 'pre-wrap';\n\n  root.appendChild(stackContainer);\n}\n\nmodule.exports = CompileErrorTrace;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst Spacer = __webpack_require__(/*! ./Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} PageHeaderProps\n * @property {string} [message]\n * @property {string} title\n * @property {string} [topOffset]\n */\n\n/**\n * The header of the overlay.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {PageHeaderProps} props\n * @returns {void}\n */\nfunction PageHeader(document, root, props) {\n  const pageHeaderContainer = document.createElement('div');\n  pageHeaderContainer.style.background = '#' + theme.dimgrey;\n  pageHeaderContainer.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.3)';\n  pageHeaderContainer.style.color = '#' + theme.white;\n  pageHeaderContainer.style.left = '0';\n  pageHeaderContainer.style.padding = '1rem 1.5rem';\n  pageHeaderContainer.style.position = 'fixed';\n  pageHeaderContainer.style.top = props.topOffset || '0';\n  pageHeaderContainer.style.width = 'calc(100vw - 3rem)';\n\n  const title = document.createElement('h3');\n  title.innerText = props.title;\n  title.style.color = '#' + theme.red;\n  title.style.fontSize = '1.125rem';\n  title.style.lineHeight = '1.3';\n  title.style.margin = '0';\n  pageHeaderContainer.appendChild(title);\n\n  if (props.message) {\n    title.style.margin = '0 0 0.5rem';\n\n    const message = document.createElement('span');\n    message.innerText = props.message;\n    message.style.color = '#' + theme.white;\n    message.style.wordBreak = 'break-word';\n    pageHeaderContainer.appendChild(message);\n  }\n\n  root.appendChild(pageHeaderContainer);\n\n  // This has to run after appending elements to root\n  // because we need to actual mounted height.\n  Spacer(document, root, {\n    space: pageHeaderContainer.offsetHeight.toString(10),\n  });\n}\n\nmodule.exports = PageHeader;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst Spacer = __webpack_require__(/*! ./Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} RuntimeErrorFooterProps\n * @property {string} [initialFocus]\n * @property {boolean} multiple\n * @property {function(MouseEvent): void} onClickCloseButton\n * @property {function(MouseEvent): void} onClickNextButton\n * @property {function(MouseEvent): void} onClickPrevButton\n */\n\n/**\n * A fixed footer that handles pagination of runtime errors.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorFooterProps} props\n * @returns {void}\n */\nfunction RuntimeErrorFooter(document, root, props) {\n  const footer = document.createElement('div');\n  footer.style.backgroundColor = '#' + theme.dimgrey;\n  footer.style.bottom = '0';\n  footer.style.boxShadow = '0 -1px 4px rgba(0, 0, 0, 0.3)';\n  footer.style.height = '2.5rem';\n  footer.style.left = '0';\n  footer.style.lineHeight = '2.5rem';\n  footer.style.position = 'fixed';\n  footer.style.textAlign = 'center';\n  footer.style.width = '100vw';\n  footer.style.zIndex = '2';\n\n  const BUTTON_CONFIGS = {\n    prev: {\n      id: 'prev',\n      label: '◀&ensp;Prev',\n      onClick: props.onClickPrevButton,\n    },\n    close: {\n      id: 'close',\n      label: '×&ensp;Close',\n      onClick: props.onClickCloseButton,\n    },\n    next: {\n      id: 'next',\n      label: 'Next&ensp;▶',\n      onClick: props.onClickNextButton,\n    },\n  };\n\n  let buttons = [BUTTON_CONFIGS.close];\n  if (props.multiple) {\n    buttons = [BUTTON_CONFIGS.prev, BUTTON_CONFIGS.close, BUTTON_CONFIGS.next];\n  }\n\n  /** @type {HTMLButtonElement | undefined} */\n  let initialFocusButton;\n  for (let i = 0; i < buttons.length; i += 1) {\n    const buttonConfig = buttons[i];\n\n    const button = document.createElement('button');\n    button.id = buttonConfig.id;\n    button.innerHTML = buttonConfig.label;\n    button.tabIndex = 1;\n    button.style.backgroundColor = '#' + theme.dimgrey;\n    button.style.border = 'none';\n    button.style.color = '#' + theme.white;\n    button.style.cursor = 'pointer';\n    button.style.fontSize = 'inherit';\n    button.style.height = '100%';\n    button.style.padding = '0.5rem 0.75rem';\n    button.style.width = (100 / buttons.length).toString(10) + '%';\n    button.addEventListener('click', buttonConfig.onClick);\n\n    if (buttonConfig.id === props.initialFocus) {\n      initialFocusButton = button;\n    }\n\n    footer.appendChild(button);\n  }\n\n  root.appendChild(footer);\n\n  Spacer(document, root, { space: '2.5rem' });\n\n  if (initialFocusButton) {\n    initialFocusButton.focus();\n  }\n}\n\nmodule.exports = RuntimeErrorFooter;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst Spacer = __webpack_require__(/*! ./Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} RuntimeErrorHeaderProps\n * @property {number} currentErrorIndex\n * @property {number} totalErrors\n */\n\n/**\n * A fixed header that shows the total runtime error count.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorHeaderProps} props\n * @returns {void}\n */\nfunction RuntimeErrorHeader(document, root, props) {\n  const header = document.createElement('div');\n  header.innerText = 'Error ' + (props.currentErrorIndex + 1) + ' of ' + props.totalErrors;\n  header.style.backgroundColor = '#' + theme.red;\n  header.style.color = '#' + theme.white;\n  header.style.fontWeight = '500';\n  header.style.height = '2.5rem';\n  header.style.left = '0';\n  header.style.lineHeight = '2.5rem';\n  header.style.position = 'fixed';\n  header.style.textAlign = 'center';\n  header.style.top = '0';\n  header.style.width = '100vw';\n  header.style.zIndex = '2';\n\n  root.appendChild(header);\n\n  Spacer(document, root, { space: '2.5rem' });\n}\n\nmodule.exports = RuntimeErrorHeader;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js ***!
  \***************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ErrorStackParser = __webpack_require__(/*! error-stack-parser */ \"error-stack-parser\");\nconst theme = __webpack_require__(/*! ../theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst formatFilename = __webpack_require__(/*! ../utils/formatFilename */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js\");\n\n/**\n * @typedef {Object} RuntimeErrorStackProps\n * @property {Error} error\n */\n\n/**\n * A formatter that turns runtime error stacks into highlighted HTML stacks.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorStackProps} props\n * @returns {void}\n */\nfunction RuntimeErrorStack(document, root, props) {\n  const stackTitle = document.createElement('h4');\n  stackTitle.innerText = 'Call Stack';\n  stackTitle.style.color = '#' + theme.white;\n  stackTitle.style.fontSize = '1.0625rem';\n  stackTitle.style.fontWeight = '500';\n  stackTitle.style.lineHeight = '1.3';\n  stackTitle.style.margin = '0 0 0.5rem';\n\n  const stackContainer = document.createElement('div');\n  stackContainer.style.fontSize = '0.8125rem';\n  stackContainer.style.lineHeight = '1.3';\n  stackContainer.style.whiteSpace = 'pre-wrap';\n\n  let errorStacks;\n  try {\n    errorStacks = ErrorStackParser.parse(props.error);\n  } catch (e) {\n    errorStacks = [];\n    stackContainer.innerHTML = 'No stack trace is available for this error!';\n  }\n\n  for (let i = 0; i < Math.min(errorStacks.length, 10); i += 1) {\n    const currentStack = errorStacks[i];\n\n    const functionName = document.createElement('code');\n    functionName.innerHTML = '&emsp;' + currentStack.functionName || 0;\n    functionName.style.color = '#' + theme.yellow;\n    functionName.style.fontFamily = [\n      '\"Operator Mono SSm\"',\n      '\"Operator Mono\"',\n      '\"Fira Code Retina\"',\n      '\"Fira Code\"',\n      '\"FiraCode-Retina\"',\n      '\"Andale Mono\"',\n      '\"Lucida Console\"',\n      'Menlo',\n      'Consolas',\n      'Monaco',\n      'monospace',\n    ].join(', ');\n\n    const fileName = document.createElement('div');\n    fileName.innerHTML =\n      '&emsp;&emsp;' +\n      formatFilename(currentStack.fileName) +\n      ':' +\n      currentStack.lineNumber +\n      ':' +\n      currentStack.columnNumber;\n    fileName.style.color = '#' + theme.white;\n    fileName.style.fontSize = '0.6875rem';\n    fileName.style.marginBottom = '0.25rem';\n\n    stackContainer.appendChild(functionName);\n    stackContainer.appendChild(fileName);\n  }\n\n  root.appendChild(stackTitle);\n  root.appendChild(stackContainer);\n}\n\nmodule.exports = RuntimeErrorStack;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js ***!
  \****************************************************************************************/
/***/ ((module) => {

eval("/**\n * @typedef {Object} SpacerProps\n * @property {string} space\n */\n\n/**\n * An empty element to add spacing manually.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {SpacerProps} props\n * @returns {void}\n */\nfunction Spacer(document, root, props) {\n  const spacer = document.createElement('div');\n  spacer.style.paddingBottom = props.space;\n  root.appendChild(spacer);\n}\n\nmodule.exports = Spacer;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const CompileErrorTrace = __webpack_require__(/*! ../components/CompileErrorTrace */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js\");\nconst PageHeader = __webpack_require__(/*! ../components/PageHeader */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js\");\nconst Spacer = __webpack_require__(/*! ../components/Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} CompileErrorContainerProps\n * @property {string} errorMessage\n */\n\n/**\n * A container to render Webpack compilation error messages with source trace.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {CompileErrorContainerProps} props\n * @returns {void}\n */\nfunction CompileErrorContainer(document, root, props) {\n  PageHeader(document, root, {\n    title: 'Failed to compile.',\n  });\n  CompileErrorTrace(document, root, { errorMessage: props.errorMessage });\n  Spacer(document, root, { space: '1rem' });\n}\n\nmodule.exports = CompileErrorContainer;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const PageHeader = __webpack_require__(/*! ../components/PageHeader */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js\");\nconst RuntimeErrorStack = __webpack_require__(/*! ../components/RuntimeErrorStack */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js\");\nconst Spacer = __webpack_require__(/*! ../components/Spacer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js\");\n\n/**\n * @typedef {Object} RuntimeErrorContainerProps\n * @property {Error} currentError\n */\n\n/**\n * A container to render runtime error messages with stack trace.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {RuntimeErrorContainerProps} props\n * @returns {void}\n */\nfunction RuntimeErrorContainer(document, root, props) {\n  PageHeader(document, root, {\n    message: props.currentError.message,\n    title: props.currentError.name,\n    topOffset: '2.5rem',\n  });\n  RuntimeErrorStack(document, root, {\n    error: props.currentError,\n  });\n  Spacer(document, root, { space: '1rem' });\n}\n\nmodule.exports = RuntimeErrorContainer;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const RuntimeErrorFooter = __webpack_require__(/*! ./components/RuntimeErrorFooter */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js\");\nconst RuntimeErrorHeader = __webpack_require__(/*! ./components/RuntimeErrorHeader */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js\");\nconst CompileErrorContainer = __webpack_require__(/*! ./containers/CompileErrorContainer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js\");\nconst RuntimeErrorContainer = __webpack_require__(/*! ./containers/RuntimeErrorContainer */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js\");\nconst theme = __webpack_require__(/*! ./theme */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js\");\nconst debounce = __webpack_require__(/*! ./utils/debounce */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js\");\nconst removeAllChildren = __webpack_require__(/*! ./utils/removeAllChildren */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js\");\n\n/**\n * @callback RenderFn\n * @returns {void}\n */\n\n/* ===== Cached elements for DOM manipulations ===== */\n/**\n * The iframe that contains the overlay.\n * @type {HTMLIFrameElement}\n */\nlet iframeRoot = null;\n/**\n * The document object from the iframe root, used to create and render elements.\n * @type {Document}\n */\nlet rootDocument = null;\n/**\n * The root div elements will attach to.\n * @type {HTMLDivElement}\n */\nlet root = null;\n/**\n * A Cached function to allow deferred render.\n * @type {RenderFn | null}\n */\nlet scheduledRenderFn = null;\n\n/* ===== Overlay State ===== */\n/**\n * The latest error message from Webpack compilation.\n * @type {string}\n */\nlet currentCompileErrorMessage = '';\n/**\n * Index of the error currently shown by the overlay.\n * @type {number}\n */\nlet currentRuntimeErrorIndex = 0;\n/**\n * The latest runtime error objects.\n * @type {Error[]}\n */\nlet currentRuntimeErrors = [];\n/**\n * The render mode the overlay is currently in.\n * @type {'compileError' | 'runtimeError' | null}\n */\nlet currentMode = null;\n\n/**\n * @typedef {Object} IframeProps\n * @property {function(): void} onIframeLoad\n */\n\n/**\n * Creates the main `iframe` the overlay will attach to.\n * Accepts a callback to be ran after iframe is initialized.\n * @param {Document} document\n * @param {HTMLElement} root\n * @param {IframeProps} props\n * @returns {HTMLIFrameElement}\n */\nfunction IframeRoot(document, root, props) {\n  const iframe = document.createElement('iframe');\n  iframe.id = 'react-refresh-overlay';\n  iframe.src = 'about:blank';\n\n  iframe.style.border = 'none';\n  iframe.style.height = '100vh';\n  iframe.style.left = '0';\n  iframe.style.position = 'fixed';\n  iframe.style.top = '0';\n  iframe.style.width = '100vw';\n  iframe.style.zIndex = '2147483647';\n  iframe.addEventListener('load', function onLoad() {\n    // Reset margin of iframe body\n    iframe.contentDocument.body.style.margin = '0';\n    props.onIframeLoad();\n  });\n\n  // We skip mounting and returns as we need to ensure\n  // the load event is fired after we setup the global variable\n  return iframe;\n}\n\n/**\n * Creates the main `div` element for the overlay to render.\n * @param {Document} document\n * @param {HTMLElement} root\n * @returns {HTMLDivElement}\n */\nfunction OverlayRoot(document, root) {\n  const div = document.createElement('div');\n  div.id = 'react-refresh-overlay-error';\n\n  // Style the contents container\n  div.style.backgroundColor = '#' + theme.grey;\n  div.style.boxSizing = 'border-box';\n  div.style.color = '#' + theme.white;\n  div.style.fontFamily = [\n    '-apple-system',\n    'BlinkMacSystemFont',\n    '\"Segoe UI\"',\n    '\"Helvetica Neue\"',\n    'Helvetica',\n    'Arial',\n    'sans-serif',\n    '\"Apple Color Emoji\"',\n    '\"Segoe UI Emoji\"',\n    'Segoe UI Symbol',\n  ].join(', ');\n  div.style.fontSize = '0.875rem';\n  div.style.height = '100vh';\n  div.style.lineHeight = '1.3';\n  div.style.overflow = 'auto';\n  div.style.padding = '1rem 1.5rem 0';\n  div.style.width = '100vw';\n\n  root.appendChild(div);\n  return div;\n}\n\n/**\n * Ensures the iframe root and the overlay root are both initialized before render.\n * If check fails, render will be deferred until both roots are initialized.\n * @param {RenderFn} renderFn A function that triggers a DOM render.\n * @returns {void}\n */\nfunction ensureRootExists(renderFn) {\n  if (root) {\n    // Overlay root is ready, we can render right away.\n    renderFn();\n    return;\n  }\n\n  // Creating an iframe may be asynchronous so we'll defer render.\n  // In case of multiple calls, function from the last call will be used.\n  scheduledRenderFn = renderFn;\n\n  if (iframeRoot) {\n    // Iframe is already ready, it will fire the load event.\n    return;\n  }\n\n  // Create the iframe root, and, the overlay root inside it when it is ready.\n  iframeRoot = IframeRoot(document, document.body, {\n    onIframeLoad: function onIframeLoad() {\n      rootDocument = iframeRoot.contentDocument;\n      root = OverlayRoot(rootDocument, rootDocument.body);\n      scheduledRenderFn();\n    },\n  });\n\n  // We have to mount here to ensure `iframeRoot` is set when `onIframeLoad` fires.\n  // This is because onIframeLoad() will be called synchronously\n  // or asynchronously depending on the browser.\n  document.body.appendChild(iframeRoot);\n}\n\n/**\n * Creates the main `div` element for the overlay to render.\n * @returns {void}\n */\nfunction render() {\n  ensureRootExists(function () {\n    const currentFocus = rootDocument.activeElement;\n    let currentFocusId;\n    if (currentFocus.localName === 'button' && currentFocus.id) {\n      currentFocusId = currentFocus.id;\n    }\n\n    removeAllChildren(root);\n\n    if (currentCompileErrorMessage) {\n      currentMode = 'compileError';\n\n      CompileErrorContainer(rootDocument, root, {\n        errorMessage: currentCompileErrorMessage,\n      });\n    } else if (currentRuntimeErrors.length) {\n      currentMode = 'runtimeError';\n\n      RuntimeErrorHeader(rootDocument, root, {\n        currentErrorIndex: currentRuntimeErrorIndex,\n        totalErrors: currentRuntimeErrors.length,\n      });\n      RuntimeErrorContainer(rootDocument, root, {\n        currentError: currentRuntimeErrors[currentRuntimeErrorIndex],\n      });\n      RuntimeErrorFooter(rootDocument, root, {\n        initialFocus: currentFocusId,\n        multiple: currentRuntimeErrors.length > 1,\n        onClickCloseButton: function onClose() {\n          clearRuntimeErrors();\n        },\n        onClickNextButton: function onNext() {\n          if (currentRuntimeErrorIndex === currentRuntimeErrors.length - 1) {\n            return;\n          }\n          currentRuntimeErrorIndex += 1;\n          ensureRootExists(render);\n        },\n        onClickPrevButton: function onPrev() {\n          if (currentRuntimeErrorIndex === 0) {\n            return;\n          }\n          currentRuntimeErrorIndex -= 1;\n          ensureRootExists(render);\n        },\n      });\n    }\n  });\n}\n\n/**\n * Destroys the state of the overlay.\n * @returns {void}\n */\nfunction cleanup() {\n  // Clean up and reset all internal state.\n  document.body.removeChild(iframeRoot);\n  scheduledRenderFn = null;\n  root = null;\n  iframeRoot = null;\n}\n\n/**\n * Clears Webpack compilation errors and dismisses the compile error overlay.\n * @returns {void}\n */\nfunction clearCompileError() {\n  if (!root || currentMode !== 'compileError') {\n    return;\n  }\n\n  currentCompileErrorMessage = '';\n  currentMode = null;\n  cleanup();\n}\n\n/**\n * Clears runtime error records and dismisses the runtime error overlay.\n * @param {boolean} [dismissOverlay] Whether to dismiss the overlay or not.\n * @returns {void}\n */\nfunction clearRuntimeErrors(dismissOverlay) {\n  if (!root || currentMode !== 'runtimeError') {\n    return;\n  }\n\n  currentRuntimeErrorIndex = 0;\n  currentRuntimeErrors = [];\n\n  if (typeof dismissOverlay === 'undefined' || dismissOverlay) {\n    currentMode = null;\n    cleanup();\n  }\n}\n\n/**\n * Shows the compile error overlay with the specific Webpack error message.\n * @param {string} message\n * @returns {void}\n */\nfunction showCompileError(message) {\n  if (!message) {\n    return;\n  }\n\n  currentCompileErrorMessage = message;\n\n  render();\n}\n\n/**\n * Shows the runtime error overlay with the specific error records.\n * @param {Error[]} errors\n * @returns {void}\n */\nfunction showRuntimeErrors(errors) {\n  if (!errors || !errors.length) {\n    return;\n  }\n\n  currentRuntimeErrors = errors;\n\n  render();\n}\n\n/**\n * The debounced version of `showRuntimeErrors` to prevent frequent renders\n * due to rapid firing listeners.\n * @param {Error[]} errors\n * @returns {void}\n */\nconst debouncedShowRuntimeErrors = debounce(showRuntimeErrors, 30);\n\n/**\n * Detects if an error is a Webpack compilation error.\n * @param {Error} error The error of interest.\n * @returns {boolean} If the error is a Webpack compilation error.\n */\nfunction isWebpackCompileError(error) {\n  return /Module [A-z ]+\\(from/.test(error.message) || /Cannot find module/.test(error.message);\n}\n\n/**\n * Handles runtime error contexts captured with EventListeners.\n * Integrates with a runtime error overlay.\n * @param {Error} error A valid error object.\n * @returns {void}\n */\nfunction handleRuntimeError(error) {\n  if (error && !isWebpackCompileError(error) && currentRuntimeErrors.indexOf(error) === -1) {\n    currentRuntimeErrors = currentRuntimeErrors.concat(error);\n  }\n  debouncedShowRuntimeErrors(currentRuntimeErrors);\n}\n\nmodule.exports = Object.freeze({\n  clearCompileError: clearCompileError,\n  clearRuntimeErrors: clearRuntimeErrors,\n  handleRuntimeError: handleRuntimeError,\n  showCompileError: showCompileError,\n  showRuntimeErrors: showRuntimeErrors,\n});\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("/**\n * @typedef {Object} Theme\n * @property {string[]} reset\n * @property {string} black\n * @property {string} red\n * @property {string} green\n * @property {string} yellow\n * @property {string} blue\n * @property {string} magenta\n * @property {string} cyan\n * @property {string} white\n * @property {string} lightgrey\n * @property {string} darkgrey\n * @property {string} grey\n * @property {string} dimgrey\n */\n\n/**\n * @type {Theme} theme\n * A collection of colors to be used by the overlay.\n * Partially adopted from Tomorrow Night Bright.\n */\nconst theme = {\n  reset: ['transparent', 'transparent'],\n  black: '000000',\n  red: 'D34F56',\n  green: 'B9C954',\n  yellow: 'E6C452',\n  blue: '7CA7D8',\n  magenta: 'C299D6',\n  cyan: '73BFB1',\n  white: 'FFFFFF',\n  lightgrey: 'C7C7C7',\n  darkgrey: 'A9A9A9',\n  grey: '474747',\n  dimgrey: '343434',\n};\n\nmodule.exports = theme;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js ***!
  \*************************************************************************************/
/***/ ((module) => {

eval("/**\n * Debounce a function to delay invoking until wait (ms) have elapsed since the last invocation.\n * @param {function(...*): *} fn The function to be debounced.\n * @param {number} wait Milliseconds to wait before invoking again.\n * @return {function(...*): void} The debounced function.\n */\nfunction debounce(fn, wait) {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  let timer;\n\n  /**\n   * @returns {void}\n   */\n  function debounced() {\n    const context = this;\n    const args = arguments;\n\n    clearTimeout(timer);\n    timer = setTimeout(function () {\n      return fn.apply(context, args);\n    }, wait);\n  }\n\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/debounce.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js ***!
  \*******************************************************************************************/
/***/ ((module) => {

eval("/**\n * Prettify a filename from error stacks into the desired format.\n * @param {string} filename The filename to be formatted.\n * @returns {string} The formatted filename.\n */\nfunction formatFilename(filename) {\n  // Strip away protocol and domain for compiled files\n  const htmlMatch = /^https?:\\/\\/(.*)\\/(.*)/.exec(filename);\n  if (htmlMatch && htmlMatch[1] && htmlMatch[2]) {\n    return htmlMatch[2];\n  }\n\n  // Strip everything before the first directory for source files\n  const sourceMatch = /\\/.*?([^./]+[/|\\\\].*)$/.exec(filename);\n  if (sourceMatch && sourceMatch[1]) {\n    return sourceMatch[1].replace(/\\?$/, '');\n  }\n\n  // Unknown filename type, use it as is\n  return filename;\n}\n\nmodule.exports = formatFilename;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/formatFilename.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/**\n * Remove all children of an element.\n * @param {HTMLElement} element A valid HTML element.\n * @param {number} [skip] Number of elements to skip removing.\n * @returns {void}\n */\nfunction removeAllChildren(element, skip) {\n  /** @type {Node[]} */\n  const childList = Array.prototype.slice.call(\n    element.childNodes,\n    typeof skip !== 'undefined' ? skip : 0\n  );\n\n  for (let i = 0; i < childList.length; i += 1) {\n    element.removeChild(childList[i]);\n  }\n}\n\nmodule.exports = removeAllChildren;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils/removeAllChildren.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* global __webpack_dev_server_client__ */\n\nconst url = __webpack_require__(/*! native-url */ \"native-url\");\nconst getSocketUrlParts = __webpack_require__(/*! ./utils/getSocketUrlParts */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js\");\n\n/**\n * Initializes a socket server for HMR for webpack-dev-server.\n * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.\n * @param {string} [resourceQuery] Webpack's `__resourceQuery` string.\n * @returns {void}\n */\nfunction initWDSSocket(messageHandler, resourceQuery) {\n  if (typeof __webpack_dev_server_client__ !== 'undefined') {\n    const SocketClient = __webpack_dev_server_client__;\n\n    const urlParts = getSocketUrlParts(resourceQuery);\n    const connection = new SocketClient(url.format(urlParts));\n\n    connection.onMessage(function onSocketMessage(data) {\n      const message = JSON.parse(data);\n      messageHandler(message);\n    });\n  }\n}\n\nmodule.exports = initWDSSocket;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WDSSocket.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

eval("/**\n * Gets the source (i.e. host) of the script currently running.\n * @returns {string}\n */\nfunction getCurrentScriptSource() {\n  // `document.currentScript` is the most accurate way to get the current running script,\n  // but is not supported in all browsers (most notably, IE).\n  if (document.currentScript) {\n    return document.currentScript.getAttribute('src');\n  }\n\n  // Fallback to getting all scripts running in the document.\n  const scriptElements = document.scripts || [];\n  const currentScript = scriptElements[scriptElements.length - 1];\n  if (currentScript) {\n    return currentScript.getAttribute('src');\n  }\n\n  throw new Error('[React Refresh] Failed to get current script source!');\n}\n\nmodule.exports = getCurrentScriptSource;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const url = __webpack_require__(/*! native-url */ \"native-url\");\nconst getCurrentScriptSource = __webpack_require__(/*! ./getCurrentScriptSource */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getCurrentScriptSource.js\");\nconst parseQuery = __webpack_require__(/*! ./parseQuery */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js\");\n\n/**\n * @typedef {Object} SocketUrlParts\n * @property {string} [auth]\n * @property {string} [hostname]\n * @property {string} [protocol]\n * @property {string} [pathname]\n * @property {string} [port]\n */\n\n/**\n * Parse current location and Webpack's `__resourceQuery` into parts that can create a valid socket URL.\n * @param {string} [resourceQuery] The Webpack `__resourceQuery` string.\n * @returns {SocketUrlParts} The parsed URL parts.\n * @see https://webpack.js.org/api/module-variables/#__resourcequery-webpack-specific\n */\nfunction getSocketUrlParts(resourceQuery) {\n  const scriptSource = getCurrentScriptSource();\n  const urlParts = url.parse(scriptSource);\n\n  /** @type {string | undefined} */\n  let auth;\n  let hostname = urlParts.hostname;\n  let protocol = urlParts.protocol;\n  let pathname = '/sockjs-node'; // This is hard-coded in WDS\n  let port = urlParts.port;\n\n  // FIXME:\n  // This is a hack to work-around `native-url`'s parse method,\n  // which filters out falsy values when concatenating the `auth` string.\n  // In reality, we need to check for both values to correctly inject them.\n  // Ref: GoogleChromeLabs/native-url#32\n  // The placeholder `baseURL` is to allow parsing of relative paths,\n  // and will have no effect if `scriptSource` is a proper URL.\n  const authUrlParts = new URL(scriptSource, 'http://foo.bar');\n  // Parse authentication credentials in case we need them\n  if (authUrlParts.username) {\n    auth = authUrlParts.username;\n\n    // Since HTTP basic authentication does not allow empty username,\n    // we only include password if the username is not empty.\n    if (authUrlParts.password) {\n      // Result: <username>:<password>\n      auth = auth.concat(':', authUrlParts.password);\n    }\n  }\n\n  // Check for IPv4 and IPv6 host addresses that corresponds to `any`/`empty`.\n  // This is important because `hostname` can be empty for some hosts,\n  // such as `about:blank` or `file://` URLs.\n  const isEmptyHostname =\n    urlParts.hostname === '0.0.0.0' || urlParts.hostname === '::' || urlParts.hostname === null;\n\n  // We only re-assign the hostname if we are using HTTP/HTTPS protocols\n  if (\n    isEmptyHostname &&\n    window.location.hostname &&\n    window.location.protocol.indexOf('http') !== -1\n  ) {\n    hostname = window.location.hostname;\n  }\n\n  // We only re-assign `protocol` when `hostname` is available and is empty,\n  // since otherwise we risk creating an invalid URL.\n  // We also do this when `https` is used as it mandates the use of secure sockets.\n  if (hostname && (isEmptyHostname || window.location.protocol === 'https:')) {\n    protocol = window.location.protocol;\n  }\n\n  // We only re-assign port when it is not available or `empty`\n  if (!port || port === '0') {\n    port = window.location.port;\n  }\n\n  // If the resource query is available,\n  // parse it and overwrite everything we received from the script host.\n  const parsedQuery = parseQuery(resourceQuery || '');\n  hostname = parsedQuery.sockHost || hostname;\n  pathname = parsedQuery.sockPath || pathname;\n  port = parsedQuery.sockPort || port;\n\n  return {\n    auth: auth,\n    hostname: hostname,\n    pathname: pathname,\n    protocol: protocol,\n    port: port,\n  };\n}\n\nmodule.exports = getSocketUrlParts;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/getSocketUrlParts.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js ***!
  \***************************************************************************************/
/***/ ((module) => {

eval("/**\n * Parse a query string into an object.\n * @param {string} [querystring] The query string.\n * @returns {Record<string, string>} The parsed query object.\n */\nfunction parseQuery(querystring) {\n  let query = '';\n  if (typeof querystring === 'string') {\n    query = querystring;\n  }\n\n  /**\n   * Transform query strings such as `?foo1=bar1&foo2=bar2`:\n   * - remove `?` from the start\n   * - split with `&`\n   * - split pairs with `=`\n   * The resulting format will be { foo1: 'bar1', foo2: 'bar2' }\n   */\n  return query\n    .replace(/^\\?/, '')\n    .split('&')\n    .reduce(function (acc, entry) {\n      const pair = entry.split('=');\n      // Add all non-empty entries to the accumulated object\n      if (pair[0]) {\n        acc[pair[0]] = pair[1];\n      }\n\n      return acc;\n    }, {});\n}\n\nmodule.exports = parseQuery;\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/utils/parseQuery.js?");

/***/ }),

/***/ "./src/client/components/Card.js":
/*!***************************************!*\
  !*** ./src/client/components/Card.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst Card = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `slideshow-card ${props.wrapperClasses}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: `card-image ${props.imageClasses}`,\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + props.src),\n    alt: props.name\n  }), props.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"card-description\"\n  }, props.description) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));\n};\n\n_c = Card;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Card\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Card.js?");

/***/ }),

/***/ "./src/client/components/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/client/components/ContactPage.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\nconst ContactPage = () => {\n  _s();\n\n  const [formData, updateData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    firstName: '',\n    lastName: '',\n    email: '',\n    message: ''\n  }); //look up curried functions to understand this\n\n  const handleChange = name => event => {\n    console.log(`updated value: ${name}: ${event.target.value}`);\n    updateData({ ...formData,\n      [name]: event.target.value\n    });\n  };\n\n  let fields = {};\n\n  const formCollector = async e => {\n    try {\n      e.preventDefault();\n      console.log('form collector is running');\n      let toSend = {\n        firstName: formData[\"firstName\"],\n        lastName: formData[\"lastName\"],\n        email: formData[\"email\"],\n        message: formData[\"message\"]\n      };\n      console.log('tosend: ', toSend);\n\n      try {\n        let sender = fetch('/sendcontact', {\n          method: \"POST\",\n          headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(toSend)\n        });\n        updateData({\n          firstName: '',\n          lastName: '',\n          email: '',\n          message: ''\n        });\n        return await sender;\n      } catch (err) {\n        console.log('error: ' + err);\n      }\n    } catch (err) {\n      console.log('there was an error: ', err);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"contact-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    className: \"contact-form\",\n    onSubmit: formCollector\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"contact-banner\"\n  }, \"Send us a message\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"contact-info-section\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", {\n    className: \"form-label\"\n  }, \"Name\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"name-input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"another-name-class\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"first-name-text\",\n    name: \"firstName\",\n    onChange: handleChange('firstName'),\n    value: formData['firstName']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"first-name\",\n    className: \"sub-label\"\n  }, \"First\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"another-name-class\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"last-name-text\",\n    name: \"lastName\",\n    onChange: handleChange(\"lastName\"),\n    value: formData['lastName']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"last-name\",\n    className: \"sub-label\"\n  }, \"Last\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"email\",\n    className: \"form-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"Email\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    id: \"email-text\",\n    onChange: handleChange(\"email\"),\n    value: formData['email']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"message\",\n    className: \"form-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", null, \"Comment or Message\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"textarea\", {\n    name: \"message\",\n    id: \"message-text\",\n    rows: \"10\",\n    cols: \"30\",\n    onChange: handleChange(\"message\"),\n    value: formData['message']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"Submit\")));\n};\n\n_s(ContactPage, \"aJ6xU6UiRN7zzQTU9A6KcuWJno4=\");\n\n_c = ContactPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"ContactPage\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/ContactPage.js?");

/***/ }),

/***/ "./src/client/components/Events.js":
/*!*****************************************!*\
  !*** ./src/client/components/Events.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\nconst Events = props => {\n  let currentEvent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards[0].src,\n    name: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards[0].name,\n    description: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards[0].description,\n    wrapperClasses: 'current-event',\n    key: 0\n  });\n  let current = 'true';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"events-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    extraStyles: \"page-banner\",\n    title: \"EVENTS\"\n  }), current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"upcoming-events\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Upcoming Events\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"vertical-card-wrapper\"\n  }, currentEvent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"film-freeway-button\"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"previous-events\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Previous Events\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"horizontal-card-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    cards: _data__WEBPACK_IMPORTED_MODULE_1__.eventCards.slice(1),\n    wrapperClasses: \"project-slideshow\"\n  }))));\n};\n\n_c = Events;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Events\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Events.js?");

/***/ }),

/***/ "./src/client/components/Footer.js":
/*!*****************************************!*\
  !*** ./src/client/components/Footer.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SocialBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialBar */ \"./src/client/components/SocialBar.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst Footer = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    facebook: props.facebook,\n    instagram: props.instagram,\n    youtube: props.youtube,\n    rss: props.rss\n  });\n};\n\n_c = Footer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Footer\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Footer.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderElement */ \"./src/client/components/HeaderElement.js\");\n/* harmony import */ var _assets_mwLogoFix1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/mwLogoFix1.png */ \"./src/assets/mwLogoFix1.png\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\nconst Header = props => {\n  _s();\n\n  const [menuVis, setVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setVisibility(false);\n\n    if (window.matchMedia(\"(max-width: 500px)\").matches) {\n      console.log('we are on mobile');\n      const headerElements = document.getElementsByClassName('header-element');\n\n      for (let el of headerElements) {\n        el.addEventListener('click', changeVisibility);\n      }\n    } else {\n      console.log('we are on a non-mobile device');\n    }\n  }, []);\n  let vis = true;\n\n  const changeVisibility = () => {\n    const menu = document.getElementsByClassName('menu-list')[0];\n    menu.style.display = vis ? 'flex' : 'none';\n    vis = !vis;\n    console.log('vis: ', vis);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"/\",\n    className: \"header-banner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_mwLogoFix1_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"midnight west logo\",\n    className: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dropdownArrow\",\n    onClick: changeVisibility\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowDropDown, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"menu-list\"\n  }, props.headerData.map((element, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: element.body,\n    link: element.link,\n    key: index\n  }))));\n};\n\n_s(Header, \"CBomYvifVj5nTeySd/jZVpcWKKI=\");\n\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Header\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/HeaderElement.js":
/*!************************************************!*\
  !*** ./src/client/components/HeaderElement.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst HeaderElement = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `header-element`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: props.link\n  }, props.title));\n};\n\n_c = HeaderElement;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderElement);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"HeaderElement\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/HeaderElement.js?");

/***/ }),

/***/ "./src/client/components/Homepage.js":
/*!*******************************************!*\
  !*** ./src/client/components/Homepage.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _PageSubSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageSubSection */ \"./src/client/components/PageSubSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\n\n\nconst Homepage = props => {\n  let events = _data__WEBPACK_IMPORTED_MODULE_5__.eventCards.map((card, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"featured-image-homepage current-event\",\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + _data__WEBPACK_IMPORTED_MODULE_5__.eventCards[0].src)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"film-freeway-button\",\n    href: _data__WEBPACK_IMPORTED_MODULE_5__.sponsors[0].link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"film-freeway-image\",\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + _data__WEBPACK_IMPORTED_MODULE_5__.sponsors[0].logo),\n    alt: _data__WEBPACK_IMPORTED_MODULE_5__.sponsors[0].name\n  }))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"MIDNIGHT WEST PRODUCTIONS\",\n    extraStyles: \"companyBanner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"EVENTS\"\n  }), _data__WEBPACK_IMPORTED_MODULE_5__.eventCards ? events[0] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSubSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    body: \"More events in the works\",\n    extraStyles: \"sectionSubBanner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Projects\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSubSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    extraStyles: \"slide-section\",\n    psExtra: \"slide-extra\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    cards: _data__WEBPACK_IMPORTED_MODULE_5__.projectCards,\n    extraStyles: \"projectSlideshow\"\n  })));\n};\n\n_c = Homepage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Homepage\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Homepage.js?");

/***/ }),

/***/ "./src/client/components/MainRouter.js":
/*!*********************************************!*\
  !*** ./src/client/components/MainRouter.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Homepage */ \"./src/client/components/Homepage.js\");\n/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services */ \"./src/client/components/Services.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects */ \"./src/client/components/Projects.js\");\n/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Events */ \"./src/client/components/Events.js\");\n/* harmony import */ var _Sponsors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sponsors */ \"./src/client/components/Sponsors.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContactPage */ \"./src/client/components/ContactPage.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ \"./src/client/components/Footer.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  _s();\n\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    headerComponents: _data__WEBPACK_IMPORTED_MODULE_8__.headerCards,\n    facebook: _data__WEBPACK_IMPORTED_MODULE_8__.social[0],\n    instagram: _data__WEBPACK_IMPORTED_MODULE_8__.social[1],\n    youtube: _data__WEBPACK_IMPORTED_MODULE_8__.social[2],\n    rss: 'https://anchor.fm/patrick-thurston'\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    headerData: state.headerComponents\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _Homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/events\",\n    component: _Events__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/projects\",\n    component: _Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/services\",\n    component: _Services__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/sponsors\",\n    component: _Sponsors__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/contact\",\n    component: _ContactPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    facebook: state.facebook,\n    instagram: state.instagram,\n    youtube: state.youtube,\n    rss: state.rss\n  }));\n};\n\n_s(MainRouter, \"GtXmfE8Vg0uCYiwAJInqYzUQaHE=\");\n\n_c = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainRouter);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"MainRouter\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/MainRouter.js?");

/***/ }),

/***/ "./src/client/components/PageSection.js":
/*!**********************************************!*\
  !*** ./src/client/components/PageSection.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst PageSection = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `page-section ${props.extraStyles}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ps-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, props.title)));\n};\n\n_c = PageSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSection);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"PageSection\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/PageSection.js?");

/***/ }),

/***/ "./src/client/components/PageSubSection.js":
/*!*************************************************!*\
  !*** ./src/client/components/PageSubSection.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst PageSubSection = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `page-section page-sub ${props.extraStyles}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `ps-body ${props.psExtra}`\n  }, props.body), props.children);\n};\n\n_c = PageSubSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSubSection);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"PageSubSection\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/PageSubSection.js?");

/***/ }),

/***/ "./src/client/components/Projects.js":
/*!*******************************************!*\
  !*** ./src/client/components/Projects.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _Slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slideshow */ \"./src/client/components/Slideshow.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\nconst Projects = props => {\n  let currentProject = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards[0].src,\n    name: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards[0].name,\n    description: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards[0].description,\n    wrapperClasses: 'current-project',\n    key: 0\n  });\n  let current = 'true';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"Projects-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    extraStyles: \"page-banner\",\n    title: \"PROJECTS\"\n  }), current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"upcoming-projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"Upcoming Projects\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"vertical-card-wrapper\"\n  }, currentProject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"film-freeway-button\"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"previous-projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Previous Projects\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"horizontal-card-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slideshow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    cards: _data__WEBPACK_IMPORTED_MODULE_1__.projectCards.slice(1),\n    wrapperClasses: \"project-slideshow\"\n  }))));\n};\n\n_c = Projects;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Projects\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Projects.js?");

/***/ }),

/***/ "./src/client/components/Services.js":
/*!*******************************************!*\
  !*** ./src/client/components/Services.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst Services = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    extraStyles: \"page-banner\",\n    title: \"Services\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"services-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service filming-service\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Filming\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service-pricing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Commercials under 2 minutes - $350\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Up to 6 hour event (weddings included) -$500\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Memorial videos unlimited pictures, digital or physical - $150\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service editing-service\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"b\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Editing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"service-pricing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$100/hr\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Includes audio balance, color balance, digital copies, and up to 5 dvd or blueray copies\"))))));\n};\n\n_c = Services;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Services\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Services.js?");

/***/ }),

/***/ "./src/client/components/Slideshow.js":
/*!********************************************!*\
  !*** ./src/client/components/Slideshow.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/client/components/Card.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\nconst Slideshow = props => {\n  _s();\n\n  let [cardIndex, setCardIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  let [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  let cards = props.cards.map((card, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: card.src,\n    name: card.name,\n    key: index\n  }));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setDisplay();\n  }, []);\n\n  let setDisplay = () => {\n    window.matchMedia(\"(max-width: 800px)\").matches ? setShow( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"slide-cards\"\n    }, cards[cardIndex])) : setShow( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"slide-cards\"\n    }, cards[cardIndex], \" \", cards[cardIndex + 1]));\n  };\n\n  const handleCarouselButton = direction => {\n    /*   if(direction === -1){\r\n          if(cardIndex <= 0 ){\r\n              setCardIndex(cards.length)\r\n          }\r\n          setCardIndex(cardIndex += direction);\r\n      }\r\n      else if(direction === 1){\r\n          setCardIndex(cardIndex += direction);\r\n          if(cardIndex > cards.length - 2 ){\r\n              setCardIndex(-1);\r\n          }\r\n      }\r\n    */\n    setCardIndex(cardIndex += direction);\n\n    if (cardIndex < 0) {\n      setCardIndex(cards.length - 1);\n    } else if (cardIndex > cards.length - 2) {\n      setCardIndex(0);\n    }\n\n    console.log(cardIndex);\n    setDisplay();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slideshow-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"slide-left slideshow-button\",\n    onClick: () => handleCarouselButton(-1)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronLeft, null)), show, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"slide-right slideshow-button\",\n    onClick: () => handleCarouselButton(1)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, null)));\n};\n\n_s(Slideshow, \"3+oV0BLOWoW+upDkAklT67Vjuso=\");\n\n_c = Slideshow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Slideshow\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Slideshow.js?");

/***/ }),

/***/ "./src/client/components/SocialBar.js":
/*!********************************************!*\
  !*** ./src/client/components/SocialBar.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\nconst SocialBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"social-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.facebook[\"link\"],\n    target: \"_blank\",\n    className: \"social-icon\",\n    onclick: \"window.open(this.href,'_blank');return false;\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Facebook, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.youtube[\"link\"],\n    target: \"_blank\",\n    className: \"social-icon\",\n    onclick: \"window.open(this.href,'_blank');return false;\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.YouTube, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.instagram[\"link\"],\n    target: \"_blank\",\n    className: \"social-icon\",\n    onclick: \"window.open(this.href,'_blank');return false;\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Instagram, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: props.rss,\n    target: \"_blank\",\n    className: \"social-icon\",\n    onclick: \"window.open(this.href,'_blank');return false;\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.RssFeed, null)));\n};\n\n_c = SocialBar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialBar);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"SocialBar\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/SocialBar.js?");

/***/ }),

/***/ "./src/client/components/Sponsors.js":
/*!*******************************************!*\
  !*** ./src/client/components/Sponsors.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageSection */ \"./src/client/components/PageSection.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/components/data.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\nconst Sponsors = props => {\n  let sponsorList = _data__WEBPACK_IMPORTED_MODULE_2__.sponsors.map((sponsor, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"sponsor-entry\",\n    href: sponsor.link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(\"./\" + sponsor.logo),\n    alt: sponsor.name\n  })));\n  console.log('sponsor list: ', sponsorList);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    extraStyles: \"page-banner\",\n    title: \"Sponsors\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sponsor-showcase\"\n  }, sponsorList));\n};\n\n_c = Sponsors;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sponsors);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Sponsors\");\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/Sponsors.js?");

/***/ }),

/***/ "./src/client/components/data.js":
/*!***************************************!*\
  !*** ./src/client/components/data.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerCards\": () => (/* binding */ headerCards),\n/* harmony export */   \"social\": () => (/* binding */ social),\n/* harmony export */   \"sponsors\": () => (/* binding */ sponsors),\n/* harmony export */   \"projectCards\": () => (/* binding */ projectCards),\n/* harmony export */   \"eventCards\": () => (/* binding */ eventCards),\n/* harmony export */   \"setProjectCards\": () => (/* binding */ setProjectCards)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nconst headerCards = [{\n  \"body\": \"Events\",\n  \"link\": \"/events\"\n}, {\n  \"body\": \"Services\",\n  \"link\": \"/services\"\n}, {\n  \"body\": \"Projects\",\n  \"link\": \"/projects\"\n}, {\n  \"body\": \"Sponsors\",\n  \"link\": \"/sponsors\"\n}, {\n  \"body\": \"Contact us\",\n  \"link\": \"/contact\"\n}];\nconst social = [{\n  \"name\": \"facebook\",\n  \"link\": \"https://www.facebook.com/midnightwestproductions\"\n}, {\n  \"name\": \"instagram\",\n  \"link\": \"https://www.instagram.com/midnightwestproductions/\"\n}, {\n  \"name\": \"youtube\",\n  \"link\": \"https://www.youtube.com/channel/UC2z1byO3TP4p4akBpmEhVkw/videos\"\n}];\nconst sponsors = [{\n  \"name\": \"filmfreeway\",\n  \"link\": \"https://filmfreeway.com/MidnightWestFest\",\n  \"logo\": 'filmfreeway-logo.png',\n  'key': 1\n}];\nconst projectCards = [{\n  \"name\": 'mwf2021',\n  \"src\": \"mwf2021.png\"\n}, {\n  \"name\": \"Mothers and Sons\",\n  \"src\": \"midnightmothers.jpg\"\n}, {\n  \"name\": \"It's a wonderful life\",\n  \"src\": \"midnightwonder.jpg\"\n}, {\n  \"name\": \"Midnight Zombie Fest\",\n  \"src\": \"midnightZfest.jpg\"\n}, {\n  \"name\": \"summer rage\",\n  \"src\": \"summer_rage.jpg\"\n}];\nconst eventCards = [{\n  \"name\": 'mwf2021',\n  \"src\": \"mwf2021.png\",\n  'description': 'Midnight West Fest is entering it’s third year, and we want your submissions! This year, we’ll be at The Historic Atlas Theatre for three days of independent film celebration! Friday night will kick off with live music, followed by an evening of comedy submissions. Saturday starts with High-Noon for our drama and action submissions, rounding out with another live preformance. From 6 that night until 3 in the morning with after dark set aside for our horror and grindhouse fans. Sunday will be family day, featuring our G and PG equivalent submissions as well as interactive filmmaking workshops for ages 6-14. Located in the heart of Downtown Cheyenne, our festival is mere blocks from a number of local restaurants and bars, as well as many of the historic and cultural landmarks of our Capitol City. 15% of all ticket sales will be donated to Cheyenne Little Theatre Players for the upkeep and maintenance of The Historic Atlas Theatre.'\n}, {\n  \"name\": 'mwf2021',\n  \"src\": \"mwf2021.png\"\n}, {\n  \"name\": \"Midnight Zombie Fest\",\n  \"src\": \"midnightZfest.jpg\"\n}, {\n  \"name\": \"2019 mwf\",\n  \"src\": \"heart-hand-poster.jpg\"\n}, {\n  \"name\": \"shamrocks and screams lock-in\",\n  \"src\": \"midnight-cereal-1.jpg\"\n}, {\n  \"name\": \"martial arts and murder\",\n  \"src\": \"midnight-kungfu-1.jpg\"\n}, {\n  \"name\": \"marijuana movie marathon\",\n  \"src\": \"midnight-weed.jpg\"\n}];\nconst setProjectCards = (action, card = '', name = '') => {\n  if (action === 'add') {\n    projectCards = [...projectCards, card];\n  } else if (action === 'remove') {\n    for (let c of projectCards) {\n      if (c[name] === name) {\n        projectCards.pop(c);\n      }\n    }\n  }\n};\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/client/components/data.js?");

/***/ }),

/***/ "./src/server/controllers/email.controller.js":
/*!****************************************************!*\
  !*** ./src/server/controllers/email.controller.js ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst sendContactMail = (req, res) => {\n  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: 'gmail',\n    auth: {\n      user: process.env[\"CONTACT_EMAIL\"],\n      pass: process.env[\"CONTACT_PASS\"]\n    }\n  });\n  let mailOptions = {};\n  mailOptions.from = req.body[\"from\"];\n  mailOptions.to = \"Josh.saxon@midnightwestproductions.com\";\n  mailOptions.subject = `New contact for Midnight West from ${req.body[\"firstName\"]} ${req.body[\"lastName\"]}`;\n  mailOptions.text = `\n     Name: ${req.body[\"firstName\"]} ${req.body[\"lastName\"]}\n     Email: ${req.body[\"email\"]}\n\n     Message: ${req.body[\"message\"]}`;\n  console.log('mailOptions: ', mailOptions);\n  transporter.sendMail(mailOptions, (error, info) => {\n    if (error) {\n      console.log(error);\n    } else {\n      console.log('Email sent: ', info.response);\n      alert('Email sent');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  sendContactMail\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/server/controllers/email.controller.js?");

/***/ }),

/***/ "./src/server/express.js":
/*!*******************************!*\
  !*** ./src/server/express.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../template.js */ \"./template.js\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _client_styles_App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../client/styles/App.css */ \"./src/client/styles/App.css\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_components_MainRouter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../client/components/MainRouter.js */ \"./src/client/components/MainRouter.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/user.routes */ \"./src/server/routes/user.routes.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // require('dotenv').config()\n\nconst compiler = webpack__WEBPACK_IMPORTED_MODULE_12___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_14___default()));\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 3000;\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_14___default().output.publicPath)\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_15___default()(compiler));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_10___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()({\n  contentSecurityPolicy: false\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'public')));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.use(_routes_user_routes__WEBPACK_IMPORTED_MODULE_16__[\"default\"]);\nconst mockResponse = {\n  foo: 'bar',\n  bar: 'foo'\n};\napp.get('/api', (req, res) => {\n  res.send(mockResponse);\n});\napp.get('/*', (req, res) => {\n  console.log('request url: ', req.url);\n  let indexPage = CURRENT_WORKING_DIR + '/dist/index.html';\n  res.status(200).sendFile(indexPage, err => {\n    if (err) {\n      console.log('There was an error: ', err);\n    }\n  });\n});\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    console.log(\"error\" + err.name + \": \" + err.message);\n  } else if (err) {\n    console.log(\"error\" + err.name + \": \" + err.message);\n    console.log(err);\n  }\n});\napp.listen(port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s', port);\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/server/express.js?");

/***/ }),

/***/ "./src/server/routes/user.routes.js":
/*!******************************************!*\
  !*** ./src/server/routes/user.routes.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_email_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../controllers/email.controller */ \"./src/server/controllers/email.controller.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n\n\nconst UserRouter = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nUserRouter.route('/sendcontact').post(_controllers_email_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendContactMail);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRouter);\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./src/server/routes/user.routes.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  return `<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n            <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n            <link href=\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\" rel=\"stylesheet\"> \n            <title>Midnight test</title>\n            <link href=\"/dist/main.css\" type=\"text/css\" rel=\"stylesheet\">\n            \n        </head>\n        <body>\n            <div id='root'></div>\n            <div id='toRemove'> </div>\n            <script defer type\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n        \n        </html>`;\n});\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n__webpack_require__.$Refresh$.setup(module.id);\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\n\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nconst ReactRefreshWebpackPlugin = __webpack_require__(/*! @pmmmwh/react-refresh-webpack-plugin */ \"@pmmmwh/react-refresh-webpack-plugin\");\n\nconst config = {\n  name: 'browser',\n  mode: 'development',\n  entry: [path.join(CURRENT_WORKING_DIR, \"src/client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: \"bundle.js\",\n    publicPath: '/dist/'\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin(), new webpack.NoEmitOnErrorsPlugin(), new ReactRefreshWebpackPlugin(), new HtmlWebPackPlugin({\n    template: 'webpack-template.html'\n  })],\n  module: {\n    rules: [{\n      test: /\\.html$/i,\n      loader: \"html-loader\"\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif|webp)$/,\n      type: 'asset',\n      exclude: /node_modules/\n    }, {\n      test: /\\.css/,\n      use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],\n      exclude: /node_modules/\n    }, {\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\",\n      options: {\n        plugins: [__webpack_require__(/*! react-refresh/babel */ \"react-refresh/babel\") // this line removes falsy values from the array\n        ]\n      }\n    }]\n  }\n};\nmodule.exports = config;\n\nconst currentExports = __react_refresh_utils__.getModuleExports(module.id);\n__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);\n\nif (true) {\n  const isHotUpdate = !!module.hot.data;\n  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;\n\n  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {\n    module.hot.dispose(\n      /**\n       * A callback to performs a full refresh if React has unrecoverable errors,\n       * and also caches the to-be-disposed module.\n       * @param {*} data A hot module data object from Webpack HMR.\n       * @returns {void}\n       */\n      function hotDisposeCallback(data) {\n        // We have to mutate the data object to get data registered and cached\n        data.prevExports = currentExports;\n      }\n    );\n    module.hot.accept(\n      /**\n       * An error handler to allow self-recovering behaviours.\n       * @param {Error} error An error occurred during evaluation of a module.\n       * @returns {void}\n       */\n      function hotErrorHandler(error) {\n        if (\n          typeof __react_refresh_error_overlay__ !== 'undefined' &&\n          __react_refresh_error_overlay__\n        ) {\n          __react_refresh_error_overlay__.handleRuntimeError(error);\n        }\n\n        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {\n          if (window.onHotAcceptError) {\n            window.onHotAcceptError(error.message);\n          }\n        }\n\n        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);\n      }\n    );\n\n    if (isHotUpdate) {\n      if (\n        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&\n        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)\n      ) {\n        module.hot.invalidate();\n      } else {\n        __react_refresh_utils__.enqueueUpdate(\n          /**\n           * A function to dismiss the error overlay after performing React refresh.\n           * @returns {void}\n           */\n          function updateCallback() {\n            if (\n              typeof __react_refresh_error_overlay__ !== 'undefined' &&\n              __react_refresh_error_overlay__\n            ) {\n              __react_refresh_error_overlay__.clearRuntimeErrors();\n            }\n          }\n        );\n      }\n    }\n  } else {\n    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {\n      module.hot.invalidate();\n    }\n  }\n}\n\n//# sourceURL=webpack://midnight-test/./webpack.config.client.js?");

/***/ }),

/***/ "./node_modules/css-hot-loader/hotModuleReplacement.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-hot-loader/hotModuleReplacement.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var normalizeUrl = __webpack_require__(/*! normalize-url */ \"normalize-url\");\nvar srcByModuleId = Object.create(null);\nvar debounce = __webpack_require__(/*! lodash/debounce */ \"lodash/debounce\");\n\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nvar noop = function () {};\n\nvar getCurrentScriptUrl = function(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function(fileMap) {\n    var splitResult = /([^\\\\/]+)\\.js$/.exec(src);\n    var filename = splitResult && splitResult[1];\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n    return fileMap.split(',').map(function(mapRule) {\n      var reg = new RegExp(filename + '\\\\.js$', 'g')\n      return normalizeUrl(src.replace(reg, mapRule.replace(/{fileName}/g, filename) + '.css'), { stripWWW: false });\n    });\n  };\n};\n\nfunction updateCss(el, url) {\n  if (!url) {\n    url = el.href.split('?')[0];\n  }\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n  if (!url || !(url.indexOf('.css') > -1)) return;\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    newEl.isLoaded = true;\n    newEl.parentNode.removeChild(el);\n  });\n\n  newEl.addEventListener('error', function () {\n    newEl.isLoaded = true;\n    if (newEl.parentNode.contains(el)) {\n      newEl.parentNode.removeChild(el);\n    }\n  });\n\n  newEl.href = url + '?' + Date.now();\n  // insert new <link /> right to the old one's position\n  el.parentNode.insertBefore(newEl, el.nextSibling);\n}\n\nfunction reloadStyle(src) {\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n\n  forEach.call(elements, function(el) {\n    if (el.visited === true) return;\n\n    var url = getReloadUrl(el.href, src);\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n\n  return loaded;\n}\n\nfunction getReloadUrl(href, src) {\n  href = normalizeUrl(href, { stripWWW: false });\n  var ret;\n  src.some(function(url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function(el) {\n    if (el.visited === true) return;\n    updateCss(el);\n  });\n}\n\nmodule.exports = function(moduleId, options) {\n  var getScriptSrc;\n\n  if (noDocument) {\n    return noop;\n  }\n\n  getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.fileMap);\n    var reloaded = reloadStyle(src);\n    if (reloaded && !options.reloadAll) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 10);\n};\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/css-hot-loader/hotModuleReplacement.js?");

/***/ }),

/***/ "./src/client/styles/App.css":
/*!***********************************!*\
  !*** ./src/client/styles/App.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1635656819557\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n    if(true) {\n      // 1635656819557\n      var cssReload = __webpack_require__(/*! !../../../node_modules/css-hot-loader/hotModuleReplacement.js */ \"./node_modules/css-hot-loader/hotModuleReplacement.js\")(module.id, {\"fileMap\":\"{fileName}\"});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);;\n    }\n  \n\n//# sourceURL=webpack://midnight-test/./src/client/styles/App.css?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://midnight-test/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint-disable */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://midnight-test/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React vundefined\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\n// When adding new symbols to this file,\n// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar REACT_ELEMENT_TYPE = 0xeac7;\nvar REACT_PORTAL_TYPE = 0xeaca;\nvar REACT_FRAGMENT_TYPE = 0xeacb;\nvar REACT_STRICT_MODE_TYPE = 0xeacc;\nvar REACT_PROFILER_TYPE = 0xead2;\nvar REACT_PROVIDER_TYPE = 0xeacd;\nvar REACT_CONTEXT_TYPE = 0xeace;\nvar REACT_FORWARD_REF_TYPE = 0xead0;\nvar REACT_SUSPENSE_TYPE = 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = 0xead8;\nvar REACT_MEMO_TYPE = 0xead3;\nvar REACT_LAZY_TYPE = 0xead4;\nvar REACT_SCOPE_TYPE = 0xead7;\nvar REACT_OPAQUE_ID_TYPE = 0xeae0;\nvar REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;\nvar REACT_OFFSCREEN_TYPE = 0xeae2;\nvar REACT_LEGACY_HIDDEN_TYPE = 0xeae3;\nvar REACT_CACHE_TYPE = 0xeae4;\n\nif (typeof Symbol === 'function' && Symbol.for) {\n  var symbolFor = Symbol.for;\n  REACT_ELEMENT_TYPE = symbolFor('react.element');\n  REACT_PORTAL_TYPE = symbolFor('react.portal');\n  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');\n  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');\n  REACT_PROFILER_TYPE = symbolFor('react.profiler');\n  REACT_PROVIDER_TYPE = symbolFor('react.provider');\n  REACT_CONTEXT_TYPE = symbolFor('react.context');\n  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');\n  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');\n  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');\n  REACT_MEMO_TYPE = symbolFor('react.memo');\n  REACT_LAZY_TYPE = symbolFor('react.lazy');\n  REACT_SCOPE_TYPE = symbolFor('react.scope');\n  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');\n  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');\n  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');\n  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');\n  REACT_CACHE_TYPE = symbolFor('react.cache');\n}\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/react-refresh/cjs/react-refresh-runtime.development.js?");

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"./node_modules/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n\n\n//# sourceURL=webpack://midnight-test/./node_modules/react-refresh/runtime.js?");

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Brushoverlay03.png\": \"./src/assets/Brushoverlay03.png\",\n\t\"./MWP-Business-Logo-White-smaller.png\": \"./src/assets/MWP-Business-Logo-White-smaller.png\",\n\t\"./Midnight-West-Fest-Logo-patfix.jpg\": \"./src/assets/Midnight-West-Fest-Logo-patfix.jpg\",\n\t\"./contactWood.jpg\": \"./src/assets/contactWood.jpg\",\n\t\"./editing-service.webp\": \"./src/assets/editing-service.webp\",\n\t\"./filmFreeway-button.png\": \"./src/assets/filmFreeway-button.png\",\n\t\"./filmfreeway-logo.png\": \"./src/assets/filmfreeway-logo.png\",\n\t\"./filming-service.png\": \"./src/assets/filming-service.png\",\n\t\"./heart-hand-poster.jpg\": \"./src/assets/heart-hand-poster.jpg\",\n\t\"./midnight-black.jpg\": \"./src/assets/midnight-black.jpg\",\n\t\"./midnight-cereal-1.jpg\": \"./src/assets/midnight-cereal-1.jpg\",\n\t\"./midnight-kungfu-1.jpg\": \"./src/assets/midnight-kungfu-1.jpg\",\n\t\"./midnight-kungfu.jpg\": \"./src/assets/midnight-kungfu.jpg\",\n\t\"./midnight-weed.jpg\": \"./src/assets/midnight-weed.jpg\",\n\t\"./midnightZfest.jpg\": \"./src/assets/midnightZfest.jpg\",\n\t\"./midnightfest-2.jpg\": \"./src/assets/midnightfest-2.jpg\",\n\t\"./midnightmothers.jpg\": \"./src/assets/midnightmothers.jpg\",\n\t\"./midnightwonder.jpg\": \"./src/assets/midnightwonder.jpg\",\n\t\"./mwLogoFix1.jpg\": \"./src/assets/mwLogoFix1.jpg\",\n\t\"./mwLogoFix1.png\": \"./src/assets/mwLogoFix1.png\",\n\t\"./mwf2020.png\": \"./src/assets/mwf2020.png\",\n\t\"./mwf2021.png\": \"./src/assets/mwf2021.png\",\n\t\"./summer_rage.jpg\": \"./src/assets/summer_rage.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/Brushoverlay03.png":
/*!***************************************!*\
  !*** ./src/assets/Brushoverlay03.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fc1ae6141ad6319a0319.png\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/Brushoverlay03.png?");

/***/ }),

/***/ "./src/assets/MWP-Business-Logo-White-smaller.png":
/*!********************************************************!*\
  !*** ./src/assets/MWP-Business-Logo-White-smaller.png ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/MWP-Business-Logo-White-smaller.png?");

/***/ }),

/***/ "./src/assets/Midnight-West-Fest-Logo-patfix.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/Midnight-West-Fest-Logo-patfix.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c36b686bb4cd3bf18461.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/Midnight-West-Fest-Logo-patfix.jpg?");

/***/ }),

/***/ "./src/assets/contactWood.jpg":
/*!************************************!*\
  !*** ./src/assets/contactWood.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7ad27d22319595fa284e.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/contactWood.jpg?");

/***/ }),

/***/ "./src/assets/editing-service.webp":
/*!*****************************************!*\
  !*** ./src/assets/editing-service.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6026d05bc6581ddf8b9d.webp\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/editing-service.webp?");

/***/ }),

/***/ "./src/assets/filmFreeway-button.png":
/*!*******************************************!*\
  !*** ./src/assets/filmFreeway-button.png ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/filmFreeway-button.png?");

/***/ }),

/***/ "./src/assets/filmfreeway-logo.png":
/*!*****************************************!*\
  !*** ./src/assets/filmfreeway-logo.png ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/filmfreeway-logo.png?");

/***/ }),

/***/ "./src/assets/filming-service.png":
/*!****************************************!*\
  !*** ./src/assets/filming-service.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b7f56270f5494e58490e.png\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/filming-service.png?");

/***/ }),

/***/ "./src/assets/heart-hand-poster.jpg":
/*!******************************************!*\
  !*** ./src/assets/heart-hand-poster.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dc95a3f38f3621f58eb9.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/heart-hand-poster.jpg?");

/***/ }),

/***/ "./src/assets/midnight-black.jpg":
/*!***************************************!*\
  !*** ./src/assets/midnight-black.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a0ef31df4f02edaff00b.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-black.jpg?");

/***/ }),

/***/ "./src/assets/midnight-cereal-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/midnight-cereal-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b154a8072a8fa14f65ca.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-cereal-1.jpg?");

/***/ }),

/***/ "./src/assets/midnight-kungfu-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/midnight-kungfu-1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"087458fa0a3bc4d9356b.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-kungfu-1.jpg?");

/***/ }),

/***/ "./src/assets/midnight-kungfu.jpg":
/*!****************************************!*\
  !*** ./src/assets/midnight-kungfu.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"205dba269dca515649af.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-kungfu.jpg?");

/***/ }),

/***/ "./src/assets/midnight-weed.jpg":
/*!**************************************!*\
  !*** ./src/assets/midnight-weed.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ea1121cb60d4c53f09d8.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnight-weed.jpg?");

/***/ }),

/***/ "./src/assets/midnightZfest.jpg":
/*!**************************************!*\
  !*** ./src/assets/midnightZfest.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"56e9a9c67bae8c7d74a1.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightZfest.jpg?");

/***/ }),

/***/ "./src/assets/midnightfest-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/midnightfest-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0a1b0e4a37dd28d28f2f.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightfest-2.jpg?");

/***/ }),

/***/ "./src/assets/midnightmothers.jpg":
/*!****************************************!*\
  !*** ./src/assets/midnightmothers.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d2b55b23c14289b76fa9.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightmothers.jpg?");

/***/ }),

/***/ "./src/assets/midnightwonder.jpg":
/*!***************************************!*\
  !*** ./src/assets/midnightwonder.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d4ded9fdfd15d0e58133.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/midnightwonder.jpg?");

/***/ }),

/***/ "./src/assets/mwLogoFix1.jpg":
/*!***********************************!*\
  !*** ./src/assets/mwLogoFix1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8d215402a2a53207b5dd.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwLogoFix1.jpg?");

/***/ }),

/***/ "./src/assets/mwLogoFix1.png":
/*!***********************************!*\
  !*** ./src/assets/mwLogoFix1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c36244558b89143112e2.png\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwLogoFix1.png?");

/***/ }),

/***/ "./src/assets/mwf2020.png":
/*!********************************!*\
  !*** ./src/assets/mwf2020.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a13bf4462d2eb26bdc87.png\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwf2020.png?");

/***/ }),

/***/ "./src/assets/mwf2021.png":
/*!********************************!*\
  !*** ./src/assets/mwf2021.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5ff629c4247db737b52d.png\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/mwf2021.png?");

/***/ }),

/***/ "./src/assets/summer_rage.jpg":
/*!************************************!*\
  !*** ./src/assets/summer_rage.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bc14b536af243fee8113.jpg\";\n\n//# sourceURL=webpack://midnight-test/./src/assets/summer_rage.jpg?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@pmmmwh/react-refresh-webpack-plugin":
/*!*******************************************************!*\
  !*** external "@pmmmwh/react-refresh-webpack-plugin" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@pmmmwh/react-refresh-webpack-plugin");

/***/ }),

/***/ "ansi-html":
/*!****************************!*\
  !*** external "ansi-html" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("ansi-html");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "error-stack-parser":
/*!*************************************!*\
  !*** external "error-stack-parser" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("error-stack-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-entities");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "native-url":
/*!*****************************!*\
  !*** external "native-url" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("native-url");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");

/***/ }),

/***/ "normalize-url":
/*!********************************!*\
  !*** external "normalize-url" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("normalize-url");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-refresh/babel":
/*!**************************************!*\
  !*** external "react-refresh/babel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-refresh/babel");

/***/ }),

/***/ "react-refresh/runtime":
/*!****************************************!*\
  !*** external "react-refresh/runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-refresh/runtime");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("55a6d2edd1e102573ba8")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				__webpack_require__.$Refresh$.init();
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			init: () => {
/******/ 				__webpack_require__.$Refresh$.cleanup = () => (undefined);
/******/ 				__webpack_require__.$Refresh$.register = () => (undefined);
/******/ 				__webpack_require__.$Refresh$.runtime = {};
/******/ 				__webpack_require__.$Refresh$.signature = () => ((type) => (type));
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				const prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 				const prevReg = __webpack_require__.$Refresh$.register;
/******/ 				const prevSig = __webpack_require__.$Refresh$.signature;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					const typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = __webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.register = prevReg;
/******/ 						__webpack_require__.$Refresh$.signature = prevSig;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/express.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;