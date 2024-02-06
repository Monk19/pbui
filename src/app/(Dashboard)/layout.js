import Link from "next/link";
import Sidenav from "@/components/Sidenav";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="row main-container-layout">
        <div className="col-3 col-sm-md-3">
          <Sidenav />
        </div>
        <div className="col">{children}</div>
      </div>
      {/* Include shared UI here e.g. a header or sidebar */}
    </section>
  );
}
