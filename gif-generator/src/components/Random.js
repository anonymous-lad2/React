import {useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Random = () => {

    const [gif, setGif] = useState('')
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const [loading, setLoading] = useState(false)

    async function fetchData(){
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const { data } = await axios.get(url);
        console.log(data)
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-8/12 bg-green-500 flex flex-col items-center rounded-lg py-5'>
            <h1 className='uppercase text-2xl font-bold'>A Random gif</h1>

            {loading ? (<Spinner/>) : (<img src={gif} width="450" />)}
            
            <button onClick = {() => fetchData()}
                className='bg-slate-300 w-9/12 py-2 rounded-lg mt-6 text-xl font-bold'>Generate</button>
        </div>
    )
}

export default Random