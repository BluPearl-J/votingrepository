
num_candidates = int(input("How many candidates? "))
candidate_names = []
candidate_votes = []

for candidate_counter in range(num_candidates):
    name = input(f"To register candidate, enter name of candidate {candidate_counter + 1}: ")
    candidate_names.append(name)
    candidate_votes.append(0)


num_voters = int(input("How many voters? "))

for voter_counter in range(num_voters):
    voter_name = input(f"Voter {voter_counter + 1}, enter your name to vote: ")

    vote = input(f"Hi {voter_name}, who is your vote for?\n{str(candidate_names)}\n")

   

    vote_match_candidate = False
    for candidate_check_counter in range(len(candidate_names)):
        if vote.lower() == candidate_names[candidate_check_counter].lower():
            candidate_votes[candidate_check_counter] += 1
            vote_match_candidate = True
            print(f"Thanks {voter_name}, your vote for {vote} has been recorded.")
            break

    if not vote_match_candidate:
        print("Invalid candidate name. Vote not counted.")

#Show results
print("\nElection Results:")
for result_counter in range(len(candidate_names)):
    print(f"{candidate_names[result_counter]}: {candidate_votes[result_counter]} vote(s)")

#highest votes winner
max_votes = candidate_votes[0]
winner = candidate_names[0]
for winner_counter in range(1, len(candidate_votes)):
    if candidate_votes[winner_counter] > max_votes:
        max_votes = candidate_votes[winner_counter]
        winner = candidate_names[winner_counter]

print(f"\n Winner is: {winner} with {max_votes} vote(s)")
