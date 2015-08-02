/**
 * Created by xzhang on 7/31/15.
 */

Posts = new Mongo.Collection('posts');

Posts.allow({
   insert: function(userId, doc) {
       return !! userId;
   }
});