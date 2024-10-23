import Footer from "./footer";
import GlobalNavigationBar from "./global-navigation-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GlobalNavigationBar />

      <main className="flex min-h-[calc(100vh-8rem)] flex-col">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
