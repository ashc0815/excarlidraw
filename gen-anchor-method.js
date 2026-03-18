// Generate Excalidraw JSON for Anchor-First Product Method video
// Frames: Hook → Anti-pattern → Phase 1 (Anchor) → Phase 2 (Define) → Phase 3 (Build) → Summary

const elements = [];
let id = 1;
function makeId() { return `elem_${id++}`; }
function seed() { return Math.floor(Math.random() * 2000000000); }

function rect(x, y, w, h, opts = {}) {
  return {
    id: makeId(), type: "rectangle", x, y, width: w, height: h, angle: 0,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: opts.backgroundColor || "transparent",
    fillStyle: opts.fillStyle || "solid",
    strokeWidth: opts.strokeWidth || 2,
    strokeStyle: opts.strokeStyle || "solid",
    roughness: 1, opacity: 100,
    groupIds: opts.groupIds || [],
    roundness: { type: 3 },
    seed: seed(), version: 1, versionNonce: seed(),
    isDeleted: false, boundElements: null, updated: Date.now(),
    link: null, locked: false,
  };
}

function diamond(x, y, w, h, opts = {}) {
  return {
    id: makeId(), type: "diamond", x, y, width: w, height: h, angle: 0,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: opts.backgroundColor || "transparent",
    fillStyle: opts.fillStyle || "solid",
    strokeWidth: opts.strokeWidth || 2,
    strokeStyle: opts.strokeStyle || "solid",
    roughness: 1, opacity: 100,
    groupIds: opts.groupIds || [],
    roundness: { type: 2 },
    seed: seed(), version: 1, versionNonce: seed(),
    isDeleted: false, boundElements: null, updated: Date.now(),
    link: null, locked: false,
  };
}

function ellipse(x, y, w, h, opts = {}) {
  return {
    id: makeId(), type: "ellipse", x, y, width: w, height: h, angle: 0,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: opts.backgroundColor || "transparent",
    fillStyle: opts.fillStyle || "solid",
    strokeWidth: opts.strokeWidth || 2,
    strokeStyle: opts.strokeStyle || "solid",
    roughness: 1, opacity: 100,
    groupIds: opts.groupIds || [],
    roundness: { type: 2 },
    seed: seed(), version: 1, versionNonce: seed(),
    isDeleted: false, boundElements: null, updated: Date.now(),
    link: null, locked: false,
  };
}

function text(x, y, content, opts = {}) {
  const fontSize = opts.fontSize || 20;
  return {
    id: makeId(), type: "text", x, y,
    width: opts.width || content.length * fontSize * 0.6,
    height: opts.height || fontSize * 1.4,
    angle: 0,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid", strokeWidth: 1, strokeStyle: "solid",
    roughness: 1, opacity: 100,
    groupIds: opts.groupIds || [],
    roundness: null,
    seed: seed(), version: 1, versionNonce: seed(),
    isDeleted: false, boundElements: null, updated: Date.now(),
    link: null, locked: false,
    text: content, fontSize,
    fontFamily: opts.fontFamily || 1,
    textAlign: opts.textAlign || "left",
    verticalAlign: "middle",
    containerId: null,
    originalText: content,
    autoResize: true,
    lineHeight: 1.25,
  };
}

function arrow(x1, y1, x2, y2, opts = {}) {
  return {
    id: makeId(), type: "arrow",
    x: x1, y: y1,
    width: x2 - x1, height: y2 - y1,
    angle: 0,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: opts.strokeWidth || 2,
    strokeStyle: opts.strokeStyle || "solid",
    roughness: 1, opacity: 100,
    groupIds: opts.groupIds || [],
    roundness: { type: 2 },
    seed: seed(), version: 1, versionNonce: seed(),
    isDeleted: false, boundElements: null, updated: Date.now(),
    link: null, locked: false,
    points: [[0, 0], [x2 - x1, y2 - y1]],
    lastCommittedPoint: null,
    startBinding: null, endBinding: null,
    startArrowhead: null,
    endArrowhead: "arrow",
  };
}

