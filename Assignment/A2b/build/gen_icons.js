const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fs = require("fs");
const {
  FiMic, FiUsers, FiBookOpen, FiHome, FiKey, FiEye, FiMessageCircle,
  FiShuffle, FiTarget, FiFileText, FiTrendingUp, FiCheckCircle, FiClock
} = require("react-icons/fi");

const icons = {
  mic: FiMic,
  users: FiUsers,
  book: FiBookOpen,
  home: FiHome,
  key: FiKey,
  eye: FiEye,
  message: FiMessageCircle,
  shuffle: FiShuffle,
  target: FiTarget,
  file: FiFileText,
  trend: FiTrendingUp,
  check: FiCheckCircle,
  clock: FiClock,
};

const outDir = __dirname + "/icons";
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

(async () => {
  for (const [name, Icon] of Object.entries(icons)) {
    const svg = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Icon, { color: "#FFFFFF", size: 256 })
    );
    const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">${svg.replace(/<svg[^>]*>|<\/svg>/g, "")}</svg>`;
    await sharp(Buffer.from(fullSvg)).png().toFile(`${outDir}/${name}.png`);
    console.log("wrote", name);
  }
})();
