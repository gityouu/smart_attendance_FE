export const loginUser = async (credentials) => {
    try {
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed. Please check your credentials.');
        }

        // Store token if your API returns one
        if (data.token) {
            localStorage.setItem('userToken', data.token);
        }

        return { success: true, data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};