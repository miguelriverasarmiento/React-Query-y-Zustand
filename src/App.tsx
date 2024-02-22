import { useFetchRepositories } from './hooks/useRepos'
import Card from './components/Card'
import { useFavoriteReposStore } from './store/favoriteRepos'

function App() {
  const { data, isLoading } = useFetchRepositories()
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>

  console.log(data)
  return (
    <div>
       {data?.map(repository => (
        <Card repository={repository}
        key={repository.id}
        isFavorite={favoriteReposIds.includes(repository.id)}
        />
       ))}
    </div>
  )
}

export default App
