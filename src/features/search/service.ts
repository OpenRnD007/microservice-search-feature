import { autoCompleteElastic, queryElastic } from "../utils";
import { ISearchParams, ISearchService } from "./interface";

/**
 * @export
 * @implements {ISearchService}
 */
const SearchService: ISearchService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof SearchService
     */
    async listElasticData(info: ISearchParams): Promise<any[]> {
        try {
            const returnData: any[] = await queryElastic(info)
            return returnData
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof SearchService
     */
    async autocompleteElasticData(info: ISearchParams): Promise<any[]> {
        try {
            const returnData: any[] = await autoCompleteElastic(info)
            return returnData
        } catch (error) {
            throw new Error(error.message);
        }
    },
}

export default SearchService;