const StartFunc = () => {
    var $table = $('#table');   
    $table.attr("data-search", "true");
    $table.attr("data-searchable", "true");
    $table.attr("data-show-footer", "true");
    $table.attr("data-toggle","table");
    $table.attr("data-show-columns", "true");
    $table.attr("data-show-columns-toggle-all", "true");
    $table.attr("data-click-to-select", "true");
    $table.attr("data-filter-control", "true");
    $table.attr("data-show-export", "true");
    $table.attr("data-detail-formatter", "detailFormatter");
    // $table.attr("data-id-field", "From");
    // $table.attr("data-id-field", "Message");
    $table.attr("data-show-toggle", "true");
    
    $table.attr("data-buttons-class","primary")
    $table.attr("data-show-refresh","true")
};

export { StartFunc };
