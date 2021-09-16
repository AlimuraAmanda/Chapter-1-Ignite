export function RepositoryItem (props) { //pega as propriedades pelo props
  return (
    <li>
          <strong>{props.repository.name}</strong> 
          <p>{props.repository.description}</p> {/*pega a propriedade dentro da const repository, atributo description*/}
          <a href={props.repository.html_url}>
            Acessar repositórios
          </a>
        </li>
  )
}