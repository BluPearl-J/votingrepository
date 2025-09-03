// Number of candidates
let numCandidates = parseInt(prompt("How many candidates?"));
let candidateNames = [];
let candidateVotes = [];

// Register candidates
for (let i = 0; i < numCandidates; i++) {
  let name = prompt(`Enter name for candidate ${i + 1}:`);
  candidateNames[i] = name;
  candidateVotes[i] = 0; // Start with 0 votes
}

// Number of voters
let numVoters = parseInt(prompt("How many voters?"));

// Voting process
for (let i = 0; i < numVoters; i++) {
  let voterName = prompt(`Voter ${i + 1}, enter your name:`);
 
  let vote = prompt(`Hi ${voterName}, who do you vote for?\n${candidateNames.toString()}`);
  
  let found = false;
  for (let j = 0; j < candidateNames.length; j++) {
    if (vote === candidateNames[j]) {
      candidateVotes[j]++;
      found = true;
      console.log(`Thanks ${voterName}, your vote for ${vote} has been recorded.`);
      break;
    }
  }
  if (!found) {
    console.log("Invalid candidate name. Vote not counted.");
  }
}

// Show results
let result = "Election Results:\n";
for (let i = 0; i < candidateNames.length; i++) {
  result += `${candidateNames[i]}: ${candidateVotes[i]} vote(s)\n`;
}
console.log(result);

// Find winner
let maxVotes = candidateVotes[0];
let winner = candidateNames[0];
for (let i = 1; i < candidateVotes.length; i++) {
  if (candidateVotes[i] > maxVotes) {
    maxVotes = candidateVotes[i];
    winner = candidateNames[i];
  }
}
console.log(`Winner is : ${winner} with ${maxVotes} number of vote(s)`);
