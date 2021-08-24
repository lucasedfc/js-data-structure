class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    // creamos el inicio de nuestro SinglyLinkedList
    this.head = {
      value,
      next: null,
    };
    // Aqui sucede la magia ✨
    // Todo lo que modifiquemos en tail
    // se modificara en la estructura inicial
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    // aqui estamos creando un nuevo nodo
    const newNode = new Node(value);

    // Como mencionamos anteriormente
    // si modificamos la cola por la REFERENCIA
    // se modificara la estructura inicial!
    this.tail.next = newNode;
    // Pero aun tail sigue apuntando a la CABEZA
    // de la estructura inicial entonces es momento
    // de apuntar al nuevo nodo creado
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  delete(index) {
    if (index <= 0) return this.shift();
    if (index >= this.length) return this.pop();
    const prevDeletedNode = this.getTheIndex(index - 1);
    prevDeletedNode.next = prevDeletedNode.next.next;
    this.length--;

    return this;
  }

  shift() {
    const secondNode = this.head.next;
    this.head = secondNode;
    this.length--;

    return this;
  }

  pop() {
    const prevLastNode = this.getTheIndex(this.length - 2);
    this.tail = prevLastNode;
    prevLastNode.next = null;
    this.length--;

    return this;
  }
}
