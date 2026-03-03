export const scans = [
    {
        id: 1,
        name: 'Web App Servers',
        type: 'Greybox',
        status: 'completed',
        progress: 100,
        vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
        lastScan: '4d ago'
    },
    {
        id: 2,
        name: 'API Gateway',
        type: 'Greybox',
        status: 'completed',
        progress: 100,
        vulnerabilities: { critical: 3, high: 8, medium: 14, low: 9 },
        lastScan: '2d ago'
    },
    {
        id: 3,
        name: 'Auth Service',
        type: 'Greybox',
        status: 'completed',
        progress: 100,
        vulnerabilities: { critical: 1, high: 5, medium: 11, low: 6 },
        lastScan: '1d ago'
    },
    {
        id: 4,
        name: 'Admin Panel',
        type: 'Greybox',
        status: 'completed',
        progress: 100,
        vulnerabilities: { critical: 7, high: 15, medium: 20, low: 4 },
        lastScan: '5d ago'
    },
    {
        id: 5,
        name: 'Payment Service',
        type: 'Greybox',
        status: 'scheduled',
        progress: 0,
        vulnerabilities: { critical: 0, high: 2, medium: 0, low: 0 },
        lastScan: '6d ago'
    },
    {
        id: 6,
        name: 'CDN Assets',
        type: 'Greybox',
        status: 'scheduled',
        progress: 0,
        vulnerabilities: { critical: 0, high: 1, medium: 3, low: 0 },
        lastScan: '7d ago'
    },
    {
        id: 7,
        name: 'IoT Devices',
        type: 'Blackbox',
        status: 'failed',
        progress: 10,
        vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
        lastScan: '3d ago'
    },
    {
        id: 8,
        name: 'Internal DB',
        type: 'Blackbox',
        status: 'failed',
        progress: 22,
        vulnerabilities: { critical: 4, high: 6, medium: 2, low: 0 },
        lastScan: '3d ago'
    },
];

export const activityLog = [
    { time: '09:00:00', text: "I'll begin a systematic penetration test on ", link: "helpdesk.democorp.com", postText: ". Let me start with reconnaissance and enumeration." },
    { time: '09:01:14', text: "Good! target is online. Now let me perform port scanning to identify running services." },
    { time: '09:02:31', text: "Excellent reconnaissance results:\n  |  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure." },
    { time: '09:03:05', text: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: ", highlight: '"TODO: Delete the testing account (test:test)"', postText: ". Let me test this credential. The login redirects to ", endpoint: "/password/test", postText2: ". Let me follow that path and explore it." },
    { time: '09:04:18', text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach." },
    { time: '09:05:44', text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ", highlight: "test:test", postText: " password directly on other endpoints." },
    { time: '09:06:52', text: "Great! I can access the dashboard using the ", highlight: "'X-UserId: 10032'", postText: " header. The dashboard shows \"Welcome, John Doe\". This suggests an ", highlightDanger: "**IDOR vulnerability**", postText2: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..." }
];

export const findings = [
    {
        id: 1,
        severity: 'critical',
        title: 'SQL Injection in Authentication Endpoint',
        endpoint: '/api/users/profile',
        time: '09:03:12',
        description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.'
    },
    {
        id: 2,
        severity: 'high',
        title: 'Unauthorized Access to User Metadata',
        endpoint: '/api/auth/login',
        time: '09:05:38',
        description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.'
    },
    {
        id: 3,
        severity: 'medium',
        title: 'Broken Authentication Rate Limiting',
        endpoint: '/api/search',
        time: '09:06:47',
        description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.'
    }
];
