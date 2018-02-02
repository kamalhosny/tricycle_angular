import { AppError } from './app-error';

export class UnknownError extends AppError{
    errorMessage:string = "Uh oh! Something happened. Please try again.";
}