import fs from 'fs';
import ConfigJson from '../../../Config.json' assert {type: 'json'};

let StartFunc = async ({ inTablesCollection, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    if (ConfigJson.isSequelize) {
        LocalfileNameJsonData.sequelizeConfig.tableAndColumns = inTablesCollection;
        LocalfileNameJsonData.sequelizeConfig.DataPk = ConfigJson.ToDataDetails.DataPk;
        LocalfileNameJsonData.sequelizeConfig.DbName = ConfigJson.ToDataDetails.DbName;
        LocalfileNameJsonData.isSequelize = ConfigJson.isSequelize;
    } else {
        LocalfileNameJsonData.isMongoDb = ConfigJson.isMongoDb;
    };

    LocalfileNameJsonData.jsonConfig.tableAndColumns = inTablesCollection;
    LocalfileNameJsonData.jsonConfig.DataPk = ConfigJson.ToDataDetails.DataPk;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };