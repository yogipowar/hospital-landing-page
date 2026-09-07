const img = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const images = {
  nurse: img('nurse.jpg'),
  seniorDoctor: img('senior-doctor.jpg'),
  motherChild: img('mother-child.jpg'),
  consult: img('consult.jpg'),
  surgeons: img('surgeons.jpg'),
  cardiology: img('cardiology.jpg'),
  neurology: img('neurology.jpg'),
  dental: img('dental.jpg'),
  pediatric: img('pediatric.jpg'),
  maternity: img('maternity.jpg'),
  therapy: img('therapy.jpg'),
  doc1: img('doc1.jpg'),
  doc2: img('doc2.jpg'),
  doc3: img('doc3.jpg'),
  doc4: img('doc4.jpg'),
  avatar: img('avatar.jpg'),
  avatar2: img('avatar2.jpg'),
  avatar3: img('avatar3.jpg'),
  blog1: img('blog1.jpg'),
  blog2: img('blog2.jpg'),
  blog3: img('blog3.jpg'),
  blog4: img('blog4.jpg'),
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]
