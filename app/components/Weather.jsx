var React = require('react');
var WeatherForm= require('WeatherForm');
var WeatherMessage= require('WeatherMessage');
var openWeatherMap= require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      // location: 'Miami',
      //   temp:38
        isLoading:false
    }
  },
  handleSearch: function(location){
    var that= this;

    debugger;

    this.setState({isLoading:true});

    openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
    }, function(errorMessage){
      that.setState({isLoading: false});
        alert(errorMessage);

    });
   // alert(location);
  //   this.setState({
  //     location: location, //location equals to location parameter
  //       temp:23
  //   })
  //

      },
  render: function () {
    var {isLoading, temp, location}= this.state; //the variables exists in the this.state object

     function renderMessage(){
       if (isLoading){
        return <h3>Pobieranie pogody...</h3>;
       } else if(temp && location){
         return <WeatherMessage temp={temp} location={location}/>;
       }

     }
    return (
        <div>
      <h3>Komponent Pogody</h3>
        <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
        </div>
    )
  }
});

module.exports = Weather;
