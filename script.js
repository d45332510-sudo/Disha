// Password Strength Checker

function checkPasswordStrength(password) {
    const strongPasswordRegex = new(?=\[^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})\]$);
    if (strongPasswordRegex.test(password)) {
        return 'Strong';
    }
    return 'Weak';
}

// Example usage:
const password = 'YourPassword123!';
console.log('Password Strength:', checkPasswordStrength(password));