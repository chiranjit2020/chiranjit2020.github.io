// ===== BOOT SEQUENCE =====
const bootMessages = [
    "Initializing CK_OS v2.0...",
    "Loading kernel modules...",
    "Mounting filesystem: /portfolio",
    "Starting services: [nginx] [node] [mongodb]",
    "Bootstrapping UI components...",
    "Injecting personality: success",
    "System ready. Welcome.",
];

function runBoot() {
    const logEl = document.getElementById("bootLog");
    const bar = document.getElementById("bootBar");
    let i = 0;
    const total = bootMessages.length;

    function step() {
        if (i >= total) {
            setTimeout(() => {
                document.getElementById("bootScreen").style.opacity = "0";
                document.getElementById("bootScreen").style.transition = "opacity 0.6s ease";
                setTimeout(() => {
                    document.getElementById("bootScreen").style.display = "none";
                    document.getElementById("app").style.display = "block";
                    initApp();
                }, 650);
            }, 400);
            return;
        }
        const line = document.createElement("div");
        line.className = "boot-line";
        line.textContent = bootMessages[i];
        logEl.appendChild(line);
        logEl.scrollTop = logEl.scrollHeight;
        bar.style.width = ((i + 1) / total * 100) + "%";
        i++;
        setTimeout(step, 200 + Math.random() * 150);
    }
    step();
}

// ===== APP INIT =====
function initApp() {
    initCursor();
    initNav();
    initHero();
    initAbout();
    initSkills();
    initProjects();
    initExperience();
    initContact();
    initChat();
    initScrollReveal();
    registerServiceWorker();
}

// ===== CURSOR =====
function initCursor() {
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursorDot");
    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener("mousemove", (e) => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px)`;
    });

    function animateCursor() {
        cx += (mx - cx) * 0.12;
        cy += (my - cy) * 0.12;
        cursor.style.transform = `translate(${cx}px, ${cy}px)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll("a, button, .skill-card, .project-card").forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("expanded"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("expanded"));
    });
}

// ===== NAVIGATION =====
function initNav() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(a => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.classList.remove("open");
            hamburger.classList.remove("active");
            const target = document.querySelector(a.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });
}

// ===== HERO =====
function initHero() {
    const roles = ["Fullstack Developer", "Frontend Engineer", "Backend Architect", "Founder @ CODEWORM", "Open Source Builder"];
    let ri = 0;
    const roleEl = document.getElementById("roleCycle");

    function cycleRole() {
        roleEl.style.opacity = "0";
        setTimeout(() => {
            ri = (ri + 1) % roles.length;
            roleEl.textContent = roles[ri];
            roleEl.style.opacity = "1";
        }, 400);
    }
    setInterval(cycleRole, 2500);
}

// ===== ABOUT =====
function initAbout() {
    const json = {
        name: "Chiranjit Karmakar",
        alias: "CK",
        role: "Fullstack Developer",
        location: "Kolkata, India",
        background: "Electrical Engg. → Web Dev",
        experience: "9+ years",
        founded: "CODEWORM Training",
        languages: ["JavaScript", "PHP", "Python", "Go"],
        interests: ["open_source", "teaching", "building_products"],
        available: true
    };

    const pre = document.getElementById("aboutJson");
    const str = JSON.stringify(json, null, 2);
    let i = 0;

    function typeJson() {
        if (i < str.length) {
            pre.textContent += str[i];
            i++;
            setTimeout(typeJson, 12);
        }
    }

    const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            typeJson();
            obs.disconnect();
        }
    }, { threshold: 0.3 });
    obs.observe(document.getElementById("about"));
}

