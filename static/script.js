let url = document.getElementById('url');

let get_unique_id = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

$(document).ready(function () {
    $("#submit").click(function () {
        $.post("/",
        {
            url : get_unique_id()
        },
        function (data, status) {
            console.log(data);
        });
    });
});
