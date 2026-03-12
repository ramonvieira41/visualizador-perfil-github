// src/js/githubApi.js

export async function fetchGitHubUser(userName) {
    const baseURL = 'https://api.github.com';
    const response = await fetch(`${baseURL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return response.json();
}
