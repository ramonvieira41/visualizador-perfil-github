const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResult = document.querySelector('.profile-results');

const baseURL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        btnSearch.disabled = true;
        btnSearch.value = 'Carregando...';
        profileResult.innerHTML = '<p class="loading">Carregando...</p>';

        try {
            const response = await fetch(`${baseURL}/users/${userName}`);
            if (!response.ok) {
                alert('Usuário não encontrado, por favor, tente outro nome ou verifique o nome digitado.');
                profileResult.innerHTML = '';
                return;
            }
            const userData = await response.json();
            
            profileResult.innerHTML = ` 
            <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Sem bio disponível😐'}</p>
            </div>
            </div>`;
        } catch (error) {
            alert('Ocorreu um erro ao buscar os dados.');
            profileResult.innerHTML = '';
        } finally {
            btnSearch.disabled = false;
            btnSearch.value = 'Buscar';
        }
    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});
