export function RepositoryItem (props) { //pega as propriedades pelo props
  return (
    <li>
          <strong>{props.repository.name ?? 'Default'}</strong> {/* pega a propriedade pelo nome dado no item, se vazio acrescenta 'Default'  */}
          <p>{props.repository.description}</p> {/*pega a propriedade dentro da const repository, atributo description*/}
          <a href={props.repository.link}>
            Acessar repositórios
          </a>
        </li>
  )
}