import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../../config/error';
import { ISearchParams } from './interface';
import SearchService from './service';
import { formElasticQueryObject } from '../utils';


/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
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
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
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