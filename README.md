# 有限进步 · 小游戏合集

**在线玩：<https://ec2ez4rd.github.io/games/>**

一个页面放下我们做的所有网页小游戏：手机打开直接玩，电脑上竖屏游戏会装进一个手机框里。
每个游戏都是纯网页版：不登录、不放广告、不上报数据，存档留在玩家自己的浏览器里。

这个仓库只有大厅本身（页面、构建和发布脚本）和打包好的游戏（`gh-pages` 分支）。
游戏的源码不在这里，在本机和这个文件夹并排的各个游戏目录里（`games.json` 的 `dir`）。

## 网页版和 TapTap 版

接过 TapTap 的游戏都有一个 `src/platform/target.ts`，构建时定死是哪一版：

| 命令（在游戏目录里跑） | 产物 | TapTap |
|---|---|---|
| `npm run build:web` | `dist-web/`，给这个大厅用 | 全部关掉：不碰 TapTap 运行时，没有云存档、成就、排行榜、激励视频、TapDB，连 ID 都不打进包里 |
| `npm run build:taptap` | `dist-taptap/`，上传 TapTap 的包 | 和以前一样 |
| `npm run dev` | 开发服务器 | 和以前一样：运行时找 TapTap，没有就用模拟广告 |

所以以后要把某个游戏放上 TapTap，照常在它的目录里 `npm run build:taptap` 打包上传就行，网页版不受影响。

## 更新大厅

```bash
npm install                      # 第一次：装二维码生成器
node scripts/build.mjs           # 构建全部游戏的网页版，拼成 site/
node scripts/build.mjs punch     # 只重建一个游戏（其他的保留）
node scripts/smoke.mjs           # 无头浏览器把每个游戏在手机、电脑尺寸各开一遍：报错、404、外部请求
node scripts/check.mjs           # 发布前检查：本机路径、个人信息、密钥、TapDB ID 不能出现在 site/ 里
node scripts/publish.mjs         # 检查通过后把 site/ 提交到 gh-pages 分支并推送
```

本地预览：`node scripts/serve.mjs`，打开 <http://localhost:5400/games/>（和线上一样挂在 `/games/` 下面）。

其他：

- `node scripts/covers.mjs [slug]`：重新截封面（`covers/<slug>.jpg`，用游戏自己的网页版截开局画面）。
- 大厅的标题字体是裁剪过的得意黑，只含用到的字。`games.json` 里加了新字，构建会提示，这时先跑
  `node scripts/build.mjs --hub-only`，再跑 `python scripts/fonts.py`（需要 fontTools 和 brotli）。

## 加一个新游戏

1. 游戏要能当纯静态网页跑：相对路径（Vite 用 `base: './'`），不依赖后端。
2. 接了 TapTap 的游戏：加 `src/platform/target.ts`，`tapRuntime()` 开头 `if (WEB_BUILD) return null;`，
   `package.json` 加 `build:web`（照现有游戏抄）。
3. 在 `games.json` 里加一项：`slug`（网址里的名字）、`title`、`pitch`、`genre`（要有对应的 `g-<类型>` 图标，
   在 `portal/icons.svg`）、`screen`（`portrait` / `landscape` / `desktop`）、`status`（`live` / `beta` / `wip`）、
   `accent`、`dir`，以及 `build` + `out`，或者纯静态游戏用 `copy`。
4. `node scripts/build.mjs <slug>`、`node scripts/covers.mjs <slug>`、`node scripts/build.mjs --hub-only`，看一眼，发布。

## 许可

大厅的字体和各游戏用到的第三方代码、字体的许可原文，构建时汇总在 `site/licenses.txt`（线上是
<https://ec2ez4rd.github.io/games/licenses.txt>）。游戏本身的美术、音乐和代码版权归作者所有。
