'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingVideos();
  }, []);

  const fetchTrendingVideos = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/trending');
      if (!response.ok) {
        throw new Error('Failed to fetch trending videos');
      }
      const data = await response.json();
      setVideos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, -apple-system, sans-serif', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
        Top 10 Trending TikTok Videos
      </h1>

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '18px' }}>
          Loading trending videos...
        </div>
      )}

      {error && (
        <div style={{
          backgroundColor: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#c00', margin: 0 }}>{error}</p>
          <button
            onClick={fetchTrendingVideos}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#00f2ea',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && videos.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#000', color: 'white' }}>
                <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600', width: '60px' }}>Rank</th>
                <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Title</th>
                <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600', width: '150px' }}>View Count</th>
                <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600', width: '150px' }}>Link</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video, index) => (
                <tr key={index} style={{
                  borderBottom: index < videos.length - 1 ? '1px solid #eee' : 'none',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{ padding: '15px', fontWeight: 'bold', fontSize: '18px' }}>
                    {index + 1}
                  </td>
                  <td style={{ padding: '15px' }}>
                    {video.title}
                  </td>
                  <td style={{ padding: '15px', fontWeight: '500' }}>
                    {video.viewCount.toLocaleString()}
                  </td>
                  <td style={{ padding: '15px' }}>
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#00f2ea',
                        textDecoration: 'none',
                        fontWeight: '500',
                        display: 'inline-block',
                        padding: '6px 12px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '4px',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#00f2ea';
                        e.target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#f0f0f0';
                        e.target.style.color = '#00f2ea';
                      }}
                    >
                      Watch Video
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginTop: '30px', textAlign: 'center', color: '#666', fontSize: '14px' }}>
        Data refreshed on page load. Reload to see latest trending videos.
      </div>
    </div>
  );
}
