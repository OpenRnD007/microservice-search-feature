import * as http from 'http';

/**
 * Represents an HTTP error with a status code and message.
 * This custom error class extends the built-in JavaScript Error class.
 * @export
 * @class HttpError
 * @extends {Error}
 */
export class HttpError extends Error {
    /**
     * The HTTP status code associated with the error.
     */
    status: number;

    /**
     * The error message providing details about the error.
     */
    message: string;

    /**
     * The name of the error class.
     */
    name: 'HttpError';

    /**
     * Creates an instance of HttpError.
     * @param {number} [status=500] - The HTTP status code for the error. Defaults to 500 if not specified.
     * @param {string} [message] - The error message. Defaults to a generic message corresponding to the status code.
     * @memberof HttpError
     */
    constructor(status ? : number, message ? : string) {
        super(message);

        // Captures the stack trace to provide more debug information.
        Error.captureStackTrace(this, this.constructor);

        // Assigns the status code, defaulting to 500 (Internal Server Error) if not provided.
        this.status = status || 500;

        // Sets the name of the error class.
        this.name = this.name || 'HttpError';

        // Assigns the error message, defaulting to a standard HTTP message corresponding to the status code.
        this.message = message || http.STATUS_CODES[this.status] || 'Error';
    }
}

export default HttpError;
