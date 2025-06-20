export default function innerLayout({ children }) {
    return (
        <div className="innerpage">
            <div className="container">
            {children}
            </div>
        </div>
    );
  }