//= require_tree .


// After stealing this JavaScript combination generator,
// I added a parameter to supply the minimum length resulting in,
// http://dzone.com/snippets/calculate-all-combinations
// http://stackoverflow.com/questions/5752002/find-all-possible-subset-combos-in-an-array#answer-5752056
var combine = function(a, min) {
	var fn = function(n, src, got, all) {
		if (n == 0) {
			if (got.length > 0) {
				all[all.length] = got;
			}
			return;
		}
		for (var j = 0; j < src.length; j++) {
			fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
		}
		return;
		}
		var all = [];
	for (var i = min; i < a.length; i++) {
		fn(i, a, [], all);
	}
	all.push(a);
	return all;
}

// To use, supply an array, and the minimum subset length desired,
// var subsets = combine([1, 2, 3], 2);
// Output is,
// [[1, 2], [1, 3], [2, 3], [1, 2, 3]]


// With a small tweak from this question, I hope my solution is more
// efficient because it uses bit operator to generate all the subsets.

var sets = (function(input, size){
    var results = [], result, mask, total = Math.pow(2, input.length);
    for(mask = 0; mask < total; mask++){
        result = [];
        i = input.length - 1;
        do{
            if( (mask & (1 << i)) !== 0){
                result.push(input[i]);
            }
        }while(i--);
        if( result.length >= size){
            results.push(result);
        }
    }

    return results;
})(['a','b','c','d','e','f'], 2);
console.log(sets);