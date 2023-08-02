const apiUrl:string = "https://jsonplaceholder.typicode.com";

const getTodos = async () => {
    try {
        const res = await fetch(
            `${apiUrl}/todos`,
            {
                method: 'GET',
                headers: {
                    // 'X-RapidAPI-Key': 'your-rapidapi-key',
                    // 'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                },
            }
        );
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};