function line(x1, y1, x2, y2, opts = {}) {
  return {
    id: makeId(), type: "line",
    x: x1, y: y1,
    width: x2 - x1, height: y2 - y1,
    angle: 0,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: opts.strokeWidth || 2,
    strokeStyle: opts.strokeStyle || "solid",
    roughness: 1, opacity: 100,
    groupIds: opts.groupIds || [],
    roundness: { type: 2 },
    seed: seed(), version: 1, versionNonce: seed(),
    isDeleted: false, boundElements: null, updated: Date.now(),
    link: null, locked: false,
    points: [[0, 0], [x2 - x1, y2 - y1]],
    lastCommittedPoint: null,
    startBinding: null, endBinding: null,
    startArrowhead: null, endArrowhead: null,
  };
}

// ============================================================
// FRAME 1: Title / Hook (top area)
// ============================================================
const F1_Y = 0;

elements.push(text(50, F1_Y, "锚点先行产品法", { fontSize: 48, strokeColor: "#1e1e1e" }));
elements.push(text(50, F1_Y + 70, "Anchor-First Product Method", { fontSize: 24, strokeColor: "#868e96" }));
elements.push(text(50, F1_Y + 120, "90% 的 PM 定义产品时，第一步就走错了", { fontSize: 28, strokeColor: "#e03131" }));
elements.push(line(50, F1_Y + 170, 900, F1_Y + 170, { strokeColor: "#dee2e6", strokeWidth: 1 }));

// ============================================================
// FRAME 2: Anti-pattern (wrong path)
// ============================================================
const F2_Y = 200;

elements.push(text(50, F2_Y, "❌ 常见反模式", { fontSize: 32, strokeColor: "#e03131" }));

// Three circles: capability → market → product
const circles = [
  { x: 100, y: F2_Y + 80, label: "我有什么能力" },
  { x: 380, y: F2_Y + 80, label: "市场要什么" },
  { x: 660, y: F2_Y + 80, label: "做什么产品" },
];

circles.forEach(c => {
  elements.push(ellipse(c.x, c.y, 220, 70, { strokeColor: "#868e96", backgroundColor: "#fff5f5", fillStyle: "solid" }));
  elements.push(text(c.x + 20, c.y + 22, c.label, { fontSize: 18, strokeColor: "#868e96" }));
});

elements.push(arrow(325, F2_Y + 115, 375, F2_Y + 115, { strokeColor: "#868e96" }));
elements.push(arrow(605, F2_Y + 115, 655, F2_Y + 115, { strokeColor: "#868e96" }));

// Diverging arrows from "product"
const divergeBase = { x: 770, y: F2_Y + 80 };
elements.push(arrow(divergeBase.x + 110, divergeBase.y + 35, divergeBase.x + 220, divergeBase.y - 30, { strokeColor: "#fa5252", strokeStyle: "dashed" }));
elements.push(arrow(divergeBase.x + 110, divergeBase.y + 35, divergeBase.x + 230, divergeBase.y + 35, { strokeColor: "#fa5252", strokeStyle: "dashed" }));
elements.push(arrow(divergeBase.x + 110, divergeBase.y + 35, divergeBase.x + 220, divergeBase.y + 100, { strokeColor: "#fa5252", strokeStyle: "dashed" }));

elements.push(text(divergeBase.x + 230, divergeBase.y - 40, "平台？", { fontSize: 14, strokeColor: "#fa5252" }));
elements.push(text(divergeBase.x + 240, divergeBase.y + 25, "Agent？", { fontSize: 14, strokeColor: "#fa5252" }));
elements.push(text(divergeBase.x + 230, divergeBase.y + 90, "SaaS？", { fontSize: 14, strokeColor: "#fa5252" }));

elements.push(text(50, F2_Y + 180, "可能性空间无限大 → 每一轮讨论都在发散", { fontSize: 18, strokeColor: "#868e96" }));

// ============================================================
// FRAME 3: Correct path — Anchor → Define → Build
// ============================================================
const F3_Y = 450;

