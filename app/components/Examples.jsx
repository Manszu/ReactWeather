var React = require('react');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

//Instead of create React class you can use arrow function
var Examples = (props) => {

    return (
        <div>
            <h3>Przykłady</h3>
            <p>Witaj na mojej przykładowej stronie</p>
        </div>

    )
};

module.exports = Examples;
