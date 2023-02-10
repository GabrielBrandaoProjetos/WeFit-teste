import { createContext, ReactNode, useEffect, useState } from "react";
import { getMovies } from "../services/api";

interface MovieProps {
  id: number,
  image: string,
  price: number,
  title: string,
  count_added_to_cart: number
}

interface ShoppingCartContextData {
  movies: MovieProps[]
  moviesCart: MovieProps[]
  countMoviesCart: number;
  reloadMovies: () => Promise<void>
}

interface ShoppingCartProviderProps{
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [moviesCart, setMoviesCart] = useState<MovieProps[]>([])
  const [countMoviesCart, setCountMoviesCart] = useState<number>(0)

  useEffect(() => {
    handleGetMovies()
  }, [])
  
  useEffect(() => {
    handleCountMoviesCart()
    handleMoviesCart()
  }, [movies, handleCountMoviesCart, handleMoviesCart])

  async function handleGetMovies(){
    const {data} = await getMovies()
    setMovies(data)
  }

  async function reloadMovies(){
    await handleGetMovies()
  }
  
  function handleCountMoviesCart(){
    let count = 0
    movies.forEach((movie: MovieProps) => {
      if(movie.count_added_to_cart){
        count += movie.count_added_to_cart
      }
    })
    setCountMoviesCart(count)
  }
  
  function handleMoviesCart(){
    let movies_cart: MovieProps[] = []
    movies.forEach((movie: any) => {
      if(movie.added_to_cart){
        movies_cart = [...movies_cart, movie]
      }
    })
    setMoviesCart(movies_cart)
  }

  return(
    <ShoppingCartContext.Provider value={{movies, moviesCart, countMoviesCart, reloadMovies}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}