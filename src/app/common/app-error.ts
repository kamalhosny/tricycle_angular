export class AppError{
    
    appStatusCode:string;
    errorMessage:string;

    constructor(public json?:string){ 
        if(json === null){return;}

        var error = JSON.parse(json);

        if(error == null){
            this.appStatusCode = "1.0.1"; 
            this.errorMessage = "Uh oh! Something happened. Please try again.";
            return;
        }

        if(error .result == null){
            this.appStatusCode = "1.0.1"; 
            this.errorMessage = "Uh oh! Something happened. Please try again."; 
            return;
        }

        this.appStatusCode = error.result.code;
        this.errorMessage = error.result.message;
    }
}