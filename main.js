$("#send").click(function () {
    $.ajax({
        url: "http://localhost:3001/hostname",
        type: "GET",
        crossDomain: true,
        headers: {
            "Authorization": "Bearer " + config.token, 
          },
        success: function (data, status) {
            console.log(data)
            // $("#container").text(JSON.stringify(data.form))
    }
    });
});
