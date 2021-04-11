// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = {
      value: null,
      next: null,
    };
    this.head = this.queue;
    this.tail = this.queue;
    this.long = 0;
  }

  ListNode(element) {
    return {
      value: element,
      next: null,
    };
  }

  get size() {
    return this.long;
  }

  enqueue(element) {
    if (this.head.value === null) {
      this.head = this.ListNode(element);
    } else {
      this.tail = this.ListNode(element);
      this.tail = this.tail.next;
    }
    this.long++;
  }

  dequeue() {
    const top = this.head;
    this.head = this.head.next;
    return top.value;
  }
}

module.exports = Queue;
