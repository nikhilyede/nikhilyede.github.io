
/* =========================================
   EDIT YOUR PERSONAL DETAILS HERE
========================================= */

const ME = {
  name: "Nikhil Yede",
  initials: "NY",

  roles: [
    "AWS ENGINEER",
    "DEVOPS ENGINEER",
    "CLOUD AUTOMATION"
  ],

  headline: "Building reliable cloud infrastructure and automated pipelines.",

  summary: "Fresher focused on AWS, CI/CD, containers and infrastructure as code, preparing to step into a cloud or DevOps engineer role.",

  location: "Pune, Maharashtra, India",

  open: "Open to AWS / DevOps roles",

  email: "you@example.com",

  github: "https://github.com/your-username",

  linkedin: "https://linkedin.com/in/your-username",

  resume: "#",

  path: "STUDENT → CLOUD & DEVOPS ENGINEER",

  about: "I am a fresher who enjoys turning manual work into repeatable automation. Through hands-on projects I have deployed apps on EC2, ECS and S3, written infrastructure as code with Terraform, built CI/CD pipelines and set up monitoring and alerts. I am looking for a team where I can learn from experienced engineers and contribute from day one.",

  stats: [
    ["EDUCATION", "B.E./B.Tech"],
    ["CLOUD", "AWS"],
    ["PROJECTS", "6+"],
    ["CERT", "AWS CCP (in progress)"]
  ]
};


/* =========================================
   TECHNICAL SKILLS
========================================= */

const SKILLS = [

  [
    "CLOUD (AWS)",
    [
      ["EC2", 1],
      ["S3", 1],
      ["IAM", 1],
      ["VPC", 1],
      ["ECS / Fargate", 1],
      ["Lambda", 1],
      ["CloudWatch", 1],
      ["Route 53", 1],
      ["CloudFront", 1]
    ]
  ],

  [
    "DEVOPS & AUTOMATION",
    [
      ["Docker"],
      ["Kubernetes"],
      ["Terraform"],
      ["Ansible"],
      ["GitHub Actions"],
      ["Jenkins"],
      ["Prometheus"],
      ["Grafana"]
    ]
  ],

  [
    "FOUNDATIONS",
    [
      ["Linux"],
      ["Bash"],
      ["Python"],
      ["Git"],
      ["GitHub"],
      ["Networking"],
      ["YAML"],
      ["VS Code"]
    ]
  ]

];


/* =========================================
   PROJECTS
   Replace # with your actual project links
========================================= */

const PROJECTS = [

  [
    "STATIC SITE ON S3 + CLOUDFRONT",

    "Hosted a static website on S3 behind CloudFront with HTTPS and a custom domain, deployed automatically on every push.",

    ["AWS", "S3", "CloudFront", "GitHub Actions"],

    "#",
    "#"
  ],

  [
    "CONTAINERISED APP ON ECS FARGATE",

    "Dockerised a web app, pushed images to ECR and ran it on Fargate behind an Application Load Balancer.",

    ["Docker", "ECR", "ECS", "ALB"],

    "#",
    "#"
  ],

  [
    "3-TIER VPC WITH TERRAFORM",

    "Built a VPC with public and private subnets, NAT, security groups and EC2 instances using reusable Terraform modules.",

    ["Terraform", "VPC", "EC2", "IAM"],

    "#",
    "#"
  ],

  [
    "JENKINS CI/CD TO EC2",

    "A Jenkins pipeline that builds, tests and deploys a Node.js app to EC2 after each commit.",

    ["Jenkins", "Git", "Bash", "EC2"],

    "#",
    "#"
  ],

  [
    "KUBERNETES ON EKS",

    "Deployed a multi-pod app on EKS with a Service, Ingress and rolling updates.",

    ["EKS", "kubectl", "Helm", "Docker"],

    "#",
    "#"
  ],

  [
    "MONITORING AND ALERTING STACK",

    "Collected metrics and logs with CloudWatch and Grafana, with SNS alerts for high CPU and failed health checks.",

    ["CloudWatch", "Grafana", "SNS", "Prometheus"],

    "#",
    "#"
  ]

];


/* =========================================
   EDUCATION
========================================= */

const EDU = [

  [
    "2025 — PRESENT",
    "Your current course or certification",
    "Your institution, city",
    1
  ],

  [
    "IN PROGRESS",
    "AWS Certified Cloud Practitioner",
    "Foundational AWS certification",
    1
  ],

  [
    "COMPLETED 2026",
    "B.E./B.Tech in your branch",
    "Your college, your university",
    0
  ]

];


/* =========================================
   HELPER FUNCTIONS
========================================= */

const $ = id => document.getElementById(id);

const reduce = matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));


/* =========================================
   FILL WEBSITE CONTENT
========================================= */

document.title = ME.name + " | AWS & DevOps";

$("logo").textContent = ME.initials;

$("bootlogo").textContent = ME.initials;

$("name").textContent = ME.name;

$("heroP").textContent = ME.headline;

