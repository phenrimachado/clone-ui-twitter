interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

export function Tweet({ user, children, likes }: TweetProps) {
  return (
    <div className="tweet" style={{ borderRadius: 8 }}>
      <strong>{user}</strong>
      <p>{children}</p>
      <button>Like {likes ?? 0}</button>
    </div>
  );
}