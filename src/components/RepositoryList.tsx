import { RepositoryItem } from "./RepositoryItem"
import "../styles/repositories.scss"
import { useState, useEffect } from "react"
import axios from "axios"
import { RepositoryInterface } from "../interfaces/repository"

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryInterface[]>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/flavioccf/repos')
    .then(response => setRepositories(response.data))
    .catch(error => {throw new Error(error)})
  },[])

  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        {repositories.map((repository: RepositoryInterface) => <RepositoryItem key={repository.id} repository={repository}/>)}
      </ul>
    </section>
  )
}