elements.push(text(50, F3_Y, "✅ 正确路径：锚 → 定 → 建", { fontSize: 32, strokeColor: "#2f9e44" }));

// Phase 1: Anchor (Blue)
const p1x = 50, p1y = F3_Y + 70;
elements.push(rect(p1x, p1y, 280, 200, { backgroundColor: "#d0ebff", strokeColor: "#1c7ed6", fillStyle: "solid" }));
elements.push(text(p1x + 20, p1y + 15, "🔵 Phase 1: 找锚", { fontSize: 22, strokeColor: "#1c7ed6" }));
elements.push(text(p1x + 20, p1y + 55, "\"谁已经在赚这个钱？\"", { fontSize: 16, strokeColor: "#1e1e1e" }));
elements.push(line(p1x + 20, p1y + 85, p1x + 260, p1y + 85, { strokeColor: "#74c0fc", strokeWidth: 1 }));
elements.push(text(p1x + 20, p1y + 95, "→ 用户画像具象化", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p1x + 20, p1y + 118, "→ 功能边界清晰化", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p1x + 20, p1y + 141, "→ 定价锚点确立", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p1x + 20, p1y + 164, "→ 差异化路径浮现", { fontSize: 14, strokeColor: "#495057" }));

// Phase 2: Define (Green)
const p2x = 380, p2y = F3_Y + 70;
elements.push(rect(p2x, p2y, 280, 200, { backgroundColor: "#d3f9d8", strokeColor: "#2f9e44", fillStyle: "solid" }));
elements.push(text(p2x + 20, p2y + 15, "🟢 Phase 2: 定义战场", { fontSize: 22, strokeColor: "#2f9e44" }));
elements.push(text(p2x + 20, p2y + 55, "\"他们做了什么？没做什么？\"", { fontSize: 16, strokeColor: "#1e1e1e" }));
elements.push(line(p2x + 20, p2y + 85, p2x + 260, p2y + 85, { strokeColor: "#69db7c", strokeWidth: 1 }));
elements.push(text(p2x + 20, p2y + 95, "① 能力矩阵拆解", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p2x + 20, p2y + 118, "② 护城河诊断", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p2x + 20, p2y + 141, "③ 缝隙定位", { fontSize: 14, strokeColor: "#495057" }));

// Phase 3: Build (Orange)
const p3x = 710, p3y = F3_Y + 70;
elements.push(rect(p3x, p3y, 280, 200, { backgroundColor: "#fff3bf", strokeColor: "#e8590c", fillStyle: "solid" }));
elements.push(text(p3x + 20, p3y + 15, "🟠 Phase 3: 精准构建", { fontSize: 22, strokeColor: "#e8590c" }));
elements.push(text(p3x + 20, p3y + 55, "\"在缝隙中做到无可替代\"", { fontSize: 16, strokeColor: "#1e1e1e" }));
elements.push(line(p3x + 20, p3y + 85, p3x + 260, p3y + 85, { strokeColor: "#ffc078", strokeWidth: 1 }));
elements.push(text(p3x + 20, p3y + 95, "Table Stakes → 及格就行", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p3x + 20, p3y + 118, "Differentiator → 60%资源", { fontSize: 14, strokeColor: "#495057" }));
elements.push(text(p3x + 20, p3y + 141, "Blue Ocean → 蓝海机会", { fontSize: 14, strokeColor: "#495057" }));

// Arrows between phases
elements.push(arrow(p1x + 280, p1y + 100, p2x, p2y + 100, { strokeColor: "#1c7ed6", strokeWidth: 3 }));
elements.push(arrow(p2x + 280, p2y + 100, p3x, p3y + 100, { strokeColor: "#2f9e44", strokeWidth: 3 }));

// ============================================================
// FRAME 4: Method alignment — classic frameworks mapped
// ============================================================
const F4_Y = 730;

elements.push(text(50, F4_Y, "🧠 经典方法论验证：起点都不是\"我\"", { fontSize: 28, strokeColor: "#5f3dc4" }));

