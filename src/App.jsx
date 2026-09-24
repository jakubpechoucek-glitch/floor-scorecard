import React, { useState, useMemo } from "react";


const CSS =
"" +
"@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');:root{--ink:#0C1A1F;--slab:#12262E;--slab2:#16303A;--line:#1E3A45;--paper:#E8F1F2;--dim:#7FA0A8;--go:#3DDC97;--warn:#FFB84D;--stop:#FF5C7A;--void:#3A5058}" +
".wb,.wb *{box-sizing:border-box}" +
".wb{min-height:100vh;background:var(--ink);color:var(--paper);font-family:'DM Sans',system-ui,sans-serif;font-size:14px;background-image:radial-gradient(900px 500px at 12% -10%,rgba(94,200,229,.10),transparent 60%),radial-gradient(700px 460px at 92% 0%,rgba(251,113,133,.08),transparent 60%)}" +
".dsp{font-family:'Bricolage Grotesque','DM Sans',sans-serif;font-weight:800;letter-spacing:-.03em;line-height:1.02}" +
".mono{font-family:'IBM Plex Mono',ui-monospace,monospace;font-variant-numeric:tabular-nums}" +
".eyeb{font-size:9.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--dim);font-weight:700}.dim{color:var(--dim)}" +
".fade{animation:fade .5s ease both}@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}" +
"@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}" +
".bar{position:sticky;top:0;z-index:30;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between;padding:12px 20px;background:rgba(12,26,31,.82);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}" +
".brand{display:flex;align-items:center;gap:11px}" +
".mark{width:26px;height:26px;display:flex;flex-direction:column;justify-content:space-between;padding:3px 0}" +
".mark i{display:block;height:2.5px;border-radius:2px}.wrap{max-width:1240px;margin:0 auto;padding:20px 20px 70px}.mo{display:flex;gap:3px}" +
".mo button{font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:600;letter-spacing:.04em;padding:6px 11px;border:1px solid var(--line);background:transparent;color:var(--dim);border-radius:999px;cursor:pointer;transition:.15s}" +
".mo button:hover{color:var(--paper);border-color:var(--dim)}.mo button.on{background:var(--paper);color:var(--ink);border-color:var(--paper)}.rng{display:flex;align-items:center;gap:7px}.rng select{width:auto;padding:5px 7px;font-size:12px;border-radius:7px}.rng .eyeb{white-space:nowrap}.rngClr{background:none;border:0;color:#5EC8E5;font-size:11.5px;text-decoration:underline;cursor:pointer;font-family:inherit}" +
".card{background:var(--slab);border:1px solid var(--line);border-radius:14px;padding:18px;margin-bottom:16px}" +
".cardHead{display:flex;align-items:center;gap:12px;width:100%;background:none;border:0;padding:0;cursor:pointer;color:var(--paper);font-family:inherit;flex-wrap:wrap}" +
".cardName{font-size:21px;color:#fff;letter-spacing:-.025em;line-height:1.1}.hall{position:relative;overflow:hidden;border-radius:16px;padding:22px 22px 18px;margin-bottom:18px;border:1px solid rgba(255,217,138,.32);background:radial-gradient(520px 200px at 50% -40px,rgba(255,217,138,.16),transparent 70%),linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,0)),var(--slab)}.hallTop{display:flex;align-items:baseline;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:6px}.hallTitle{font-size:22px;color:#FFD98A}.pod{display:flex;justify-content:center;align-items:flex-start;gap:16px;flex-wrap:wrap;margin-top:10px}.podCell{flex:1 1 170px;max-width:230px;text-align:center;padding:16px 12px 14px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid var(--line);display:flex;flex-direction:column;align-items:center;gap:4px}.podCell.r1{border-color:rgba(255,217,138,.5);background:rgba(255,217,138,.06)}.podCell.r2{border-color:rgba(167,188,195,.4)}.podCell.r3{border-color:rgba(190,128,84,.45)}.podName{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:15.5px;margin-top:6px;line-height:1.2}.podVal{font-size:19px;font-weight:700;color:#FFD98A}.podCell.r2 .podVal{color:#DCE7EA}.podCell.r3 .podVal{color:#F3C7A2}.podMeta{font-size:11.5px;color:var(--dim);line-height:1.45}@media(max-width:620px){.podCell{margin-top:0!important}}.proj{border-radius:12px;padding:14px 16px;background:linear-gradient(135deg,rgba(253,186,116,.10),rgba(255,255,255,.02));border:1px solid rgba(253,186,116,.3)}.projHead{font-size:15px;font-weight:600;line-height:1.5;margin:4px 0 4px}.projHead b{font-family:'IBM Plex Mono',monospace}.projNote{margin-top:12px;font-size:12.5px;line-height:1.6;padding:10px 12px;border-radius:9px;background:rgba(255,184,77,.10);border-left:3px solid #FFB84D}.card.big{padding:26px 24px;border-color:rgba(94,200,229,.28);background:linear-gradient(180deg,rgba(94,200,229,.05),rgba(255,255,255,0) 60%),var(--slab)}.card.big .cardName{font-size:30px;color:#5EC8E5}.card.big .cardStat{font-size:16px}.card.big .chev{width:32px;height:32px}@media(max-width:620px){.card.big .cardName{font-size:24px}}" +
".cardTag{font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--dim);border:1px solid var(--line);padding:4px 9px;border-radius:999px;white-space:nowrap}" +
".cardStat{flex:1;text-align:right;font-size:14.5px;font-weight:700;letter-spacing:-.01em;min-width:150px}" +
".cardHead:hover .chev{border-color:var(--dim);color:var(--paper)}" +
"@media(max-width:620px){.cardStat{text-align:left;flex:1 0 100%;font-size:13.5px;min-width:0}}" +
".chev{flex:none;width:26px;height:26px;border-radius:50%;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--dim);transition:.2s}" +
".chev.on{transform:rotate(180deg);border-color:var(--dim);color:var(--paper)}" +
".cardBody{margin-top:20px;animation:fade .3s ease both}" +
".ttl{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:14px;flex-wrap:wrap}" +
".hero{display:flex;flex-wrap:wrap;gap:26px;align-items:center}.ring{position:relative;width:118px;height:118px;flex:none}" +
".ring svg{transform:rotate(-90deg)}" +
".ring .mid{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;white-space:pre-line;gap:3px}" +
".ring .mid b{font-family:'Bricolage Grotesque',sans-serif;font-size:31px;font-weight:800;letter-spacing:-.04em}" +
".heroTxt{flex:1 1 260px;min-width:220px}.heroTxt h2{margin:0;font-size:29px}" +
".heroTxt p{margin:8px 0 0;color:var(--dim);font-size:13.5px;line-height:1.6;max-width:52ch}" +
".lad{display:flex;flex-direction:column;gap:7px;margin-top:4px}.rung{display:grid;grid-template-columns:118px 1fr 74px;gap:12px;align-items:center}" +
".rung .nm{font-size:11.5px;font-weight:600;letter-spacing:.01em;text-align:right;color:var(--dim);white-space:nowrap}" +
".rung .tr{position:relative;height:22px;border-radius:6px;background:rgba(255,255,255,.05);overflow:hidden}" +
".rung .fl{position:absolute;inset:0 auto 0 0;border-radius:6px;transition:width .7s cubic-bezier(.22,1,.36,1)}" +
".rung .vl{font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:600}.rung.brk .nm{color:var(--paper)}" +
".rung.brk .tr{box-shadow:0 0 0 1.5px var(--stop)}.rung.weak .nm{color:var(--paper)}.rung.weak .tr{box-shadow:0 0 0 1px rgba(255,92,122,.45)}.offTag{display:inline-block;margin-left:7px;font-size:8.5px;letter-spacing:.16em;font-weight:800;color:#FF5C7A;border:1px solid rgba(255,92,122,.5);padding:1px 5px;border-radius:4px;vertical-align:1px}" +
".brkTag{display:inline-block;margin-left:7px;font-size:8.5px;letter-spacing:.16em;font-weight:800;color:var(--ink);background:var(--stop);padding:2px 6px;border-radius:4px;vertical-align:1px}" +
".arrow{text-align:center;color:var(--void);font-size:11px;line-height:1;margin:-3px 0 -3px 118px}.cols{display:flex;flex-wrap:wrap;gap:22px}" +
".col{flex:1 1 230px;min-width:210px}.col ul{margin:9px 0 0;padding:0;list-style:none}" +
".col li{display:flex;gap:9px;align-items:flex-start;font-size:12.8px;line-height:1.55;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.045)}" +
".dot{width:7px;height:7px;border-radius:50%;flex:none;margin-top:6px}.scroll{overflow-x:auto;margin:0 -4px;padding:0 4px}.scroll.tall{max-height:min(66vh,620px);overflow:auto}.scroll.tall thead th{position:sticky;top:0;z-index:3;background:var(--slab);box-shadow:0 1px 0 var(--line)}.scroll.tall::-webkit-scrollbar{height:11px;width:11px}.scroll.tall::-webkit-scrollbar-track{background:rgba(255,255,255,.04);border-radius:8px}.scroll.tall::-webkit-scrollbar-thumb{background:rgba(255,255,255,.22);border-radius:8px}.scroll.tall::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.34)}" +
"table{width:100%;border-collapse:separate;border-spacing:0}" +
"th{font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--dim);font-weight:700;text-align:left;padding:9px 8px 10px;border-bottom:1px solid var(--line);white-space:nowrap;background:var(--slab)}" +
"th.sort{cursor:pointer;transition:color .15s}th.sort:hover{color:var(--paper)}th.act{color:var(--paper)}thead tr:first-child th{padding-top:2px}" +
"td{padding:10px 8px;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px}tr.ag{cursor:pointer;transition:background .12s}" +
"tr.ag:hover td{background:rgba(255,255,255,.045)}tr.ag:hover td:first-child{box-shadow:inset 2px 0 0 var(--paper)}.nm2{font-weight:600}" +
".id{font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:var(--void)}" +
".chip{display:inline-block;min-width:46px;text-align:center;padding:3px 7px;border-radius:999px;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:600;border:1px solid transparent}" +
".c-pass{color:var(--go);background:rgba(61,220,151,.11);border-color:rgba(61,220,151,.24)}" +
".c-fail{color:var(--stop);background:rgba(255,92,122,.12);border-color:rgba(255,92,122,.28)}" +
".c-none{color:var(--void);background:rgba(255,255,255,.04)}.lb td{position:relative}" +
".lb .bg{position:absolute;left:0;top:4px;bottom:4px;border-radius:5px;opacity:.16}" +
".rk{display:inline-flex;align-items:center;justify-content:center;width:21px;height:21px;border-radius:6px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:700;background:rgba(255,255,255,.06);color:var(--dim)}" +
".rk.p1{background:#FFD98A;color:#3A2A00}.rk.p2{background:#CFE0E4;color:#12262E}.rk.p3{background:#E0A97D;color:#3A2000}" +
".you{background:rgba(94,200,229,.07)}.you td:first-child{box-shadow:inset 2px 0 0 #5EC8E5}" +
".tag{font-size:9px;letter-spacing:.12em;font-weight:800;color:#5EC8E5;margin-left:7px}.most{display:inline-block;margin-left:9px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;font-weight:800;color:#FFB84D;border:1px solid rgba(255,184,77,.42);padding:1px 7px;border-radius:999px;vertical-align:1px}" +
".btn{font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;padding:10px 17px;border-radius:9px;border:0;cursor:pointer;transition:.15s}" +
".btn.go{background:var(--paper);color:var(--ink)}.btn.go:hover{transform:translateY(-1px)}" +
".btn.gh{background:transparent;color:var(--dim);border:1px solid var(--line)}.btn.gh:hover{color:var(--paper);border-color:var(--dim)}" +
".btn:disabled{opacity:.45;cursor:default;transform:none}" +
"input,select{font-family:'DM Sans',sans-serif;font-size:13.5px;padding:10px 11px;width:100%;border-radius:9px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--paper)}" +
"input:focus,select:focus,button:focus-visible{outline:2px solid #5EC8E5;outline-offset:2px}select option{background:#12262E}" +
"label.fld{display:block;margin-top:13px}" +
"label.fld span{display:block;font-size:9.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--dim);font-weight:700;margin-bottom:6px}" +
".chk{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-size:13px}.chk input{width:auto}" +
".gate{min-height:100vh;display:grid;place-items:center;padding:26px 18px}" +
".gbox{width:min(430px,100%);background:var(--slab);border:1px solid var(--line);border-radius:18px;padding:26px}" +
".roles{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:6px}" +
".roles button{padding:11px 5px;border-radius:10px;border:1px solid var(--line);background:transparent;color:var(--dim);font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:.15s}" +
".roles button:hover{color:var(--paper)}.roles button.on{background:rgba(94,200,229,.12);border-color:#5EC8E5;color:var(--paper)}" +
".err{color:var(--stop);font-size:12.5px;margin:10px 0 0}" +
".scrim{position:fixed;inset:0;background:rgba(5,12,15,.62);backdrop-filter:blur(3px);display:flex;justify-content:flex-end;z-index:50}" +
".drw{background:var(--slab);border-left:1px solid var(--line);width:75%;min-width:min(560px,100%);height:100%;overflow-y:auto;padding:28px 32px}" +
".drw h2{margin:6px 0 2px;font-size:30px}" +
".kpiRow{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)}" +
".kbar{position:relative;height:7px;border-radius:4px;background:rgba(255,255,255,.06);margin-top:7px}" +
".kbar .f{position:absolute;left:0;top:0;bottom:0;border-radius:4px}" +
".kbar .t{position:absolute;top:-3px;bottom:-3px;width:2px;background:var(--paper);opacity:.7}" +
".root{border-radius:12px;padding:14px 16px;margin:16px 0 12px;background:linear-gradient(135deg,rgba(255,92,122,.14),rgba(255,184,77,.08));border:1px solid rgba(255,92,122,.3)}" +
".coach{border-radius:12px;padding:14px 16px;margin-top:10px;background:rgba(255,255,255,.035);border:1px solid var(--line)}" +
".coach h4{margin:0 0 7px;font-size:14px;font-family:'Bricolage Grotesque',sans-serif;font-weight:700}" +
".coach p{margin:0 0 8px;font-size:13.2px;line-height:1.6}.coach b{color:#5EC8E5;font-weight:700}.grp{border:1px solid var(--line);border-radius:12px;margin-top:12px;overflow:hidden;transition:border-color .2s}.grpHead{display:flex;align-items:center;gap:10px;width:100%;background:rgba(255,255,255,.02);border:0;padding:12px 14px;cursor:pointer;font-family:inherit;text-align:left}.grpHead:hover{background:rgba(255,255,255,.05)}.grpDot{width:8px;height:8px;border-radius:2px;flex:none;transform:rotate(45deg)}.grpName{font-size:13px;font-weight:800;letter-spacing:.02em}.grpMeta{flex:1;font-size:11.5px;color:var(--dim)}.chev.sm{width:22px;height:22px;font-size:10px}.grpBody{padding:4px 14px 14px}.grpBody .coach{margin-top:10px}.grpBody .root{margin:10px 0 0}.noshift{border:1px dashed rgba(255,92,122,.4);background:rgba(255,92,122,.06);border-radius:12px;padding:16px 18px}.bul{margin:10px 0 0;padding:0;list-style:none;counter-reset:bn}.bul li{position:relative;padding-left:28px;font-size:13.2px;line-height:1.6;margin-bottom:9px}.bul li:last-child{margin-bottom:0}.bul li:before{counter-increment:bn;content:counter(bn);position:absolute;left:0;top:1px;width:19px;height:19px;border-radius:6px;background:rgba(255,255,255,.07);color:var(--dim);font-family:\"IBM Plex Mono\",monospace;font-size:10.5px;font-weight:600;display:flex;align-items:center;justify-content:center}.lst{margin:10px 0 0;padding:0;list-style:none}.lst li{position:relative;padding-left:16px;font-size:13.2px;line-height:1.6;margin-bottom:7px}.lst li:last-child{margin-bottom:0}.lst li:before{content:\"\";position:absolute;left:2px;top:9px;width:5px;height:5px;border-radius:50%;background:var(--dim)}" +
".moods{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}" +
".mood{padding:16px 12px;border-radius:14px;border:1px solid var(--line);background:rgba(255,255,255,.03);cursor:pointer;text-align:center;transition:.16s;color:var(--paper);font-family:'DM Sans',sans-serif}" +
".mood:hover{transform:translateY(-2px);background:rgba(255,255,255,.06)}.mood .fc{font-size:26px;line-height:1;display:block;margin-bottom:9px}" +
".mood .lb2{font-size:12.5px;font-weight:700;display:block}.mood.on{background:rgba(255,255,255,.08)}" +
".pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}" +
".pill{padding:8px 13px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--dim);font-family:'DM Sans',sans-serif;font-size:12.5px;font-weight:600;cursor:pointer;transition:.15s}" +
".pill:hover{color:var(--paper);border-color:var(--dim)}.pill.on{background:rgba(61,220,151,.14);border-color:#3DDC97;color:var(--paper)}" +
".mbar{display:flex;height:12px;border-radius:999px;overflow:hidden;background:rgba(255,255,255,.05);margin:12px 0 10px}" +
".mbar i{display:block;transition:width .6s ease}" +
".flag{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 13px;border-radius:11px;background:rgba(255,92,122,.09);border:1px solid rgba(255,92,122,.28);margin-bottom:8px}" +
".flag.done{background:rgba(61,220,151,.08);border-color:rgba(61,220,151,.26)}" +
".upd{display:flex;align-items:flex-start;gap:11px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);text-decoration:none;color:var(--paper);transition:.15s}" +
".upd:hover{background:rgba(255,255,255,.04)}" +
".updBar{width:3px;align-self:stretch;border-radius:2px;flex:none}" +
".updT{display:block;font-weight:600;font-size:13.5px;line-height:1.45;margin-top:3px}" +
".updN{display:block;font-size:12.3px;line-height:1.55;color:var(--dim);margin-top:3px}" +
".updH{font-size:11px;white-space:nowrap;flex:none;padding-top:3px}" +
".newDot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#FF5C7A;margin-left:6px;vertical-align:1px}" +
".task{display:flex;align-items:center;gap:11px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;font-size:13.5px}" +
".task input{width:auto;flex:none}.tcat{width:8px;height:8px;border-radius:2px;flex:none;transform:rotate(45deg)}.rm{background:none;border:1px solid var(--line);color:var(--dim);width:24px;height:24px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;font-family:inherit}.rm:hover{border-color:#FF5C7A;color:#FF5C7A}" +
".checkin{min-height:calc(100vh - 150px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px 0}" +
".ciTitle{font-size:40px;margin:12px 0 8px}.ciSub{max-width:46ch;margin:0 auto;font-size:14px;line-height:1.7}" +
".shapes{display:flex;gap:22px;flex-wrap:wrap;justify-content:center;margin-top:34px}" +
".shape{width:172px;padding:30px 18px;border-radius:24px;border:1px solid var(--line);background:rgba(255,255,255,.03);cursor:pointer;color:var(--paper);font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:16px;transition:.22s}" +
".shape:hover{transform:translateY(-5px);background:rgba(255,255,255,.07)}.shape.on{background:rgba(255,255,255,.06);cursor:default}" +
".shape.on:hover{transform:none}.shLb{font-size:13.5px;font-weight:700}.ciBody{max-width:580px;margin:30px auto 0;animation:fade .45s ease both}" +
".ciBody .pills{justify-content:center}@media(max-width:900px){.drw{width:100%;padding:22px}}@media(max-width:700px){.ciTitle{font-size:29px}.shape{width:100%;max-width:280px}}" +
"@media(max-width:700px){.rung{grid-template-columns:88px 1fr 60px}.arrow{margin-left:88px}.heroTxt h2{font-size:23px}}";


