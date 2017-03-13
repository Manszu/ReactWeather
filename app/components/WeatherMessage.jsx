var React= require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var{temp,location}=this.props;
//         return (
//             <h3>Aktualnie mamy {temp} Stopni Celsjusza w {location}</h3>
//         )
//     }
// });



var WeatherMessage = ({temp,location}) => { //{temp,location} except of props argument
  //  var{temp, location}= props;

    return (
    <h3 className="text-center">Aktualnie mamy {temp} Stopni Celsjusza w {location}</h3>
)

};

module.exports = WeatherMessage;