export class Result{

    appStatusCode:string;
    message:string;

    constructor(public json?:string){ 
        if(json == null){return;}

        var error = JSON.parse(json);

        if(error == null){
            this.appStatusCode = "1.0.1"; 
            this.message = "Uh oh! Something happened. Please try again.";
            return;
        }
        this.appStatusCode = error.result.code;
        this.message = error.result.message;
    }
}