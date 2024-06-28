import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../../config/error';
import { ISearchParams } from './interface';
import SearchService from './service';
import { formElasticQueryObject } from '../utils';


/**
 * Retrieves all data based on the search parameters provided in the request body.
 * @export
 * @param {Request} req - The request object containing the search parameters.
 * @param {Response} res - The response object used to send back the retrieved data.
 * @param {NextFunction} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves when the data has been sent.
 */
export async function getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const finalQuery: ISearchParams = formElasticQueryObject(req.body)

        const data = await SearchService.listElasticData(finalQuery)
        res.status(200).json(data);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * Provides autocomplete suggestions based on the partial information provided in the request body.
 * 
 * @export
 * @param {Request} req - The request object containing the partial search information.
 * @param {Response} res - The response object used to send back the autocomplete suggestions.
 * @param {NextFunction} next - The next middleware function in the stack.
 * @returns {Promise<void>} - A promise that resolves when the suggestions have been sent.
 */
export async function autoComplete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const info = { ...req.body }
        const finalQuery: ISearchParams = formElasticQueryObject(info)

        const data = await SearchService.autocompleteElasticData(finalQuery)
        res.status(201).json(data);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}