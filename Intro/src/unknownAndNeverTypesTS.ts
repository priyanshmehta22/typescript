let user: unknown;
let username:string;

user=5;
user='pri';
// username=user //error

if(typeof user==='string') username=user;   //no error

//unknown is better than any, as it is more restrictive than any


function throwError(message:string, code:number){
    throw {message:message,errorcode:code};
}
throwError('an error occured',500);    //this function is a never type as it never returns
