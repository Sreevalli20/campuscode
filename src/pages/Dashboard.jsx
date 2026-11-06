import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/globals.css';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'events', label: 'Events' },
    { id: 'my-events', label: 'My Events' },
    { id: 'hackmate', label: 'HackMate AI' },
    { id: 'ideacheck', label: 'IdeaCheck AI' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'digital-card', label: 'Digital Card' },
    { id: 'rulebot', label: 'RuleBot AI' },
    { id: 'student-guide', label: 'Student Guide' },
    { id: 'communication', label: 'Official Communication' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'help', label: 'Help & Support' },
    { id: 'profile', label: 'Profile' }
  ];

  const mockEvents = [
    {
      id: 1,
      title: 'ReBuild \'26',
      status: 'Ongoing',
      progress: 65,
      deadline: '2026-11-20',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'AI Innovation Challenge',
      status: 'Upcoming',
      progress: 0,
      deadline: '2026-12-15',
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'Degree Zero',
      status: 'Completed',
      progress: 100,
      deadline: '2026-10-30',
      category: 'Skills'
    }
  ];

  const mockNotifications = [
    {
      id: 1,
      title: 'ReBuild \'26 Update',
      message: 'Round 2 details have been announced. Check the event page.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      title: 'Certificate Available',
      message: 'Your Degree Zero participation certificate is ready.',
      time: '1 day ago',
      unread: false
    },
    {
      id: 3,
      title: 'New Event',
      message: 'AI Innovation Challenge registration is now open.',
      time: '3 days ago',
      unread: false
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleMenuClick = (itemId) => {
    setActiveTab(itemId);
  };

  const handleRefresh = () => {
    // Mock refresh - in a real app this would fetch new data
    window.location.reload();
  };

  const handleNotifications = () => {
    setActiveTab('notifications');
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button type="button" className="sidebar-logo" onClick={() => navigate('/')}>
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
        </div>

        <nav className="sidebar-nav">
          <div className="nav-label">WORKSPACE</div>
          <ul className="nav-menu">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <span>JS</span>
            </div>
            <div className="user-info">
              <div className="user-name">John Student</div>
              <div className="user-designation">Undergraduate</div>
            </div>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button
              className="sidebar-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
            <div className="header-title">
              <span className="header-label">CAMPUSCODE / STUDENT</span>
              <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}</h1>
            </div>
          </div>
          <div className="header-actions">
            <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
            <button className="notification-button" onClick={handleNotifications}>
              <span className="notification-badge">3</span>
              🔔
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <div className="overview-section">
              {/* Welcome Section */}
              <div className="welcome-card">
                <h2>Welcome back, John!</h2>
                <p>You have 1 ongoing event and 2 upcoming deadlines.</p>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-label">Registered Events</div>
                  <div className="stat-value">3</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Ongoing</div>
                  <div className="stat-value">1</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Completed</div>
                  <div className="stat-value">1</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Certificates</div>
                  <div className="stat-value">1</div>
                </div>
              </div>

              {/* Events Section */}
              <div className="section-header">
                <h3>Your Events</h3>
                <button className="view-all" onClick={() => handleMenuClick('my-events')}>View All →</button>
              </div>

              <div className="events-grid">
                {mockEvents.map(event => (
                  <div key={event.id} className="event-card">
                    <div className={`event-status ${event.status.toLowerCase()}`}>
                      {event.status}
                    </div>
                    <h4>{event.title}</h4>
                    <p className="event-category">{event.category}</p>
                    <div className="event-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${event.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{event.progress}%</span>
                    </div>
                    <p className="event-deadline">Deadline: {event.deadline}</p>
                  </div>
                ))}
              </div>

              {/* Notifications Section */}
              <div className="section-header">
                <h3>Recent Notifications</h3>
                <button className="view-all" onClick={() => handleMenuClick('notifications')}>View All →</button>
              </div>

              <div className="notifications-list">
                {mockNotifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`notification-item ${notification.unread ? 'unread' : ''}`}
                  >
                    <div className="notification-content">
                      <h4>{notification.title}</h4>
                      <p>{notification.message}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="events-section">
              <div className="section-header">
                <h3>Discover Events</h3>
              </div>
              <div className="events-grid">
                {mockEvents.map(event => (
                  <div key={event.id} className="event-card">
                    <div className={`event-status ${event.status.toLowerCase()}`}>
                      {event.status}
                    </div>
                    <h4>{event.title}</h4>
                    <p className="event-category">{event.category}</p>
                    <p className="event-deadline">Deadline: {event.deadline}</p>
                    <button className="event-cta" onClick={() => alert(`Event details for ${event.title}`)}>View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'my-events' && (
            <div className="my-events-section">
              <div className="section-header">
                <h3>My Registered Events</h3>
              </div>
              <div className="events-grid">
                {mockEvents.filter(e => e.status !== 'Upcoming').map(event => (
                  <div key={event.id} className="event-card">
                    <div className={`event-status ${event.status.toLowerCase()}`}>
                      {event.status}
                    </div>
                    <h4>{event.title}</h4>
                    <p className="event-category">{event.category}</p>
                    <div className="event-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${event.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{event.progress}%</span>
                    </div>
                    <p className="event-deadline">Deadline: {event.deadline}</p>
                    <button className="event-cta" onClick={() => alert(`Continue with ${event.title}`)}>Continue</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="certificates-section">
              <div className="section-header">
                <h3>Your Certificates</h3>
              </div>
              <div className="certificates-grid">
                <div className="certificate-card">
                  <div className="certificate-icon">🏆</div>
                  <h4>Degree Zero Participation</h4>
                  <p>Issued: October 30, 2026</p>
                  <button className="certificate-cta" onClick={() => alert('Certificate download initiated')}>Download</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="notifications-section">
              <div className="section-header">
                <h3>All Notifications</h3>
              </div>
              <div className="notifications-list">
                {mockNotifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`notification-item ${notification.unread ? 'unread' : ''}`}
                  >
                    <div className="notification-content">
                      <h4>{notification.title}</h4>
                      <p>{notification.message}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="profile-card">
                <div className="profile-avatar-large">
                  <span>JS</span>
                </div>
                <h3>John Student</h3>
                <p className="profile-designation">Undergraduate</p>
                <div className="profile-details">
                  <div className="detail-item">
                    <label>Email</label>
                    <span>john@campuscode.co.in</span>
                  </div>
                  <div className="detail-item">
                    <label>College</label>
                    <span>CampusCode University</span>
                  </div>
                  <div className="detail-item">
                    <label>Year</label>
                    <span>3rd Year</span>
                  </div>
                </div>
                <button className="edit-profile" onClick={() => alert('Edit profile feature coming soon')}>Edit Profile</button>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {![
            'overview',
            'events',
            'my-events',
            'certificates',
            'notifications',
            'profile'
          ].includes(activeTab) && (
            <div className="placeholder-section">
              <div className="placeholder-content">
                <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}</h3>
                <p>This feature is coming soon.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
