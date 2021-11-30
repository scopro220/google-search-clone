export default function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile"
      className="h-10 w-10 rounded-full transition duration-150 transform hover:scale-125"
    />
  );
}
