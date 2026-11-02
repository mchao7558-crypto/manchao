const mediaBaseUrl = "https://github.com/mchao7558-crypto/manchao/releases/download/media-v1";

const projectData = {
  reset: {
    kicker: "AI 漫剧 · 原创世界观",
    title: "归零纪元",
    image: "assets/reset-world.jpg",
    video: `${mediaBaseUrl}/manju-theme-fengzhuangmaibo-web.mp4`,
    description: "以 2147 年人类与 AI 的“归零契约”为背景，完成科幻末世题材的角色、场景、道具、故事板与视频内容。项目重点是建立可持续的世界观视觉语言，并在多镜头中保持人物和空间一致性。",
    facts: [["工作范围", "概念 / 角色 / 场景 / 视频"], ["视觉方向", "科幻 · 末世 · 机甲"], ["核心能力", "世界观与连续叙事"]]
  },
  yunxiu: {
    kicker: "AI 真人剧 · 古风仙侠",
    title: "云岫归墟",
    image: "assets/yunxiu-guixu.jpg",
    video: `${mediaBaseUrl}/zhenren-02-sushimojie-web.mp4`,
    description: "围绕七日死劫、宿世魔劫与天谕归墟三集故事，完成角色、场景、道具、故事板、主题曲与视频的整体视觉生产。项目聚焦真人质感、东方幻想氛围与角色跨镜头稳定性。",
    facts: [["工作范围", "策划 / 设定 / 分镜 / 成片"], ["视觉方向", "东方幻想 · 电影感"], ["核心能力", "全流程 AI 影像"]]
  },
  tvc: {
    kicker: "AI TVC · 商业影像",
    title: "商业影像实验",
    image: "assets/automotive-tvc.jpg",
    video: `${mediaBaseUrl}/tvc-car-web.mp4`,
    description: "围绕汽车、饮品、3D 与企业传播等不同命题进行 AI 商业影像实践，从核心概念与关键帧出发，推进镜头运动、节奏、动态效果和后期整合。",
    facts: [["内容类型", "汽车 / 饮品 / 3D / 宣传片"], ["工作范围", "视觉概念 / 动态 / 剪辑"], ["核心能力", "快速风格验证"]]
  },
  brand: {
    kicker: "品牌视觉 · 商业设计",
    title: "商业视觉设计",
    image: "assets/fragrance-banner.jpg",
    video: null,
    description: "覆盖品牌视觉、电商主图与详情页、海报、Banner 等多种商业传播场景。以信息层级与品牌气质为基础，让 AI 生成素材经过精修后真正进入可交付的设计系统。",
    facts: [["内容类型", "品牌 / 电商 / 海报 / Banner"], ["工作范围", "创意 / 设计 / 精修 / 输出"], ["核心能力", "商业落地与一致性"]]
  }
};

