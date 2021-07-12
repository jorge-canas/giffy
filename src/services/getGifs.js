const apiKey = 'qaCmtjmJ8FjjpKtlMkm2Lq5ktSR7rOko'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    }
    return []
  }

export default function getGifs({ keyword = 'rick', limit = 5, offset = 0 } = {}) {
    const GIPHY_SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    console.log('getGifs')

    return fetch(GIPHY_SEARCH_ENDPOINT)
        .then(rawResponse => rawResponse.json())
        .then(fromApiResponseToGifs)
}
