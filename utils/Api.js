/**
 * @file 
 * API communication handler
 *
 * This class handles the communication needs of the site
 * The main responsability is to understand and send parameters correctly to the API
 */

import getConfig from 'next/config'
import Utils from './Utils'
import Com from './Communicator'

class ApiClass {
    constructor(url) {
        this.url = url;
    }

    _get = async (urlPath, filters = null, options = null) => {
        let uri = this.url + urlPath + "/";
        if (!Utils.emptyObject(filters)) {
            uri += "?" + Utils.objectToQueryParams(filters);
        }
        return await Com.requestJson(uri, options);
    }

    _send = async (urlPath, method, object) => {
        let uri = this.url + urlPath;
        const options = {
            method: method,
            body: JSON.stringify(object),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        return await Com.requestJson(uri, options);
    }

    _delete = async (urlPath, id) => {
        let uri = this.url + urlPath + "/" + id;
        const options = {
            method: "DELETE"
        }
        return await Com.requestJson(uri, options);
    }

    getTodos = async (filters = null) => {
        return await this._get("todos", filters);
    };

    getUsers = async (filters = null) => {
        return await this._get("users", filters);
    };

    addTodo = async (object) => {
        return await this._send("todos", "POST", object);
    };

    updateTodo = async (id, object) => {
        if (Utils.validIdentificator(id)) {
            return await this._send("todos/" + id, "PUT", object);
        } else {
            return null;
        }
    };

    updatePartialTodo = async (id, object) => {
        if (Utils.validIdentificator(id)) {
            return await this._send("todos/" + id, "PATCH", object);
        } else {
            return null;
        }
    };

    deleteTodo = async (id) => {
        if (Utils.validIdentificator(id)) {
            return await this._delete("todos", id);
        } else {
            return null;
        }
    };
}

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig
const Api = new ApiClass(API_URL);
export default Api;
