import FacebookFeed from "./components/FacebookFeed";
import InstagramWidget from "./components/InstagramWidget";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        <FacebookFeed/>
        <InstagramWidget />
      </div>
    </>
  );
}
