export interface RepositoryInterface {
  id: string,
  name: string,
  description: string,
  url: string
}

export interface RepositoryInterfaceProps {
  repository: RepositoryInterface
}