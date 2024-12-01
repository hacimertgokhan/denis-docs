export async function fetchGithubContributors(owner, repo) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contributors`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch contributors');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching contributors:', error);
        return [];
    }
}