// ===== SKILLS =====
function initSkills() {
    const grid = document.getElementById("skillsGrid");

    function renderSkills(filter) {
        grid.innerHTML = "";
        const filtered = filter === "all" ? DATA.skills : DATA.skills.filter(s => s.category === filter);
        filtered.forEach((skill, idx) => {
            const card = document.createElement("div");
            card.className = "skill-card";
            card.setAttribute("data-category", skill.category);
            card.style.animationDelay = `${idx * 40}ms`;
            card.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar-wrap">
          <div class="skill-bar" style="width:0%" data-level="${skill.level}%"></div>
        </div>
        <div class="skill-level">${skill.level}%</div>
      `;
            grid.appendChild(card);
        });

        setTimeout(() => {
            document.querySelectorAll(".skill-bar").forEach(bar => {
                bar.style.width = bar.dataset.level;
            });
        }, 100);
    }

    renderSkills("all");

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderSkills(btn.dataset.filter);
        });
    });
}

// ===== PROJECTS =====
function initProjects() {
    const grid = document.getElementById("projectsGrid");

    DATA.projects.forEach((proj, idx) => {
        const card = document.createElement("div");
        card.className = "project-card reveal";
        card.innerHTML = `
      <div class="proj-header">
        <span class="proj-id">${proj.id}</span>
        <span class="proj-status status-${proj.status}">${proj.status}</span>
        <span class="proj-year">${proj.year}</span>
      </div>
      <h3 class="proj-name">${proj.name}</h3>
      <p class="proj-desc">${proj.desc}</p>
      <div class="proj-tags">
        ${proj.tags.map(t => `<span class="proj-tag">${t}</span>`).join("")}
      </div>
      <a href="${proj.link}" class="proj-link">view_project →</a>
    `;
        grid.appendChild(card);
    });
}

// ===== EXPERIENCE =====
function initExperience() {
    const timeline = document.getElementById("timeline");

    DATA.experience.forEach((xp, idx) => {
        const item = document.createElement("div");
        item.className = "timeline-item reveal";
        item.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-meta">
          <span class="timeline-year">${xp.year}</span>
          <span class="timeline-commit">${xp.commit}</span>
        </div>
        <h3 class="timeline-role">${xp.role}</h3>
        <div class="timeline-org">@ ${xp.org}</div>
        <p class="timeline-desc">${xp.desc}</p>
      </div>
    `;
        timeline.appendChild(item);
    });
}

// ===== CONTACT =====
function initContact() {
    const btn = document.getElementById("contactSubmit");
    const feedback = document.getElementById("formFeedback");

    btn.addEventListener("click", () => {
        const name = document.getElementById("cName").value.trim();
        const email = document.getElementById("cEmail").value.trim();
        const msg = document.getElementById("cMsg").value.trim();

        if (!name || !email || !msg) {
            feedback.textContent = "$ error: all fields required";
            feedback.className = "form-feedback error";
            return;
        }

        btn.textContent = "executing...";
        btn.disabled = true;
        setTimeout(() => {
            feedback.textContent = "$ success: message queued. CK will respond soon!";
            feedback.className = "form-feedback success";
            btn.textContent = "./send_message.sh";
            btn.disabled = false;
            document.getElementById("cName").value = "";
            document.getElementById("cEmail").value = "";
            document.getElementById("cMsg").value = "";
        }, 1500);
    });
}

// ===== AI CHATBOT =====
function initChat() {
    const fab = document.getElementById("chatFab");
    const panel = document.getElementById("chatPanel");
    const closeBtn = document.getElementById("chatClose");
    const sendBtn = document.getElementById("chatSend");
    const input = document.getElementById("chatInput");

    fab.addEventListener("click", () => {
        panel.classList.toggle("open");
        if (panel.classList.contains("open")) input.focus();
    });

    closeBtn.addEventListener("click", () => panel.classList.remove("open"));

    sendBtn.addEventListener("click", sendChat);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") sendChat(); });
}

async function sendChat() {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");
    const q = input.value.trim();
    if (!q) return;

    input.value = "";
    appendMsg("user", q);

    const typing = appendMsg("assistant", "...", true);

    const systemPrompt = `You are the AI assistant for Chiranjit Karmakar's portfolio website. 
Your name is "CK-AI". Answer questions about Chiranjit in a friendly, concise, and slightly witty way. 
Keep answers under 100 words unless details are needed.

About Chiranjit:
- Fullstack developer with 9+ years experience
- Skills: HTML5, CSS3, JavaScript, React, Next.js, Node.js, Express, MongoDB, PHP, MySQL, WordPress, Python, Go, Tailwind, Bootstrap, jQuery, Linux, Bash, SEO, Photoshop
- Background: Electrical Engineer turned Web Developer
- Founded CODEWORM — an online training center for aspiring developers
- Location: Kolkata, India
- Contact: +91 89186 69308
- Available for freelance projects, full-time roles, and collaborations
- Passionate about teaching, building products, and open source
- Projects include e-commerce platforms, SaaS apps, WordPress themes, REST APIs

Keep responses conversational, helpful, and in terminal/dev style. Use "CK" to refer to Chiranjit.`;

    try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                system: systemPrompt,
                messages: [{ role: "user", content: q }]
            })
        });

        const data = await res.json();
        const reply = data.content?.map(b => b.text || "").join("") || "Error fetching response.";
        typing.querySelector(".msg-text").textContent = reply;
        typing.classList.remove("typing");
    } catch (err) {
        typing.querySelector(".msg-text").textContent = "Connection error. Try again.";
        typing.classList.remove("typing");
    }

    messages.scrollTop = messages.scrollHeight;
}

function appendMsg(role, text, isTyping = false) {
    const messages = document.getElementById("chatMessages");
    const el = document.createElement("div");
    el.className = `chat-msg ${role}${isTyping ? " typing" : ""}`;
    el.innerHTML = `<span class="msg-prompt">${role === "user" ? "you$" : "ck_ai$"}</span><span class="msg-text">${text}</span>`;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
}

function askSuggestion(q) {
    document.getElementById("chatInput").value = q;
    sendChat();
    document.querySelectorAll(".chat-suggestions").forEach(el => el.remove());
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal, .section").forEach(el => observer.observe(el));
}

// ===== SERVICE WORKER =====
function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").catch(() => { });
    }
}

// ===== START =====
document.addEventListener("DOMContentLoaded", runBoot);



//Form Submit
const form = document.getElementById('form');
const result = document.getElementById('formFeedback');

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.style.display = "inline-block";
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.style.display = "inline-block";
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});