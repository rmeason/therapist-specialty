
// in react this should start in the state

const compareTheTestTakerToProviders = (providers, personScores) => {
	// loop through each provider
	let comparedProviders = []
	for (let j = 0; j < providers.length; j++) {
		let totalPersonDiff = 0
		let provider = {
			...providers[j],
		}
		// looping through scores of test taker vs provider matrix
		for (let i = 0; i < personScores.length; i++) {
			totalPersonDiff += Math.abs(providers[j].matrix[i] - personScores[i])
		}
		// add score into provider object
		provider.scoreComparedToTestTaker = totalPersonDiff
		// push provider object into array called comparedProviders
		comparedProviders.push(provider)
	}
	// sort the provider diffs in acending order
	comparedProviders.sort(function(a, b){return a.scoreComparedToTestTaker-b.scoreComparedToTestTaker});
	// set the state of comparedProviders
	return(comparedProviders);
}
export default compareTheTestTakerToProviders;