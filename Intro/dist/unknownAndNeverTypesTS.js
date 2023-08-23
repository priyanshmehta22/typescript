"use strict";
let user;
let username;
user = 5;
user = 'pri';
if (typeof user === 'string')
    username = user;
function throwError(message, code) {
    throw { message: message, errorcode: code };
}
throwError('an error occured', 500);
