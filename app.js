// function gatherNamesOf(arrayOfPeople) {
// 	return arrayOfPeople.map(function(person) {
// 		return person.name
// 	})
// }

// module.exports = gatherNamesOf

function perkalian(x, y){
	if (x>2 && y>2){
		return x*y;
		console.log("Hasil perkalian lebih dari 4");
	} else {
		return x*y;
		console.log("Hasil perkalian kurang dari 4");
	}
}

module.exports = perkalian