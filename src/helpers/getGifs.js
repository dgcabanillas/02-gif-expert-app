export const getGifs = async ( category ) => {

    const searchWord = category.replace(' ', '+');
    const url = `https://api.giphy.com/v1/gifs/search?q=${ searchWord }&limit=8&api_key=GYkvfSZZoc6vHBuNksIIP0QrCptYdU41`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;

}