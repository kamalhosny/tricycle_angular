import { AppError } from './app-error';

export class NotFoundError extends AppError{
    errorMessage:string = "Uh oh! Something happened. Please try again.";
}