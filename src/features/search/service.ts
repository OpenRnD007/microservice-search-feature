import { autoCompleteElastic, queryElastic } from "../utils";
import { ISearchParams, ISearchService } from "./interface";

/**
 * SearchService object that implements the ISearchService interface.
 * It provides methods to interact with Elasticsearch for listing data and providing autocomplete suggestions.
 *
 * @export
 * @implements {ISearchService}
 */
const SearchService: ISearchService = {
    /**
     * Lists data from Elasticsearch based on the provided search parameters.
     * Utilizes the queryElastic utility function to perform the search operation.
     *
     * @param {ISearchParams} info - The search parameters including index, query, pagination details.
     * @returns {Promise<any[]>} - A promise that resolves to an array of search results.
     * @memberof SearchService
     */
    async listElasticData(info: ISearchParams): Promise<any[]> {
        try {
            // Performs the search query on Elasticsearch and returns the results.
            const returnData: any[] = await queryElastic(info)
            return returnData
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * Provides autocomplete suggestions from Elasticsearch based on the provided partial search information.
     * Utilizes the autoCompleteElastic utility function to perform the autocomplete operation.
     *
     * @param {ISearchParams} info - The search parameters including index, query, pagination details.
     * @returns {Promise<any[]>} - A promise that resolves to an array of autocomplete suggestions.
     * @memberof SearchService
     */
    async autocompleteElasticData(info: ISearchParams): Promise<any[]> {
        try {
            // Performs the autocomplete query on Elasticsearch and returns the suggestions.
            const returnData: any[] = await autoCompleteElastic(info)
            return returnData
        } catch (error) {
            throw new Error(error.message);
        }
    },
}

export default SearchService;