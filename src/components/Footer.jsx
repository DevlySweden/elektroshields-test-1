const Footer = ({ site }) => {
  const year = new Date().getFullYear()
  const text = site.footer.textTemplate
    .replace('{YEAR}', year)
    .replace('{COMPANY}', site.company.name)

  return (
    <footer className="footer">
      <div className="container">{text}</div>
    </footer>
  )
}

export default Footer
