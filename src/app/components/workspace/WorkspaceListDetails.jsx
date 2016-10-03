'use strict';

var React = require('react');
var WorkspaceItem = require('./WorkspaceItem.jsx');

module.exports = React.createClass({
        
    open: function () {
        var child = this.refs["child" + this.props.selectionIndex];
        if (child) child.open();
    },
    render: function() {

       var indexer = this.props.indexer;
       var self = this;

       return (

           <div className="workspace">
               <div className="row workspace-title" >
                    <img className="col-md-2 thumbnail" src={this.props.data.thumbnail} />
                    <h4 className="col-md-10">{this.props.data.name}</h4>
               </div>

               <ul className="workitem-list">
                   {
                   self.props.data.spaces.map(function (space) {

                       return <WorkspaceItem key={ space.id } 
                                             ref={ "child" + indexer }
                                             data={space} 
                                             indexer = { indexer++ }
                                             refLinker = {self.props.refLinker}
                                             selectionIndex={self.props.selectionIndex}>
                              </WorkspaceItem>

                   })}

               </ul>
           </div>

		)
   },
  

});
