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
         <h1 className="text-center">Informacje</h1>
            <p >Projekt zaliczeniowy Programowanie Aplikacji Webowych 2015/2016. Projekt został stworzony w oparciu o Framework React. Wykorzystano
            język ECMAScript 6. Do stworzenia styli wykorzystano Foundation. API pogodowe wykorzystane w projekcie to api wystawione
            przez OPEN WEATHER MAP. </p>
            <p>
                Tu są narzedzia których używalem:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> Framework JavaScript którego używałem to React.
                </li>
                <li>
                    <a href="http://openweathermap.org">API Open Weather Map</a> API Open Weather do szukania pogody po nazwie miasta. API to
                    udostepnia również więcej przydatnych parametrów pogodowych, które można wykorzystać do rozbudowy informacji na stronie
                    takich jak np. wilgotność.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/sites/docs/"> Foundation do styli</a> Do styli użyłem responsywnego frameworka Foundation.
                </li>
            </ul>
        </div>
    )
};



module.exports = About;
