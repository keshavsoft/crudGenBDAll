let StartFunc = (inData) => {
  var $table = $("#table");
  inData.date = new Date();
  $table.bootstrapTable("insertRow", {
    index: 0,
    row: {
      id: 1,
      From: inData.fromId,
      Message: inData.Message,
      Date: inData.date,
    },
  });
};

export { StartFunc };
