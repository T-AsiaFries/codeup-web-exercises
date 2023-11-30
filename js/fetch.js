function lastCommit(events) {
    const pushEvents = events.filter(event => event.type === 'PushEvent');
    if (pushEvents.length === 0) {
       return ('n/a');
    }
    const lastCommitDate = pushEvents[0].created_at;
    return lastCommitDate;
}

const octokit = new Octokit({
    auth: `token ${GITHUB_API_KEY}`,
});

const username = 'github-username';

await octokit.request('GET /users/{username}/events/public', {
    username: 'USERNAME',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
    },
})
    .then(response => {
        const events = response.data;
        const lastCommitDate = lastCommit(events);
        console.log(`Last commit date for ${username}: ${lastCommitDate}`);
    })
    .catch(error => {
        console.error(error.message);
    });

