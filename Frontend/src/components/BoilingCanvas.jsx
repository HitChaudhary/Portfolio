import { useEffect, useRef } from 'react';

class BoilingTextEngine {
  constructor(canvasId, isDark) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.lines = ['HIT', 'CHAUDHARY'];
    this.config = {
      fontSize: 75,
      lineGap: 28,
      letterGap: 16,
      strokeWidth: 8,
      color: isDark ? '#ffffff' : '#121214',
      boilSpeedMs: 70,
      wordOrbitRadius: 8.0,
      wordOrbitSpeed: 0.004,
      distortionAmount: 4.0,
      maxRotationDeg: 3.0,
    };
    this.wordOrbitAngle = 0;
    this.letters = [];
    this._alive = true;
    this.init();
  }

  init() {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resize();
    this._resizeHandler = () => this.resize();
    window.addEventListener('resize', this._resizeHandler);
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  destroy() {
    this._alive = false;
    window.removeEventListener('resize', this._resizeHandler);
  }

  resize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 400) {
      this.config.fontSize = 32; this.config.letterGap = 6;
      this.config.lineGap = 16; this.config.strokeWidth = 4;
    } else if (screenWidth < 640) {
      this.config.fontSize = 44; this.config.letterGap = 10;
      this.config.lineGap = 20; this.config.strokeWidth = 5.5;
    } else {
      this.config.fontSize = 75; this.config.letterGap = 16;
      this.config.lineGap = 28; this.config.strokeWidth = 8;
    }
    const width = Math.min(screenWidth * 0.95, 900);
    const height =
      this.lines.length * this.config.fontSize +
      (this.lines.length - 1) * this.config.lineGap +
      40;
    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.scale(this.dpr, this.dpr);
    this.width = width;
    this.height = height;
    this.buildLetterMap();
  }

  buildLetterMap() {
    this.letters = [];
    const { fontSize, lineGap, letterGap } = this.config;
    const totalHeight =
      this.lines.length * fontSize + (this.lines.length - 1) * lineGap;
    let startY = (this.height - totalHeight) / 2 + fontSize * 0.8;

    this.lines.forEach((lineText, lineIdx) => {
      const estimatedLetterWidth = fontSize * 0.65;
      const lineWidth =
        lineText.length * estimatedLetterWidth +
        (lineText.length - 1) * letterGap;
      let startX = (this.width - lineWidth) / 2;

      for (let i = 0; i < lineText.length; i++) {
        const char = lineText[i];
        this.letters.push({
          char,
          baseX: startX + i * (estimatedLetterWidth + letterGap),
          baseY: startY + lineIdx * (fontSize + lineGap),
          lastBoilTime: 0,
          boilSeed: Math.random() * 100,
          currentAngle:
            (Math.random() - 0.5) *
            (this.config.maxRotationDeg * (Math.PI / 180)),
          strokes: this.getCharStrokes(char, estimatedLetterWidth, fontSize),
        });
      }
    });
  }

  getCharStrokes(char, w, h) {
    const pad = w * 0.1,
      left = pad,
      right = w - pad,
      top = -h * 0.75,
      bottom = 0,
      midY = top / 2,
      midX = w / 2;
    const maps = {
      H: [
        [[left, top], [left, bottom]],
        [[right, top], [right, bottom]],
        [[left, midY], [right, midY]],
      ],
      I: [
        [[midX, top], [midX, bottom]],
        [[left, top], [right, top]],
        [[left, bottom], [right, bottom]],
      ],
      T: [
        [[midX, top], [midX, bottom]],
        [[left, top], [right, top]],
      ],
      C: [
        [[right, top + 10], [left + 5, top], [left, midY], [left + 5, bottom], [right, bottom - 10]],
      ],
      A: [
        [[midX, top], [left, bottom]],
        [[midX, top], [right, bottom]],
        [[left + 8, midY + 5], [right - 8, midY + 5]],
      ],
      U: [
        [[left, top], [left, bottom - 10], [midX, bottom], [right, bottom - 10], [right, top]],
      ],
      D: [
        [[left, top], [left, bottom]],
        [[left, top], [right - 5, top + 10], [right, midY], [right - 5, bottom - 10], [left, bottom]],
      ],
      R: [
        [[left, top], [left, bottom]],
        [[left, top], [right, top + 8], [right, midY - 5], [left, midY]],
        [[left + 5, midY], [right, bottom]],
      ],
      Y: [
        [[left, top], [midX, midY]],
        [[right, top], [midX, midY]],
        [[midX, midY], [midX, bottom]],
      ],
    };
    return maps[char] || [];
  }

  drawStaticStroke(ctx, points) {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      if (points.length === 2) {
        ctx.lineTo(points[i][0], points[i][1]);
      } else {
        const xc = (points[i - 1][0] + points[i][0]) / 2;
        const yc = (points[i - 1][1] + points[i][1]) / 2;
        ctx.quadraticCurveTo(points[i - 1][0], points[i - 1][1], xc, yc);
      }
    }
    ctx.stroke();
  }

  drawJitteredStroke(ctx, points, seed) {
    if (points.length < 2) return;
    ctx.beginPath();
    const getJitter = (idx) => {
      const val = Math.sin(seed * 17.1 + idx * 43.7) * 43758.5453;
      return (
        (val - Math.floor(val)) * this.config.distortionAmount -
        this.config.distortionAmount / 2
      );
    };
    ctx.moveTo(points[0][0] + getJitter(0), points[0][1] + getJitter(1));
    for (let i = 1; i < points.length; i++) {
      const nextX = points[i][0] + getJitter(i * 2);
      const nextY = points[i][1] + getJitter(i * 2 + 1);
      if (points.length === 2) {
        ctx.lineTo(nextX, nextY);
      } else {
        const xc =
          (points[i - 1][0] + points[i][0]) / 2 + getJitter(i * 3);
        const yc =
          (points[i - 1][1] + points[i][1]) / 2 + getJitter(i * 3 + 1);
        ctx.quadraticCurveTo(
          points[i - 1][0],
          points[i - 1][1],
          xc,
          yc
        );
      }
    }
    ctx.stroke();
  }

  animate(timestamp) {
    if (!this._alive) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = this.config.color;
    this.ctx.lineWidth = this.config.strokeWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    if (this.reducedMotion) {
      this.letters.forEach((item) => {
        this.ctx.save();
        this.ctx.translate(item.baseX, item.baseY);
        item.strokes.forEach((stroke) => {
          this.drawStaticStroke(this.ctx, stroke);
        });
        this.ctx.restore();
      });
      requestAnimationFrame(this.animate);
      return;
    }

    this.wordOrbitAngle += this.config.wordOrbitSpeed;
    const globalOffsetX =
      Math.cos(this.wordOrbitAngle) * this.config.wordOrbitRadius;
    const globalOffsetY =
      Math.sin(this.wordOrbitAngle) * this.config.wordOrbitRadius;

    this.letters.forEach((item) => {
      if (timestamp - item.lastBoilTime > this.config.boilSpeedMs) {
        item.boilSeed = Math.random() * 1000;
        item.currentAngle =
          (Math.random() - 0.5) *
          (this.config.maxRotationDeg * (Math.PI / 180));
        item.lastBoilTime = timestamp;
      }
      this.ctx.save();
      this.ctx.translate(
        item.baseX + globalOffsetX,
        item.baseY + globalOffsetY
      );
      this.ctx.rotate(item.currentAngle);
      item.strokes.forEach((stroke, strokeIdx) => {
        this.drawJitteredStroke(
          this.ctx,
          stroke,
          item.boilSeed + strokeIdx * 12
        );
      });
      this.ctx.restore();
    });
    requestAnimationFrame(this.animate);
  }
}

export default function BoilingCanvas({ isDark }) {
  const engineRef = useRef(null);
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
    if (engineRef.current) {
      engineRef.current.config.color = isDark ? '#ffffff' : '#121214';
    }
  }, [isDark]);

  useEffect(() => {
    const canvasEl = document.getElementById('boiling-canvas');
    if (!canvasEl) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!engineRef.current) engineRef.current = new BoilingTextEngine('boiling-canvas', isDarkRef.current);
      } else {
        engineRef.current?.destroy();
        engineRef.current = null;
      }
    });
    observer.observe(canvasEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center w-full overflow-hidden my-1">
      <canvas id="boiling-canvas" />
    </div>
  );
}
