import { DeleteFunc as DeleteFuncDal } from '../../dals/DeleteFuncs/EntryFile.js';
import {DeleteFunc as DeleteFuncDalsForMongoDB} from '../../dalsForMongoDb/DeleteFuncs/EntryFile.js';
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let DeleteFunc = async ({ inId }) => {

    if (ConfigJson.isMongoDb) {
        return await DeleteFuncDalsForMongoDB({ inId });
    };
    return await DeleteFuncDal({ inId });
};

export { DeleteFunc };