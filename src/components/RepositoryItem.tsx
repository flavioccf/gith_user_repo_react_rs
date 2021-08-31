import { RepositoryInterfaceProps } from "../interfaces/repository";

export function RepositoryItem({ repository }: RepositoryInterfaceProps) {
  return (
    <li>
    <strong>{ repository.name }</strong>
    <p>{ repository.description }</p>
    <a href={ repository.url }>{ repository.url }</a>
  </li>
  )
}