$("heroSub").textContent = ME.summary;

$("loc").textContent = ME.location;

$("open").textContent = ME.open;

$("resume").href = ME.resume;

$("resume2").href = ME.resume;

$("path").textContent = ME.path;

$("aboutP").textContent = ME.about;


/* Personal statistics */

$("stats").innerHTML = ME.stats.map(s => `
  <div class="stat">
    <span>${s[0]}</span>
    <b>${s[1]}</b>
  </div>
`).join("");


/* Technical skills */

$("groups").innerHTML = SKILLS.map((g, i) => `
  <div class="box group">

    <h3>
      <small>0${i + 1}</small>
      ${g[0]}
    </h3>

    ${g[1].map(s => `
      <span class="pill${s[1] ? " aws" : ""}">
        ${s[0]}
      </span>
    `).join("")}

  </div>
`).join("");


/* Project cards */

$("projGrid").innerHTML = PROJECTS.map((p, i) => `
  <article class="box proj">

    <div class="n">
      PROJECT 0${i + 1}
    </div>

    <h3>${p[0]}</h3>

    <p>${p[1]}</p>

    <ul>
      ${p[2].map(t => `
        <li>${t}</li>
      `).join("")}
    </ul>

    <div class="row">

      <a href="${p[4]}" target="_blank" rel="noopener">
        VIEW PROJECT
      </a>

      <a href="${p[3]}" target="_blank" rel="noopener">
        GITHUB
      </a>

    </div>

  </article>
`).join("");


/* Education timeline */

$("tl").innerHTML = EDU.map(e => `
  <div class="${e[3] ? "live" : ""}">

    <small>${e[0]}</small>

    <h3>${e[1]}</h3>

    <p>${e[2]}</p>

  </div>
`).join("");


/* Contact information */

$("info").innerHTML = `

  <div>
    <b>LOC</b>
    ${ME.location}
  </div>

  <a href="mailto:${ME.email}">
    <b>MAIL</b>
    ${ME.email}
  </a>

  <a href="${ME.github}" target="_blank" rel="noopener">
    <b>GIT</b>
    ${ME.github.replace("https://", "")}
  </a>

  <a href="${ME.linkedin}" target="_blank" rel="noopener">
    <b>IN</b>
    ${ME.linkedin.replace("https://", "")}
  </a>

`;


/* Footer */

$("fname").textContent =
  ME.name + " — AWS & DEVOPS ENGINEER";

$("flinks").innerHTML = `

  <a href="${ME.github}" target="_blank" rel="noopener">
    GitHub
  </a>

  <a href="${ME.linkedin}" target="_blank" rel="noopener">
    LinkedIn
  </a>

  <a href="mailto:${ME.email}">
    Email
  </a>

`;

$("copy").textContent =
  "© " + new Date().getFullYear() + " " + ME.name;


/* =========================================
   BOOT ANIMATION
========================================= */

(async function boot() {

  const el = $("boot");

  if (reduce) {
    el.classList.add("off");
    return;
  }

  const lines = [

    "INITIALIZING CLOUD ENVIRONMENT...",

    "LOADING PIPELINES...",

    "CONNECTING TO ap-south-1...",

    "ALL SYSTEMS ONLINE"

  ];

  for (let i = 0; i < lines.length; i++) {

    const p = Math.round(
      (i + 1) / lines.length * 100
    );

    $("bootlog").textContent =
      lines.slice(0, i + 1).join("\n");

    $("bootlog").style.whiteSpace = "pre";

    $("bootbar").style.width = p + "%";

    $("bootpct").textContent = p + "%";

    await sleep(380);

  }

  el.classList.add("off");

})();

setTimeout(() => {
  $("boot").classList.add("off");
}, 3000);


/* =========================================
   TYPING ANIMATION
========================================= */

(async function typer() {

  const t = $("typed");

  if (reduce) {
    t.textContent = ME.roles[0];
    return;
  }

  let r = 0;

  while (true) {

    const w = ME.roles[r % ME.roles.length];

    // Type text

    for (let i = 1; i <= w.length; i++) {

      t.textContent = w.slice(0, i);

      await sleep(70);

    }

    await sleep(1600);

    // Delete text

    for (let i = w.length; i >= 0; i--) {

      t.textContent = w.slice(0, i);

      await sleep(35);

    }

    r++;

    await sleep(300);

  }

})();


/* =========================================
   INTERACTIVE DEVOPS OPS CENTER
========================================= */

const STAGES = [

  "SOURCE",
  "BUILD",
  "TEST",
  "DEPLOY",
  "VERIFY"

];


const MSG = [

  [
    "git pull origin main",
    "Checked out commit a3f9c21"
  ],

  [
    "docker build -t app:latest .",
    "Image built and pushed to ECR"
  ],

  [
    "pytest --quiet",
    "24 passed, 0 failed"
  ],

  [
    "terraform apply -auto-approve",
    "ECS service updated, 2/2 tasks running"
  ],

  [
    "curl -f /health",
    "200 OK from load balancer"
  ]

];


