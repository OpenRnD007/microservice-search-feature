/**
 * Represents the interface for the search service.
 * @export
 * @interface ISearchService
 */
export interface ISearchService {

    /**
     * Lists data from Elasticsearch based on the provided search parameters.
     *
     * @param {ISearchParams} info - The search parameters including index, query, pagination details.
     * @returns {Promise<any[]>} - A promise that resolves to an array of search results.
     */
    listElasticData(info: ISearchParams): Promise<any[]>;

    /**
     * Provides autocomplete suggestions from Elasticsearch based on the provided partial search information.
     *
     * @param {ISearchParams} info - The search parameters including index, query, pagination details.
     * @returns {Promise<any[]>} - A promise that resolves to an array of autocomplete suggestions.
     */
    autocompleteElasticData(info: ISearchParams): Promise<any[]>;
}

export interface ISearchParams {
    index: string,
    query: any,
    from: number,
    size: number
}