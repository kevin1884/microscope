/**
 * Created by xzhang on 8/2/15.
 */

Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};