/**
 * @name AboutMeFix
 * @authorLink https://github.com/00-XPRT-00
 * @version 1.0.0
 * @website https://github.com/00-XPRT-00/AboutMeFix
 * @source https://github.com/00-XPRT-00/About-Me-Fix/releases/latest/download/AboutMeFix.plugin.js
 */

const config = {
  info: {
    name: "AboutMeFix",
    authors: [
      {
        name: "XTREME",
        discord_id: "376329923259924490",
      },
    ],
    github_raw:
      "https://raw.githubusercontent.com/00-XPRT-00/AboutMeFix/master/AboutMeFix.plugin.js",
    version: "1.0.0",
    description:
      "Does as the name suggests, fixes the About Me section cutting off before the end.",
  },
};

module.exports = !global.ZeresPluginLibrary
  ? class {
      constructor() {
        this._config = config;
      }
      load() {
        BdApi.alert("AboutMeFix plugin enabled");
      }
      start() {}
      stop() {}
    }
  : (([Plugin, API]) => {
      const { PluginUtilities } = API;
      class plugin extends Plugin {
        constructor() {
          super();
        }
        onStart() {
          PluginUtilities.addStyle(
            "aboutme",
            `
                .clamped-2ZePhX {
                    display: inherit;
                }`
          );
        }
        onStop() {
          PluginUtilities.removeStyle("aboutme");
        }
      }
      return plugin;
    })(global.ZeresPluginLibrary.buildPlugin(config));
