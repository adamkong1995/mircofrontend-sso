const navigationButtons = [
  { name: "Home", link: "/" },
  { name: "Child-Next", link: "/child-next" },
  { name: "Child-Nuxt", link: "/child-nuxt/home" },
];

const Navigation = () => {
  return (
    <div className="h-16 px-4 py-2">
      <div className="grid grid-cols-3 gap-4 flex items-center h-full">
        <h2>Navigation Component</h2>
        <div className="flex justify-center gap-6">
          {navigationButtons.map((button) => (
            <a key={button.name} href={button.link}>
              {button.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
