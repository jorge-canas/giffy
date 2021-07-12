import Gif from '../Gif'

export default function ListOfGifs({ gifs }) {
    
    return gifs.map(({ title, id, url }) =>
        <Gif
            key={id}
            id={id}
            title={title}
            url={url}
        />
    )
}