var React = require('react');

// var About = React.createClass({
//   render: function () {
//
//   }
// });

//refactoring using props arrow function except of rendering



var About =  (props) => { //function arrow
    return (
        <div>
         <h3>Informacje</h3>
            <p>Projekt zaliczeniowy Programowanie Aplikacji Webowych 2015/2016</p>
        </div>
    )
};



module.exports = About;
