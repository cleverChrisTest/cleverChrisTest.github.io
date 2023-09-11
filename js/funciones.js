export const fecthUrl = (url, action) => {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(url, json);
            action(json);
        })
        .catch(err => {
            console.log(err)
        });
};