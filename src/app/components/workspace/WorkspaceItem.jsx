'use strict';

var React = require('react');

module.exports = React.createClass({

   render: function() {

       var index = this.props.indexer,
           selectIndex = this.props.selectionIndex;

       if (this.props.selectionIndex === this.props.indexer) {
           this.props.refLinker(this._link);
       }

       return (
           <li 
               className={ this.props.selectionIndex === this.props.indexer ? 'highlighter' : '' }>
               <a href={ this.props.data.url} target="_blank" 
                  ref={(link) => { this._link = link; }}>
                  <span>{this.props.data.name}</span>
               </a>
           </li>
		)    
   }
});
