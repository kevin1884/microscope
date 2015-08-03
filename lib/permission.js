/**
 * Created by xzhang on 8/2/15.
 */

ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}