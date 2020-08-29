let urls = [1, 2, 3, 4, 5, 6, 7, 8]
urls.forEach(url => {
    loadData(url)
});

var loadData = (url) => {
    $.ajax({
        type: "GET",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            console.log("All data is loaded");
        }
    });

    return;
}