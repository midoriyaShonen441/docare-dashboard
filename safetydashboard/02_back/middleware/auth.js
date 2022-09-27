const jwt =  require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const getToken = req.headers['access-token']
    // console.log("getToken ==> ",getToken);
    if(getToken === undefined || getToken === NaN || getToken === null){
        const payload = {
            error: true,
            text: "unauthorized"
        }
        res.send(payload);
    }else{
        try{
            const decode = jwt.verify(getToken, process.env.TOKEN_KEY);
            if(decode.iat >= decode.exp){
                const payload = {
                    error: true,
                    text: "unauthorized"
                }
                res.send(payload);
            }else{
                const replyText = {
                    decode: decode,
                    token: getToken
                }
                // console.log("verifyToken ==> ", replyText);
                req.authData =  replyText
                next();
            }
        }catch(err){
            console.log(`error in auth: ${err}`);
            const payload = {
                error: true,
                text: "expired token"
            }
            res.send(payload);
        }
    }
}

module.exports = verifyToken;