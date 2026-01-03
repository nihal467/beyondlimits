# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

We take the security of our project seriously. If you discover a security vulnerability, please follow these steps:

### Private Reporting (Preferred)

1. **DO NOT** open a public issue
2. Use GitHub's private vulnerability reporting:
   - Go to the Security tab
   - Click "Report a vulnerability"
   - Fill out the form with details

### Email Reporting

Alternatively, you can email security concerns to the maintainers.

### What to Include

When reporting a vulnerability, please include:

- **Description**: Clear description of the vulnerability
- **Impact**: Potential impact if exploited
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Affected Components**: Which files/features are affected
- **Suggested Fix**: If you have one (optional)
- **Environment**: Browser, OS, and other relevant details

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 24-48 hours
  - High: 1 week
  - Medium: 2 weeks
  - Low: 1 month

## Security Best Practices

### For Contributors

- Never commit sensitive data (API keys, passwords, tokens)
- Use environment variables for sensitive configuration
- Keep dependencies up to date
- Run security scans before submitting PRs
- Follow OWASP guidelines

### For Users

- Keep your browser updated
- Be cautious of suspicious links
- Report any suspicious activity
- Don't share sensitive information

## Automated Security Measures

This repository implements several automated security measures:

### Secret Scanning
- TruffleHog and Gitleaks scan for exposed secrets
- Runs on every push and PR
- Configured in `.github/workflows/security.yml`

### Dependency Scanning
- Dependabot automatically checks for vulnerable dependencies
- Weekly scans configured in `.github/dependabot.yml`
- Automated PRs for security updates

### Code Scanning
- CodeQL analysis for security vulnerabilities
- Semgrep for static application security testing
- Runs on push, PR, and scheduled basis

### Vulnerability Alerts
- GitHub Advanced Security features enabled
- Automatic vulnerability detection
- Email notifications for security issues

## Security Headers

For production deployments, ensure these security headers are set:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Known Security Considerations

### Current Implementation

This is a static website with:
- Client-side JavaScript
- No server-side processing
- No user authentication
- No database

### Potential Risks

1. **XSS**: Ensure user input is sanitized if added
2. **CSRF**: N/A for static content
3. **Dependency Vulnerabilities**: Monitored by Dependabot
4. **Mixed Content**: Ensure all resources use HTTPS

## Disclosure Policy

- We will acknowledge your report within 48 hours
- We will provide a detailed response within 7 days
- We will notify you when the vulnerability is fixed
- We will credit you in the security advisory (if desired)

## Security Hall of Fame

We appreciate security researchers who responsibly disclose vulnerabilities. Contributors will be acknowledged here (with permission).

---

## Contact

For security concerns that don't fit the above categories, please open an issue or contact the maintainers directly.

**Last Updated**: January 3, 2026
