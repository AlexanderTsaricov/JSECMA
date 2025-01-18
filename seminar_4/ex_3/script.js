function loadData(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                console.log(`Error ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((erorr) => {
            console.error(`Error`, error);
        });
}

loadData("https://jsonplaceholder.typicode.com/posts/1");
