const API_KEY=process.env.REACT_APP_API_KEY;


export function updateMovie(obj){
  return {
    type:'FETCH_MOVIE',
    payload:obj
  }
}
export function updateTv(obj){
  return {
    type:'FETCH_TV',
    payload:obj
  }
}

export function handleMoreMovieItem(obj){
  return {
    type:'HANDLE_MORE_MOVIE_ITEM',
    payload:obj
  }
}
export function handleMoreTvItem(obj){
  return {
    type:'HANDLE_MORE_TV_ITEM',
    payload:obj
  }
}


export function fetchMovie(media_type,url,genre,sortType,page){
  return (dispatch)=>{
    fetch (`https://api.themoviedb.org/3/discover/${media_type}?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&page=${page}&vote_count.gte=100${url}`)
    .then(r=>r.json())
    .then(data=>{
        const results=data.results.filter(m=>m.backdrop_path)
        const obj={[genre]:results}
        if (page>1) {
           media_type==="movie"?dispatch(handleMoreMovieItem(obj)):dispatch(handleMoreTvItem(obj))
        }else {
           media_type==="movie"?dispatch(updateMovie(obj)):dispatch(updateTv(obj))
        }
    })
  }
}

export function updateItem(obj){
  return {
    type:'FETCH_ITEM',
    payload:obj
  }
}
export function updateRecommendations(array){
  return {
    type:"UPDATE_RECOMMENDATIONS",
    payload:array
  }
}
export function fetchItemReview(obj){
  return {
    type:'FETCH_ITEM_REVIEW',
    payload:obj
  }
}
export function fetchItem(type,id){
  return (dispatch)=>{
       fetch (`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`)
       .then(r=>r.json())
       .then(data=>{
         dispatch(updateItem(data))
       })
       fetch (`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US`)
       .then(r=>r.json())
       .then(data=>{
         const results=data.results.filter(m=>m.backdrop_path)
         dispatch(updateRecommendations(results))
       })
      fetch(`http://localhost:8000/api/v1/getitemreviews/${id}`)
      .then(r=>r.json())
      .then(data=>{
        dispatch(fetchItemReview(data))
      })

  }
}

export function updateSearchItem(obj){
   return {
     type:'SEARCH_ITEM',
     payload:obj
   }
}

export function searchItem(input){
  return (dispatch)=>{
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}`)
    .then(r=>r.json())
    .then(data=>{
      const results={results:data.results.filter(m=>m.backdrop_path)}
      dispatch(updateSearchItem(results))
    })
  }
}

export function updateReview(obj) {
  return {
    type:'UPDATE_REVIEW',
    payload:obj
  }
}

export function submitReview(obj) {
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/reviews",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({review:obj})
    })
    .then(res=>res.json())
    .then(data=>{
       dispatch(updateReview(data))
    })
  }
}

export function updateFriends(data){
  return {
    type:"UPDATE_FRIENDS",
    payload:data
  }
}
export function fetchFriends(id){
  return (dispatch)=>{
    fetch(`http://localhost:8000/api/v1/findfriends/${id}`)
    .then(res=>res.json())
    .then(data=>{
      dispatch(updateFriends(data))
    })
  }
}

export function userSignUp(obj){

  return {
    type:'USER_SIGN_UP',
    payload:obj
  }
}
export function handleSignUp(obj){
  return (dispatch)=>{
    fetch("http://localhost:8000/api/v1/signup",{
       method:"POST",
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify(obj)
     }).then(res=>res.json())
    .then(data=>{
      dispatch(userSignUp(data))
    })
  }
}