/* Pipeline stages */

$("stg").innerHTML = STAGES.map(s => `
  <div class="st">${s}</div>
`).join("");


/* Dashboard tiles */

const tiles = {

  sys: [
    "SYSTEM STATUS",
    "HEALTHY",
    ""
  ],

  build: [
    "LAST BUILD",
    "IDLE",
    "warn"
  ],

  region: [
    "REGION",
    "ap-south-1",
    ""
  ],

  alarms: [
    "ALARMS",
    "0 ACTIVE",
    ""
  ]

};


function drawTiles() {

  $("tiles").innerHTML =
    Object.values(tiles).map(t => `

      <div class="tile">

        <small>${t[0]}</small>

        <b class="${t[2]}">${t[1]}</b>

      </div>

    `).join("");

}

drawTiles();


/* Terminal logging */

const logEl = $("log");


function log(text, cls) {

  const s = document.createElement("span");

  if (cls) {
    s.className = cls;
  }

  s.textContent = text + "\n";

  logEl.appendChild(s);

  logEl.scrollTop = logEl.scrollHeight;

}


log(
  "Console ready. Run the pipeline to start.",
  "c"
);


let busy = false;


/* Pipeline execution */

async function runPipe(failAt) {

  if (busy) return;

  busy = true;

  $("run").disabled = true;

  $("fail").disabled = true;

  const els = [...$("stg").children];

  els.forEach(e => {
    e.className = "st";
  });


  tiles.build = [
    "LAST BUILD",
    "RUNNING",
    "warn"
  ];

  tiles.sys = [
    "SYSTEM STATUS",
    "DEPLOYING",
    "warn"
  ];

  drawTiles();


  log(
    "\n▶ Pipeline #" +
    Math.floor(100 + Math.random() * 900) +
    " started",
    "c"
  );


  for (let i = 0; i < STAGES.length; i++) {

    els[i].className = "st run";

    log("$ " + MSG[i][0]);

    await sleep(reduce ? 50 : 750);


    // Simulate pipeline failure

    if (i === failAt) {

      els[i].className = "st fail";

      log(
        "✗ " + STAGES[i] +
        " failed: 2 tests failed",
        "bad"
      );

      log(
        "Rolled back. Production unchanged.",
        "w"
      );


      tiles.build = [
        "LAST BUILD",
        "FAILED",
        "bad"
      ];

      tiles.sys = [
        "SYSTEM STATUS",
        "HEALTHY",
        ""
      ];

      tiles.alarms = [
        "ALARMS",
        "1 ACTIVE",
        "bad"
      ];

      drawTiles();

      busy = false;

      $("run").disabled = false;

      $("fail").disabled = false;

      return;

    }


    // Successful stage

    els[i].className = "st ok";

    log(
      "✓ " + MSG[i][1],
      "ok"
    );

  }


  // Successful deployment

  log(
    "Deployment complete.",
    "ok"
  );

  tiles.build = [
    "LAST BUILD",
    "PASSED",
    ""
  ];

  tiles.sys = [
    "SYSTEM STATUS",
    "HEALTHY",
    ""
  ];

  tiles.alarms = [
    "ALARMS",
    "0 ACTIVE",
    ""
  ];

  drawTiles();

  busy = false;

  $("run").disabled = false;

  $("fail").disabled = false;

}


/* Pipeline buttons */

$("run").onclick = () => {
  runPipe(-1);
};

$("fail").onclick = () => {
  runPipe(2);
};


/* =========================================
   CONTACT FORM
   Opens visitor's email application
========================================= */

$("form").addEventListener("submit", e => {

  e.preventDefault();

  const body =
    $("fm").value +
    "\n\nFrom: " +
    $("fn").value +
    " (" +
    $("fe").value +
    ")";

  location.href =
    "mailto:" +
    ME.email +
    "?subject=" +
    encodeURIComponent(
      "Portfolio message from " + $("fn").value
    ) +
    "&body=" +
    encodeURIComponent(body);

});


/* =========================================
   RESPONSIVE NAVIGATION
========================================= */

$("burger").onclick = () => {

  const o = $("menu").classList.toggle("open");

  $("burger").setAttribute(
    "aria-expanded",
    o
  );

};


$("menu").addEventListener("click", e => {

  if (e.target.tagName === "A") {

    $("menu").classList.remove("open");

    $("burger").setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* =========================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================= */

const links = [
  ...document.querySelectorAll(".menu a")
];


const io = new IntersectionObserver(
  es => {

    es.forEach(en => {

      if (en.isIntersecting) {

        links.forEach(a => {

          a.classList.toggle(
            "on",
            a.getAttribute("href") ===
            "#" + en.target.id
          );

        });

      }

    });

  },

  {
    rootMargin: "-45% 0px -50% 0px"
  }

);


document
  .querySelectorAll("header[id],section[id]")
  .forEach(s => io.observe(s));

