# 贡献指南 / Contributing Guide

感谢你对 OpenClaw 101 的关注！欢迎通过以下方式参与贡献：

##  快速开始

1. **Fork** 本仓库到你的 GitHub 账号下
2. **Clone** 到本地：
   ```bash
   git clone https://github.com/你的用户名/openclaw101.git
   cd openclaw101
   ```
3. 安装依赖：
   ```bash
   npm install
   npm run dev
   ```
4. 创建新分支：
   ```bash
   git checkout -b my-contribution
   ```

##  添加新资源

编辑 `src/data/resources.ts`，按照现有格式添加资源对象：

```typescript
{
  title: '资源标题',
  desc: '一句话描述',
  url: 'https://...',
  source: '来源名称',
  lang: 'zh',     // 'zh' 或 'en'
  category: 'getting-started',  // 见下方分类
  featured: false,  // 是否推荐展示
  tags: ['标签1', '标签2'],
}
```

### 资源分类

| 分类 | 说明 |
|------|------|
| `official` | 官方资源 |
| `getting-started` | 入门部署教程 |
| `channel-integration` | 平台接入（飞书/钉钉/Telegram 等） |
| `skill-dev` | 技能开发 |
| `video` | 视频教程 |
| `deep-dive` | 深度分析文章 |
| `tools` | 工具与插件 |
| `cloud-deploy` | 云平台部署教程 |

## 🌐 改进翻译

- 中文翻译文件：`src/locales/zh.json`
- 英文翻译文件：`src/locales/en.json`
- 页面内容同时维护在 `content/days/`（中文）和 `content/days-en/`（英文）

## 🐛 报告 Bug

- 在 [Issues](https://github.com/mengjian-github/openclaw101/issues) 中创建 Issue
- 请描述清楚：问题现象、复现步骤、预期行为
- 附上截图或日志（如适用）

## 💡 功能建议

- 在 [Issues](https://github.com/mengjian-github/openclaw101/issues) 中创建 Issue
- 描述你想要的功能和使用场景
- 如果有设计思路，欢迎一并提出

##  提交 PR

1. 确保你的修改在本地可以正常运行：`npm run build`
2. 提交 PR 并填写以下信息：
   - **修改内容**：简要说明做了什么改动
   - **修改类型**：资源添加 / Bug 修复 / 翻译改进 / 功能优化
   - **相关 Issue**：关联已有 Issue（如适用）
3. 等待 Review 和合并

## 🙏 致谢

每一位贡献者都会被记录在 [Contributors](https://github.com/mengjian-github/openclaw101/graphs/contributors) 列表中。感谢你的每一份贡献！

---

*OpenClaw 101 是开源社区项目，致力于做最好的中文 OpenClaw 资源聚合站。*
