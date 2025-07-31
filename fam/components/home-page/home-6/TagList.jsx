const TagList = () => {
  const tags = [
    { color: "rgba(255, 130, 130, 0.13)", text: "menjadi top 1 di Google Search" },
    { color: "rgba(73, 230, 213, 0.13)", text: "All in One Ads (Google & Meta)" },
    { color: "rgba(73, 179, 230, 0.13)", text: "Ekonomis" },
    { color: "rgba(251, 208, 80, 0.15)", text: "Report setiap Minggu" },
    { color: "rgba(213, 126, 255, 0.15)", text: "Terpercaya" },
    { color: "rgba(189, 231, 122, 0.15)", text: "Meningkatkan Branding" },
    { color: "rgba(255, 152, 152, 0.15)", text: "tidak perlu hire team Marketing sendiri" },
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="#">
            <span style={{ backgroundColor: tag.color }}>{tag.text}</span>
          </a>
        </li>
      ))}
      <li>&amp; more…</li>
    </ul>
  );
};

export default TagList;
