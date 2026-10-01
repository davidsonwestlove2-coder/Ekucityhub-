const main=document.querySelector("#main");
// EkuCityHub logo
const logoImg = document.createElement("img");
logoImg.src = "assets/logo.png";
logoImg.alt = "EkuCityHub";
logoImg.style.width = "52px";
logoImg.style.height = "52px";
logoImg.style.objectFit = "contain";
logoImg.style.display = "block";

const siteHeader = document.querySelector("header");
if (siteHeader) {
  const existingLogo = siteHeader.querySelector("img");
  if (!existingLogo) {
    siteHeader.insertBefore(logoImg, siteHeader.firstChild);
  }
}
const drawer=document.querySelector("#drawer"),scrim=document.querySelector("#scrim");
let cloud={ads:[],news:[],events:[],reels:[],services:[],requests:[]};
let session=null;
document.querySelector("#menuBtn").onclick=()=>{drawer.classList.add("open");scrim.classList.add("show");drawer.setAttribute("aria-hidden","false")};
document.querySelector("#closeMenu").onclick=closeDrawer;scrim.onclick=closeDrawer;
function closeDrawer(){drawer.classList.remove("open");scrim.classList.remove("show");drawer.setAttribute("aria-hidden","true")}
document.querySelectorAll("[data-route]").forEach(a=>a.addEventListener("click",()=>{closeDrawer();setTimeout(updateActive,0)}));
function esc(v){return String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
function page(title,sub,content){return `<div class="section-head"><div><h1 style="margin:6px 0 3px;font-size:30px">${title}</h1><div class="muted">${sub}</div></div></div>${content}`}
function serviceCards(){return [
["📣","Advertising","Promote your business, product or brand."],["📰","News Updates","Community, entertainment and announcement updates."],["🎨","Graphic Design","Posters, flyers and social media creatives."],["🎥","Event Coverage","Photo and video coverage for your event."],["🎬","Reels","Short-form promotional video content."],["✨","PR Services","Custom promotional campaigns."]
].map(x=>`<a class="card service" href="#advertise"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></a>`).join("")}
function adCard(x){return `<article class="card ad-card"><span class="pill">${esc(x.category||"Featured Business")}</span><div><h3>${esc(x.title||x.business_name)}</h3><p>${esc(x.text||x.description)}</p></div><a class="btn primary" href="#advertise">Promote With Us</a></article>`}
function newsCard(x){return `<article class="news"><div class="thumb">NEWS</div><div><span class="pill">${esc(x.date||new Date(x.created_at).toLocaleDateString())}</span><h3>${esc(x.title)}</h3><p>${esc(x.text||x.content)}</p></div></article>`}
function eventCard(x){return `<article class="event"><div class="thumb">EVENT</div><div><span class="pill">${esc(x.date||x.event_date||"Coming Soon")}</span><h3>${esc(x.title)}</h3><p>${esc(x.text||x.description)}</p></div></article>`}
function home(){return `<section class="hero"><div class="eyebrow">PR • Advertising • Media</div><h1>Your City. Your Brand. Your Story.</h1><p>E-CityHub helps businesses, events, talents and brands get seen, promoted and connected.</p><div class="actions"><a class="btn primary" href="#advertise">Advertise With Us</a><a class="btn light" href="#services">Explore Services</a><a class="btn light" href="https://github.com/davidsonwestlove2-coder/Ekucityhub-/raw/refs/heads/main/E-CityHub.apk">📲 Download E-CityHub App</a></div></section><section class="section"><div class="section-head"><div><h2>What We Do</h2><span class="muted">Promotion that gets attention.</span></div></div><div class="grid">${serviceCards()}</div></section><section class="section"><div class="section-head"><h2>Featured Ads</h2><a class="muted" href="#ads">See all</a></div><div class="grid">${cloud.ads.slice(0,2).map(adCard).join("")||'<div class="empty">No featured ads yet.</div>'}</div></section><section class="section"><div class="section-head"><h2>Latest Updates</h2><a class="muted" href="#news">More</a></div><div class="list">${cloud.news.slice(0,2).map(newsCard).join("")||'<div class="empty">No news published yet.</div>'}</div></section>`}function services(){return page("Services","Professional promotional services from E-CityHub",`<div class="grid">${serviceCards()}</div><div class="card section"><b>Need something else?</b><p class="muted">Tell us what you want to achieve and we can discuss a custom PR campaign.</p><a class="btn primary" href="#advertise">Request a Campaign</a></div>`)}
function news(){return page("News Updates","Stories, announcements and community updates",`<div class="list">${cloud.news.map(newsCard).join("")||'<div class="empty">No published news yet.</div>'}</div>`)}
function events(){return page("Events","Discover and promote events",`<div class="list">${cloud.events.map(eventCard).join("")||'<div class="empty">No published events yet.</div>'}</div>`)}
function reels(){return page("Reels","Short-form content and promotional video",`<div class="grid">${cloud.reels.map(x=>`<article class="card ad-card"><span class="pill">REEL</span><div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></div>${x.video_url?`<a class="btn primary" href="${esc(x.video_url)}" target="_blank" rel="noopener">Watch Reel</a>`:'<a class="btn primary" href="#advertise">Create a Reel</a>'}</article>`).join("")||'<div class="empty">No reels published yet.</div>'}</div>`)}
function ads(){return page("Featured Ads","Businesses, brands and campaigns promoted by E-CityHub",`<div class="grid">${cloud.ads.map(adCard).join("")||'<div class="empty">No featured ads yet.</div>'}</div>`)}
function about(){return page("About EkuCityHub","A community-focused digital PR and media platform",`<div class="card"><span class="pill">OUR MISSION</span><h2>Making local visibility easier.</h2><p class="muted" style="line-height:1.7">EkuCityHub is a community-driven digital platform dedicated to showcasing the people, culture, events, businesses, talents, and everyday stories that make Eku unique.</p><hr><b>Our focus</b><p class="muted">Advertising • News Updates • Graphic Design • Event Coverage • Reels • PR</p></div>`)}
function contact(){return page("Contact","Let's work together",`<div class="contact-grid"><a class="contact-item" href="tel:08035798109"><div>📞</div><div><b>Phone / WhatsApp</b><span>08035798109</span></div></a><a class="contact-item" href="mailto:Ekucityhub@gmail.com"><div>✉️</div><div><b>Email</b><span>Ekucityhub@gmail.com</span></div></a><a class="contact-item" href="https://instagram.com/ekucity_hub" target="_blank" rel="noopener"><div>📸</div><div><b>Instagram</b><span>@ekucity_hub</span></div></a></div>`)}
function advertise(){return page("Advertise With Us","Tell us what you want E-CityHub to promote",`<div class="card"><form class="form" id="campaignForm"><div class="field"><label>Name / Business</label><input id="client" required placeholder="e.g. Eku Fashion Store"></div><div class="field"><label>Phone / WhatsApp</label><input id="phone" required type="tel" placeholder="080..."></div><div class="field"><label>Service</label><select id="service" required><option value="">Choose a service</option><option>Advertising</option><option>News Updates</option><option>Graphic Design</option><option>Event Coverage</option><option>Reels</option><option>Other PR Service</option></select></div><div class="field"><label>Campaign details</label><textarea id="details" required placeholder="Tell us what you want promoted, where and when."></textarea></div><button class="btn primary block" type="submit">Submit Request</button><div id="formMsg" aria-live="polite"></div></form></div><div class="card section"><b>Prefer WhatsApp?</b><p class="muted">Start a direct conversation with E-CityHub.</p><a class="btn dark block" href="https://wa.me/2348035798109?text=Hello%20E-CityHub%2C%20I%20want%20to%20advertise." target="_blank" rel="noopener">Chat on WhatsApp</a></div>`)}
function adminLogin(){return page("Admin Login","Secure E-CityHub content management",`<div class="card"><form class="form" id="loginForm"><div class="field"><label>Email</label><input id="adminEmail" type="email" required placeholder="Admin email"></div><div class="field"><label>Password</label><input id="adminPassword" type="password" required placeholder="Password"></div><button class="btn primary block" type="submit">Sign In</button><div id="loginMsg" aria-live="polite"></div></form></div>`)}
function admin(){return page("Admin Dashboard",`Signed in as ${esc(session?.user?.email||"")}`,`<div class="card"><div class="admin-bar"><div><b>Cloud Content & Requests</b><div class="muted" style="font-size:12px">Connected to Supabase</div></div><button class="btn light" style="width:auto" id="logoutBtn">Sign out</button></div><div class="stats section"><div class="stat"><b>${cloud.requests.length}</b><small>Requests</small></div><div class="stat"><b>${cloud.ads.length}</b><small>Ads</small></div><div class="stat"><b>${cloud.news.length}</b><small>News</small></div></div><hr><h3>📰 Add News</h3><form id="newsForm"><input id="newsTitle" placeholder="News title" required><textarea id="newsText" placeholder="Write your news story..." rows="7" required></textarea><button class="btn primary" type="submit">Publish News</button><div id="newsMsg" class="muted" style="margin-top:10px"></div></form><hr><h3>Advertisement Requests</h3>${cloud.requests.length?cloud.requests.map(r=>`<div class="request"><span class="tag">${esc(r.description?.split("\n")[0]||"Advertising")}</span><strong>${esc(r.business_name)}</strong><div class="muted" style="font-size:12px">${esc(r.phone||"")} ${esc(r.email||"")}</div><p style="font-size:13px">${esc(r.description||"")}</p></div>`).join(""):`<div class="empty">No client requests yet.</div>`}</div>`)}
const routes={home,news,events,reels,services,ads,advertise,about,contact,admin};
async function loadCloud(){
 const [ads,news,events,reels,services,requests]=await Promise.all([
  supabase.from('advertisements').select('*').eq('status','approved').order('created_at',{ascending:false}),
  supabase.from('news').select('*').eq('published',true).order('created_at',{ascending:false}),
  supabase.from('events').select('*').eq('published',true).order('event_date',{ascending:true}),
  supabase.from('reels').select('*').eq('published',true).order('created_at',{ascending:false}),
  supabase.from('services').select('*').eq('published',true).order('created_at',{ascending:true}),
  session ? supabase.from('advertisements').select('*').order('created_at',{ascending:false}) : Promise.resolve({data:[]})
 ]);
 cloud.ads=(ads.data||[]).map(x=>({title:x.business_name,category:'Featured Business',text:x.description,...x}));
 cloud.news=news.data||[]; cloud.events=events.data||[]; cloud.reels=reels.data||[]; cloud.services=services.data||[]; cloud.requests=requests.data||[];
}
async function render(){
 let key=(location.hash||"#home").slice(1);if(!routes[key])key="home";
 if(key==="admin" && !session){main.innerHTML=adminLogin();bindPage(key);updateActive();return}
 main.innerHTML=routes[key]();bindPage(key);updateActive();window.scrollTo({top:0,behavior:"smooth"});
}
async function bindPage(key){
  if(key==="admin")document.querySelector("#newsForm")?.addEventListener("submit",async e=>{
  e.preventDefault();
  const title=document.querySelector("#newsTitle").value.trim();
  const text=document.querySelector("#newsText").value.trim();
  const msg=document.querySelector("#newsMsg");
  msg.textContent="Publishing...";
  const {error}=await supabase.from("news").insert({
    title:title,
    text:text,
    published:true
  });
  if(error){
    msg.textContent="Error: "+error.message;
    return;
  }
  msg.textContent="✅ News published successfully!";
  e.target.reset();
  await loadCloud();
  render();
});
 if(key==="advertise")document.querySelector("#campaignForm")?.addEventListener("submit",async e=>{
  e.preventDefault(); const msg=document.querySelector("#formMsg"); msg.textContent="Sending...";
  const client=document.querySelector("#client").value.trim(), phone=document.querySelector("#phone").value.trim(), service=document.querySelector("#service").value, details=document.querySelector("#details").value.trim();
  const {error}=await supabase.from('advertisements').insert({business_name:client,phone,description:`${service}\n${details}`,status:'pending'});
  if(error){msg.innerHTML=`<div class="notice" style="margin-top:10px">${esc(error.message)}</div>`;return}
  msg.innerHTML='<div class="notice" style="margin-top:10px">Request received successfully. E-CityHub will review it from the admin dashboard.</div>';e.target.reset();
 });
 if(key==="admin"){
  document.querySelector("#loginForm")?.addEventListener("submit",async e=>{e.preventDefault();const m=document.querySelector('#loginMsg');const {data,error}=await supabase.auth.signInWithPassword({email:document.querySelector('#adminEmail').value.trim(),password:document.querySelector('#adminPassword').value});if(error){m.innerHTML=`<div class="notice" style="margin-top:10px">${esc(error.message)}</div>`;return}session=data.session;await loadCloud();render();});
  document.querySelector("#logoutBtn")?.addEventListener("click",async()=>{
  await supabase.auth.signOut();
  session=null;
  cloud.requests=[];
location.hash='#home';
render();
});
}
supabase.auth.getSession().then(async ({data})=>{session=data.session;await loadCloud();if(!location.hash)location.hash="#home";else render()});
supabase.auth.onAuthStateChange((_event,s)=>{session=s});
let deferredInstall;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;const b=document.querySelector("#installBtn");b.hidden=false;b.onclick=async()=>{if(deferredInstall){deferredInstall.prompt();deferredInstall=null;b.hidden=true}}});
