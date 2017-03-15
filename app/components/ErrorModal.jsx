var React = require('react');

var ErrorModal= React.createClass({
    componentDidMount: function(){
      var modal= new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    render: function(){
        return(
            <div id="modal-error" className="reveal tiny text-center" data-reveal>
                <h4>Some title</h4>
                <p>
                    Our error message!
                </p>
                <button className="button hollow" data-close>
                    OK
                </button>
            </div>

        )
    }
});

module.exports= ErrorModal;