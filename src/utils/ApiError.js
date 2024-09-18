class ApiError extends Error{
    constructor(
        ststusCode,
        message="someting went Wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.ststusCode=ststusCode
        this.data=null
        this.message=message
        this.errors=errors

        if(stack){
            this.stack=stack

        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}