type TLayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TLayoutProps> = ({ children }) => {
  return <div className="w-full h-screen">{children}</div>;
};

export default Layout;
