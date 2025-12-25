export const metadata = {
  title: 'Top 10 Trending TikTok Videos',
  description: 'View the top 10 trending TikTok videos right now',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f5f5f5' }}>
        {children}
      </body>
    </html>
  );
}
