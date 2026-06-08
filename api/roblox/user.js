export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const { username } = req.query;
  if (!username) { res.status(400).json({ error: 'missing username' }); return; }

  try {
    /* 1. resolve username -> userId */
    const searchRes = await fetch('https://users.roblox.com/v1/usernames/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ usernames: [username], excludeBannedUsers: false }),
    });
    const searchData = await searchRes.json();
    const found = searchData.data && searchData.data[0];
    if (!found) { res.status(200).json({ error: 'notfound' }); return; }

    const userId = found.id;

    /* 2. get full user profile */
    const [profileRes, avatarRes] = await Promise.all([
      fetch(`https://users.roblox.com/v1/users/${userId}`, {
        headers: { 'Accept': 'application/json' },
      }),
      fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=false`, {
        headers: { 'Accept': 'application/json' },
      }),
    ]);

    const profile = await profileRes.json();
    const avatarData = await avatarRes.json();

    const created = new Date(profile.created);
    const now = new Date();
    const days = Math.floor((now - created) / (1000 * 60 * 60 * 24));

    const avatarUrl = avatarData?.data?.[0]?.imageUrl || null;

    res.status(200).json({
      id: userId,
      name: profile.name,
      displayName: profile.displayName,
      description: profile.description || '',
      created: profile.created,
      days,
      avatarUrl,
    });
  } catch (e) {
    res.status(200).json({ error: 'apierr' });
  }
}
