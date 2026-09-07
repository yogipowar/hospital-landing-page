const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M18.2 3H21l-6.5 7.4L22 21h-5.8l-4.5-5.9L6.2 21H3.4l7-8L2 3h5.9l4.1 5.4L18.2 3zm-1 16.2h1.6L7 4.7H5.3l11.9 14.5z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M6.5 9H4V20h2.5V9zM5.2 4C4.3 4 3.5 4.8 3.5 5.8S4.3 7.5 5.2 7.5 7 6.7 7 5.8 6.2 4 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.4-1.8-2.4s-2 .9-2 2.5V20H11.3s.1-9.3 0-10.2H14v1.4c.5-.8 1.6-1.6 3.3-1.6 2.3 0 3.7 1.4 3.7 4.5V20z" />
    </svg>
  ),
}

export const socialLinks = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'twitter', label: 'Twitter' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
]

export default function SocialIcon({ name }) {
  return icons[name] || null
}