// Hue encodes position in the causal chain: cool upstream, hot at the outcome.
// The three quality KPIs sit outside the chain and take a violet family.
const KPIS = [
  { key: "att", label: "Attendance", short: "ATT", dir: "hi", fmt: "pct", tgt: 90, hue: "#5EC8E5", rung: 1,
    cols: ["attendance"], tcols: ["attendance target", "target attendance"] },
  { key: "adh", label: "Schedule adherence", short: "ADH", dir: "hi", fmt: "pct", tgt: 90, hue: "#4FD1C5", rung: 2,
    cols: ["schedule adherence", "adherence"], tcols: ["schedule adherence target", "adherence target", "target adherence"] },
  { key: "prod", label: "Productivity", short: "PROD", dir: "hi", fmt: "pct", tgt: 95, hue: "#3DDC97", rung: 3,
    cols: ["productivity"], tcols: ["productivity target", "target productivity"] },
  { key: "cnt", label: "Contacts", short: "CNT", dir: "hi", fmt: "int", tgt: 40, hue: "#A3E635", rung: 4,
    cols: ["contacts"], tcols: ["contacts target", "target contacts"] },
  { key: "aht", label: "Handling time", short: "AHT", dir: "lo", fmt: "min", tgt: 10, hue: "#FDE047", rung: 5,
    cols: ["aht in minutes", "aht", "average handling time"], tcols: ["target aht", "aht target"] },
  { key: "offer", label: "Offer rate", short: "OFFER", dir: "hi", fmt: "pct", tgt: 30, hue: "#FDBA74", rung: 6,
    cols: ["offer rate"], tcols: ["offer rate target", "target offer rate"] },
  { key: "cvr", label: "Conversion rate", short: "CVR", dir: "hi", fmt: "pct", tgt: null, hue: "#FB923C", rung: 7,
    cols: ["conversion rate"], tcols: ["conversion rate target", "target conversion rate"] },
  { key: "sales", label: "Sales", short: "SALES", dir: "hi", fmt: "money", tgt: 1400000, hue: "#FB7185", rung: 8,
    cols: ["sales"], tcols: ["sales target", "sales volume", "target sales"] },
  { key: "csat", label: "CSAT", short: "CSAT", dir: "hi", fmt: "pct", tgt: 90, hue: "#C4B5FD", rung: 0,
    cols: ["csat"], tcols: ["csat target"] },
  { key: "qa", label: "QA score", short: "QA", dir: "hi", fmt: "pct", tgt: 60, hue: "#A5B4FC", rung: 0,
    cols: ["qa score", "qa"], tcols: ["qa score target", "qa target"] },
  { key: "vc", label: "Valid complaints", short: "VC", dir: "lo", fmt: "int", tgt: 0, hue: "#F0ABFC", rung: 0,
    cols: ["valid complaints"], tcols: ["complaints target", "valid complaints target"] },
];

const LADDER = ["att", "adh", "prod", "cnt", "aht", "offer", "cvr", "sales"];
const K = {};
KPIS.forEach(function (k) { K[k.key] = k; });

const COMPARE = [
  { key: "sales", label: "Sales", agg: "avg", fmt: "money", good: "hi" },
  { key: "cvr", label: "Conversion", agg: "avg", fmt: "pct", good: "hi" },
  { key: "qa", label: "QA score", agg: "avg", fmt: "pct", good: "hi" },
  { key: "csat", label: "CSAT on target", agg: "passpct", fmt: "pct", good: "hi" },
  { key: "vc", label: "Complaints", agg: "sum", fmt: "int", good: "lo" },
];

// A plotted trace of the day rather than a smiley: it belongs to the same
// instrument family as the funnel bars, and reads as a reading, not a judgement.
const MOODS = [
  { key: "up", label: "Happy, motivated", hue: "#3DDC97",
    d: "M3 21 L11 17 L19 19 L27 10 L35 12 L45 3" },
  { key: "ok", label: "Okay, neutral", hue: "#FFB84D",
    d: "M3 12 L13 12 L17 8 L21 16 L25 12 L35 12 L39 10 L45 12" },
  { key: "low", label: "Low on energy", hue: "#FF5C7A",
    d: "M3 4 L11 8 L19 6 L27 15 L35 13 L45 21" },
];

function Trace(props) {
  const m = props.m;
  const w = props.w || 48;
  return (
    <svg width={w} height={w / 2} viewBox="0 0 48 24" fill="none" aria-hidden="true">
      <path d={m.d} stroke={m.hue} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="45" cy={m.key === "up" ? 3 : m.key === "ok" ? 12 : 21} r="2.8" fill={m.hue} />
    </svg>
  );
}
const M = {};
MOODS.forEach(function (m) { M[m.key] = m; });

const DRIVERS = ["My team", "Support from my supervisor", "Good customer chats", "Incentives and sales",
  "Work-life balance", "Learning something new", "Being recognised", "My schedule"];

const UPDTYPES = [
  { key: "product", label: "Product", hue: "#FDBA74" },
  { key: "process", label: "Process", hue: "#5EC8E5" },
  { key: "system", label: "System", hue: "#A5B4FC" },
  { key: "promo", label: "Promo", hue: "#3DDC97" },
  { key: "policy", label: "Policy", hue: "#F0ABFC" },
];
const UT = {};
UPDTYPES.forEach(function (u) { UT[u.key] = u; });

const CONF = "https://confluence.example.com/display/OPS/";

function seedUpdates() {
  return [
    { id: "u1", type: "product", hrs: 3, title: "Cash loan tenor extended to 36 months for tenured customers",
      note: "New tenor applies to applications from today. Pricing table updated.", url: CONF + "cash-loan-tenor-36" },
    { id: "u2", type: "process", hrs: 9, title: "Early repayment quotes now computed in-tool, no branch referral",
      note: "Use the settlement calculator before quoting. Branch referral is no longer the answer.", url: CONF + "early-repayment-quoting" },
    { id: "u3", type: "system", hrs: 19, title: "OTP verification screen moved in the agent console",
      note: "Verification is completed in the tool. Never ask a customer to read an OTP aloud.", url: CONF + "otp-verification-move" },
    { id: "u4", type: "promo", hrs: 31, title: "Zero processing fee promo extended to 15 August",
      note: "Mention it when a customer raises the processing fee.", url: CONF + "zero-fee-promo-aug" },
  ];
}

const MTSTATUS = [
  { key: "open", label: "Open", hue: "#8A97A3" },
  { key: "doing", label: "In progress", hue: "#FFB84D" },
  { key: "done", label: "Done", hue: "#3DDC97" },
];
const MS = {};
MTSTATUS.forEach(function (x) { MS[x.key] = x; });

function today() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function seedMyTasks(sups, mgr) {
  const out = [];
  const first = sups[0] || "";
  out.push({ id: "m1", owner: first, title: "Submit Q3 headcount forecast", due: "2026-08-14", status: "doing",
    from: mgr, created: 1, comments: [{ at: "2026-08-03", text: "Draft sent to WFM for a sanity check." }] });
  out.push({ id: "m2", owner: first, title: "Complete the coaching cycle for all off-target agents", due: "2026-08-20",
    status: "open", from: mgr, created: 2, comments: [] });
  out.push({ id: "m3", owner: first, title: "Renew floor access badges", due: "2026-08-08", status: "done", from: "",
    created: 3, comments: [{ at: "2026-08-06", text: "All 17 collected from admin." }] });
  out.push({ id: "m4", owner: mgr, title: "Review offer rate targets with the sales lead", due: "2026-08-18",
    status: "open", from: "", created: 4, comments: [] });
  return out;
}

const TASKCATS = [
  { key: "comp", label: "Compliance", hue: "#A5B4FC" },
  { key: "permit", label: "Permit", hue: "#FDBA74" },
  { key: "train", label: "Training", hue: "#A3E635" },
  { key: "qa", label: "QA", hue: "#C4B5FD" },
  { key: "other", label: "Other", hue: "#5EC8E5" },
];
const TC = {};
TASKCATS.forEach(function (c) { TC[c.key] = c; });

function seedTasks(rows) {
  const all = rows.map(function (a) { return a.emp; });
  const qaMiss = rows.filter(function (a) { return a.kpis.qa.st === "fail"; }).map(function (a) { return a.emp; });
  const base = [
    { id: "t1", title: "AMLA refresher course", cat: "comp", agents: all, due: "31 Jul" },
    { id: "t2", title: "Data privacy module 2", cat: "comp", agents: all, due: "15 Aug" },
    { id: "t3", title: "Occupational permit renewal", cat: "permit", agents: all, due: "31 Aug" },
    { id: "t4", title: "Sign up for objection handling workshop", cat: "train", agents: all, due: "8 Aug" },
    { id: "t5", title: "Acknowledge June QA findings", cat: "qa", agents: qaMiss.length ? qaMiss : all, due: "5 Aug" },
  ];
  base.forEach(function (t) {
    t.done = {};
    t.agents.forEach(function (e) {
      const h = hashOf(e + t.id);
      if (h % 10 < 6) t.done[e] = true;
    });
  });
  return base;
}

// Long replies sometimes arrive cut off mid-JSON. Close whatever is
// still open so the parts that did arrive are usable.
function repairJson(str) {
  let inStr = false, esc = false;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (esc) { esc = false; continue; }
    if (ch === "\\") { esc = true; continue; }
    if (ch === "\"") { inStr = !inStr; continue; }
    if (inStr) continue;
    if (ch === "{" || ch === "[") stack.push(ch);
    else if (ch === "}" || ch === "]") stack.pop();
  }
  let out = str;
  if (inStr) out += "\"";
  out = out.replace(/,\s*$/, "");
  while (stack.length) { out += stack.pop() === "{" ? "}" : "]"; }
  return out;
}

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function dayLabel(iso) {
  const p = iso.split("-");
  const d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  return p[2] + " " + DOW[d.getDay()];
}

const PESO = "\u20B1";
// The floor runs seven days, but each agent works five and rests two.
const SHIFTS_PER_WEEK = 5;
function shiftsIn(calendarDays) { return Math.max(1, Math.round(calendarDays * SHIFTS_PER_WEEK / 7)); }

// Weighted least-squares slope. Ratios such as offer rate are weighted by their
// denominator, so a day with three contacts cannot swing the trend.
function fitSlope(pts) {
  let sw = 0, sx = 0, sy = 0;
  pts.forEach(function (p) { sw += p.w; sx += p.w * p.x; sy += p.w * p.y; });
  if (!sw) return null;
  const mx = sx / sw, my = sy / sw;
  let num = 0, den = 0;
  pts.forEach(function (p) { num += p.w * (p.x - mx) * (p.y - my); den += p.w * (p.x - mx) * (p.x - mx); });
  if (!den) return null;
  const slope = num / den;
  return { slope: slope, at: function (x) { return my + slope * (x - mx); } };
}

function hashOf(t) {
  let h = 7;
  for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
  return h;
}

// Seed the floor so supervisors see a populated board on day one.
function seedMoods(rows) {
  const out = {};
  rows.forEach(function (a) {
    const h = hashOf(a.emp || a.name);
    const m = h % 10 < 5 ? "up" : h % 10 < 8 ? "ok" : "low";
    const e = { mood: m, drivers: [], support: null, lowDays: 0 };
    if (m === "up") {
      e.drivers = [DRIVERS[h % DRIVERS.length]];
      if (h % 3 === 0) e.drivers.push(DRIVERS[(h + 3) % DRIVERS.length]);
    }
    if (m === "low") {
      e.support = h % 3 === 0 ? "yes" : "no";
      e.lowDays = 1 + (h % 4);
    }
    out[a.emp] = e;
  });
  return out;
}

function num(v) {
  if (v == null) return null;
  const t = String(v).replace(/[^0-9.\-]/g, "").trim();
  if (t === "" || t === "-") return null;
  const n = parseFloat(t);
  return isNaN(n) ? null : n;
}

// A value shown as 95% must be judged as 95%, otherwise a stage can display as
// on target and still be flagged as the break.
function roundDisp(v, f) {
  if (v == null) return null;
  if (f === "min") return Math.round(v * 10) / 10;
  if (f === "money") return v >= 1000000 ? Math.round(v / 10000) * 10000 : Math.round(v / 1000) * 1000;
  return Math.round(v);
}

function show(v, f) {
  if (v == null) return "-";
  if (f === "pct") return Math.round(v) + "%";
  if (f === "min") return v.toFixed(1) + "m";
  if (f === "money") return v >= 1000000 ? (v / 1000000).toFixed(2) + "M" : Math.round(v / 1000) + "k";
  return String(Math.round(v));
}

// Headers differ between exports, so match on a normalised name.
function findCol(row, names) {
  const keys = Object.keys(row);
  for (let i = 0; i < keys.length; i++) {
    const norm = keys[i].replace(/^\uFEFF/, "").trim().toLowerCase();
    for (let j = 0; j < names.length; j++) if (norm === names[j]) return row[keys[i]];
  }
  return null;
}

// Splits on commas but respects double quotes, so a quoted field containing a
// comma does not shift every column after it.
function splitRow(line) {
  const out = [];
  let cur = "", inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === "\"") {
      if (inQ && line[i + 1] === "\"") { cur += "\""; i++; }
      else inQ = !inQ;
    } else if (ch === "," && !inQ) {
      out.push(cur); cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(function (l) { return l.trim() !== ""; });
  const head = splitRow(lines[0].replace(/^\uFEFF/, "")).map(function (h) { return h.trim(); });
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = splitRow(lines[i]);
    const o = {};
    for (let j = 0; j < head.length; j++) o[head[j]] = (cells[j] || "").trim();
    rows.push(o);
  }
  return rows;
}

function rawRow(r) {
  return {
    date: findCol(r, ["date"]) || "",
    emp: findCol(r, ["emp_no", "emp no"]) || "",
    name: findCol(r, ["operator_name", "operator name"]) || "",
    sup: findCol(r, ["supervisor"]) || "",
    mgr: findCol(r, ["manager"]) || "",
    grp: findCol(r, ["group"]) || "",
    ch: findCol(r, ["channel"]) || "",
    sh: findCol(r, ["shift"]) || "",
    skills: findCol(r, ["skills"]) || "",
    month: findCol(r, ["month"]) || "",
    present: num(findCol(r, ["attendance"])),
    adh: num(findCol(r, ["schedule adherence", "adherence"])),
    prod: num(findCol(r, ["productivity"])),
    cnt: num(findCol(r, ["contacts"])),
    aht: num(findCol(r, ["aht in minutes", "aht"])),
    offers: num(findCol(r, ["offers"])),
    offerPct: num(findCol(r, ["offer rate"])),
    cvrPct: num(findCol(r, ["conversion rate"])),
    closed: num(findCol(r, ["closed"])),
    sales: num(findCol(r, ["sales"])),
    csat: num(findCol(r, ["csat"])),
    qa: num(findCol(r, ["qa score", "qa"])),
    vc: num(findCol(r, ["valid complaints"])),
    cvrTgt: num(findCol(r, ["conversion rate target", "target conversion rate"])),
  };
}

