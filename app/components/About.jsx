var React = require('react');

// var About = React.createClass({
//   render: function () {
//
//   }
// });

//refactoring using props arrow function except of rendering

var About =  (props) => { //function arrow
    return (
        <h3>About Component</h3>
    )
};



module.exports = About;
