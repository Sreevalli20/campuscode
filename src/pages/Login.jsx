import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/globals.css';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Mock authentication delay
    setTimeout(() => {
      setIsLoading(false);
      // Mock successful login - redirect to dashboard
      navigate('/dashboard');
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleForgotPassword = () => {
    alert('Password reset feature coming soon. Please contact support.');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Header */}
        <header className="login-header">
          <button type="button" className="login-logo" onClick={handleBackToHome}>
            <span className="landing-logo-mark">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span>
              <strong>CAMPUSCODE</strong>
              <small>HACKATHON ARENA</small>
            </span>
          </button>
        </header>

        {/* Login Form */}
        <div className="login-content">
          <div className="login-card">
            <div className="login-label">STUDENT LOGIN</div>
            <h1>Welcome Back</h1>
            <p className="login-subtitle">Sign in to access your workspace</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@campuscode.co.in"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-actions">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="forgot-password" onClick={handleForgotPassword}>Forgot password?</button>
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="login-divider">
              <span>or</span>
            </div>

            <div className="login-register">
              <p>Don't have an account?</p>
              <button type="button" className="register-link" onClick={handleRegister}>
                Create Account →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="login-footer">
          <p>© 2026 CampusCode. Chennai, India.</p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