// Method cards
const methods = [
  { name: "April Dunford", q: "客户不用我时用什么？", phase: "Phase 1", color: "#d0ebff", border: "#1c7ed6" },
  { name: "JTBD (Christensen)", q: "用户雇佣产品做什么？", phase: "Phase 1-2", color: "#d0ebff", border: "#1c7ed6" },
  { name: "蓝海战略 (ERRC)", q: "消除/减少/提升/创造？", phase: "Phase 2", color: "#d3f9d8", border: "#2f9e44" },
  { name: "DHM (Netflix)", q: "愉悦+难复制+有利润？", phase: "Phase 2-3", color: "#fff3bf", border: "#e8590c" },
  { name: "LNO (Shreyas)", q: "哪些任务有杠杆效应？", phase: "Phase 3", color: "#fff3bf", border: "#e8590c" },
];

methods.forEach((m, i) => {
  const mx = 50 + i * 200;
  const my = F4_Y + 50;
  elements.push(rect(mx, my, 185, 130, { backgroundColor: m.color, strokeColor: m.border, fillStyle: "solid" }));
  elements.push(text(mx + 10, my + 10, m.name, { fontSize: 14, strokeColor: m.border }));
  elements.push(text(mx + 10, my + 40, m.q, { fontSize: 12, strokeColor: "#495057", width: 165 }));
  elements.push(line(mx + 10, my + 85, mx + 175, my + 85, { strokeColor: m.border, strokeWidth: 1 }));
  elements.push(text(mx + 10, my + 95, `对应 ${m.phase}`, { fontSize: 13, strokeColor: m.border }));
});

// ============================================================
// FRAME 5: Key insight + CTA
// ============================================================
const F5_Y = 950;

elements.push(line(50, F5_Y, 900, F5_Y, { strokeColor: "#dee2e6", strokeWidth: 1 }));

// Insight box
elements.push(rect(50, F5_Y + 20, 900, 80, { backgroundColor: "#f8f0fc", strokeColor: "#7950f2", fillStyle: "solid", strokeWidth: 3 }));
elements.push(text(80, F5_Y + 42, "💡 没有锚点的创新是漫游，有锚点的创新是冲刺", { fontSize: 26, strokeColor: "#5f3dc4" }));

// Comparison
const cmpY = F5_Y + 130;
elements.push(rect(50, cmpY, 420, 100, { backgroundColor: "#fff5f5", strokeColor: "#fa5252", fillStyle: "solid" }));
elements.push(text(70, cmpY + 15, "❌ 无锚点", { fontSize: 22, strokeColor: "#e03131" }));
elements.push(text(70, cmpY + 50, "讨论了 3 周，产品形态仍在摇摆", { fontSize: 16, strokeColor: "#868e96" }));

elements.push(rect(530, cmpY, 420, 100, { backgroundColor: "#d3f9d8", strokeColor: "#2f9e44", fillStyle: "solid" }));
elements.push(text(550, cmpY + 15, "✅ 有锚点", { fontSize: 22, strokeColor: "#2f9e44" }));
elements.push(text(550, cmpY + 50, "3 小时内全部收敛，直接进入构建", { fontSize: 16, strokeColor: "#495057" }));

elements.push(text(475, cmpY + 35, "VS", { fontSize: 24, strokeColor: "#868e96" }));

// CTA
elements.push(text(50, F5_Y + 270, "📌 收藏这个框架  |  关注我看更多 AI PM 实战方法论", { fontSize: 22, strokeColor: "#1c7ed6" }));

// ============================================================
// Output
// ============================================================
const excalidrawData = {
  type: "excalidraw",
  version: 2,
  source: "gen-anchor-method.js",
  elements,
  appState: {
    gridSize: null,
    viewBackgroundColor: "#ffffff",
  },
  files: {},
};

const fs = require('fs');
fs.writeFileSync(
  '/root/.openclaw/agents/topic-scout/workspace/anchor-method.excalidraw',
  JSON.stringify(excalidrawData, null, 2)
);
console.log('Generated anchor-method.excalidraw with', elements.length, 'elements');
