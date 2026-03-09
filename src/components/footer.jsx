function Footer() {
  return (
    <footer className="mt-16 w-full border-t py-6 text-center text-sm"
      style={{
        borderColor: "var(--border-primary)",
        color: "var(--text-secondary)"
      }}
    >
      © {new Date().getFullYear()} Yusyfina Yuniarti. All Rights Reserved.
    </footer>
  );
}

export default Footer;