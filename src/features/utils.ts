import { elasticClient } from '../config/connection';
import { ISearchParams } from './search/interface';

const ELAST_INDEX = process.env.ELAST_INDEX
const ELAST_RESULT = Number(process.env.ELAST_RESULT)
const ELAST_AUTO_COMPLETE_KEY = process.env.ELAST_AUTO_COMPLETE_KEY
const ELAST_AUTO_COMPLETE_RESULT = process.env.ELAST_AUTO_COMPLETE_RESULT.split(",")


/**
 * 
 * @param info ISearchParams
 * @returns 
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

    return results.hits.hits.map(e => e._source)
}


/**
 * 
 * @param info ISearchParams
 * @returns 
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

    return results.hits.hits.map(e => e["fields"])
}


/**
 * 
 * @param info 
 * @returns 
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
