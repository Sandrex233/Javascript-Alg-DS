// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and 'peek'.
// 'push' should add element to stack.
// 'pop' should remove top most element in the stack and return it.
// 'peek' should ONLY return the top most element from the stack.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.peek(); // returns 1

class Stack {
	constructor() {
		this.data = [];
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

describe('Stack from Array', () => {
	it('push() adds elements to a stack', () => {
		const s = new Stack();
		s.push(1);
		assert.equal(s.data.includes(1), true);
	});
	it('pop() removes element from stack and returns removed element.', () => {
		const s = new Stack();
		s.push(1);
		assert.equal(s.pop(), 1);
		assert.equal(s.data.includes(1), false);
	});
	it('peek() returns the next element to be popped but doesnt pop it', () => {
		const s = new Stack();
		s.push(1);
		s.push(2);
		s.push(3);
		assert.equal(s.peek(), 3);
		assert.equal(s.pop(), 3);
	});
	it('Stack has FILO / LIFO behavior.', () => {
		const browserHistory = new Stack();
		browserHistory.push('www.youtube.com');
		browserHistory.push('www.youtube.com/login/KodingKevin');
		browserHistory.push('www.youtube.com/watch/cats');
		browserHistory.push('www.youtube.com/watch/cats_meowing');

		//Pressing the back button on my browser
		assert.equal(browserHistory.pop(), 'www.youtube.com/watch/cats_meowing');

		const s = new Stack();
		s.push(1);
		s.push(2);
		s.push(3);
		assert.equal(s.pop(), 3);
		assert.equal(s.pop(), 2);
		assert.equal(s.pop(), 1);
	});
});

mocha.run();
