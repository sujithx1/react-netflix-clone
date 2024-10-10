import { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { API_KEY, imageUrl} from '../../constant/constant'
import {Movies,Props} from './RowpostType'
import YouTube from 'react-youtube'


interface MovieUrl{
    key:string;
}


const Rowpost = ({isSmall,title,url}:Props) => {
    const [movies,setMovies]=useState< Movies[]| []>([])
    const [movieUrlId,setMovieUrlId]=useState<  MovieUrl>()
    useEffect(()=>{
        axios.get(url)
        .then((res)=>(console.log(res.data),setMovies(res.data.results)
    
        )).catch((err)=>console.log(err)
        )

    },[url])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovieclick=(id:number)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((res)=>{if(res.data.results.length!==0)
        {console.log(res.data.results[0])
        
            // setMovieUrlId(res.data.results[0])
            setMovieUrlId(res.data.results[0])
        }else
        {
            console.log('Movie video not available');
            
        }
        })
        .catch((err)=>console.log(err)
        )
        // setMovieId(String(id))
        // console.log(id);
    
        
        
        
      }
  return (
    <div className="row" >
      <h2>{title}</h2>
      <div className="posters">
        {
            movies.map((mov)=>(
                
                <img onClick={()=>handleMovieclick(mov.id)} key={mov.id} className={isSmall ? 'smallPoster':'poster'} src={`${imageUrl+mov.backdrop_path}`} alt="poster" />
            ))

        }

      </div>
      { movieUrlId &&
 
      <YouTube  videoId={movieUrlId.key} opts={opts}  />
      }
    </div>
  )
}

export default Rowpost
