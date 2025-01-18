function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (event) {
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

loadData("https://jsonplaceholder.typicode.com/posts/1");
