import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Simulated trending TikTok videos data
    // In a real application, this would fetch from TikTok's API
    const trendingVideos = [
      {
        title: "POV: When the beat drops perfectly",
        viewCount: 45600000,
        link: "https://www.tiktok.com/@user/video/7321456789012345678"
      },
      {
        title: "This recipe changed my life! #cookinghacks",
        viewCount: 38900000,
        link: "https://www.tiktok.com/@user/video/7321456789012345679"
      },
      {
        title: "Wait for it... 😱",
        viewCount: 34200000,
        link: "https://www.tiktok.com/@user/video/7321456789012345680"
      },
      {
        title: "How to train your dog in 60 seconds",
        viewCount: 29800000,
        link: "https://www.tiktok.com/@user/video/7321456789012345681"
      },
      {
        title: "Dance tutorial that went viral overnight",
        viewCount: 27500000,
        link: "https://www.tiktok.com/@user/video/7321456789012345682"
      },
      {
        title: "Life hack you NEED to know",
        viewCount: 25100000,
        link: "https://www.tiktok.com/@user/video/7321456789012345683"
      },
      {
        title: "Before and After transformation 💪",
        viewCount: 22700000,
        link: "https://www.tiktok.com/@user/video/7321456789012345684"
      },
      {
        title: "Comedy skit that's too relatable",
        viewCount: 21300000,
        link: "https://www.tiktok.com/@user/video/7321456789012345685"
      },
      {
        title: "Travel vlog: Hidden paradise found",
        viewCount: 19800000,
        link: "https://www.tiktok.com/@user/video/7321456789012345686"
      },
      {
        title: "Pet reactions compilation 🐕🐈",
        viewCount: 18400000,
        link: "https://www.tiktok.com/@user/video/7321456789012345687"
      }
    ];

    return NextResponse.json(trendingVideos);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch trending videos' },
      { status: 500 }
    );
  }
}
