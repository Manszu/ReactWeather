var React = require('react');
var {Link}= require('react-router');

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
            <h1 className="text-center">Przykłady</h1>
            <p>Tu jest parę przykładów do wypróbowania</p>
            <ol>
                <li>
                    <Link to="'/?location=Kraków">Kraków, PL</Link>
                </li>
                <li>
                    <Link to="/?location=Radom">Radom, PL</Link>
                </li>
            </ol>
        </div>

    )
};

module.exports = Examples;
