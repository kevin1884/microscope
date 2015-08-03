/**
 * Created by xzhang on 7/31/15.
 */

Template.postsList.helpers({
   posts: function() {
       return Posts.find({}, {sort: {submitted: -1}});
   }
});