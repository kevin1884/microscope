/**
 * Created by xzhang on 8/4/15.
 */

Template.errors.helpers({
   errors: function() {
       return Errors.find();
   }
});

Template.errors.onRendered(function () {
    var error = this.data;
    Meteor.setTimeout(function() {
        Errors.remove(this._id);
    }, 3000);
});