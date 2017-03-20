var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Komponent Nav</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = React.createClass({


    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.search.value;
        alert(location);

    },

    render: function () {
        return (
            <div className="top-bar nav">
                <div className="top-bar-left nav">
                    <ul className="menu nav">
                        <li className="menu-text nav">
                            PAW 2015/2016 Krzysztof Mansz "Pogoda w Twoim mieście"
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Pobierz
                                Pogodę</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>Informacje</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>Przykłady</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Szukaj pogodę w swoim mieście" ref="search"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Pobierz pogodę"/>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
        );
    }

});

module.exports = Nav;


