// src/js/githubApi.js
const baseURL = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return response.json();
}
export async function fetchGitHubRepos(userName) {
    const response = await fetch(`${baseURL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositórios não encontrados');
    }
    return response.json();
}

