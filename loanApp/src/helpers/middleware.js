import Users from '../user/user_model' 
const { handleResponse, decodeToken, rolesAcceptable } = require('./util')

class Authcheck {
    // Any user with valid token would pass here
    static checkAuthstatus(req, res, next){
        const bearerHeader = req.header("Authorization");
        if(typeof bearerHeader !== "undefined") {
            const bearer = bearerHeader.split("");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            const user = decodeToken(bearerToken);
            req.user = user;
            return next();
        }
        return handleResponse(res, 403, "Unauthorized access, please login");
    }
   
//  Only users with password that have been reset will pass this check
   static async authorize(req, res, next) {
       const bearerHeader = req.header("Authorization");
       if(typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split("");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        const user = decodeToken(bearerToken);
         let authorizedUser = await Users.findById(user._id);
         if(user.passwordResetRequired && !authorizedUser.passwordResetRequired) {
             return handleResponse(
                 res,
                 401,
                 "You requested to reset password or have already changed password. please re-login to continue"
             );
         }
         if(authorizedUser.passwordResetRequired) {
             return handleResponse(
                res,
                401,
                "You need to reset your password to continue" 
             );
         }
         req.user = user;
         return next();
       }
       return handleResponse(res, 403, "Unauthorized access, please login")
      
   }

//    Authorize only admin

static async authorizedAdmin (req, res, next) {
    const bearerHeader = req.header("Authorization");
    if(typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split("");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        const user = decodeToken(bearerToken);
        let authorizedUser = await Users.findById(user._id);
        if(user.role !== "admin") {
            return handleResponse (
                res,
                401,
                "You do not have permission to access this route" 
            );
        }
        if(user.passwordResetRequired && !authorizedUser.passwordResetRequired){
            return handleResponse(
                res,
                401,
                "You required to reset password or have already changed password.please re-login to continue " 
            )
        }
        if(authorizedUser.passwordResetRequired) {
            return handleResponse(
                res,
                401,
                "You need to reset your password to continue" 
             );
        }
        req.user = user;
        return next();
      }
      return handleResponse(res, 403, "Unauthorized access, please login")     
}


static checkToken(req, res, next){
    const decodedToken = decodeToken(req.token);
    if(!decodedToken) {
        return handleResponse(res, 401, "Token expire", "please re-login");
    }
    return next()
}

static authorizeRole(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if(typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split("");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        const user = decodeToken(bearerToken);
        if(rolesAcceptable(req.Url, user.role)){
            return next() 
        }
        return handleResponse(res, 403, "invalid credentials");
}
return handleResponse(res, 403, "You are not authorized")

}
    
}
export default Authcheck;




