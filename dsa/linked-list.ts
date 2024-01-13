class Node<T> {
  public data: T;
  public next: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: Node<T> | null;
  constructor(arr: Array<T>) {
    if (!arr.length) {
      this.head = null;
    } else {
      this.head = new Node<T>(arr[0]);
      let current = this.head;
      for (const index in arr) {
        if (index === "0") continue;
        current.next = new Node<T>(arr[index]);
        current = current.next;
      }
    }
  }
  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    return result;
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(new LinkedList(arr).toString());
