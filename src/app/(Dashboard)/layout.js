import Link from "next/link";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav>
        <ul>
          <Link href="/Dashboard">
            <li>Home</li>
          </Link>
          <Link href="/Dashboard/Folderpm">
            <li>Folder permissions</li>
          </Link>
        </ul>
      </nav>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      <nav>next layout</nav>
    </section>
  );
}
