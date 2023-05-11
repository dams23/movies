import { MovieCover } from '../../components/movieCover/MovieCover'

export const MovieScreen = ({id}) => {
  return (
    <>
      <MovieCover idMovie={id} />
    </>
  )
}
