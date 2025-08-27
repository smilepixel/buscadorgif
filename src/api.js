export const api = async (limit=3 ,busqueda,offset) => {

    const key = "qiNWsEiO1MxNo9kscZYsHZ6XcEuo11k0"
const url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${busqueda}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips;`



try {

const respuesta = await fetch(url);

const json = await respuesta.json();
const data = json.data;

// console.log(data[0].images.original.url);
// console.log(data[0].title);
// console.log(data[0].id)

const gif = data.map(gif =>({
    id:gif.id,
    title:gif.title,
    url: gif.images.original.url,
}))

// console.log(gif)
return gif;

} catch (error) {
    console.log("error al realizar la busqueda", error)
}
}