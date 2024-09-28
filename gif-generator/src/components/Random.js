import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    const {gif, loading, fetchData} = useGif()

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