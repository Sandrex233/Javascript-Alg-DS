// Create a queue data structure.  The queue should
// have methods 'enqueue' and 'dequeue' which add / remove
// elements from the queue AND also maintain 'first-in first-out'
// --- Examples
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// expect(q.dequeue()).toEqual(1);

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
	constructor() {
		//Think of head and tail in terms of linkedlist NOT a queue
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd');
const { assert } = chai;

describe('Queue from scratch', () => {
	it('enqueue() works for empty queue.', () => {
		const q = new Queue();
		q.enqueue(1);
		assert.equal(q.head.value, 1);
		assert.equal(q.tail.value, 1);
	});
	it('enqueue() adds elements to queue, updates length, returns length.', () => {
		const q = new Queue();
		assert.equal(q.enqueue('A'), 1);
		assert.equal(q.enqueue('B'), 2);
		assert.equal(q.enqueue('C'), 3);
		assert.equal(q.length, 3);

		assert.equal(q.head.next.value, 'B');
	});

	it('dequeue() returns removed node and updates length.', () => {
		const q = new Queue();
		q.enqueue('A');
		q.enqueue('B');
		const removedNode = q.dequeue();
		assert.equal(q.length, 1);
		assert.equal(removedNode.value, 'A');
	});
	it('dequeue() does not crash and does nothing on empty Queue.', () => {
		const q = new Queue();
		assert.isNotOk(q.dequeue());
		assert.equal(q.length, 0);
	});
	it('dequeue() resets head and tail once queue is empty.', () => {
		const q = new Queue();
		q.enqueue(1);
		q.dequeue();
		assert.isNotOk(q.head);
		assert.isNotOk(q.tail);
	});

	it('Queue has behavior of first in first out.', () => {
		const q = new Queue();
		q.enqueue('A');
		q.enqueue('B');
		q.enqueue('C');
		assert.equal(q.dequeue().value, 'A');
		assert.equal(q.dequeue().value, 'B');
		assert.equal(q.dequeue().value, 'C');

		q.enqueue('Abba');
		assert.equal(q.dequeue().value, 'Abba');
	});
});

mocha.run();
