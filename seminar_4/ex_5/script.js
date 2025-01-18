function loadData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function (event) {
            if (xhr.status != 200) {
                reject(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                const dataJSON = xhr.responseText;
                const data = JSON.parse(dataJSON);
                const dataSorted = data.sort((a, b) => {
                    return a.username.localeCompare(b.username);
                });
                resolve(dataSorted);
            }
        };
        xhr.onerror = function () {
            reject("Network error");
        };
        xhr.open("GET", url, true);
        xhr.send();
    });
}

async function getUsers() {
    const listUsers = document.querySelector(".users");
    try {
        const dataUsers = await loadData(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (dataUsers && Array.isArray(dataUsers)) {
            let textInList = "";
            dataUsers.forEach((element) => {
                if (element != null) {
                    console.log(element);
                    textInList += `<li>email: ${element.email}, username: ${element.username}</li>`;
                }
            });
            listUsers.innerHTML = "";
            listUsers.innerHTML = textInList;
        } else {
            throw new Error("Data is not in expected format");
        }
    } catch (error) {
        console.log(error);
        listUsers.textContent = "Error loading data.";
    }
}

const btn = document.querySelector(".getUsers");
btn.addEventListener("click", getUsers);
