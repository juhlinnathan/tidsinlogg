// JavaScript-kod för att hantera inloggning och kontoskapande

// Lista för att lagra användare temporärt (för denna demo)
const users = [];

// 1. Funktion för att skapa ny användare
function createUser() {
    const email = prompt('Ange din e-postadress:');

    if (!email || !email.includes('@')) {
        alert('Ogiltig e-postadress. Försök igen.');
        return;
    }

    // Generera ett slumpmässigt lösenord
    const password = Math.random().toString(36).slice(-8);

    // Spara användaren
    users.push({ email, password });

    alert(`Användare skapad!\nE-post: ${email}\nLösenord: ${password}\nSpara ditt lösenord!`);

    // Visa skapade användaren direkt i inputfält för inloggning
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
}

// 2. Funktion för att hantera inloggning
const loginForm = document.getElementById('login-form');
const adminCodeInput = document.getElementById('admin-code');
const appContainer = document.getElementById('app-container');
const adminFunctions = document.getElementById('admin-functions');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Hämta inmatad data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kontrollera om användaren existerar
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Inloggad som vanlig användare!');
        appContainer.style.display = 'block';
        adminFunctions.style.display = 'none'; // Döljer admin-funktioner
    } else {
        alert('Fel e-post eller lösenord. Försök igen.');
    }
});

// 3. Funktion för att hantera admin-åtkomst
// Kollar om administratörskoden är korrekt och visar admin-funktionerna.
document.getElementById('admin-submit').addEventListener('click', function() {
    const adminCode = adminCodeInput.value;

    if (adminCode === '#admin123') {
        alert('Admin-åtkomst beviljad!');
        adminFunctions.style.display = 'block';
    } else {
        alert('Fel kod! Försök igen.');
    }
});

// 4. Placeholder-funktioner för att visa och hantera data
function displayEmployees() {
    console.log('Visa alla anställda');
}

function displayWorks() {
    console.log('Visa alla arbeten');
}

// 5. Lägg till knappar för kontoskapande
// Skapa en knapp för kontoskapande och lägg till den i användarsektionen
document.body.onload = function() {
    const createAccountButton = document.createElement('button');
    createAccountButton.textContent = 'Skapa Konto';
    createAccountButton.onclick = createUser;

    const userFunctions = document.getElementById('user-functions');
    if (userFunctions) {
        userFunctions.appendChild(createAccountButton);
    }
};

