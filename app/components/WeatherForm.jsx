var React= require('react');

var WeatherForm= React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var location= this.refs.location.value; //location from ref is set as location variable

        if(location.length>0){
            this.refs.location.value=''; //for empty the location
            this.props.onSearch(location);
        }
    },
    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Pobierz pogodę</button>
                </form>
            </div>
        )
    }
});

module.exports=WeatherForm;