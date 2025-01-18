async function saveUserData(user) {
    try {
        const response = await fetch("https://api.example.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Error saving data");
        } else {
            console.log("Saving sussful!");
        }
    } catch (error) {
        return Promise.reject(error.message);
    }
}

const user = {
    name: "Misha",
    email: "gus@gmail.com",
    telephone: "89586345281",
};
saveUserData(user);
