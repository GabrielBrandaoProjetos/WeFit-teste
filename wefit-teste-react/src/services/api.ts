import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export async function getMovies(){
  const response = await api.get("products")
  return response
}

export async function addMovieInTheCart(id: number, count: number){
  const response = await api.patch(`products/${id}`, 
    {
      added_to_cart: true,
      count_added_to_cart: count
    }
  )
  return response
}

export async function subMovieInTheCart(id: number, count: number){
  const response = await api.patch(`products/${id}`, 
    {
      added_to_cart: count > 0 ? true : false,
      count_added_to_cart: count
    }
  )
  return response
}

export async function delMovieInTheCart(id: number){
  const response = await api.patch(`products/${id}`, 
    {
      added_to_cart: false,
      count_added_to_cart: 0
    }
  )
  return response
}