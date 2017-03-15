var React = require('react');
var WeatherForm= require('WeatherForm');
var WeatherMessage= require('WeatherMessage');
var openWeatherMap= require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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

    //debugger;

    this.setState({
        isLoading: true,
        errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
    }, function(e){
      that.setState({
          isLoading: false,
          errorMessage: e.message
      });


    });
   // alert(location);
  //   this.setState({
  //     location: location, //location equals to location parameter
  //       temp:23
  //   })
  //

      },
  render: function () {
    var {isLoading, temp, location ,errorMessage}= this.state; //the variables exists in the this.state object

     function renderMessage(){
       if (isLoading){
        return <h3 className="text-center">Pobieranie pogody...</h3>;
       } else if(temp && location){
         return <WeatherMessage temp={temp} location={location}/>;
       }

     }

     function renderError(){
        if(typeof errorMessage === 'string'){
            return(
                <ErrorModal/>
            )
        }
     }
    return (
        <div>
      <h1 className="text-center">Pobierz pogodę</h1>
        <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}
        </div>
    )
  }
});

module.exports = Weather;