const videoLibrary = [
  { category: "comic", label: "AI 漫剧", title: "第 1 集《穹顶之下》", poster: "assets/video-reset-episode-01-cover.webp", video: null, externalUrl: "https://v.douyin.com/KH45VkuECn4/", externalLabel: "在抖音观看第 1 集" },
  { category: "comic", label: "AI 漫剧", title: "第 2 集《方舟》", poster: "assets/video-reset-episode-01-cover.webp", video: null, externalUrl: "https://v.douyin.com/Tt5LqSWkHxs/", externalLabel: "在抖音观看第 2 集" },
  { category: "comic", label: "AI 漫剧", title: "第 3 集《出城》", poster: "assets/video-reset-episode-01-cover.webp", video: null, externalUrl: "https://v.douyin.com/fgJKVvFAsSw/", externalLabel: "在抖音观看第 3 集" },
  { category: "comic", label: "AI 漫剧 · 主题曲", title: "《风撞脉搏》", poster: "assets/video-reset-theme-cover.webp", video: null, externalUrl: "https://v.douyin.com/Z3zHLgJVUdI/", externalLabel: "在抖音观看完整 MV" },
  { category: "comic", label: "AI 漫剧 · 片尾曲", title: "《跑向天光》", poster: "assets/video-reset-ending-cover.webp", video: null, externalUrl: "https://v.douyin.com/ht8xtj8k_AY/", externalLabel: "在抖音观看片尾曲" },
  { category: "live", label: "AI 真人剧", title: "第 1 集《七日死劫》", poster: "assets/video-yunxiu-episode-cover.webp", video: null, externalUrl: "https://v.douyin.com/w9QlA3l5S5Y/", externalLabel: "在抖音观看第 1 集" },
  { category: "live", label: "AI 真人剧", title: "第 2 集《宿世魔劫》", poster: "assets/video-yunxiu-episode-cover.webp", video: null, externalUrl: "https://v.douyin.com/USFDwJdKWsM/", externalLabel: "在抖音观看第 2 集" },
  { category: "live", label: "AI 真人剧", title: "第 3 集《天谕归墟》", poster: "assets/video-yunxiu-episode-cover.webp", video: null, externalUrl: "https://v.douyin.com/iM1YtqVkf6E/", externalLabel: "在抖音观看第 3 集" },
  { category: "live", label: "AI 真人剧 · 主题曲", title: "《天谕成雪》", poster: "assets/video-yunxiu-theme-cover.webp", video: null, externalUrl: "https://v.douyin.com/_cfk0iCYdws/", externalLabel: "在抖音观看主题曲" },
  { category: "live", label: "AI 真人剧 · 片尾曲", title: "《千年一误》", poster: "assets/video-yunxiu-ending-cover.webp", video: null, externalUrl: "https://v.douyin.com/fHnm6HUJIH8/", externalLabel: "在抖音观看片尾曲" },
  { category: "tvc", label: "AI TVC", title: "3D 视觉实验", poster: "assets/video-3d.jpg", video: `${mediaBaseUrl}/tvc-3d-web.mp4` },
  { category: "tvc", label: "AI TVC", title: "二次元视觉", poster: "assets/video-anime.jpg", video: `${mediaBaseUrl}/tvc-anime-web.mp4` },
  { category: "tvc", label: "AI TVC", title: "奶茶广告", poster: "assets/video-milktea.jpg", video: `${mediaBaseUrl}/tvc-milktea-web.mp4` },
  { category: "tvc", label: "AI TVC", title: "企业宣传片", poster: "assets/video-corporate.jpg", video: `${mediaBaseUrl}/tvc-corporate-web.mp4` },
  { category: "tvc", label: "AI TVC", title: "汽车广告", poster: "assets/automotive-tvc.jpg", video: `${mediaBaseUrl}/tvc-car-web.mp4` },
  { category: "tvc", label: "AI TVC", title: "文旅宣传片", poster: "assets/video-travel.jpg", video: `${mediaBaseUrl}/tvc-tourism-web.mp4` },
  { category: "tvc", label: "AI TVC", title: "一镜到底", poster: "assets/video-onetake.jpg", video: `${mediaBaseUrl}/tvc-onetake-web.mp4` }
];

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

if (header) {
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 28);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }));
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const dialog = document.querySelector("[data-dialog]");
if (dialog) {
  const dialogImage = dialog.querySelector("[data-dialog-image]");
  const dialogMedia = dialog.querySelector(".dialog-media");
  const dialogVideo = dialog.querySelector("[data-dialog-video]");
  const videoCover = dialog.querySelector("[data-video-cover]");
  const videoCoverImage = dialog.querySelector("[data-video-cover-image]");
  const videoStatus = dialog.querySelector("[data-video-status]");
  const dialogKicker = dialog.querySelector("[data-dialog-kicker]");
  const dialogTitle = dialog.querySelector("[data-dialog-title]");
  const dialogDescription = dialog.querySelector("[data-dialog-description]");
  const dialogFacts = dialog.querySelector("[data-dialog-facts]");

  document.querySelectorAll("[data-project]").forEach((card) => {
    card.querySelector("button").addEventListener("click", () => {
      const data = projectData[card.dataset.project];
      dialogImage.src = data.image;
      dialogImage.alt = `${data.title}项目视觉`;
      videoCoverImage.src = data.image;
      videoCoverImage.alt = `${data.title}视频封面`;
      dialogMedia.classList.toggle("is-video", Boolean(data.video));
      dialogMedia.classList.remove("is-playing");
      videoStatus.classList.remove("show");
      videoStatus.textContent = "";
      if (data.video) {
        dialogVideo.poster = data.image;
        dialogVideo.src = data.video;
        dialogVideo.load();
      } else {
        dialogVideo.removeAttribute("src");
        dialogVideo.removeAttribute("poster");
        dialogVideo.load();
      }
      dialogKicker.textContent = data.kicker;
      dialogTitle.textContent = data.title;
      dialogDescription.textContent = data.description;
      dialogFacts.innerHTML = data.facts.map(([label, value]) => `<p><span>${label}</span><b>${value}</b></p>`).join("");
      dialog.showModal();
      document.body.style.overflow = "hidden";
    });
  });

  const closeDialog = () => {
    dialogVideo.pause();
    dialogVideo.currentTime = 0;
    dialogMedia.classList.remove("is-playing");
    dialog.close();
    document.body.style.overflow = "";
  };

  videoCover.addEventListener("click", async () => {
    videoStatus.textContent = "正在加载视频…";
    videoStatus.classList.add("show");
    try {
      await dialogVideo.play();
    } catch {
      videoStatus.textContent = "视频未能播放，请刷新后重试";
    }
  });

  dialogVideo.addEventListener("playing", () => {
    dialogMedia.classList.add("is-playing");
    videoStatus.classList.remove("show");
  });

  dialogVideo.addEventListener("error", () => {
    dialogMedia.classList.remove("is-playing");
    videoStatus.textContent = "视频加载失败，请刷新后重试";
    videoStatus.classList.add("show");
  });
  dialog.querySelector(".dialog-close").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeDialog();
  });
  dialog.addEventListener("close", () => { document.body.style.overflow = ""; });
}

