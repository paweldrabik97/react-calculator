function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}console.clear();

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "display-container" }, /*#__PURE__*/
      React.createElement("div", { id: "formula-screen" }, this.props.formula), /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("p", null, this.props.value === "" ? "0" : this.props.value))));



  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleNumber",










    e => {
      const clicked = document.getElementById(e.target.id).textContent;
      const current = this.state.newEq ? "" : this.state.currentValue;
      const formulaC = this.state.newEq ? "" : this.state.formula;
      let formula =
      current === "0" ?
      formulaC.slice(0, formulaC.length - 1).concat(clicked) :
      formulaC.concat(clicked);
      let num = "";
      const regex = /[\*\-\+\/]/;

      if (regex.test(current) || current === "0") {
        //console.log(this.state.currentValue === "*");
        num = clicked;
        //console.log(clicked);
      } else {
        num = current.concat(clicked);
        //console.log(clicked);
      }

      if (clicked === ".") {
        if (current === "" || regex.test(current)) {
          num = "0.";
          formula = formulaC.concat("0.");
        } else if (current === "0") {
          num = "0.";
          formula = formulaC.concat(clicked);
        } else if (current.includes(".")) {
          num = current.slice(0, current.length);
          formula = formulaC.slice(0, formulaC.length);
        }
      } else if (clicked === "0") {
        if (current === "" || regex.test(current)) {
          num = "0";
          formula = formulaC.concat("0");
        } else if (current === "0") {
          num = current.slice(0, current.length);
          formula = formulaC.slice(0, formulaC.length);
        }
      }

      this.setState({
        currentValue: num,
        formula: formula });

    });_defineProperty(this, "handleClear",

    e => {
      this.setState({
        currentValue: "",
        formula: "",
        newEq: false });

    });_defineProperty(this, "handleSymbol",

    e => {
      const clicked = document.getElementById(e.target.id).textContent;
      let num = "";

      let formula = this.state.newEq ?
      this.state.currentValue :
      this.state.formula;

      const regexLast = /([\*\-\+\/]){1}$/;
      const regexTwoLast = /([\*\-\+\/]){2}$/;

      console.log(formula);

      if (clicked === "x") {
        if (!regexLast.test(formula)) {
          formula = formula.concat("*");
          //console.log(num);

          num = "*";
        } else if (regexTwoLast.test(formula)) {
          formula = formula.slice(0, formula.length - 2).concat("*");

          num = "*";
        } else {
          formula = formula.slice(0, formula.length - 1).concat("*");
          num = "*";
        }
      } else if (clicked === "-") {
        if (!regexTwoLast.test(formula)) {
          formula = formula.concat(clicked);
          //console.log(num);

          num = clicked;
        }
      } else {
        if (!regexLast.test(formula)) {
          formula = formula.concat(clicked);

          num = clicked;
        } else if (regexTwoLast.test(formula)) {
          formula = formula.slice(0, formula.length - 2).concat(clicked);
          num = clicked;
        } else {
          formula = formula.slice(0, formula.length - 1).concat(clicked);
          num = clicked;
        }
      }

      this.setState({
        currentValue: num,
        formula: formula,
        newEq: false });

    });_defineProperty(this, "handleEquals",

    () => {
      const regexLast = /([\*\-\+\/]){1}$/;
      const regexTwoLast = /([\*\-\+\/]){2}$/;
      const num = !regexLast.test(this.state.formula) ?
      this.state.formula :
      regexTwoLast.test(this.state.formula) ?
      this.state.formula.slice(0, this.state.formula.length - 2) :
      this.state.formula.slice(0, this.state.formula.length - 1);

      const result = eval(num);

      //console.log(result);

      this.setState({
        currentValue: result.toString(),
        formula: num.concat("=" + result),
        newEq: true });

    });this.state = { currentValue: "", formula: "", newEq: false };this.handleNumber = this.handleNumber.bind(this);this.handleClear = this.handleClear.bind(this);this.handleEquals = this.handleEquals.bind(this);}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Display, { value: this.state.currentValue, formula: this.state.formula }), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { className: "big-one", id: "clear", onClick: this.handleClear }, "AC"), /*#__PURE__*/


      React.createElement("button", { id: "divide", onClick: this.handleSymbol }, "/"), /*#__PURE__*/


      React.createElement("button", { id: "multiply", onClick: this.handleSymbol }, "x"), /*#__PURE__*/


      React.createElement("button", { id: "seven", className: "number", onClick: this.handleNumber }, "7"), /*#__PURE__*/


      React.createElement("button", { id: "eight", className: "number", onClick: this.handleNumber }, "8"), /*#__PURE__*/


      React.createElement("button", { id: "nine", className: "number", onClick: this.handleNumber }, "9"), /*#__PURE__*/


      React.createElement("button", { id: "subtract", onClick: this.handleSymbol }, "-"), /*#__PURE__*/


      React.createElement("button", { id: "four", className: "number", onClick: this.handleNumber }, "4"), /*#__PURE__*/


      React.createElement("button", { id: "five", className: "number", onClick: this.handleNumber }, "5"), /*#__PURE__*/


      React.createElement("button", { id: "six", className: "number", onClick: this.handleNumber }, "6"), /*#__PURE__*/


      React.createElement("button", { id: "add", onClick: this.handleSymbol }, "+"), /*#__PURE__*/


      React.createElement("button", { id: "one", className: "number", onClick: this.handleNumber }, "1"), /*#__PURE__*/


      React.createElement("button", { id: "two", className: "number", onClick: this.handleNumber }, "2"), /*#__PURE__*/


      React.createElement("button", { id: "three", className: "number", onClick: this.handleNumber }, "3"), /*#__PURE__*/


      React.createElement("button", {
        className: "big-one number",
        id: "zero",
        onClick: this.handleNumber }, "0"), /*#__PURE__*/



      React.createElement("button", { id: "decimal", className: "number", onClick: this.handleNumber }, "."), /*#__PURE__*/


      React.createElement("button", { id: "equals", className: "big-two", onClick: this.handleEquals }, "="))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("app"));