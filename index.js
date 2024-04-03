function submitData(name, email) {
    let userData = {
        name: name,
        email: email
    };

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    return fetch('http://localhost:3000/users', config)
        .then(response => response.json())
        .then(data => {
            const newId = data.id;
            document.body.innerHTML += `<p>New ID: ${newId}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        });
}



