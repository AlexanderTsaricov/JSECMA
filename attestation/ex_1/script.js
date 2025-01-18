function getUserFromArray(users, id) {
    return users.find((element) => element.id == id) || null;
}

async function getUserData(id) {
    const controller = new AbortController();
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!responce.ok) {
        console.log(`Error: ${responce.status}`);
    }
    console.log(responce);
    const data = await responce.json();
    const user = getUserFromArray(data, id);
    if (user != null) {
        return user;
    } else {
        controller.abort();
        return Promise.reject("User don`t find!");
    }
}
getUserData(565)
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        2;
        console.error(error);
    });
getUserData(1)
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        2;
        console.error(error);
    });
