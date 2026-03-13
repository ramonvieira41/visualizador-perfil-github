// src/js/renderProfile.js
export function renderProfile(profileResult, reposData, userData) {

    const respositoriesHTML = reposData && reposData.length > 0 ? reposData.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐Stars ${repo.stargazers_count}</span>
                    <span>🍴Forks ${repo.forks_count}</span>
                    <span>👀Watchers ${repo.watchers_count}</span>
                    <span>🖥️Language ${repo.language || 'Não especificado'}</span>
                </div>
            </div>
        </a>
    `).join('') : '<p>Nenhum repositório encontrado.</p>';

    profileResult.innerHTML = ` 
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || 'Nome não disponível😥'}</h2>
                <p>${userData.bio || 'Sem bio disponível😐'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="profile-followers">
                <h4>👥Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="profile-following">
                <h4>🚶‍♂️‍➡️Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories-list">
            ${respositoriesHTML}
            </div> 
        </div>
    `;
}

export function renderLoading(profileResult) {
    profileResult.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfile(profileResult) {
    profileResult.innerHTML = '';
}
