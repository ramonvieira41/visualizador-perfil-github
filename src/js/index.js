import { fetchGitHubUser } from './githubApi.js';
import { renderProfile, renderLoading, clearProfile } from './renderProfile.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResult = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        btnSearch.disabled = true;
        btnSearch.value = 'Carregando...';
        renderLoading(profileResult);
        try {
            const userData = await fetchGitHubUser(userName);
            renderProfile(profileResult, userData);
        } catch (error) {
            alert('Usuário não encontrado, por favor, tente outro nome ou verifique o nome digitado.');
            clearProfile(profileResult);
        } finally {
            btnSearch.disabled = false;
            btnSearch.value = 'Buscar';
        }
    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});
