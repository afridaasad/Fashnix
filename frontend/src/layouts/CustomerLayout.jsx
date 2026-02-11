function CustomerLayout({ children }) {
  return (
    <div>
      <header>Customer Navbar</header>
      <main>{children}</main>
      <footer>Customer Footer</footer>
    </div>
  );
}

export default CustomerLayout;
