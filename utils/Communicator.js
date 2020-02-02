/**
 * @file 
 * Communication utility
 *
 * This class handles HTTP communications with external sites
 */

import Utils from './Utils'
import fetch from 'isomorphic-unfetch'

class Communicator{
    static async requestJson(url,options=null) {
        let requestObject;
        if(!Utils.emptyObject(options)){
            requestObject = await fetch(url,options);
        } else {
            requestObject = await fetch(url);
        }
        const data = await requestObject.json();
        if(data){
            return data;
        } else {
            return null;
        }
    }
}

export default Communicator;
