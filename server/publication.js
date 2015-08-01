/**
 * Created by xzhang on 7/31/15.
 */

Meteor.publish('posts', function() {
   return Posts.find();
});