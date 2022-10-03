const jwt =  require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const getToken = req.headers['access-token']
    // console.log("getToken ==> ",getToken);
    if(getToken === undefined || getToken === NaN || getToken === null){
        const payload = {
            error: true,
            text: "unauthorized please login again."
        }
        res.send(payload);
    }else{
        try{
            const decode = jwt.verify(getToken, process.env.TOKEN_KEY);
            if(decode.iat >= decode.exp){
                const payload = {
                    status: 401,
                    text: "unauthorized please login again."
                }
                res.send(payload);
            }else{
                const replyText = {
                    decode: decode,
                    token: getToken
                }
                // console.log("verifyToken ==> ", replyText);
                // console.log("verifyToken",replyText)
                req.authData =  replyText
                next();
            }
        }catch(err){
            // console.log(`error in auth: ${err}`);
            const payload = {
                status: 401,
                text: "Your token has expired."
            }
            res.send(payload);
        }
    }
}

module.exports = verifyToken;