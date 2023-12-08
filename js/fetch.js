function getLastCommit(username, token) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then(response => response.json());
}

getLastCommit('t-asiafries', GITHUB_API_KEY)
    .then(data => {
        let commitEvents = data.filter(event => event.type === "PushEvent");
        if (commitEvents.length > 0) {
            return new Date(commitEvents[0].created_at);
        } else {
            console.error('No commit events found for the specified user.');
        }
    })
    .then(lastCommitDate => {
        console.log('Last Commit Date:', lastCommitDate);
    })
    .catch(error => {
        console.error(error.message);
    });
