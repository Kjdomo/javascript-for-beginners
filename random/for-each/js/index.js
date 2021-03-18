/*  For-Each loop in Javascript */
["alice", "bob", "charlie"].forEach(function (item, index, array) {
    console.log(item, index, array); 
});


/* Implements a myList Object that has a forEach property on it */ 

const myList = {
	data: ["alice", "bob", "charlie"],
	forEach: function ( cb ) {
		const data = this.data;
		for (let i = 0; i < data.length; i++) {
			cb(data[i], i, data);
		}
	}
}

myList.forEach(function (item, index, array) {
	console.log(item, index, array);
});

/*
 * Note: These return the same value.
 * This is an example of how you would create custom objects.
 */

