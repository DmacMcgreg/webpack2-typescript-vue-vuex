import promise from './Promise';
/**
 * 整站API模块
 */
const BaseApi = {
    /**
     * 短信下发
     */
    query_list:(opts)=>{
        /*return promise.resource('post', 'cwgjdis_smsSendService',
            {
            telephone:opts.telephone,
            type:opts.type,
            app_type:opts.app_type
        });*/
    }
}

export default BaseApi;