// Roll a set of daily rows up into one scorecard. Rates are recomputed from
// their own numerator and denominator, never averaged, so a quiet day cannot
// carry the same weight as a busy one.
function rollup(days) {
  // Daily exports carry attendance as 1 or 0 per shift. Monthly exports carry it
  // as a percentage, so treat every row as a day worked and average it instead.
  const mean = function (arr, k) {
    const v = arr.map(function (d) { return d[k]; }).filter(function (x) { return x != null; });
    return v.length ? v.reduce(function (x, y) { return x + y; }, 0) / v.length : null;
  };
  const total = function (arr, k) {
    const v = arr.map(function (d) { return d[k]; }).filter(function (x) { return x != null; });
    return v.length ? v.reduce(function (x, y) { return x + y; }, 0) : null;
  };
  const asPct = days.some(function (d) { return d.present != null && d.present > 1; });
  const present = asPct ? days.slice() : days.filter(function (d) { return d.present === 1; });
  const contacts = total(present, "cnt");
  const offers = total(present, "offers");
  const closed = total(present, "closed");
  const first = days[0] || {};
  return {
    days: days.length,
    presentDays: present.length,
    att: asPct ? mean(days, "present") : (days.length ? (present.length / days.length) * 100 : null),
    adh: mean(present, "adh"),
    prod: mean(present, "prod"),
    cnt: present.length ? contacts / present.length : null,
    aht: mean(present, "aht"),
    offer: offers != null && contacts ? (offers / contacts) * 100 : mean(present, "offerPct"),
    cvr: closed != null && offers ? (closed / offers) * 100 : mean(present, "cvrPct"),
    sales: total(present, "sales"),
    csat: mean(present, "csat"),
    qa: mean(present, "qa"),
    vc: total(present, "vc"),
    cvrTgt: first.cvrTgt,
  };
}

// Sales target scales with the span, since a week cannot be judged on a monthly number.
function build(rows, span) {
  const r0 = rows[0];
  const agg = rollup(rows);
  const share = span && span.workdays ? agg.days / span.workdays : 1;
  const kpis = {};
  let bad = 0;
  for (const k of KPIS) {
    const actual = roundDisp(agg[k.key === "att" ? "att" : k.key], k.fmt);
    let tgt = k.tgt;
    if (k.key === "cvr") tgt = agg.cvrTgt != null ? agg.cvrTgt : k.tgt;
    if (k.key === "sales") tgt = k.tgt * (share || 1);
    let st = "none";
    if (actual != null && tgt != null) st = k.dir === "hi" ? (actual < tgt ? "fail" : "pass") : (actual > tgt ? "fail" : "pass");
    if (st === "fail") bad++;
    kpis[k.key] = { actual: actual, tgt: tgt, st: st };
  }
  return {
    emp: r0.emp, name: r0.name, sup: r0.sup, mgr: r0.mgr, grp: r0.grp,
    ch: r0.ch, sh: r0.sh, skills: r0.skills, month: r0.month,
    days: agg.days, presentDays: agg.presentDays,
    kpis: kpis, bad: bad,
  };
}

function firstBreak(a) {
  if (a.presentDays === 0) return null;
  for (let i = 0; i < LADDER.length - 1; i++) if (a.kpis[LADDER[i]].st === "fail") return LADDER[i];
  return null;
}

function Ring(props) {
  const pct = props.pct;
  const r = 50, c = 2 * Math.PI * r;
  return (
    <div className="ring">
      <svg width="118" height="118" viewBox="0 0 118 118">
        <circle cx="59" cy="59" r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="9" />
        <circle cx="59" cy="59" r={r} fill="none" stroke={props.color} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c - (c * pct) / 100} />
      </svg>
      <div className="mid">
        <b className="dsp">{props.big}</b>
        <span className="eyeb" style={{ fontSize: 8.5, letterSpacing: ".14em", textAlign: "center", lineHeight: 1.3 }}>{props.cap}</span>
      </div>
    </div>
  );
}

