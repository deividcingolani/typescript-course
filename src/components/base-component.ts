//Esta clase es utilizada para ser un abstract de los componentes... Esto quiere decir
//que cuando creo un nuevo componente, ya sea como lo estoy llamando con el template, debo llamar esta clase
//primero. y luego implementar los metodos necesarios.

export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  protected constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    //Busco el template en el index,
    //El template sirve para declarar en html y que no se muestra hasta que sea invocado desde javascript.
    //Lo cual me hace sospechar con React y su renderizacion de componentes.
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    //in React this is APP
    this.hostElement = document.getElementById(hostElementId)! as T;

    //en el caso de input, este me esta devolviendo  lo que esta dentro de Form.
    //Esto es asi ya que el importNode devuelve una copia del contenido, y como esta en true, tambien de todos los nodos
    //child
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    //Retorno el primero elemento del elemento, el cual en caso de input es form y le agrego el newElementId
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
    //Esto es para insertar el elemento en el hostElement (App)
    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }
  //Esto me obliga a que las clases que extienden la clase, deban implementar estos metodos
  abstract configure(): void;
  abstract renderContent(): void;
}
