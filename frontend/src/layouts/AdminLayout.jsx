function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px" }}>Admin Sidebar</aside>
      <main style={{ flex: 1 }}>
        <header>Admin Topbar</header>
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
