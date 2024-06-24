//import { IClaimsModel } from './model';

/**
 * @export
 * @interface ISearchService
 */
export interface ISearchService {

    /**
     * 
     * @param query 
     * @param from 
     * @param size 
     */
    listElasticData(info: ISearchParams): Promise<any[]>;

    /**
     * 
     * @param query 
     * @param from 
     * @param size 
     */
    autocompleteElasticData(info: ISearchParams): Promise<any[]>;
}

export interface ISearchParams {
    index: string,
    query: any,
    from: number,
    size: number
}