// src/js/renderProfile.js

export function renderProfile(profileResult, userData) {
    profileResult.innerHTML = ` 
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
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
    `;
}

export function renderLoading(profileResult) {
    profileResult.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearProfile(profileResult) {
    profileResult.innerHTML = '';
}
