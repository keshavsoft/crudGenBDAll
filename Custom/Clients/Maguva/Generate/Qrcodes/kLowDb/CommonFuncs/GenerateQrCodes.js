import { StartFunc as StartFuncVouchers } from './FromVouchers/EntryFile.js';
import { StartFunc as StartFuncPurchaseItems } from './FromPurchase/EntryFile.js';
import { StartFunc as StartFuncwriteFileFromModal } from './FromGenerate/EntryFile.js';
import { StartFunc as StartFuncCheck } from "./FromGenerate/Checks/CheckQrCodes.js";

let StartFunc = async ({ inId }) => {
    let LocalId = inId;
    let LocalReturnData = { KTF: false, KReason: "" };
    let LocalCheck = StartFuncCheck({ inId: LocalId });

    if (LocalCheck.KTF === false) {
        return LocalReturnData;
    };

    const localVoucherFilterData = await StartFuncVouchers({ inKey: "pk", inValue: LocalId });
    let LocalVoucherData = localVoucherFilterData.JsonData;

    if (localVoucherFilterData.KTF === false) {
        return LocalReturnData;
    };
    let LocalvouchepkData = LocalVoucherData[0];

    const localPurchaseItems = await StartFuncPurchaseItems({ inKey: "FK", inValue: LocalId });
    let LocalPurchaseItemsData = localPurchaseItems.JsonData;

    if (LocalPurchaseItemsData.KTF === false) {
        return LocalReturnData;
    };

    LocalPurchaseItemsData.forEach((element, index) => {
        let LocalIndex = index + 1
        LocalForEachFunc({ inVoucherData: LocalvouchepkData, itemData: element, index: LocalIndex });

    });
    LocalReturnData.KTF = true;
    return LocalReturnData;
};

let LocalForEachFunc = ({ inVoucherData, itemData, index }) => {
    let LocalQty = itemData.Qty;
    for (let i = 0; i < itemData.Qty; i++) {

        let LocalSendData = {};
        LocalSendData.CostPrice = itemData.UnitRate;
        LocalSendData.ProductName = itemData.ItemName;
        LocalSendData.ProductAliasName = "";
        LocalSendData.SalePrice = itemData.MRP;
        LocalSendData.PercentageValueAddition = itemData.PercentageValueAddition;
        LocalSendData.UserDescription = `${inVoucherData.AliasName}-${inVoucherData.pk}-${index}-${LocalQty}`;
        LocalSendData.InventorySerial = index;
        LocalSendData.PurchasePk = inVoucherData.pk;
        LocalSendData.SupplierName = inVoucherData.SupplierName;
        LocalSendData.BillNumber = inVoucherData.BillNumber;

        StartFuncwriteFileFromModal({ inDataToInsert: LocalSendData })

    };
};

export { StartFunc };
