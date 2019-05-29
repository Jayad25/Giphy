document.addEventListener('DOMContentLoaded', () => {
    let auto = ["about", "above"]
    function autoco(event) {
        // let val = document.getElementById("search").value
        console.log(event)
    }

    document.getElementById("search").onchange =((event) => autoco(event))
    document.getElementById("go").onclick = function() {
        
      q = document.getElementById("search").value;
      request = new XMLHttpRequest();
      console.log(q);
      request.open(
        "GET",
        "http://api.giphy.com/v1/gifs/search?q=" +
          q +
          "&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1",
        true
      );

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          data = JSON.parse(request.responseText).data[0].images.original
            .url;
          console.log(data);
          document.getElementById("giphyme").innerHTML =
            '<center><img src = "' +
            data +
            '"  title="GIF via Giphy"></center>';
        } else {
          
        }
      };

      request.onerror = function() {
        console.log("connection error");
      };

      request.send();
    };
    // document.getElementById("go").onclick = display()
});

