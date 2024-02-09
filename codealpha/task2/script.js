document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('loginContainer');
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('loginForm');
    const loggedInUserSpan = document.getElementById('loggedInUser');
    const socialMediaButtons = document.getElementById('socialMediaButtons');
    const socialMediaContent = document.getElementById('socialMediaContent');

    // Simulate social media content
    const socialMediaData = [
        { platform: 'Twitter', content: 'Twitter post' },
        { platform: 'Facebook', content: 'Facebook post' },
        { platform: 'Instagram', content: 'Instagram post' },
    ];

    // Store the number of posts for each username
    const numberOfPostsMap = new Map();

    function showLogin() {
        // Display login form
        loginContainer.innerHTML = `
            <h2>Login</h2>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>

                <button type="button" onclick="simulateLogin()">Login</button>
            </form>
        `;
    }

    function showDashboard(username) {
        // Display aggregated content
        dashboard.style.display = 'block';
        loggedInUserSpan.textContent = username;

        // Display social media login buttons
        socialMediaButtons.innerHTML = '<h3>Login to Social Media</h3>';
        socialMediaButtons.innerHTML += `
            <button onclick="loginToSocialMedia('Twitter')">Login to Twitter</button>
            <button onclick="loginToSocialMedia('Facebook')">Login to Facebook</button>
            <button onclick="loginToSocialMedia('Instagram')">Login to Instagram</button>
        `;
    }

    window.simulateLogin = function() {
        // You might want to use a backend for real authentication
        const username = document.getElementById('username').value;
        showDashboard(username);
    };

    window.loginToSocialMedia = function(platform) {
        const username = document.getElementById('username').value;

        // Check if the number of posts is already stored for this username
        if (!numberOfPostsMap.has(username)) {
            // If not, generate a random number of posts and store it
            const numberOfPosts = getRandomNumber(1, 10); // Change the range as needed
            numberOfPostsMap.set(username, { [platform]: numberOfPosts });
        }

        const userPosts = numberOfPostsMap.get(username);
        const numberOfPosts = userPosts[platform];

        // Display the number of posts
        socialMediaContent.innerHTML = `<h3>${platform} Feed (${numberOfPosts} posts)</h3>`;

        // Simulate the login process
        alert(`Redirecting to ${platform} login page...`);

        // Redirect to the actual login page (replace with actual OAuth URLs)
        switch (platform) {
            case 'Twitter':
                window.location.href = 'https://twitter.com/login';
                break;
            case 'Facebook':
                window.location.href = 'https://www.facebook.com/login';
                break;
            case 'Instagram':
                window.location.href = 'https://www.instagram.com/accounts/login/';
                break;
            default:
                // Handle unsupported platform
                break;
        }
    };

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