// The signature: eight stages in causal order. Break marks where it snaps.
function Ladder(props) {
  const rows = props.rows;
  return (
    <div className="lad">
      {rows.map(function (r, i) {
        const k = K[r.key];
        return (
          <div key={r.key}>
            {i > 0 ? <div className="arrow">{"\u2193"}</div> : null}
            <div className={"rung" + (r.brk ? " brk" : r.weak ? " weak" : "")}>
              <div className="nm">{k.label}</div>
              <div className="tr">
                <div className="fl" style={{ width: Math.max(2, r.pct) + "%", background: k.hue, opacity: r.brk ? 1 : 0.62 }} />
              </div>
              <div className="vl" style={{ color: r.brk || r.weak ? "#FF5C7A" : "var(--dim)" }}>
                {r.txt}
                {r.brk ? <span className="brkTag">BREAK</span> : r.weak ? <span className="offTag">OFF</span> : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Card(props) {
  const open = props.open;
  const on = !!open[props.id];
  const tone = { good: "#3DDC97", warn: "#FFB84D", bad: "#FF5C7A" }[props.tone] || "var(--dim)";
  return (
    <div className={"card fade" + (props.big ? " big" : "")}>
      <button className="cardHead" onClick={function () {
        props.setOpen(function (o) {
          const wasOpen = !!o[props.id];
          // only one card open at a time, but leave the inner groups alone
          const n = {};
          Object.keys(o).forEach(function (k) { if (k.indexOf("g_") === 0) n[k] = o[k]; });
          n[props.id] = !wasOpen;
          return n;
        });
      }}>
        <span className="cardName dsp">{props.name}</span>
        {props.tag ? <span className="cardTag">{props.tag}</span> : null}
        <span className="cardStat" style={{ color: tone }}>{props.stat}</span>
        <span className={"chev" + (on ? " on" : "")}>{"\u25BE"}</span>
      </button>
      {on ? <div className="cardBody">{props.children}</div> : null}
    </div>
  );
}



function Grp(props) {
  const open = props.open;
  const has = Object.prototype.hasOwnProperty.call(open, props.id);
  const on = has ? open[props.id] : !!props.startOpen;
  return (
    <div className="grp" style={{ borderColor: on ? props.hue + "55" : "var(--line)" }}>
      <button className="grpHead" onClick={function () {
        props.setOpen(function (o) { const n = Object.assign({}, o); n[props.id] = !on; return n; });
      }}>
        <span className="grpDot" style={{ background: props.hue }} />
        <span className="grpName" style={{ color: props.hue }}>{props.name}</span>
        {props.meta ? <span className="grpMeta">{props.meta}</span> : null}
        <span className={"chev sm" + (on ? " on" : "")}>{"\u25BE"}</span>
      </button>
      {on ? <div className="grpBody">{props.children}</div> : null}
    </div>
  );
}


// Medal with a ribbon in the two ends of the funnel ramp, cool into hot.
function Medal(props) {
  const pal = {
    1: ["#FFE39A", "#E0A94B", "#6B4600"],
    2: ["#EEF4F6", "#A7BCC3", "#34505A"],
    3: ["#F3C7A2", "#BE8054", "#4E2C12"],
  }[props.rank];
  const sz = props.size || 44;
  return (
    <svg width={sz} height={sz * 1.25} viewBox="0 0 40 50" aria-hidden="true">
      <path d="M10 0 L19 19 L13.5 21.5 L4.5 2.5 Z" fill="#5EC8E5" />
      <path d="M30 0 L21 19 L26.5 21.5 L35.5 2.5 Z" fill="#FB7185" />
      <circle cx="20" cy="33" r="15.5" fill={pal[1]} />
      <circle cx="20" cy="33" r="12" fill={pal[0]} />
      <circle cx="20" cy="33" r="12" fill="none" stroke={pal[1]} strokeWidth="0.8" strokeDasharray="1.6 1.6" />
      <text x="20" y="38" textAnchor="middle" fontSize="14" fontWeight="800" fill={pal[2]}
        fontFamily="Bricolage Grotesque, DM Sans, sans-serif">{props.rank}</text>
    </svg>
  );
}

// Podium order puts first place in the middle, raised, the way a real one stands.
function Podium(props) {
  const list = props.list;
  const order = list.length === 3 ? [1, 0, 2] : list.map(function (x, i) { return i; });
  const lift = { 0: 0, 1: 18, 2: 30 };
  return (
    <div className="pod">
      {order.map(function (i) {
        const w = list[i];
        const rank = i + 1;
        return (
          <div key={w.name} className={"podCell r" + rank} style={{ marginTop: list.length === 3 ? lift[i] : 0 }}>
            <Medal rank={rank} size={rank === 1 ? 54 : 44} />
            <div className="podName">{w.name}</div>
            <div className="podVal mono">{w.value}</div>
            <div className="podMeta">{w.meta}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [raw, setRaw] = useState([]);
  const [isDaily, setIsDaily] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [role, setRole] = useState("supervisor");
  const [who, setWho] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const [ses, setSes] = useState(null);
  const [month, setMonth] = useState("");
  const [sel, setSel] = useState(null);
  const [tips, setTips] = useState({});
  const [busy, setBusy] = useState(false);
  const [offOnly, setOffOnly] = useState(false);
  const [sortKey, setSortKey] = useState("bad");
  const [sortDir, setSortDir] = useState("desc");
  const [moods, setMoods] = useState({});
  const [talked, setTalked] = useState({});
  const [checkedIn, setCheckedIn] = useState({});
  const [tasks, setTasks] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [upTitle, setUpTitle] = useState("");
  const [upType, setUpType] = useState("product");
  const [upUrl, setUpUrl] = useState("");
  const [reads, setReads] = useState({});
  const [open, setOpen] = useState({});
  const [sessions, setSessions] = useState([]);
  const [schedDate, setSchedDate] = useState("");
  const [myTasks, setMyTasks] = useState([]);
  const [mtTitle, setMtTitle] = useState("");
  const [mtDue, setMtDue] = useState("");
  const [mtOwner, setMtOwner] = useState("");
  const [cmt, setCmt] = useState({});
  const [ntTitle, setNtTitle] = useState("");
  const [ntCat, setNtCat] = useState("comp");
  const [ntWho, setNtWho] = useState("__team");
  const [pick, setPick] = useState(null);
  const [drv, setDrv] = useState([]);
  const [sup, setSup] = useState(null);
  const [cmpKey, setCmpKey] = useState("sales");
  const [cmpDir, setCmpDir] = useState("desc");

  function load(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const fr = new FileReader();
    fr.onload = function () {
      const parsed = parseCsv(String(fr.result)).map(rawRow).filter(function (a) { return a.name; });
      if (!parsed.length) { setMsg("That file has no readable rows. Check it has a header row with OPERATOR_NAME."); return; }
      const daily = parsed[0].date !== "";
      setRaw(parsed);
      setIsDaily(daily);
      const ms = Array.from(new Set(parsed.map(function (r) { return r.month; }))).filter(Boolean).sort();
      const lastM = ms[ms.length - 1];
      setMonth(lastM);
      setFrom(""); setTo("");
      setMsg("");
      const latestRows = buildAll(parsed, lastM, "", "");
      setMoods(seedMoods(latestRows));
      setTasks(seedTasks(latestRows));
      const supNames = Array.from(new Set(latestRows.map(function (r) { return r.sup; }))).sort();
      const mgrName = (latestRows[0] || {}).mgr || "";
      setMyTasks(seedMyTasks(supNames, mgrName));
      const ups = seedUpdates();
      setUpdates(ups);
      const seededReads = {};
      ups.forEach(function (u) {
        seededReads[u.id] = {};
        latestRows.forEach(function (a) {
          const h = hashOf(a.emp + u.id);
          if (h % 100 < (u.hrs > 24 ? 88 : u.hrs > 12 ? 62 : 34)) seededReads[u.id][a.emp] = true;
        });
      });
      setReads(seededReads);
    };
    fr.readAsText(f);
  }

  // Group the daily rows for one month and date window into per-agent scorecards.
  function buildAll(rowsIn, m, f1, t1) {
    const inWindow = rowsIn.filter(function (r) {
      if (r.month !== m) return false;
      if (f1 && r.date && r.date < f1) return false;
      if (t1 && r.date && r.date > t1) return false;
      return true;
    });
    const byEmp = {};
    inWindow.forEach(function (r) { (byEmp[r.emp] = byEmp[r.emp] || []).push(r); });
    const allDates = Array.from(new Set(inWindow.map(function (r) { return r.date; }))).filter(Boolean);
    const span = { workdays: allDates.length };
    return Object.keys(byEmp).map(function (e) { return build(byEmp[e], span); });
  }

  const months = useMemo(function () {
    return Array.from(new Set(raw.map(function (r) { return r.month; }))).filter(Boolean).sort();
  }, [raw]);

  const monthDates = useMemo(function () {
    return Array.from(new Set(raw.filter(function (r) { return r.month === month; })
      .map(function (r) { return r.date; }))).filter(Boolean).sort();
  }, [raw, month]);

  const recs = useMemo(function () {
    const outAll = [];
    months.forEach(function (m) {
      const sel = m === month;
      buildAll(raw, m, sel ? from : "", sel ? to : "").forEach(function (a) { outAll.push(a); });
    });
    return outAll;
  }, [raw, months, month, from, to]);

  const last = months[months.length - 1];
  const roster = recs.filter(function (r) { return r.month === last; });
  const sups = Array.from(new Set(roster.map(function (r) { return r.sup; }))).sort();
  const mgrs = Array.from(new Set(roster.map(function (r) { return r.mgr; }))).sort();
  const people = roster.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });

  function signIn() {
    if (pw !== "demo") { setMsg("That password is not demo."); return; }
    const t = who || (role === "agent" ? (people[0] || {}).emp : role === "manager" ? mgrs[0] : sups[0]);
    if (!t) { setMsg("Pick a profile first."); return; }
    setMsg("");
    if (role === "agent") {
      const a = people.filter(function (x) { return x.emp === t; })[0];
      setSes({ role: role, name: a ? a.name : "Agent", emp: t });
    } else setSes({ role: role, name: t, emp: null });
    setPw("");
  }

  const cur = recs.filter(function (r) { return r.month === month; });

  // "Yesterday" is the last day of whatever window is selected, so the podium
  // always refers to a real day in the loaded data.
  const awardDate = useMemo(function () {
    if (!isDaily || !monthDates.length) return null;
    return to || monthDates[monthDates.length - 1];
  }, [isDaily, monthDates, to]);

  const awards = useMemo(function () {
    if (!awardDate || !ses || ses.role === "agent") return null;
    const day = raw.filter(function (r) { return r.date === awardDate && r.present === 1; });
    if (ses.role === "supervisor") {
      const list = day.filter(function (r) { return r.sup === ses.name && (r.sales || 0) > 0; })
        .sort(function (x, y) { return (y.sales || 0) - (x.sales || 0) || x.name.localeCompare(y.name); })
        .slice(0, 3)
        .map(function (r) {
          return { name: r.name, value: show(r.sales, "money"),
            meta: (r.closed || 0) + " closed from " + (r.cnt || 0) + " contacts" };
        });
      return { mode: "agents", list: list };
    }
    const by = {};
    day.forEach(function (r) {
      by[r.sup] = by[r.sup] || { sales: 0, n: 0 };
      by[r.sup].sales += r.sales || 0;
      by[r.sup].n++;
    });
    const list = Object.keys(by).map(function (k) { return { name: k, per: by[k].sales / by[k].n, tot: by[k].sales, n: by[k].n }; })
      .filter(function (x) { return x.per > 0; })
      .sort(function (x, y) { return y.per - x.per || x.name.localeCompare(y.name); })
      .slice(0, 3)
      .map(function (x) {
        return { name: x.name, value: show(x.per, "money") + " per agent",
          meta: x.n + " agents in · " + show(x.tot, "money") + " total" };
      });
    return { mode: "teams", list: list };
  }, [raw, awardDate, ses]);

  const spanLabel = useMemo(function () {
    if (!isDaily || (!from && !to)) return month;
    const a = (from || monthDates[0] || "").slice(5).replace("-", "/");
    const b = (to || monthDates[monthDates.length - 1] || "").slice(5).replace("-", "/");
    return a === b ? a : a + " to " + b;
  }, [isDaily, from, to, month, monthDates]);

  const mine = useMemo(function () {
    if (!ses) return [];
    if (ses.role === "agent") return cur.filter(function (a) { return a.emp === ses.emp; });
    if (ses.role === "supervisor") return cur.filter(function (a) { return a.sup === ses.name; });
    return cur;
  }, [cur, ses]);

  // ---- Projection: run the funnel forwards from the chosen "as of" date ----
  // Only shown once a week of the month has passed and some of it remains.
  function projectAgent(emp) {
    if (!isDaily || !to) return null;
    const all = raw.filter(function (r) { return r.emp === emp && r.month === month; })
      .sort(function (x, y) { return x.date < y.date ? -1 : 1; });
    const mtd = all.filter(function (r) { return r.date <= to; });
    const future = monthDates.filter(function (d) { return d > to; }).length;
    if (mtd.length < 7 || future < 1) return null;
    const pres = mtd.filter(function (r) { return r.present === 1; });
    if (!pres.length) return null;
    const total = function (k) { return pres.reduce(function (x, r) { return x + (r[k] || 0); }, 0); };
    const avgOf = function (k) {
      const v = pres.map(function (r) { return r[k]; }).filter(function (x) { return x != null; });
      return v.length ? v.reduce(function (x, y) { return x + y; }, 0) / v.length : null;
    };
    const attRate = pres.length / mtd.length;
    const expDays = future * attRate;
    const cnt = total("cnt"), offers = total("offers"), closed = total("closed"), sales = total("sales");
    const cpd = cnt / pres.length;
    const offer = cnt ? offers / cnt : 0;
    const cvr = offers ? closed / offers : 0;
    const ticket = closed ? sales / closed : 12500;
    const adh = avgOf("adh"), prod = avgOf("prod"), aht = avgOf("aht");
    const tgtCvr = (pres[0].cvrTgt != null ? pres[0].cvrTgt : 18) / 100;
    const target = K.sales.tgt;
    const projSales = sales + (sales / pres.length) * expDays;
    const perContact = offer * cvr * ticket;
    const futureContacts = cpd * expDays;

    const impacts = [];
    function add(key, lostC, lostS) { if (lostS > 1000) impacts.push({ key: key, lostContacts: lostC, lostSales: lostS }); }
    if (attRate * 100 < K.att.tgt) { const lc = future * (K.att.tgt / 100 - attRate) * cpd; add("att", lc, lc * perContact); }
    if (adh != null && adh < K.adh.tgt) { const lc = cpd * (K.adh.tgt / adh - 1) * expDays; add("adh", lc, lc * perContact); }
    if (prod != null && prod < K.prod.tgt) { const lc = cpd * (K.prod.tgt / prod - 1) * expDays; add("prod", lc, lc * perContact); }
    if (aht != null && aht > K.aht.tgt) { const lc = cpd * (aht / K.aht.tgt - 1) * expDays; add("aht", lc, lc * perContact); }
    if (offer * 100 < K.offer.tgt) add("offer", 0, futureContacts * (K.offer.tgt / 100 - offer) * cvr * ticket);
    if (cvr < tgtCvr) add("cvr", 0, futureContacts * offer * (tgtCvr - cvr) * ticket);
    impacts.sort(function (x, y) { return y.lostSales - x.lostSales; });

    // trends over the most recent fortnight of worked days
    const recent = pres.slice(-14);
    const dayNo = function (r) { return Number(r.date.slice(8)); };
    const asOfDay = Number(to.slice(8));
    const endDay = asOfDay + future;
    const series = {
      adh: recent.filter(function (r) { return r.adh != null; }).map(function (r) { return { x: dayNo(r), y: r.adh, w: 1 }; }),
      prod: recent.filter(function (r) { return r.prod != null; }).map(function (r) { return { x: dayNo(r), y: r.prod, w: 1 }; }),
      aht: recent.filter(function (r) { return r.aht != null; }).map(function (r) { return { x: dayNo(r), y: r.aht, w: 1 }; }),
      offer: recent.filter(function (r) { return r.cnt; }).map(function (r) { return { x: dayNo(r), y: 100 * (r.offers || 0) / r.cnt, w: r.cnt }; }),
      cvr: recent.filter(function (r) { return r.offers; }).map(function (r) { return { x: dayNo(r), y: 100 * (r.closed || 0) / r.offers, w: r.offers }; }),
    };
    const MOVE = { adh: 1.5, prod: 1.5, aht: 0.5, offer: 2, cvr: 1.5 };
    const trends = [];
    Object.keys(series).forEach(function (key) {
      const f = fitSlope(series[key]);
      if (!f || series[key].length < 5) return;
      const now = f.at(asOfDay), end = f.at(endDay);
      if (Math.abs(end - now) < MOVE[key]) return;
      const worse = K[key].dir === "hi" ? end < now : end > now;
      const tgt = key === "cvr" ? tgtCvr * 100 : K[key].tgt;
      const crosses = K[key].dir === "hi" ? (now >= tgt && end < tgt) : (now <= tgt && end > tgt);
      trends.push({ key: key, now: now, end: end, worse: worse, crosses: crosses });
    });

    return {
      asOf: to, future: future, elapsed: mtd.length, mtdSales: sales, projSales: projSales, target: target,
      gap: target - projSales, shifts: shiftsIn(future),
      perShift: Math.max(0, (target - sales) / shiftsIn(future)), impacts: impacts, trends: trends,
    };
  }

  const teamProj = useMemo(function () {
    if (!isDaily || !to || !ses || ses.role === "agent") return null;
    const list = mine.map(function (a) { const pr = projectAgent(a.emp); return pr ? { a: a, p: pr } : null; })
      .filter(Boolean);
    if (!list.length) return null;
    const proj = list.reduce(function (x, o) { return x + o.p.projSales; }, 0);
    const target = K.sales.tgt * list.length;
    const leaks = {};
    list.forEach(function (o) { o.p.impacts.forEach(function (im) { leaks[im.key] = (leaks[im.key] || 0) + im.lostSales; }); });
    const leakList = Object.keys(leaks).map(function (k) { return { key: k, value: leaks[k] }; })
      .sort(function (x, y) { return y.value - x.value; }).slice(0, 3);
    const byTeam = {};
    list.forEach(function (o) {
      byTeam[o.a.sup] = byTeam[o.a.sup] || { proj: 0, n: 0 };
      byTeam[o.a.sup].proj += o.p.projSales; byTeam[o.a.sup].n++;
    });
    const atRisk = Object.keys(byTeam).map(function (k) {
      return { name: k, gap: K.sales.tgt * byTeam[k].n - byTeam[k].proj };
    }).filter(function (t) { return t.gap > 0; }).sort(function (x, y) { return y.gap - x.gap; }).slice(0, 3);
    return {
      proj: proj, target: target, gap: target - proj, leaks: leakList, atRisk: atRisk,
      missing: list.filter(function (o) { return o.p.gap > 0; }).length, n: list.length,
      future: list[0].p.future, asOf: to,
    };
  }, [isDaily, to, ses, mine, raw, month, monthDates]);


  function defaultDir(key) {
    if (key === "name" || key === "sup") return "asc";
    if (key === "bad") return "desc";
    return K[key] && K[key].dir === "lo" ? "desc" : "asc";
  }
  function clickSort(key) {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir(defaultDir(key)); }
  }
  function sortVal(a, key) {
    if (key === "name") return a.name;
    if (key === "sup") return a.sup;
    if (key === "bad") return a.bad;
    return a.kpis[key].actual;
  }

  const list = useMemo(function () {
    const arr = mine.filter(function (a) { return !offOnly || a.bad > 0; }).slice();
    arr.sort(function (a, b) {
      const x = sortVal(a, sortKey), y = sortVal(b, sortKey);
      if (x == null && y == null) return a.name.localeCompare(b.name);
      if (x == null) return 1;
      if (y == null) return -1;
      let c = typeof x === "string" ? x.localeCompare(y) : x - y;
      if (sortDir === "desc") c = -c;
      return c === 0 ? a.name.localeCompare(b.name) : c;
    });
    return arr;
  }, [mine, offOnly, sortKey, sortDir]);

  const avg = useMemo(function () {
    const o = {};
    for (const k of KPIS) {
      const v = cur.map(function (a) { return a.kpis[k.key].actual; }).filter(function (x) { return x != null; });
      o[k.key] = v.length ? v.reduce(function (x, y) { return x + y; }, 0) / v.length : null;
    }
    return o;
  }, [cur]);

  const team = useMemo(function () {
    const n = mine.length;
    if (!n) return null;
    const rates = {};
    KPIS.forEach(function (k) {
      const sc = mine.filter(function (a) { return a.kpis[k.key].st !== "none"; });
      const p = sc.filter(function (a) { return a.kpis[k.key].st === "pass"; }).length;
      rates[k.key] = { n: sc.length, pass: p, pct: sc.length ? Math.round((p / sc.length) * 100) : null };
    });
    const scored = KPIS.filter(function (k) { return rates[k.key].pct != null; });
    const good = scored.filter(function (k) { return rates[k.key].pct >= 70; }).sort(function (a, b) { return rates[b.key].pct - rates[a.key].pct; });
    const bad = scored.filter(function (k) { return rates[k.key].pct < 70; }).sort(function (a, b) { return rates[a.key].pct - rates[b.key].pct; });
    const missing = mine.filter(function (a) { return a.kpis.sales.st === "fail"; });
    const bn = {};
    missing.forEach(function (a) { const b = firstBreak(a) || "cvr"; bn[b] = (bn[b] || 0) + 1; });
    const worst = Object.keys(bn).sort(function (x, y) { return bn[y] - bn[x]; })[0] || null;
    return {
      n: n, rates: rates, good: good, bad: bad, bn: bn, worst: worst,
      clean: mine.filter(function (a) { return a.bad === 0; }).length,
      off: mine.filter(function (a) { return a.bad > 0; }).length,
      missing: missing.length,
    };
  }, [mine]);

  const mood = useMemo(function () {
    if (!mine.length) return null;
    const counts = { up: 0, ok: 0, low: 0 };
    const drivers = {};
    const asked = [];
    let answered = 0, priv = 0, runs = 0;
    mine.forEach(function (a) {
      const e = moods[a.emp];
      if (!e) return;
      answered++;
      counts[e.mood] = (counts[e.mood] || 0) + 1;
      (e.drivers || []).forEach(function (d) { drivers[d] = (drivers[d] || 0) + 1; });
      if (e.mood === "low" && e.support === "yes") asked.push(a);
      if (e.mood === "low" && e.support !== "yes") priv++;
      if (e.mood === "low" && (e.lowDays || 0) >= 3) runs++;
    });
    const topDrivers = Object.keys(drivers).sort(function (x, y) { return drivers[y] - drivers[x]; }).slice(0, 4);
    return { counts: counts, answered: answered, drivers: drivers, topDrivers: topDrivers,
      asked: asked, priv: priv, runs: runs, n: mine.length };
  }, [mine, moods]);

  function addMyTask() {
    if (!mtTitle.trim()) return;
    const owner = ses.role === "manager" ? (mtOwner || ses.name) : ses.name;
    setMyTasks(function (list) {
      return list.concat([{
        id: "m" + Date.now(), owner: owner, title: mtTitle.trim(), due: mtDue,
        status: "open", from: owner === ses.name ? "" : ses.name,
        created: Date.now(), comments: [],
      }]);
    });
    setMtTitle(""); setMtDue("");
  }
  function setMyStatus(id, st) {
    setMyTasks(function (list) {
      return list.map(function (t) { return t.id === id ? Object.assign({}, t, { status: st }) : t; });
    });
  }
  function addComment(id) {
    const text = (cmt[id] || "").trim();
    if (!text) return;
    setMyTasks(function (list) {
      return list.map(function (t) {
        if (t.id !== id) return t;
        return Object.assign({}, t, { comments: t.comments.concat([{ at: today(), text: text }]) });
      });
    });
    setCmt(function (o) { const n = Object.assign({}, o); n[id] = ""; return n; });
  }
  function removeMyTask(id) {
    setMyTasks(function (list) { return list.filter(function (t) { return t.id !== id; }); });
  }

  function toggleTask(id, emp) {
    setTasks(function (list) {
      return list.map(function (t) {
        if (t.id !== id) return t;
        const done = Object.assign({}, t.done);
        if (done[emp]) delete done[emp]; else done[emp] = true;
        return Object.assign({}, t, { done: done });
      });
    });
  }

  function markRead(id, emp) {
    if (!emp) return;
    setReads(function (o) {
      const n = Object.assign({}, o);
      n[id] = Object.assign({}, n[id]); n[id][emp] = true;
      return n;
    });
  }

  function readCount(id, emps) {
    const r = reads[id] || {};
    return emps.filter(function (e) { return r[e]; }).length;
  }

  function addUpdate() {
    if (!upTitle.trim()) return;
    setUpdates(function (list) {
      return [{ id: "u" + Date.now(), type: upType, hrs: 0, title: upTitle.trim(), note: "",
        url: upUrl.trim() || CONF }].concat(list);
    });
    setUpTitle(""); setUpUrl("");
  }

  function addTask() {
    if (!ntTitle.trim()) return;
    const who = ntWho === "__team" ? mine.map(function (a) { return a.emp; }) : [ntWho];
    setTasks(function (list) {
      return list.concat([{ id: "t" + Date.now(), title: ntTitle.trim(), cat: ntCat, agents: who, due: "", done: {} }]);
    });
    setNtTitle("");
  }

  function saveMood() {
    if (!pick) return;
    const prev = moods[ses.emp] || {};
    const e = {
      mood: pick,
      drivers: pick === "up" ? drv : [],
      support: pick === "low" ? sup : null,
      lowDays: pick === "low" ? (prev.lowDays || 0) + 1 : 0,
    };
    setMoods(function (o) { const n = Object.assign({}, o); n[ses.emp] = e; return n; });
    setPick(null); setDrv([]); setSup(null);
  }

  const teams = useMemo(function () {
    const by = {};
    cur.forEach(function (a) { (by[a.sup] = by[a.sup] || []).push(a); });
    const rows = Object.keys(by).map(function (name) {
      const g = by[name], m = {};
      COMPARE.forEach(function (c) {
        const vals = g.map(function (a) { return a.kpis[c.key].actual; }).filter(function (v) { return v != null; });
        if (c.agg === "sum") m[c.key] = vals.reduce(function (x, y) { return x + y; }, 0);
        else if (c.agg === "passpct") {
          const sc = g.filter(function (a) { return a.kpis[c.key].st !== "none"; });
          m[c.key] = sc.length ? (sc.filter(function (a) { return a.kpis[c.key].st === "pass"; }).length / sc.length) * 100 : null;
        } else m[c.key] = vals.length ? vals.reduce(function (x, y) { return x + y; }, 0) / vals.length : null;
      });
      return { name: name, n: g.length, m: m };
    });
    COMPARE.forEach(function (c) {
      rows.slice().filter(function (r) { return r.m[c.key] != null; })
        .sort(function (x, y) { return c.good === "hi" ? y.m[c.key] - x.m[c.key] : x.m[c.key] - y.m[c.key]; })
        .forEach(function (r, i) { r["rk_" + c.key] = i + 1; });
    });
    const site = {}, top = {};
    COMPARE.forEach(function (c) {
      const v = rows.map(function (r) { return r.m[c.key]; }).filter(function (x) { return x != null; });
      site[c.key] = v.length ? (c.agg === "sum" ? v.reduce(function (x, y) { return x + y; }, 0) : v.reduce(function (x, y) { return x + y; }, 0) / v.length) : null;
      top[c.key] = v.length ? Math.max.apply(null, v) : 1;
    });
    rows.sort(function (a, b) {
      const x = a.m[cmpKey], y = b.m[cmpKey];
      if (x == null) return 1;
      if (y == null) return -1;
      return cmpDir === "desc" ? y - x : x - y;
    });
    return { rows: rows, site: site, top: top };
  }, [cur, cmpKey, cmpDir]);

  function hist(emp, key, f) {
    return months.map(function (m) {
      const r = recs.filter(function (x) { return x.emp === emp && x.month === m; })[0];
      return m + " " + (r ? show(r.kpis[key].actual, f) : "-");
    }).join(", ");
  }

  async function coach(a, self) {
    const pjc = projectAgent(a.emp);
    const projText = pjc
      ? "MONTH-END PROJECTION, as of " + pjc.asOf + " with " + pjc.future + " days left, assuming current rates continue:\n" +
        "Projected sales " + show(pjc.projSales, "money") + " against a " + show(pjc.target, "money") + " target" +
        (pjc.gap > 0 ? ", " + show(pjc.gap, "money") + " short. Needs " + show(pjc.perShift, "money") + " per shift over the " +
          "remaining " + pjc.shifts + " shifts, allowing two rest days a week." : ", on track.") + "\n" +
        (pjc.impacts.length ? "Peso impact by cause, largest first: " + pjc.impacts.map(function (im) {
          return K[im.key].label + " about " + show(im.lostSales, "money") +
            (im.lostContacts ? " (" + Math.round(im.lostContacts) + " contacts lost)" : "");
        }).join("; ") + ".\n" : "") +
        (pjc.trends.length ? "Recent trends: " + pjc.trends.map(function (tr) {
          return K[tr.key].label + (tr.worse ? " falling" : " improving") + " toward " + show(tr.end, K[tr.key].fmt) + " by month-end";
        }).join("; ") + ".\n" : "") + "\n"
      : "";
    setBusy(true);
    const all = KPIS.map(function (k) {
      const d = a.kpis[k.key];
      if (d.st === "none") return k.label + ": no data";
      return k.label + ": " + show(d.actual, k.fmt) + " vs target " + show(d.tgt, k.fmt) +
        " (" + (d.st === "fail" ? "MISSING TARGET" : "on target") + "). 3-month: " + hist(a.emp, k.key, k.fmt) +
        ". Site average: " + show(avg[k.key], k.fmt) + ".";
    }).join("\n");

    const isSelf = !!self;
    const slotSelf = a.emp + month + "|self";
    const slotSup = a.emp + month + "|sup";

    const shared = "You are a performance coach for a consumer finance contact centre in the Philippines. Agents " +
      "handle customer concerns over chat and, if the customer is eligible, offer a cash loan or credit card.\n\n" +
      "WRITE IN PLAIN ENGLISH. Conversational, the way a supervisor actually talks on the floor, not memo English. " +
      "Short sentences. No corporate filler, no synergies, no leverage, no circle back. Contractions are fine.\n" +
      "Good: Her conversion dropped 12 points against target and she is 8 points below the site average.\n" +
      "Too formal: It has been observed that the conversion metric has undergone a decline.\n" +
      "Too casual: Yikes, conversion tanked.\n\n" +
      "WHICH PERSON TO USE DEPENDS ON WHO IS READING. The agent half is addressed to the agent, so second person, " +
      "you and your. The supervisor half is addressed to the supervisor ABOUT the agent, so third person: the " +
      "agent, she or he, their. Writing you in the supervisor half is wrong, because it reads as if the " +
      "supervisor is being blamed. The only exception is the opening line, which the supervisor says out loud to " +
      "the agent, so that one is second person.\n\n" +
      "Context: channel " + a.ch + ", group " + a.grp + ", skills " + (a.skills || "not recorded") + ".\n\n" +
      "FULL SCORECARD:\n" + all + "\n\n" + projText +
      (projText ? "USING THE PROJECTION. The first broken stage tells you the cause. The peso impact tells you what it " +
        "costs. If the largest peso impact is a different stage from the first break, say so plainly in the chain and " +
        "lead the actions with the larger one, because fixing the first break alone may not move sales. Quote the " +
        "projected shortfall in pesos. In the agent half, you may state the projected month-end sales against target " +
        "as a plain fact, but never rank causes or name the biggest peso impact, since that is a diagnosis.\n\n" : "") +
      "These KPIs form a funnel. Read it in order, because everything below a broken stage is a symptom, not a " +
      "cause:\n" +
      "1. Attendance. Are they turning up for work?\n" +
      "2. Schedule adherence. Are they keeping to log-in, log-out and break times?\n" +
      "3. Productivity. Are they actually logged in and available for chats?\n" +
      "4. Contacts. Are they speaking to enough customers?\n" +
      "5. AHT. Is each chat taking too long?\n" +
      "6. Offer rate. Of the customers they spoke to, how many were actually offered a loan or card?\n" +
      "7. Conversion rate. Of those offered, how many closed?\n" +
      "8. Quality: CSAT, QA score, valid complaints.\n" +
      "Offer rate and conversion rate are different problems. A low offer rate is a habit problem, they are not " +
      "raising it at all. A healthy offer rate with low conversion is a skill problem, they raise it and lose it. " +
      "Never treat them as the same thing.\n" +
      "Sales is the outcome, almost never the cause.\n" +
      "If NOTHING is below target, do not invent a problem. The conversation becomes about what is working, why it " +
      "is working, and how to hold it. Say so plainly.\n\n";

    const p = shared +
      "Produce BOTH halves of one 1-on-1: what the agent gets beforehand, and what the supervisor gets to run it. " +
      "They must line up, because the supervisor will see the exact questions the agent was asked.\n\n" +
      "THE AGENT HALF. Written to the agent, second person, warm and matter of fact. Do NOT diagnose here. Do not " +
      "name a root cause, do not say which stage broke, do not tell them what to fix. They work it out themselves " +
      "and bring their own explanation. Stating the answer here destroys the point of the session.\n" +
      "Every question must be answerable from something that actually happened, not from a feeling. Never ask how " +
      "something feels or how things are going in general, because the honest answer is fine and it teaches nobody " +
      "anything.\n" +
      "IF OFFER RATE, CONVERSION OR SALES IS INVOLVED, do not ask a broad question about offering. Selling breaks " +
      "into parts and the useful question is which part is hard. Name these and ask which one they find hardest, " +
      "with a recent example ready: timing the pitch, pitching to an unhappy customer, handling objections such as " +
      "too expensive or maybe next time, explaining the product clearly, and closing before the chat ends. Put that " +
      "list " +
      "in the question so they can pick one. Do not tell them which part you think it is.\n" +
      "If every KPI is on target, ask what is working, which habit drives it, and what would put it at risk.\n\n" +
      "THE SUPERVISOR HALF. This is a briefing for the supervisor to understand the situation before the session. " +
      "It is NOT a script and the supervisor will not read it out. Write every line as a statement of fact about " +
      "the agent, in the third person: the agent, her offer rate, she is not offering enough. Never address " +
      "the agent here and never use mo or ikaw. The only exception is the opening line, which is the one thing " +
      "the supervisor actually says out loud, so that one is addressed to the agent.\n" +
      "Refer to the person only as the agent, no names. Diagnose " +
      "properly: walk the funnel, stop at the FIRST broken stage, that is the root cause. If every operational " +
      "stage is healthy and only conversion is weak, say so, since that is a skill problem not a discipline one. " +
      "If nothing is below target, say that rather than inventing a cause.\n\n" +
      "Return a JSON object with these keys:\n" +
      "Return the keys in exactly this order, because a reply that gets cut off must keep the most useful parts.\n" +
      "\"prep\": one sentence telling the agent their supervisor wants to talk through the month and " +
      "these are worth thinking about first. Do not summarise the problem.\n" +
      "\"questions\": array of exactly 3 objects, ordered by funnel position, earliest stage first, each with " +
      "kpi (English), fact (one sentence stating only what the number did, with figures, no interpretation), " +
      "question (one open question inviting their own explanation).\n" +
      "\"root_cause\": one short line naming the broken stage, in the third person about the agent. " +
      "No more than 12 words.\n" +
      "\"chain\": array of 3 to 4 short bullets tracing the break down to sales, each with a number. " +
      "One step per bullet, no paragraphs. Written about the agent in the third person, as findings the " +
      "supervisor is reading, for example: she offered to only 25% of contacts against a 30% target.\n" +
      "\"check_yourself\": array of exactly 3 short questions addressed TO THE SUPERVISOR, so you and your here " +
      "refer to the supervisor, not the agent. They answer these honestly before the session. Aim them " +
      "at the supervisor's own part in it: what has already been tried and whether it " +
      "worked, whether this is within the agent's control or a queue, tool or scheduling problem, whether the same " +
      "pattern shows up across the team, and whether anything was promised last time and not delivered.\n" +
      "\"opening\": one line to open with. A question inviting the agent to explain first, never a " +
      "statement of the diagnosis.\n" +
      "\"listen_for\": array of exactly 3 short bullets, things in the agent's answer that would " +
      "confirm or change the diagnosis. If conversion or offer rate is the issue, note that the agent was asked " +
      "which part of selling is hardest, and listen for which they name, since each needs a different fix.\n" +
      "\"if_they_disagree\": array of 2 to 3 short bullets on what to do when the agent's explanation " +
      "does not match the data. Be concrete about how to test whose version is right, and say plainly that the " +
      "data can be wrong or missing context.\n" +
      "\"actions\": array of exactly 3 objects, ordered by impact, each with kpi (English), trend (3 or 4 words), " +
      "observation (one sentence on the gap vs target and site average), action (one concrete behaviour doable " +
      "this week), check (what to look at in 2 weeks). If an action includes a line the agent should say to a " +
      "customer, write the line in quotes.\n\n" +
      "Every array item is ONE short line under 18 words, never a paragraph. " +
      "Brevity matters, a reply that runs long gets cut off before it finishes. " +
      "Reply with ONLY the JSON object, no preamble.";

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 8000, messages: [{ role: "user", content: p }] }),
      });
      const d = await res.json();
      if (d.error) throw new Error(d.error.message || "API error");
      const t = (d.content || []).map(function (c) { return c.text || ""; }).join("");
      if (!t) throw new Error("The model returned nothing");
      const body = t.slice(t.indexOf("{"));
      let obj = null;
      try { obj = JSON.parse(body.slice(0, body.lastIndexOf("}") + 1)); }
      catch (e1) {
        try { obj = JSON.parse(repairJson(body)); obj.partial = true; }
        catch (e2) { throw new Error("The reply was cut off and could not be read"); }
      }
      if (!obj.root_cause && !obj.questions) throw new Error("The reply came back in an unexpected shape");
      setTips(function (o) {
        const n = Object.assign({}, o);
        n[slotSelf] = { prep: obj.prep, questions: obj.questions };
        n[slotSup] = obj;
        return n;
      });
    } catch (err) {
      setTips(function (o) { const n = Object.assign({}, o); n[isSelf ? slotSelf : slotSup] = { error: String(err.message || err) }; return n; });
    }
    setBusy(false);
  }

  const CH = { pass: "chip c-pass", fail: "chip c-fail", none: "chip c-none" };

  function ordinalOf(n) {
    if (n % 100 >= 11 && n % 100 <= 13) return "th";
    return ["th", "st", "nd", "rd"][n % 10] || "th";
  }

  const myRank = ses && ses.role === "supervisor"
    ? (teams.rows.filter(function (t) { return t.name === ses.name; })[0] || {}).rk_sales
    : null;

  function Upd(props) {
    const u = props.u;
    const unread = props.emp && !(reads[u.id] || {})[props.emp];
    return (
      <a className="upd" href={u.url} target="_blank" rel="noopener noreferrer"
        style={{ opacity: props.faded ? 0.7 : 1 }}
        onClick={function () { markRead(u.id, props.emp); }}>
        <span className="updBar" style={{ background: UT[u.type].hue }} />
        <span style={{ flex: 1 }}>
          <span className="eyeb" style={{ color: UT[u.type].hue }}>
            {UT[u.type].label}{unread ? <span className="newDot" /> : null}
          </span>
          <span className="updT">{u.title}</span>
          {u.note && !props.faded ? <span className="updN">{u.note}</span> : null}
        </span>
        <span className="dim mono updH">
          {u.hrs <= 24 ? u.hrs + "h" : Math.round(u.hrs / 24) + "d"} ago{"  \u2197"}
        </span>
      </a>
    );
  }

  function sessionsFor(emp) {
    return sessions.filter(function (x) { return x.emp === emp; })
      .sort(function (x, y) { return x.created - y.created; });
  }
  function lastDone(emp) {
    const d = sessionsFor(emp).filter(function (x) { return x.status === "done"; });
    return d.length ? d[d.length - 1] : null;
  }
  function upcoming(emp) {
    return sessionsFor(emp).filter(function (x) { return x.status === "scheduled"; })[0] || null;
  }

  function schedule(a, date, acts) {
    if (!date) return;
    const focus = KPIS.filter(function (k) { return a.kpis[k.key].st === "fail"; }).map(function (k) { return k.key; });
    const baseline = {};
    focus.forEach(function (k) { baseline[k] = a.kpis[k].actual; });
    setSessions(function (list) {
      return list.concat([{
        id: "s" + Date.now(), emp: a.emp, date: date, status: "scheduled", created: Date.now(),
        month: month, focus: focus, baseline: baseline,
        actions: (acts || []).map(function (x) { return { kpi: x.kpi, text: x.action, done: false }; }),
      }]);
    });
    setSchedDate("");
  }
  function completeSession(id) {
    setSessions(function (list) {
      return list.map(function (x) { return x.id === id ? Object.assign({}, x, { status: "done" }) : x; });
    });
  }
  function dropSession(id) {
    setSessions(function (list) { return list.filter(function (x) { return x.id !== id; }); });
  }
  function toggleAct(id, i) {
    setSessions(function (list) {
      return list.map(function (x) {
        if (x.id !== id) return x;
        const acts = x.actions.map(function (aa, j) { return j === i ? Object.assign({}, aa, { done: !aa.done }) : aa; });
        return Object.assign({}, x, { actions: acts });
      });
    });
  }

  function SessBox(props) {
    const a = props.a, self = props.self;
    const next = upcoming(a.emp), last = lastDone(a.emp);
    const out2 = tips[a.emp + month + "|sup"];
    if (!next && !last && self) return null;

    return (
      <Grp open={open} setOpen={setOpen} id={"g_sess_" + a.emp} name="Coaching Session" hue="#C4B5FD"
        startOpen={!!(next || last)}
        meta={next ? "scheduled " + next.date : last ? "last session " + last.date : "not scheduled yet"}>

        {next ? (
          <div className="coach" style={{ borderLeft: "3px solid #C4B5FD" }}>
            <h4 style={{ color: "#C4B5FD" }}>{self ? "Your Next 1-on-1" : "Scheduled"}</h4>
            <p style={{ marginBottom: self ? 0 : 8 }}>
              <b style={{ color: "#C4B5FD" }}>{next.date}</b>
              {self ? " with " + a.sup : " · reviewing " + next.focus.map(function (k) { return K[k].label.toLowerCase(); }).join(", ")}
            </p>
            {!self ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button className="btn go" onClick={function () { completeSession(next.id); }}>Mark session done</button>
                <button className="btn gh" onClick={function () { dropSession(next.id); }}>Cancel</button>
              </div>
            ) : null}
          </div>
        ) : null}

        {last ? (
          <div className="coach" style={{ borderLeft: "3px solid #3DDC97" }}>
            <h4 style={{ color: "#3DDC97" }}>{self ? "What You Agreed On " + last.date : "Agreed " + last.date}</h4>
            {last.actions.length ? (
              <div>
                {last.actions.map(function (ac, i) {
                  return (
                    <label key={i} className="task" style={{ opacity: ac.done ? 0.55 : 1 }}>
                      <input type="checkbox" checked={ac.done} onChange={function () { toggleAct(last.id, i); }} />
                      <span className="tcat" style={{ background: (K[(KPIS.filter(function (x) { return x.label.toLowerCase() === String(ac.kpi || "").toLowerCase(); })[0] || {}).key] || {}).hue || "#C4B5FD" }} />
                      <span style={{ flex: 1, textDecoration: ac.done ? "line-through" : "none" }}>{ac.text}</span>
                    </label>
                  );
                })}
                <p className="dim" style={{ fontSize: 11.5, marginTop: 10, marginBottom: 0 }}>
                  {self ? "These stay here until your next session." : "The agent sees these every day until the next session."}
                </p>
              </div>
            ) : <p className="dim" style={{ margin: 0 }}>No actions were recorded for that session.</p>}
          </div>
        ) : null}

        {last && last.focus.length ? (
          <div className="coach" style={{ borderLeft: "3px solid #A3E635" }}>
            <h4 style={{ color: "#A3E635" }}>Progress Since {last.month}</h4>
            <table style={{ marginTop: 6 }}>
              <thead>
                <tr><th>KPI</th><th>{last.month}</th><th>{month}</th><th>Change</th></tr>
              </thead>
              <tbody>
                {last.focus.map(function (k) {
                  const was = last.baseline[k];
                  const now = a.kpis[k].actual;
                  const kk = K[k];
                  let delta = null, better = null;
                  if (was != null && now != null) {
                    delta = now - was;
                    better = kk.dir === "hi" ? delta > 0 : delta < 0;
                  }
                  return (
                    <tr key={k}>
                      <td style={{ color: kk.hue, fontWeight: 600 }}>{kk.label}</td>
                      <td className="mono dim">{show(was, kk.fmt)}</td>
                      <td><span className={CH[a.kpis[k].st]}>{show(now, kk.fmt)}</span></td>
                      <td className="mono" style={{ fontWeight: 700, color: delta == null ? "var(--dim)" : better ? "#3DDC97" : "#FF5C7A" }}>
                        {delta == null ? "-" : (delta > 0 ? "+" : "") + show(Math.abs(delta) * (delta < 0 ? -1 : 1), kk.fmt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="dim" style={{ fontSize: 11.5, marginTop: 8, marginBottom: 0 }}>
              {month === last.month
                ? "Same month as the session, so there is nothing to compare yet. Switch months once new data lands."
                : "Green means it moved the right way since the session."}
            </p>
          </div>
        ) : null}

        {!self ? (
          <div className="coach" style={{ borderLeft: "3px solid #5EC8E5" }}>
            <h4 style={{ color: "#5EC8E5" }}>{next ? "Reschedule" : "Schedule The Next One"}</h4>
            <p className="dim" style={{ fontSize: 12 }}>
              {out2 && out2.actions
                ? "The three actions above get pinned to the agent's page once the session is marked done."
                : "Run the diagnosis first if you want the actions carried into the session."}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <input type="date" value={schedDate} onChange={function (e) { setSchedDate(e.target.value); }}
                style={{ flex: "1 1 170px", width: "auto" }} />
              <button className="btn go" disabled={!schedDate}
                onClick={function () { schedule(a, schedDate, out2 && out2.actions); }}>
                {next ? "Replace booking" : "Schedule"}
              </button>
            </div>
          </div>
        ) : null}
      </Grp>
    );
  }

  function Detail(props) {
    const a = props.a;
    const out = tips[a.emp + month + (props.self ? "|self" : "|sup")];
    const br = firstBreak(a);
    const pj = projectAgent(a.emp);
    return (
      <div>
              <div className="eyeb">{[a.grp, a.grp === a.ch ? "" : a.ch, a.skills].filter(Boolean).join(" · ")}</div>
              <h2 className="dsp">{props.self ? "My scorecard" : a.name}</h2>
              <p className="dim" style={{ margin: "2px 0 18px", fontSize: 12.5 }}>
                {(props.self ? month + " · Supervisor " + a.sup : a.emp + " · Supervisor " + a.sup + " · " + month)
                  + (a.days ? " · " + a.presentDays + " of " + a.days + " days worked" : "")}
              </p>

              <div className="eyeb" style={{ marginBottom: 10 }}>Diagnostic funnel</div>
              {a.presentDays === 0 ? (
                <div className="noshift">
                  <div style={{ fontSize: 15, fontWeight: 700 }}>
                    No shifts worked in {a.days === 1 ? "this day" : "these " + a.days + " days"}
                  </div>
                  <p className="dim" style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.6 }}>
                    {props.self
                      ? "You were not scheduled or not in across the days selected, so there is nothing to score. Widen the range or clear it to see your month."
                      : "The agent was absent for every day in the selected range, so there is nothing to diagnose. Widen the range or clear it, then look at attendance for the wider period."}
                  </p>
                </div>
              ) : (
                <Ladder rows={LADDER.map(function (key) {
                  const d = a.kpis[key];
                  const span = d.tgt ? Math.max(d.tgt * 1.6, (d.actual || 0) * 1.05) : 1;
                  const pct = d.actual == null ? 0 : Math.min(100, (d.actual / span) * 100);
                  return { key: key, pct: pct, txt: show(d.actual, K[key].fmt), brk: key === br,
                    weak: d.st === "fail" && key !== br };
                })} />
              )}

              {pj ? (
                props.self ? (
                  <div className="proj" style={{ marginTop: 18 }}>
                    <div className="eyeb" style={{ color: "#FDBA74" }}>At your current pace · as of {dayLabel(pj.asOf)}</div>
                    <div className="projHead">
                      About <b>{PESO}{show(pj.projSales, "money")}</b> by month-end against a {PESO}{show(pj.target, "money")} target
                    </div>
                    <div className="dim" style={{ fontSize: 12.5 }}>
                      {pj.gap > 0
                        ? "That is " + PESO + show(pj.perShift, "money") + " a shift across your remaining " + pj.shifts + " shifts, after your two rest days a week."
                        : "On track to reach target if the current pace holds."}
                    </div>
                  </div>
                ) : (
                  <Grp open={open} setOpen={setOpen} id={"g_proj_" + a.emp} name="If Nothing Changes" hue="#FDBA74" startOpen
                    meta={pj.gap > 0 ? PESO + show(pj.gap, "money") + " short of target by month-end" : "on track for target"}>
                    <div className="proj">
                      <div className="projHead">
                        Projected <b>{PESO}{show(pj.projSales, "money")}</b> against {PESO}{show(pj.target, "money")}
                        {pj.gap > 0 ? <span style={{ color: "#FF5C7A" }}> &mdash; {PESO}{show(pj.gap, "money")} short</span> : <span style={{ color: "#3DDC97" }}> &mdash; on track</span>}
                      </div>
                      {pj.gap > 0 ? (
                        <div className="dim" style={{ fontSize: 12.5 }}>
                          Needs {PESO}{show(pj.perShift, "money")} per shift across the remaining {pj.shifts} shifts, allowing two rest days a week.
                        </div>
                      ) : null}

                      {pj.impacts.length ? (
                        <div style={{ marginTop: 14 }}>
                          <div className="eyeb">Where the money is, largest first</div>
                          <ul className="bul">
                            {pj.impacts.map(function (im) {
                              const kk = K[im.key];
                              return (
                                <li key={im.key}>
                                  <b style={{ color: kk.hue }}>{kk.label}</b> <span className="dim">&mdash;</span> <b className="mono">{PESO}{show(im.lostSales, "money")}</b> at stake
                                  <div className="dim" style={{ fontSize: 12 }}>
                                    {im.lostContacts
                                      ? "If current " + kk.label.toLowerCase() + " continues, projected to lose " + Math.round(im.lostContacts) + " contacts this month, about " + PESO + show(im.lostSales, "money") + " in expected sales."
                                      : "At the current " + kk.label.toLowerCase() + ", about " + PESO + show(im.lostSales, "money") + " in expected sales is at stake by month-end."}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                          {br && pj.impacts[0].key !== br ? (
                            <div className="projNote">
                              The first break is <b>{K[br].label.toLowerCase()}</b>, but the largest peso impact is <b>{K[pj.impacts[0].key].label.toLowerCase()}</b>.
                              Fixing the first break alone may not move sales much.
                            </div>
                          ) : null}
                        </div>
                      ) : null}

                      {pj.trends.length ? (
                        <div style={{ marginTop: 14 }}>
                          <div className="eyeb">Trending over the last two weeks</div>
                          <ul className="lst">
                            {pj.trends.map(function (tr) {
                              const kk = K[tr.key];
                              return (
                                <li key={tr.key}>
                                  <b style={{ color: kk.hue }}>{kk.label}</b> {tr.worse ? "falling" : "improving"}:
                                  {" "}about {show(tr.now, kk.fmt)} now, heading for {show(tr.end, kk.fmt)} by month-end
                                  {tr.crosses ? <span className="offTag">WILL MISS</span> : null}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ) : null}

                      <p className="dim" style={{ fontSize: 11.5, marginTop: 12, marginBottom: 0 }}>
                        Projected from {pj.elapsed} days to {dayLabel(pj.asOf)}, assuming current rates continue. Calculated from the funnel, not generated.
                      </p>
                    </div>
                  </Grp>
                )
              ) : null}

              <div style={{ marginTop: 22 }}>
                <div className="eyeb" style={{ marginBottom: 6 }}>Quality</div>
                {["csat", "qa", "vc"].map(function (key) {
                  const d = a.kpis[key];
                  return (
                    <div className="kpiRow" key={key}>
                      <div>{K[key].label}<div className="dim" style={{ fontSize: 11.5 }}>target {show(d.tgt, K[key].fmt)}</div></div>
                      <span className={CH[d.st]}>{show(d.actual, K[key].fmt)}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 20 }}>
                {props.self ? (
                  <div>
                    <SessBox a={a} self />
                    {a.bad === 0 ? (
                      <p className="dim" style={{ marginTop: 0 }}>
                        Everything is on target this month, so the questions will be about what is working and how you keep it there.
                      </p>
                    ) : null}
                    <button className="btn go" disabled={busy} onClick={function () { coach(a, true); }}>
                      {busy ? "Getting your questions..." : out ? "Get them again" : "Prepare me for my 1-on-1"}
                    </button>
                    <p className="dim" style={{ fontSize: 11.5, lineHeight: 1.6 }}>
                      Questions to think about before you talk to your supervisor. Sends figures only, no names or IDs.
                    </p>
                    {out && out.error ? <p className="err">Could not load: {out.error}</p> : null}
                    {out && out.prep ? (
                      <div className="root" style={{ background: "linear-gradient(135deg,rgba(94,200,229,.13),rgba(61,220,151,.07))", borderColor: "rgba(94,200,229,.3)" }}>
                        <div className="eyeb" style={{ color: "#5EC8E5" }}>Before your 1-on-1</div>
                        <p style={{ margin: "7px 0 0", fontSize: 13.6, lineHeight: 1.65 }}>{out.prep}</p>
                      </div>
                    ) : null}
                    {out && Array.isArray(out.questions) ? out.questions.map(function (q, i) {
                      const kk = KPIS.filter(function (x) { return x.label.toLowerCase() === String(q.kpi || "").toLowerCase(); })[0];
                      return (
                        <div className="coach" key={i} style={{ borderLeft: "3px solid " + (kk ? kk.hue : "#5EC8E5") }}>
                          <h4 style={{ color: (KPIS.filter(function (x) { return x.label.toLowerCase() === String(q.kpi || "").toLowerCase(); })[0] || {}).hue || "#5EC8E5" }}>{q.kpi}</h4>
                          <p>{q.fact}</p>
                          <p style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 0 }}>{q.question}</p>
                        </div>
                      );
                    }) : null}
                  </div>
                ) : (
                  <div>
                    {a.bad === 0 ? (
                      <p className="dim" style={{ marginTop: 0 }}>
                        Every KPI is on target. The plan will focus on naming what is working so it holds.
                      </p>
                    ) : null}
                    <button className="btn go" disabled={busy} onClick={function () { coach(a, false); }}>
                      {busy ? "Reading the funnel..." : out ? "Run the diagnosis again" : "Diagnose and plan the 1-on-1"}
                    </button>
                    <p className="dim" style={{ fontSize: 11.5, lineHeight: 1.6 }}>
                      Sends the figures, targets, history and site averages. No names or IDs leave this page.
                    </p>
                    {out && out.error ? <p className="err">Coaching failed: {out.error}</p> : null}
                    {out && out.partial ? (
                      <p className="dim" style={{ fontSize: 12, color: "#FFB84D" }}>
                        The reply was cut short, so some sections may be missing. Run it again for the full plan.
                      </p>
                    ) : null}

                    {out && out.root_cause ? (
                      <Grp open={open} setOpen={setOpen} id="g_root" name="Root Cause" hue="#FF5C7A" startOpen meta="the one thing to fix">
                        <div className="root">
                          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, lineHeight: 1.5 }}>{out.root_cause}</p>
                          {Array.isArray(out.chain) ? (
                            <ul className="bul">
                              {out.chain.map(function (c, i) { return <li key={i}>{c}</li>; })}
                            </ul>
                          ) : null}
                        </div>
                      </Grp>
                    ) : null}

                    {out && (Array.isArray(out.check_yourself) || Array.isArray(out.questions)) ? (
                      <Grp open={open} setOpen={setOpen} id="g_prep" name="Prep Questions" hue="#5EC8E5" meta="yours, and your agent's">
                        {Array.isArray(out.check_yourself) ? (
                          <div className="coach" style={{ borderLeft: "3px solid #5EC8E5" }}>
                            <h4 style={{ color: "#5EC8E5" }}>Prep Questions For You</h4>
                            <p className="dim" style={{ fontSize: 12 }}>Your agent gets their own questions. These are yours, worth answering honestly before the session.</p>
                            <ul className="bul">
                              {out.check_yourself.map(function (c, i) { return <li key={i}>{c}</li>; })}
                            </ul>
                          </div>
                        ) : null}
                        {Array.isArray(out.questions) ? (
                          <div className="coach" style={{ borderLeft: "3px solid #A5B4FC" }}>
                            <h4 style={{ color: "#A5B4FC" }}>What Your Agent Has Been Asked</h4>
                            <p className="dim" style={{ fontSize: 12 }}>
                              They see these before the session, with no diagnosis. Expect them to arrive with their own explanation.
                            </p>
                            <ul className="bul">
                              {out.questions.map(function (q, i) {
                                return <li key={i}><b style={{ color: "#A5B4FC" }}>{q.kpi}</b> · {q.question}</li>;
                              })}
                            </ul>
                          </div>
                        ) : null}
                      </Grp>
                    ) : null}

                    {out && (out.opening || Array.isArray(out.listen_for) || Array.isArray(out.if_they_disagree)) ? (
                      <Grp open={open} setOpen={setOpen} id="g_run" name="Running the Conversation" hue="#3DDC97" meta="how to open, listen and handle pushback">
                        {out.opening ? (
                          <div className="coach" style={{ borderLeft: "3px solid #3DDC97" }}>
                            <h4 style={{ color: "#3DDC97" }}>Open With This</h4>
                            <p style={{ fontSize: 14.5, fontWeight: 700, marginBottom: 4 }}>{out.opening}</p>
                            <p className="dim" style={{ fontSize: 12, marginBottom: 0 }}>Let them go first.</p>
                          </div>
                        ) : null}
                        {Array.isArray(out.listen_for) ? (
                          <div className="coach" style={{ borderLeft: "3px solid #A3E635" }}>
                            <h4 style={{ color: "#A3E635" }}>Listen For</h4>
                            <ul className="bul">
                              {out.listen_for.map(function (l, i) { return <li key={i}>{l}</li>; })}
                            </ul>
                          </div>
                        ) : null}
                        {Array.isArray(out.if_they_disagree) ? (
                          <div className="coach" style={{ borderLeft: "3px solid #FDE047" }}>
                            <h4 style={{ color: "#FDE047" }}>If Their Story Does Not Match The Data</h4>
                            <ul className="bul">
                              {out.if_they_disagree.map(function (l, i) { return <li key={i}>{l}</li>; })}
                            </ul>
                          </div>
                        ) : null}
                      </Grp>
                    ) : null}

                    {out && Array.isArray(out.actions) ? (
                      <Grp open={open} setOpen={setOpen} id="g_act" name="What to Agree On" hue="#FFB84D" meta={out.actions.length + " actions for this week"}>
                        {out.actions.map(function (c, i) {
                          const kk = KPIS.filter(function (x) { return x.label.toLowerCase() === String(c.kpi || "").toLowerCase(); })[0];
                          const hue = kk ? kk.hue : "#FFB84D";
                          return (
                            <div className="coach" key={i} style={{ borderLeft: "3px solid " + hue }}>
                              <h4 style={{ color: hue }}>{c.kpi} <span className="dim" style={{ fontWeight: 400, fontSize: 12 }}>{c.trend}</span></h4>
                              <ul className="lst">
                                <li>{c.observation}</li>
                                <li><b>Ask for:</b> {c.action}</li>
                                <li className="dim"><b>Check in two weeks:</b> {c.check}</li>
                              </ul>
                            </div>
                          );
                        })}
                      </Grp>
                    ) : null}

                    <SessBox a={a} />
                  </div>
                )}
              </div>
      </div>
    );
  }



  if (!ses) {
    return (
      <div className="wb">
        <style>{CSS}</style>
        <div className="gate">
          <div className="gbox fade">
            <div className="brand" style={{ marginBottom: 16 }}>
              <div className="mark">
                {LADDER.map(function (k) { return <i key={k} style={{ background: K[k].hue, width: 10 + K[k].rung * 2.2 }} />; })}
              </div>
              <div>
                <div className="eyeb">Chat operations</div>
                <div className="dsp" style={{ fontSize: 21 }}>Floor Scorecard</div>
              </div>
            </div>

            {raw.length === 0 ? (
              <div>
                <p className="dim" style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 0 }}>
                  Load the monthly export to start. The file is read in your browser and never uploaded.
                </p>
                <label className="fld"><span>Scorecard CSV</span>
                  <input type="file" accept=".csv" onChange={load} />
                </label>
                {msg ? <p className="err">{msg}</p> : null}
              </div>
            ) : (
              <div>
                <label className="fld"><span>Sign in as</span></label>
                <div className="roles">
                  {["agent", "supervisor", "manager"].map(function (r) {
                    return (
                      <button key={r} className={role === r ? "on" : ""} onClick={function () { setRole(r); setWho(""); }}>
                        {r === "agent" ? "Agent" : r === "supervisor" ? "Supervisor" : "Team leader"}
                      </button>
                    );
                  })}
                </div>
                <label className="fld"><span>Profile</span>
                  <select value={who} onChange={function (e) { setWho(e.target.value); }}>
                    <option value="">Choose a profile</option>
                    {role === "agent"
                      ? people.map(function (a) { return <option key={a.emp} value={a.emp}>{a.name}</option>; })
                      : (role === "manager" ? mgrs : sups).map(function (n) { return <option key={n} value={n}>{n}</option>; })}
                  </select>
                </label>
                <label className="fld"><span>Password</span>
                  <input type="password" placeholder="demo" value={pw}
                    onChange={function (e) { setPw(e.target.value); }}
                    onKeyDown={function (e) { if (e.key === "Enter") signIn(); }} />
                </label>
                {msg ? <p className="err">{msg}</p> : null}
                <button className="btn go" style={{ width: "100%", marginTop: 18 }} onClick={signIn}>Sign in</button>
                <p className="dim" style={{ fontSize: 11.5, lineHeight: 1.6, marginBottom: 0 }}>
                  Every demo profile uses the password <b className="mono">demo</b>. Agents see only their own scorecard,
                  supervisors only their team. This checks a password typed into the page, so treat it as a demo, not security.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const roleName = { agent: "Agent", supervisor: "Supervisor", manager: "Team leader" }[ses.role];
  const me = ses.role === "agent" ? cur.filter(function (a) { return a.emp === ses.emp; })[0] : null;

  return (
    <div className="wb">
      <style>{CSS}</style>

      <div className="bar">
        <div className="brand">
          <div className="mark">
            {LADDER.map(function (k) { return <i key={k} style={{ background: K[k].hue, width: 10 + K[k].rung * 2.2 }} />; })}
          </div>
          <div>
            <div className="eyeb">Chat operations</div>
            <div className="dsp" style={{ fontSize: 17 }}>Floor Scorecard</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div className="mo">
            {months.map(function (m) {
              return <button key={m} className={m === month ? "on" : ""}
                onClick={function () { setMonth(m); setFrom(""); setTo(""); }}>{m}</button>;
            })}
          </div>
          {isDaily && monthDates.length ? (
            <div className="rng">
              <span className="eyeb" title="Working days only, weekends are not listed">Days</span>
              <select value={from} onChange={function (e) {
                const v = e.target.value; setFrom(v);
                if (v && to && to < v) setTo(v);
              }}>
                <option value="">All</option>
                {monthDates.map(function (d) { return <option key={d} value={d}>{dayLabel(d)}</option>; })}
              </select>
              <span className="dim">to</span>
              <select value={to} onChange={function (e) { setTo(e.target.value); }}>
                <option value="">All</option>
                {monthDates.filter(function (d) { return !from || d >= from; })
                  .map(function (d) { return <option key={d} value={d}>{dayLabel(d)}</option>; })}
              </select>
              {from || to ? (
                <button className="rngClr" onClick={function () { setFrom(""); setTo(""); }}>clear</button>
              ) : null}
            </div>
          ) : null}
          <div style={{ textAlign: "right", lineHeight: 1.3 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{ses.name}</div>
            <div className="eyeb">{roleName}</div>
          </div>
          <button className="btn gh" onClick={function () { setSes(null); setSel(null); }}>Sign out</button>
        </div>
      </div>

      <div className="wrap">
        {ses.role === "agent" ? (
          me ? (
            checkedIn[ses.emp] ? (
              <div>
                {(function () {
                  const fresh = updates.filter(function (u) { return u.hrs <= 24; });
                  const older = updates.filter(function (u) { return u.hrs > 24; });
                  return (
                    <Card open={open} setOpen={setOpen} id="myUpd" name="What's New?" tag="last 24 hours" tone={fresh.length ? "warn" : "neutral"}
                      stat={fresh.length
                        ? fresh.length + (fresh.length === 1 ? " new update" : " new updates")
                        : "Nothing new today"}>
                      {fresh.length ? fresh.map(function (u) {
                        return <Upd key={u.id} u={u} emp={ses.emp} />;
                      }) : (
                        <p className="dim" style={{ fontSize: 13, margin: 0 }}>
                          Nothing posted since yesterday. Anything older is on Confluence.
                        </p>
                      )}
                      {older.length ? (
                        <details style={{ marginTop: 10 }}>
                          <summary className="dim" style={{ cursor: "pointer", fontSize: 12.5 }}>Show earlier updates</summary>
                          {older.map(function (u) {
                            return <Upd key={u.id} u={u} emp={ses.emp} faded />;
                          })}
                        </details>
                      ) : null}
                      <p className="dim" style={{ fontSize: 11.5, marginTop: 12, marginBottom: 0 }}>
                        Opens the full write-up on Confluence in a new tab.
                      </p>
                    </Card>
                  );
                })()}
                <Card open={open} setOpen={setOpen} id="myScore" big name="My Scorecard" tag={me.grp} tone={me.bad ? "bad" : "good"}
                  stat={me.bad ? me.bad + (me.bad === 1 ? " KPI off target" : " KPIs off target") : "Everything on target"}>
                  <Detail a={me} self />
                </Card>
                {(function () {
                  const my = tasks.filter(function (t) { return t.agents.indexOf(ses.emp) >= 0; });
                  if (!my.length) return null;
                  const open = my.filter(function (t) { return !t.done[ses.emp]; });
                  return (
                    <Card open={open} setOpen={setOpen} id="myAdmin" name="Tasks" tag={(my.length - open.length) + " of " + my.length + " done"}
                      tone={open.length ? "warn" : "good"}
                      stat={open.length ? open.length + (open.length === 1 ? " thing to sort out" : " things to sort out") : "Nothing outstanding"}>
                      {my.map(function (t) {
                        const done = !!t.done[ses.emp];
                        return (
                          <label key={t.id} className="task" style={{ opacity: done ? 0.55 : 1 }}>
                            <input type="checkbox" checked={done} onChange={function () { toggleTask(t.id, ses.emp); }} />
                            <span className="tcat" style={{ background: TC[t.cat].hue }} />
                            <span style={{ flex: 1, textDecoration: done ? "line-through" : "none" }}>{t.title}</span>
                            {t.due ? <span className="dim mono" style={{ fontSize: 11.5 }}>due {t.due}</span> : null}
                          </label>
                        );
                      })}
                    </Card>
                  );
                })()}
              </div>
            ) : (function () {
              const run = (moods[ses.emp] || {}).lowDays || 0;
              const repeat = pick === "low" && run >= 2;
              return (
                <div className="checkin">
                  <div className="eyeb">Moodometer · {month}</div>
                  <h1 className="dsp ciTitle">{pick ? M[pick].label : "How are you today?"}</h1>
                  {!pick ? (
                    <p className="dim ciSub">
                      One tap before your scorecard. Your supervisor sees how the team is doing overall,
                      and only reaches out about a low day if you ask them to.
                    </p>
                  ) : null}

                  <div className="shapes">
                    {MOODS.filter(function (m) { return !pick || m.key === pick; }).map(function (m) {
                      return (
                        <button key={m.key} className={"shape" + (pick === m.key ? " on" : "")}
                          style={{ borderColor: pick === m.key ? m.hue : "var(--line)" }}
                          onClick={function () { if (!pick) { setPick(m.key); setDrv([]); setSup(null); } }}>
                          <Trace m={m} w={pick ? 104 : 78} />
                          {!pick ? <span className="shLb">{m.label}</span> : null}
                        </button>
                      );
                    })}
                  </div>

                  {pick === "up" ? (
                    <div className="ciBody">
                      <div className="eyeb">What is making today good? Pick any.</div>
                      <div className="pills">
                        {DRIVERS.map(function (d) {
                          const on = drv.indexOf(d) >= 0;
                          return <button key={d} className={"pill" + (on ? " on" : "")}
                            onClick={function () { setDrv(on ? drv.filter(function (x) { return x !== d; }) : drv.concat([d])); }}>{d}</button>;
                        })}
                      </div>
                    </div>
                  ) : null}

                  {pick === "ok" ? (
                    <div className="ciBody">
                      <p className="dim" style={{ fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
                        Logged. Steady days count too, they are what the team average is built on.
                      </p>
                    </div>
                  ) : null}

                  {pick === "low" ? (
                    <div className="ciBody">
                      {repeat ? (
                        <div style={{ padding: "14px 16px", borderRadius: 12, marginBottom: 16, textAlign: "left",
                          background: "rgba(255,184,77,.09)", border: "1px solid rgba(255,184,77,.3)" }}>
                          <div style={{ fontSize: 13.5, fontWeight: 700 }}>That is {run + 1} low days in a row.</div>
                          <p className="dim" style={{ fontSize: 12.5, margin: "6px 0 0", lineHeight: 1.65 }}>
                            Still nothing has been sent to anyone. Asking again because a run like this is worth talking
                            about with someone, whether that is your supervisor, HR, or the employee assistance line.
                          </p>
                        </div>
                      ) : null}
                      <div className="eyeb">
                        {repeat ? "Ready to talk to someone about it now?" : "Would you like your supervisor to check in with you about it?"}
                      </div>
                      <div className="pills">
                        <button className={"pill" + (sup === "yes" ? " on" : "")} onClick={function () { setSup("yes"); }}>Yes, let us talk</button>
                        <button className={"pill" + (sup === "no" ? " on" : "")} onClick={function () { setSup("no"); }}>
                          {repeat ? "Not yet" : "No, not today"}
                        </button>
                      </div>
                      {sup ? (
                        <p className="dim" style={{ fontSize: 12.5, marginTop: 12, lineHeight: 1.65 }}>
                          {sup === "no"
                            ? "Nothing gets sent and your name is not shared. Your answer only counts towards the team total, and we will ask again tomorrow."
                            : "Your name goes on your supervisor's list for today. Nothing else is shared."}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {pick ? (
                    <div style={{ marginTop: 26, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                      <button className="btn gh" onClick={function () { setPick(null); setDrv([]); setSup(null); }}>Pick again</button>
                      <button className="btn go" disabled={pick === "low" && !sup} onClick={function () {
                        saveMood();
                        setCheckedIn(function (o) { const n = Object.assign({}, o); n[ses.emp] = true; return n; });
                      }}>
                        {pick === "low" && !sup ? "Choose an option above" : "Save and see my scorecard"}
                      </button>
                    </div>
                  ) : null}
                </div>
              );
            })()
          ) : <div className="card"><p className="dim">No scorecard recorded for you in {month}.</p></div>
        ) : (
          <div>
            {awards && awards.list.length ? (
              <div className="hall fade">
                <div className="hallTop">
                  <div>
                    <div className="eyeb" style={{ color: "#FFD98A" }}>Recognition · {dayLabel(awardDate)} {awardDate.slice(5, 7) + "/" + awardDate.slice(0, 4)}</div>
                    <div className="dsp hallTitle" style={{ marginTop: 5 }}>
                      {awards.mode === "agents" ? "Top performers yesterday" : "Top teams yesterday"}
                    </div>
                  </div>
                  <div className="dim" style={{ fontSize: 11.5, maxWidth: 300, textAlign: "right" }}>
                    {awards.mode === "agents" ? "Ranked on total sales for the day." : "Ranked on sales per agent present, so team size does not decide it."}
                  </div>
                </div>
                <Podium list={awards.list} />
              </div>
            ) : null}
            {team ? (
              <Card open={open} setOpen={setOpen} id="health" name="Team Health" tag={spanLabel} tone={team.off ? "bad" : "good"}
                stat={team.off ? team.off + " of " + team.n + " need a conversation" : "Whole team on target"}>
                <div className="hero">
                  <Ring pct={(team.clean / team.n) * 100} color="#3DDC97" big={team.clean + "/" + team.n} cap={"hitting every\ntarget"} />
                  <div className="heroTxt">
                    <p style={{ marginTop: 0 }}>
                      {team.clean === 0 ? "No one is" : team.clean + (team.clean === 1 ? " agent is" : " agents are")} clear
                      on all ten KPIs. {team.missing} {team.missing === 1 ? "agent is" : "agents are"} below the sales target.
                      {team.worst ? " Most of them break first at " + K[team.worst].label.toLowerCase() + ", so that is where the coaching time goes." : ""}
                    </p>
                  </div>
                </div>

                {teamProj ? (
                  <div className="proj" style={{ marginTop: 20 }}>
                    <div className="eyeb" style={{ color: "#FDBA74" }}>
                      If nothing changes · as of {dayLabel(teamProj.asOf)}, {teamProj.future} days left
                    </div>
                    <div className="projHead">
                      {ses.role === "manager" ? "Site" : "Team"} projected at <b>{PESO}{show(teamProj.proj, "money")}</b> against {PESO}{show(teamProj.target, "money")}
                      {teamProj.gap > 0
                        ? <span style={{ color: "#FF5C7A" }}> &mdash; {PESO}{show(teamProj.gap, "money")} short</span>
                        : <span style={{ color: "#3DDC97" }}> &mdash; on track</span>}
                    </div>
                    <div className="dim" style={{ fontSize: 12.5 }}>
                      {teamProj.missing} of {teamProj.n} agents projected to miss the sales target.
                    </div>
                    <div className="cols" style={{ marginTop: 12 }}>
                      {teamProj.leaks.length ? (
                        <div className="col">
                          <div className="eyeb">Biggest money leaks</div>
                          <ul>
                            {teamProj.leaks.map(function (l) {
                              return <li key={l.key}><span className="dot" style={{ background: K[l.key].hue }} /><span>{K[l.key].label} <span className="dim">&mdash;</span> <b className="mono">{PESO}{show(l.value, "money")}</b> at stake</span></li>;
                            })}
                          </ul>
                        </div>
                      ) : null}
                      {ses.role === "manager" && teamProj.atRisk.length ? (
                        <div className="col">
                          <div className="eyeb">Teams most at risk</div>
                          <ul>
                            {teamProj.atRisk.map(function (t) {
                              return <li key={t.name}><span className="dot" style={{ background: "#FF5C7A" }} /><span>{t.name} <span className="dim">&mdash;</span> <b className="mono">{PESO}{show(t.gap, "money")}</b> short</span></li>;
                            })}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <p className="dim" style={{ fontSize: 11.5, marginTop: 10, marginBottom: 0 }}>
                      Assumes current rates continue. Calculated from the funnel, not generated.
                    </p>
                  </div>
                ) : isDaily && !to ? (
                  <p className="dim" style={{ fontSize: 12.5, marginTop: 18 }}>
                    Set an end date in <b>Days</b> to see month-end projections from that point.
                  </p>
                ) : null}

                <div style={{ marginTop: 22 }}>
                  <div className="ttl">
                    <div className="eyeb">The funnel · where the team stands at each stage</div>
                    <div className="dim" style={{ fontSize: 11.5 }}>bar length is the share of the team on target</div>
                  </div>
                  <Ladder rows={LADDER.map(function (key) {
                    const r = team.rates[key];
                    return {
                      key: key, pct: r.pct == null ? 0 : r.pct, txt: r.pct == null ? "-" : r.pct + "%",
                      brk: key === team.worst,
                      weak: r.pct != null && r.pct < 70 && key !== team.worst,
                    };
                  })} />
                </div>

                <div className="cols" style={{ marginTop: 24 }}>
                  <div className="col">
                    <div className="eyeb" style={{ color: "#3DDC97" }}>Holding up</div>
                    <ul>
                      {team.good.length ? team.good.slice(0, 4).map(function (k) {
                        return <li key={k.key}><span className="dot" style={{ background: k.hue }} /><span>{k.label} <span className="dim">&mdash;</span> <b className="mono">{team.rates[k.key].pct}%</b> on target</span></li>;
                      }) : <li className="dim">Nothing is above 70% this month.</li>}
                    </ul>
                  </div>
                  <div className="col">
                    <div className="eyeb" style={{ color: "#FF5C7A" }}>Needs work</div>
                    <ul>
                      {team.bad.length ? team.bad.slice(0, 4).map(function (k) {
                        return <li key={k.key}><span className="dot" style={{ background: k.hue }} /><span>{k.label} <span className="dim">&mdash;</span> <b className="mono">{team.rates[k.key].n - team.rates[k.key].pass}</b> of {team.rates[k.key].n} missing target</span></li>;
                      }) : <li className="dim">Every KPI is at or above 70%.</li>}
                    </ul>
                  </div>
                  <div className="col">
                    <div className="eyeb" style={{ color: "#FFB84D" }}>Why sales is short</div>
                    <ul>
                      {Object.keys(team.bn).length ? Object.keys(team.bn)
                        .sort(function (x, y) { return LADDER.indexOf(x) - LADDER.indexOf(y); })
                        .map(function (b) {
                          const counts = Object.keys(team.bn).map(function (k2) { return team.bn[k2]; });
                          const top = Math.max.apply(null, counts);
                          // only worth calling out when one stage clearly leads
                          const leads = counts.filter(function (c) { return c === top; }).length === 1;
                          const most = leads && counts.length > 1 && team.bn[b] === top;
                          return (
                            <li key={b}>
                              <span className="dot" style={{ background: K[b].hue }} />
                              <span>
                                <b className="mono">{team.bn[b]}</b> break first at {K[b].label.toLowerCase()}{" "}
                                {most ? <span className="most">{"biggest group"}</span> : null}
                              </span>
                            </li>
                          );
                        }) : <li className="dim">Everyone is hitting the sales target.</li>}
                    </ul>
                  </div>
                </div>
              </Card>
            ) : null}


            {teams.rows.length > 1 ? (
              <Card open={open} setOpen={setOpen} id="standings" name="Team Standings" tag={spanLabel}
                tone={myRank && myRank <= 3 ? "good" : myRank && myRank > teams.rows.length - 3 ? "bad" : "neutral"}
                stat={myRank ? "Your team is " + myRank + ordinalOf(myRank) + " of " + teams.rows.length + " on sales"
                  : teams.rows.length + " teams compared"}>
                <div className="scroll">
                  <table className="lb">
                    <thead>
                      <tr>
                        <th>Team</th><th>Agents</th>
                        {COMPARE.map(function (c) {
                          const on = cmpKey === c.key;
                          return (
                            <th key={c.key} className={"sort" + (on ? " act" : "")}
                              onClick={function () {
                                if (on) setCmpDir(cmpDir === "desc" ? "asc" : "desc");
                                else { setCmpKey(c.key); setCmpDir(c.good === "hi" ? "desc" : "asc"); }
                              }}>
                              {c.label}{on ? (cmpDir === "desc" ? " \u2193" : " \u2191") : ""}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {teams.rows.map(function (t) {
                        const isYou = ses.role === "supervisor" && t.name === ses.name;
                        return (
                          <tr key={t.name} className={isYou ? "you" : ""}>
                            <td style={{ fontWeight: isYou ? 700 : 500 }}>{t.name}{isYou ? <span className="tag">YOUR TEAM</span> : null}</td>
                            <td className="mono dim">{t.n}</td>
                            {COMPARE.map(function (c) {
                              const v = t.m[c.key], rk = t["rk_" + c.key];
                              const w = c.key === "sales" && v != null && teams.top.sales ? (v / teams.top.sales) * 100 : 0;
                              return (
                                <td key={c.key}>
                                  {w ? <span className="bg" style={{ width: w + "%", background: K.sales.hue }} /> : null}
                                  <span style={{ position: "relative" }}>
                                    <span className="mono" style={{ fontWeight: 600 }}>{show(v, c.fmt)}</span>
                                    <span className={"rk" + (rk === 1 ? " p1" : rk === 2 ? " p2" : rk === 3 ? " p3" : "")} style={{ marginLeft: 8 }}>{rk}</span>
                                  </span>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                      <tr>
                        <td className="eyeb" style={{ paddingTop: 12 }}>Site average</td><td></td>
                        {COMPARE.map(function (c) {
                          return <td key={c.key} className="mono dim" style={{ paddingTop: 12 }}>{show(teams.site[c.key], c.fmt)}</td>;
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            ) : null}

            <Card open={open} setOpen={setOpen} id="roster" name="Roster" tag={ses.role === "supervisor" ? "my team" : "whole site"}
              tone={mine.filter(function (a) { return a.bad > 0; }).length ? "warn" : "good"}
              stat={mine.filter(function (a) { return a.bad > 0; }).length + " of " + mine.length + " off target"}>
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 14 }}>
                <label className="chk">
                  <input type="checkbox" checked={offOnly} onChange={function (e) { setOffOnly(e.target.checked); }} />
                  Off target only
                </label>
                <span className="dim mono" style={{ fontSize: 12 }}>{list.length} shown</span>
              </div>
              <div className="scroll tall">
                <table>
                  <thead>
                    <tr>
                      <th className={"sort" + (sortKey === "name" ? " act" : "")} onClick={function () { clickSort("name"); }}>Agent</th>
                      {ses.role === "manager" ? <th className={"sort" + (sortKey === "sup" ? " act" : "")} onClick={function () { clickSort("sup"); }}>Supervisor</th> : null}
                      {KPIS.map(function (k) {
                        return (
                          <th key={k.key} className={"sort" + (sortKey === k.key ? " act" : "")} onClick={function () { clickSort(k.key); }}>
                            <span style={{ color: k.hue }}>{k.short}</span>{sortKey === k.key ? (sortDir === "desc" ? " \u2193" : " \u2191") : ""}
                          </th>
                        );
                      })}
                      <th className={"sort" + (sortKey === "bad" ? " act" : "")} onClick={function () { clickSort("bad"); }}>Off</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map(function (a) {
                      const br = firstBreak(a);
                      return (
                        <tr key={a.emp} className="ag" onClick={function () { setSel(a.emp); }}>
                          <td>
                            <div className="nm2">{a.name}</div>
                            <div className="id">{a.emp}{br ? " · breaks at " + K[br].short : ""}</div>
                          </td>
                          {ses.role === "manager" ? <td className="dim">{a.sup}</td> : null}
                          {KPIS.map(function (k) {
                            const d = a.kpis[k.key];
                            return <td key={k.key}><span className={CH[d.st]}>{show(d.actual, k.fmt)}</span></td>;
                          })}
                          <td className="mono" style={{ fontWeight: 700, color: a.bad ? "#FF5C7A" : "#3DDC97" }}>{a.bad}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>

            {mood ? (
              <Card open={open} setOpen={setOpen} id="mood" name="Moodometer" tag={to || from || "today"} tone={mood.asked.length ? "bad" : mood.counts.low ? "warn" : "good"}
                stat={mood.asked.length ? mood.asked.length + (mood.asked.length === 1 ? " person asked to talk" : " people asked to talk")
                  : mood.counts.low ? mood.counts.low + " logged a low day" : "No low days today"}>
                <div className="mbar">
                  {MOODS.map(function (m) {
                    const w = mood.answered ? (mood.counts[m.key] / mood.answered) * 100 : 0;
                    return <i key={m.key} style={{ width: w + "%", background: m.hue }} />;
                  })}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
                  {MOODS.map(function (m) {
                    return (
                      <div key={m.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Trace m={m} w={30} />
                        <span style={{ fontSize: 12.5 }}>
                          <b className="mono">{mood.counts[m.key] || 0}</b> <span className="dim">{m.label.toLowerCase()}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="cols" style={{ marginTop: 22 }}>
                  <div className="col">
                    <div className="eyeb" style={{ color: "#3DDC97" }}>What is lifting people</div>
                    <ul>
                      {mood.topDrivers.length ? mood.topDrivers.map(function (d) {
                        return <li key={d}><span className="dot" style={{ background: "#3DDC97" }} /><span>{d} <span className="dim">&mdash;</span> <b className="mono">{mood.drivers[d]}</b></span></li>;
                      }) : <li className="dim">Nobody has logged a good day yet.</li>}
                    </ul>
                  </div>

                  <div className="col" style={{ flex: "2 1 340px" }}>
                    <div className="eyeb" style={{ color: "#FF5C7A" }}>Asked to talk today</div>
                    <div style={{ marginTop: 9 }}>
                      {mood.asked.length ? mood.asked.map(function (a) {
                        const done = talked[a.emp];
                        return (
                          <div key={a.emp} className={"flag" + (done ? " done" : "")}>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: 13.5 }}>{a.name}</div>
                              <div className="dim" style={{ fontSize: 12 }}>
                                {done ? "You marked this as talked through." : "Low energy today and asked for a conversation."}
                              </div>
                            </div>
                            <button className="btn gh" onClick={function () {
                              setTalked(function (o) { const n = Object.assign({}, o); n[a.emp] = !n[a.emp]; return n; });
                            }}>{done ? "Undo" : "Mark as talked"}</button>
                          </div>
                        );
                      }) : <p className="dim" style={{ fontSize: 12.8, lineHeight: 1.6, margin: 0 }}>
                        Nobody has asked for a conversation today.
                      </p>}

                      {mood.priv ? (
                        <div style={{ marginTop: 10, padding: "11px 13px", borderRadius: 11, background: "rgba(255,255,255,.035)", border: "1px solid var(--line)" }}>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>
                            {mood.priv} {mood.priv === 1 ? "person" : "people"} logged a low day and kept it private
                          </div>
                          <div className="dim" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.6 }}>
                            No names, because they were promised none. Treat it as a signal about the team, not a person to find.
                            {mood.runs ? " " + mood.runs + " of them " + (mood.runs === 1 ? "has" : "have") + " logged low three days or more in a row and is being asked again directly." : ""}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Card>
            ) : null}

            <Card open={open} setOpen={setOpen} id="updates" name="Floor Updates" tag="last 24 hours" tone="neutral"
              stat={updates.filter(function (u) { return u.hrs <= 24; }).length + " posted for the floor"}>
              {updates.slice(0, 5).map(function (u) {
                const emps = mine.map(function (a) { return a.emp; });
                const rc = readCount(u.id, emps);
                const pct = emps.length ? Math.round((rc / emps.length) * 100) : 0;
                const waiting = emps.filter(function (e) { return !(reads[u.id] || {})[e]; });
                return (
                  <div key={u.id}>
                    <Upd u={u} />
                    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "-4px 0 10px 14px", flexWrap: "wrap" }}>
                      <div className="mbar" style={{ height: 6, margin: 0, flex: "1 1 140px", maxWidth: 220 }}>
                        <i style={{ width: pct + "%", background: pct === 100 ? "#3DDC97" : UT[u.type].hue }} />
                      </div>
                      <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: pct === 100 ? "#3DDC97" : pct < 50 ? "#FF5C7A" : "#FFB84D" }}>
                        {rc}/{emps.length} opened
                      </span>
                      {waiting.length && waiting.length <= 6 ? (
                        <span className="dim" style={{ fontSize: 11.5 }}>
                          not yet: {waiting.map(function (e) {
                            const p2 = mine.filter(function (a) { return a.emp === e; })[0];
                            return p2 ? p2.name.split(" ")[0] : e;
                          }).join(", ")}
                        </span>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <input type="text" placeholder="Post an update, e.g. new pricing table live" value={upTitle}
                  onChange={function (e) { setUpTitle(e.target.value); }}
                  onKeyDown={function (e) { if (e.key === "Enter") addUpdate(); }}
                  style={{ flex: "2 1 230px", width: "auto" }} />
                <select value={upType} onChange={function (e) { setUpType(e.target.value); }} style={{ flex: "0 1 125px", width: "auto" }}>
                  {UPDTYPES.map(function (u) { return <option key={u.key} value={u.key}>{u.label}</option>; })}
                </select>
                <input type="text" placeholder="Confluence link" value={upUrl}
                  onChange={function (e) { setUpUrl(e.target.value); }}
                  style={{ flex: "1 1 190px", width: "auto" }} />
                <button className="btn go" onClick={addUpdate}>Post</button>
              </div>
            </Card>

            {(function () {
              const mine2 = myTasks.filter(function (t) {
                return t.owner === ses.name || (ses.role === "manager" && t.from === ses.name);
              }).sort(function (x, y) {
                if (x.status === "done" && y.status !== "done") return 1;
                if (y.status === "done" && x.status !== "done") return -1;
                return (x.due || "9999").localeCompare(y.due || "9999");
              });
              const done = mine2.filter(function (t) { return t.status === "done"; }).length;
              const pct = mine2.length ? Math.round((done / mine2.length) * 100) : 0;
              return (
                <Card open={open} setOpen={setOpen} id="myOwn" name="My Tasks" tag={ses.role === "manager" ? "team leader" : "supervisor"}
                  tone={mine2.length && done === mine2.length ? "good" : mine2.length - done > 0 ? "warn" : "neutral"}
                  stat={mine2.length ? done + " of " + mine2.length + " done · " + pct + "%" : "Nothing on your list"}>

                  {mine2.length ? (
                    <div>
                      <div className="mbar" style={{ marginTop: 0 }}>
                        <i style={{ width: pct + "%", background: pct === 100 ? "#3DDC97" : "#FFB84D" }} />
                      </div>
                      <div className="scroll">
                        <table style={{ minWidth: 640 }}>
                          <thead>
                            <tr>
                              <th>Task</th><th>Due</th><th>Status</th><th>Comments</th><th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {mine2.map(function (t) {
                              const overdue = t.due && t.status !== "done" && t.due < today();
                              return (
                                <tr key={t.id}>
                                  <td style={{ minWidth: 200 }}>
                                    <div style={{ fontWeight: 600, textDecoration: t.status === "done" ? "line-through" : "none", opacity: t.status === "done" ? 0.6 : 1 }}>
                                      {t.title}
                                    </div>
                                    {t.owner !== ses.name ? <div className="dim" style={{ fontSize: 11 }}>assigned to {t.owner}</div>
                                      : t.from ? <div className="dim" style={{ fontSize: 11 }}>from {t.from}</div> : null}
                                  </td>
                                  <td className="mono" style={{ whiteSpace: "nowrap", color: overdue ? "#FF5C7A" : "var(--dim)" }}>
                                    {t.due || "-"}{overdue ? " !" : ""}
                                  </td>
                                  <td>
                                    <select value={t.status} onChange={function (e) { setMyStatus(t.id, e.target.value); }}
                                      style={{ width: "auto", padding: "5px 7px", fontSize: 12, color: MS[t.status].hue }}>
                                      {MTSTATUS.map(function (x) { return <option key={x.key} value={x.key}>{x.label}</option>; })}
                                    </select>
                                  </td>
                                  <td style={{ minWidth: 240 }}>
                                    {t.comments.map(function (c, i) {
                                      return (
                                        <div key={i} style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 4 }}>
                                          <span className="mono dim" style={{ fontSize: 10.5 }}>{c.at}</span> {c.text}
                                        </div>
                                      );
                                    })}
                                    <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                                      <input type="text" placeholder="Add a comment" value={cmt[t.id] || ""}
                                        onChange={function (e) { const v = e.target.value; setCmt(function (o) { const n = Object.assign({}, o); n[t.id] = v; return n; }); }}
                                        onKeyDown={function (e) { if (e.key === "Enter") addComment(t.id); }}
                                        style={{ padding: "5px 8px", fontSize: 12 }} />
                                      <button className="btn gh" style={{ padding: "5px 10px", fontSize: 12 }}
                                        onClick={function () { addComment(t.id); }}>Add</button>
                                    </div>
                                  </td>
                                  <td>
                                    <button className="rm" title="Remove task" onClick={function () { removeMyTask(t.id); }}>{"\u00D7"}</button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : <p className="dim" style={{ margin: 0 }}>Nothing on your list yet.</p>}

                  <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <input type="text" placeholder="Add a task" value={mtTitle}
                      onChange={function (e) { setMtTitle(e.target.value); }}
                      onKeyDown={function (e) { if (e.key === "Enter") addMyTask(); }}
                      style={{ flex: "2 1 220px", width: "auto" }} />
                    <input type="date" value={mtDue} onChange={function (e) { setMtDue(e.target.value); }}
                      style={{ flex: "0 1 160px", width: "auto" }} />
                    {ses.role === "manager" ? (
                      <select value={mtOwner} onChange={function (e) { setMtOwner(e.target.value); }}
                        style={{ flex: "1 1 170px", width: "auto" }}>
                        <option value="">Myself</option>
                        {Array.from(new Set(cur.map(function (a) { return a.sup; }))).sort().map(function (nme) {
                          return <option key={nme} value={nme}>{nme}</option>;
                        })}
                      </select>
                    ) : null}
                    <button className="btn go" onClick={addMyTask}>Add</button>
                  </div>
                </Card>
              );
            })()}

            {tasks.length ? (function () {
              const emps = mine.map(function (a) { return a.emp; });
              const rows2 = tasks.map(function (t) {
                const mineIn = t.agents.filter(function (e) { return emps.indexOf(e) >= 0; });
                const done = mineIn.filter(function (e) { return t.done[e]; });
                return { t: t, n: mineIn.length, done: done.length, open: mineIn.filter(function (e) { return !t.done[e]; }) };
              }).filter(function (r) { return r.n > 0; }).sort(function (x, y) {
                return (x.done / x.n) - (y.done / y.n);
              });
              if (!rows2.length) return null;
              const openItems = rows2.reduce(function (t2, r) { return t2 + (r.n - r.done); }, 0);
              return (
                <Card open={open} setOpen={setOpen} id="admin" name="Agent Task Tracker" tag={ses.role === "supervisor" ? "my team" : "whole site"}
                  tone={openItems ? "warn" : "good"}
                  stat={openItems ? openItems + " items still outstanding" : "All caught up"}>
                  {rows2.map(function (r) {
                    const pct = Math.round((r.done / r.n) * 100);
                    return (
                      <div key={r.t.id} style={{ padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                          <span className="tcat" style={{ background: TC[r.t.cat].hue }} />
                          <span style={{ fontWeight: 600, fontSize: 13.5, flex: 1 }}>{r.t.title}</span>
                          <span className="eyeb" style={{ color: TC[r.t.cat].hue }}>{TC[r.t.cat].label}</span>
                          {r.t.due ? <span className="dim mono" style={{ fontSize: 11.5 }}>due {r.t.due}</span> : null}
                          <span className="mono" style={{ fontSize: 12.5, fontWeight: 700, color: pct === 100 ? "#3DDC97" : pct < 50 ? "#FF5C7A" : "#FFB84D" }}>
                            {r.done}/{r.n}
                          </span>
                        </div>
                        <div className="mbar" style={{ height: 7, margin: "8px 0 0" }}>
                          <i style={{ width: pct + "%", background: pct === 100 ? "#3DDC97" : TC[r.t.cat].hue }} />
                        </div>
                        {r.open.length && r.open.length <= 8 ? (
                          <div className="dim" style={{ fontSize: 11.5, marginTop: 7, lineHeight: 1.6 }}>
                            Waiting on {r.open.map(function (e) {
                              const p2 = mine.filter(function (a) { return a.emp === e; })[0];
                              return p2 ? p2.name : e;
                            }).join(", ")}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}

                  <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <input type="text" placeholder="Add a task, e.g. submit medical certificate" value={ntTitle}
                      onChange={function (e) { setNtTitle(e.target.value); }}
                      onKeyDown={function (e) { if (e.key === "Enter") addTask(); }}
                      style={{ flex: "2 1 240px", width: "auto" }} />
                    <select value={ntCat} onChange={function (e) { setNtCat(e.target.value); }} style={{ flex: "0 1 130px", width: "auto" }}>
                      {TASKCATS.map(function (c) { return <option key={c.key} value={c.key}>{c.label}</option>; })}
                    </select>
                    <select value={ntWho} onChange={function (e) { setNtWho(e.target.value); }} style={{ flex: "1 1 170px", width: "auto" }}>
                      <option value="__team">Everyone in this view</option>
                      {mine.slice().sort(function (a, b) { return a.name.localeCompare(b.name); }).map(function (a) {
                        return <option key={a.emp} value={a.emp}>{a.name}</option>;
                      })}
                    </select>
                    <button className="btn go" onClick={addTask}>Assign</button>
                  </div>
                </Card>
              );
            })() : null}
          </div>
        )}
      </div>

      {sel ? (function () {
        const a = cur.filter(function (x) { return x.emp === sel; })[0];
        if (!a) return null;
        return (
          <div className="scrim" onClick={function () { setSel(null); }}>
            <div className="drw" onClick={function (e) { e.stopPropagation(); }}>
              <button className="btn gh" style={{ float: "right" }} onClick={function () { setSel(null); }}>Close</button>
              <Detail a={a} />
            </div>
          </div>
        );
      })() : null}
    </div>
  );
}