const copyButton = document.querySelector("[data-copy]");
const toast = document.querySelector(".toast");
if (copyButton && toast) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      toast.textContent = "电话已复制";
    } catch {
      toast.textContent = copyButton.dataset.copy;
    }
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1800);
  });
}

const videoGrid = document.querySelector("[data-video-grid]");
const filterButtons = document.querySelectorAll("[data-video-filter]");
const galleryDialog = document.querySelector("[data-video-gallery-dialog]");

if (videoGrid && galleryDialog) {
  videoGrid.innerHTML = videoLibrary.map((item, index) => {
    const cover = `
      <span class="video-library-thumb">
        <img src="${item.poster}" alt="${item.title}封面" loading="lazy">
        ${item.externalUrl ? '<span class="video-library-platform">抖音</span>' : '<span class="video-library-play">▶</span>'}
        <span class="video-library-number">${String(index + 1).padStart(2, "0")}</span>
      </span>
      <span class="video-library-copy">
        <span><p>${item.label}</p><h3>${item.title}</h3></span>
        <span>↗</span>
      </span>`;

    return `
      <article class="video-library-card" data-video-category="${item.category}">
        ${item.externalUrl ? `
          <div class="video-library-static">${cover}</div>
          <a class="video-external-link" href="${item.externalUrl}" target="_blank" rel="noopener noreferrer" aria-label="${item.externalLabel}：${item.title}">
            <span>${item.externalLabel}</span><span aria-hidden="true">↗</span>
          </a>` : `
          <button type="button" data-video-index="${index}" aria-label="播放${item.title}">
            ${cover}
          </button>`}
      </article>`;
  }).join("");

  const galleryStage = galleryDialog.querySelector("[data-video-gallery-stage]");
  const galleryVideo = galleryDialog.querySelector("[data-gallery-video]");
  const galleryCover = galleryDialog.querySelector("[data-gallery-cover]");
  const galleryCoverImage = galleryDialog.querySelector("[data-gallery-cover-image]");
  const galleryStatus = galleryDialog.querySelector("[data-gallery-status]");
  const galleryTitle = galleryDialog.querySelector("[data-gallery-title]");
  const galleryCategory = galleryDialog.querySelector("[data-gallery-category]");
  const galleryIndex = galleryDialog.querySelector("[data-gallery-index]");

  const closeGallery = () => {
    galleryVideo.pause();
    galleryVideo.currentTime = 0;
    galleryStage.classList.remove("is-playing");
    galleryDialog.close();
    document.body.style.overflow = "";
  };

  videoGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video-index]");
    if (!button) return;
    const index = Number(button.dataset.videoIndex);
    const item = videoLibrary[index];
    galleryTitle.textContent = item.title;
    galleryCategory.textContent = item.label;
    galleryIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${videoLibrary.length}`;
    galleryCoverImage.src = item.poster;
    galleryCoverImage.alt = `${item.title}视频封面`;
    galleryVideo.poster = item.poster;
    galleryVideo.src = item.video;
    galleryStage.classList.remove("is-playing");
    galleryStatus.classList.remove("show");
    galleryStatus.textContent = "";
    galleryVideo.load();
    galleryDialog.showModal();
    document.body.style.overflow = "hidden";
  });

  filterButtons.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.videoFilter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    videoGrid.querySelectorAll("[data-video-category]").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.videoCategory !== filter;
    });
  }));

  galleryCover.addEventListener("click", async () => {
    galleryStatus.textContent = "正在加载视频…";
    galleryStatus.classList.add("show");
    try {
      await galleryVideo.play();
    } catch {
      galleryStatus.textContent = "视频未能播放，请刷新后重试";
    }
  });

  galleryVideo.addEventListener("playing", () => {
    galleryStage.classList.add("is-playing");
    galleryStatus.classList.remove("show");
  });

  galleryVideo.addEventListener("error", () => {
    galleryStage.classList.remove("is-playing");
    galleryStatus.textContent = "视频加载失败，请刷新后重试";
    galleryStatus.classList.add("show");
  });

  galleryDialog.querySelector(".gallery-dialog-close").addEventListener("click", closeGallery);
  galleryDialog.addEventListener("click", (event) => {
    const rect = galleryDialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeGallery();
  });
  galleryDialog.addEventListener("close", () => { document.body.style.overflow = ""; });
}

const imageGallery = Array.isArray(window.galleryData) ? window.galleryData : [];
const imageGrid = document.querySelector("[data-image-grid]");
const imageFilterButtons = document.querySelectorAll("[data-image-filter]");
const imageViewer = document.querySelector("[data-image-viewer]");

if (imageGrid && imageViewer && imageGallery.length) {
  const safeText = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  imageGrid.innerHTML = imageGallery.map((item, index) => `
    <article class="image-work-card" data-image-category="${item.category}">
      <button type="button" data-image-index="${index}" aria-label="查看${safeText(item.title)}原图">
        <span class="image-work-thumb">
          <img src="${item.thumbnail}" alt="${safeText(item.title)}" loading="lazy">
          <span class="image-work-expand">↗</span>
        </span>
        <span class="image-work-copy">
          <p>${safeText(item.categoryLabel)} · ${safeText(item.subcategory)}</p>
          <h3>${safeText(item.title)}</h3>
        </span>
      </button>
    </article>
  `).join("");

  const viewerStage = imageViewer.querySelector(".image-viewer-stage");
  const viewerImage = imageViewer.querySelector("[data-image-viewer-image]");
  const viewerTitle = imageViewer.querySelector("[data-image-viewer-title]");
  const viewerCategory = imageViewer.querySelector("[data-image-viewer-category]");
  const viewerIndex = imageViewer.querySelector("[data-image-viewer-index]");
  let currentImageIndex = 0;
  let activeImageIndexes = imageGallery.map((_, index) => index);

  const showImage = (index) => {
    currentImageIndex = index;
    const item = imageGallery[index];
    viewerStage.classList.add("loading");
    viewerImage.src = item.original;
    viewerImage.alt = item.title;
    viewerTitle.textContent = item.title;
    viewerCategory.textContent = `${item.categoryLabel} · ${item.subcategory}`;
    const position = activeImageIndexes.indexOf(index) + 1;
    viewerIndex.textContent = `${String(position).padStart(2, "0")} / ${activeImageIndexes.length}`;
  };

  const moveImage = (direction) => {
    const position = activeImageIndexes.indexOf(currentImageIndex);
    const next = (position + direction + activeImageIndexes.length) % activeImageIndexes.length;
    showImage(activeImageIndexes[next]);
  };

  viewerImage.addEventListener("load", () => viewerStage.classList.remove("loading"));
  viewerImage.addEventListener("error", () => viewerStage.classList.remove("loading"));

  imageGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-image-index]");
    if (!button) return;
    showImage(Number(button.dataset.imageIndex));
    imageViewer.showModal();
    document.body.style.overflow = "hidden";
  });

  imageFilterButtons.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.imageFilter;
    imageFilterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    activeImageIndexes = [];
    imageGrid.querySelectorAll("[data-image-category]").forEach((card, index) => {
      const visible = filter === "all" || card.dataset.imageCategory === filter;
      card.hidden = !visible;
      if (visible) activeImageIndexes.push(index);
    });
  }));

  const closeImageViewer = () => {
    imageViewer.close();
    document.body.style.overflow = "";
  };

  imageViewer.querySelector(".image-viewer-close").addEventListener("click", closeImageViewer);
  imageViewer.querySelector(".image-viewer-prev").addEventListener("click", () => moveImage(-1));
  imageViewer.querySelector(".image-viewer-next").addEventListener("click", () => moveImage(1));
  imageViewer.addEventListener("click", (event) => {
    const rect = imageViewer.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) closeImageViewer();
  });
  imageViewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") moveImage(-1);
    if (event.key === "ArrowRight") moveImage(1);
  });
  imageViewer.addEventListener("close", () => { document.body.style.overflow = ""; });
}

const entryShell = document.querySelector(".entry-shell");
if (entryShell && window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  entryShell.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 2;
    const y = (event.clientY / window.innerHeight - .5) * 2;
    document.querySelectorAll(".entry-frame").forEach((frame, index) => {
      const depth = (index + 1) * 5;
      frame.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  });
}
