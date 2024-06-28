import { elasticClient } from '../config/connection';
import { ISearchParams } from './search/interface';

// Environment variables for Elasticsearch configuration.
const ELAST_INDEX = process.env.ELAST_INDEX
const ELAST_RESULT = Number(process.env.ELAST_RESULT)
const ELAST_AUTO_COMPLETE_KEY = process.env.ELAST_AUTO_COMPLETE_KEY
const ELAST_AUTO_COMPLETE_RESULT = process.env.ELAST_AUTO_COMPLETE_RESULT.split(",")


/**
 * Executes a search query on Elasticsearch and returns the results.
 *
 * @param {ISearchParams} info - The search parameters for the query.
 * @returns {Promise<any[]>} - A promise that resolves to an array of search results.
 */
export const queryElastic = async (info: ISearchParams) => {
    const {
        index,
        query,
        from,
        size } = info

    const results = await elasticClient.search({
        index,
        query,
        from,
        size
    })

    // Maps the search hits to return only the source data.
    return results.hits.hits.map(e => e._source)
}


/**
 * Executes an autocomplete search query on Elasticsearch and returns the suggestions.
 *
 * @param {ISearchParams} info - The search parameters for the autocomplete query.
 * @returns {Promise<any[]>} - A promise that resolves to an array of autocomplete suggestions.
 */
export const autoCompleteElastic = async (info: ISearchParams) => {
    const {
        index,
        query,
        from,
        size } = info

    const fields = ELAST_AUTO_COMPLETE_RESULT
    const _source = false

    const results = await elasticClient.search({
        index,
        query,
        fields,
        _source,
        from,
        size
    })

    // Maps the search hits to return only the specified fields.
    return results.hits.hits.map(e => e["fields"])
}


/**
 * Forms the Elasticsearch query object based on the provided information.
 *
 * @param {any} info - The information containing search terms and pagination details.
 * @returns {ISearchParams} - The formed search parameters for Elasticsearch queries.
 */
export const formElasticQueryObject = (info: any): ISearchParams => {

    let page = 0
    if (info.page) page = Number(info.page) ?? 0

    const match: any = {}
    const query: any = {}
    if (info.searchterm) {
        match[ELAST_AUTO_COMPLETE_KEY] = info.searchterm
        query["match"] = match
    } else {
        query["match_all"] = {}
    }

    const size = info.limit ? Number(info.limit) : ELAST_RESULT
    return {
        index: ELAST_INDEX,
        query,
        from: page * size,
        size
    }
}
