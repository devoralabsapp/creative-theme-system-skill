/* Original, code-native subject illustrations. Colors come from the owning Lab. */
export function siteArt(site,p,index=0){
 const ink=p.foreground,paper=p.surface,a=p.accent,b=p.secondary||p.background;
 const r=(x,y,w,h,f=paper,rx=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}"/>`;
 const c=(x,y,s,f=paper)=>`<circle cx="${x}" cy="${y}" r="${s}" fill="${f}"/>`;
 const d=(path,f='none')=>`<path d="${path}" fill="${f}"/>`;
 const lines=(n,x=235,y=275,w=280)=>Array.from({length:n},(_,i)=>d(`M${x} ${y+i*32}h${w-(i%3)*25}`)).join('');
 const star=(x,y,s=30)=>d(`M${x} ${y-s}l${s*.25} ${s*.72}L${x+s} ${y}l${-s*.75} ${s*.25}L${x} ${y+s}l${-s*.25} ${-s*.75}L${x-s} ${y}l${s*.75} ${-s*.28}Z`,a);
 const leaf=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})">${d('M0 0Q-110 -85 -80 -160Q30 -150 0 0',b)}${d('M0 0Q100 -40 110 -130Q-10 -150 0 0',a)}</g>`;
 const book=r(240,180,320,300)+d('M400 195v270M265 220h105M265 255h105M430 220h100M430 255h100')+d('M240 480q90-40 160 0q85-40 160 0');
 const building=r(235,170,330,320)+r(275,220,60,70,b)+r(360,220,60,70,a)+r(445,220,60,70,b)+r(275,320,60,70,b)+r(445,320,60,70,b)+r(355,370,75,120,a)+d('M190 495h420');
 const folder=d('M190 240v245h420V245H405l-45-55H210q-20 0-20 20Z',b)+d('M190 270h430l-35 215H220Z',paper);
 const plant=d('M400 470V280')+leaf(400,330,1)+leaf(400,390,.7)+d('M310 445h180l-35 110H345Z',paper);
 const monitor=r(190,160,420,285)+r(215,185,370,230,b)+d('M400 445v60M310 505h180');
 const camera=r(205,230,390,260)+r(275,195,110,35,a)+c(410,355,98,b)+c(410,355,58,paper)+r(230,260,70,30,a);
 const radio=r(205,245,390,245)+d('M260 245l230-110')+c(315,370,78,b)+c(315,370,46,ink)+r(425,280,135,45,a)+lines(3,435,365,105)+c(450,455,15,ink)+c(535,455,15,ink);
 const record=c(400,325,190,ink)+c(400,325,145,b)+c(400,325,112,ink)+c(400,325,65,a)+c(400,325,13,paper);
 const ticket=d('M200 205h400v75q-60 20 0 60v140H200V340q60-20 0-60Z',paper)+d('M490 205v275')+star(335,335,75);
 const pen=d('M310 450l-20 70 70-30 200-270-50-40Z',a)+d('M310 450l50 40M480 220l50 40');
 const chair=d('M265 325V175h270v150',paper)+r(240,330,320,55,a)+d('M270 385l-30 130M530 385l30 130');
 const cup=d('M245 265h270v150q-30 80-135 80t-135-80Z',paper)+d('M515 290q120-10 95 80q-15 45-95 35')+d('M285 525h250M330 210q-35-40 0-80M420 210q-35-40 0-80');
 const lens=c(400,320,175,paper)+c(400,320,115,b)+d('M520 450l100 100')+c(400,320,55,a);
 const envelope=r(210,235,380,255,paper)+d('M210 235l190 150 190-150M210 490l145-145M590 490L445 345');
 const headphones=d('M230 350V280a170 170 0 0 1 340 0v70')+r(195,315,85,170,a,30)+r(520,315,85,170,a,30)+d('M570 485q0 65-110 65');
 const planet=c(400,320,135,b)+`<ellipse cx="400" cy="320" rx="235" ry="60" transform="rotate(-25 400 320)" fill="none"/>`+star(210,170,25)+star(610,420,35);
 const mountain=d('M155 500l160-310 100 180 85-130 145 260Z',b)+d('M250 315l65-125 75 135-65-30Z',paper)+c(555,165,55,a);
 const jar=r(285,220,230,280,paper,30)+r(315,175,170,45,a)+r(325,300,150,125,b)+leaf(400,400,.5);
 const gift=r(230,290,340,230,paper)+r(210,240,380,70,a)+d('M400 240v280')+d('M400 240q-170-150-170-35q0 60 170 35q170-150 170-35q0 60-170 35',b);
 const pages=r(240,170,320,340,paper)+r(270,200,260,95,a)+lines(5,275,330,240);
 const game=d('M260 280q-60 0-85 180q-5 70 60 45l90-65h150l90 65q65 25 60-45q-25-180-85-180Z',paper)+d('M260 315v95M215 360h90')+c(505,335,19,a)+c(550,385,19,b);
 const grid=Array.from({length:9},(_,i)=>r(225+i%3*125,180+Math.floor(i/3)*110,95,80,i%2?a:paper)).join('');
 const toy=c(310,220,65,b)+c(490,220,65,b)+r(260,215,280,240,paper,85)+c(340,320,15,ink)+c(460,320,15,ink)+d('M360 380q40 35 80 0')+r(300,450,70,80,a)+r(430,450,70,80,a);
 const clothes=d('M285 200l75-30q40 65 80 0l75 30 100 140-85 55-40-60v200H310V335l-40 60-85-55Z',paper)+star(400,355,55);
 const vessel=d('M325 175h150v80q115 65 115 175q0 110-190 110T210 430q0-110 115-175Z',paper)+d('M275 375q125 80 250 0')+r(310,150,180,30,a);
 const keyboard=r(190,275,420,230,paper)+Array.from({length:24},(_,i)=>r(220+i%8*45,305+Math.floor(i/8)*50,32,32,i%5?a:b,3)).join('')+r(320,460,165,22,a);
 const patterns={
 arcade:game,desktop:monitor+star(505,260,45),book,radio,notes:pages+pen,architecture:building,magazine:pages,
 archive:folder+lines(3,275,325,220),portfolio:pen+star(245,220,55),team:c(290,250,60,b)+c(500,250,60,a)+d('M190 480v-75q100-150 200 0v75ZM400 480v-75q100-150 200 0v75Z',paper),
 printing:r(230,290,340,200)+r(275,170,250,170)+r(275,390,250,160)+lines(3,310,435,180),civic:building+star(400,110,35),interiors:chair,
 sport:c(400,325,190,a)+d('M210 325h380M400 135v380M275 180q250 145 0 290M525 180q-250 145 0 290'),camera,
 origami:d('M180 380l220-220 220 220-220 140Z',paper)+d('M180 380h440L400 160v360M180 380l220-70 220 70'),
 motion:c(400,325,170,b)+d('M350 230v190l150-95Z',a)+d('M185 220h-70M185 325h-100M185 430h-70'),pixel:grid,
 collage:r(220,180,285,330,a)+`<g transform="rotate(12 420 330)">${r(280,210,285,270,paper)}${c(420,315,85,b)}</g>`,printmaking:pages+`<g transform="rotate(-20 400 325)">${r(250,300,300,45,b)}</g>`,records:folder,
 tools:d('M240 190l115 115-50 50-115-115-30 65 100 100 70-20 185 180 70-70-180-185 20-70-100-100Z',paper),cinema: r(220,205,360,310)+Array.from({length:6},(_,i)=>r(240+(i%2)*285,225+Math.floor(i/2)*100,35,45,ink,0)).join('')+d('M350 300v135l110-67Z',a),
 circuits:r(310,240,180,180,a)+Array.from({length:4},(_,i)=>d(`M${330+i*45} 160v80M${330+i*45} 420v80M230 ${255+i*45}h80M490 ${255+i*45}h80`)).join(''),
 metro:r(260,160,280,340,paper,60)+r(290,210,220,150,b)+c(320,425,22,a)+c(480,425,22,a)+d('M300 500l-65 60M500 500l65 60'),botany:plant,
 poetry:pages+star(530,240,50),ceramic:vessel,planet,microgreens:plant,fonts:d('M230 500l150-330h40l150 330M285 380h230M200 500h100M500 500h100')+c(570,180,35,a),
 ocean:d('M160 380q80-100 160 0t160 0t160 0M160 450q80-100 160 0t160 0t160 0')+d('M270 300l150-150v150Z',paper)+d('M420 150l100 150H420Z',a)+d('M230 325h330l-60 60H290Z',b),postage:envelope+star(530,285,25),concert:ticket,
 vinyl:record,internet:monitor+d('M300 260l-50 50 50 50M500 260l50 50-50 50M430 240l-60 140'),synth:keyboard,playground:d('M210 500V200h170v300M380 260q160 0 160 180l60 60H420')+d('M210 270h170M210 340h170M210 410h170'),ecology:plant+planet,
 tape:r(205,220,390,260,paper)+r(240,255,320,110,b)+c(310,310,35,paper)+c(490,310,35,paper)+d('M280 480l30-70h180l30 70Z',a),fashion:clothes,focus:pages+c(555,185,65,a),tea:cup,
 wellness:d('M220 420q90 150 180 30q90 120 180-30M400 450v-140M300 360l100-50 100 50')+c(400,225,48,b)+d('M180 520h440'),sculpture:toy,
 crystal:d('M260 230l140-80 140 80 50 220-190 100-190-100Z',b)+d('M260 230l140 320 140-320M260 230h280M400 150v400M210 450h380'),glass:r(215,170,160,340,b)+r(385,170,200,340,paper)+d('M215 510l370-340M385 510l200-190'),bauhaus:c(330,290,150,a)+r(400,160,170,170,b)+d('M260 500l160-250 170 250Z',paper),furniture:chair,streetwear:clothes,
 hud:planet+`<g stroke-dasharray="12 12">${c(400,320,235,'none')}</g>`,biology:c(300,300,100,b)+c(485,345,140,paper)+c(500,340,50,a)+c(270,280,28,a),detective:lens+pages,space:planet+star(580,155,40),fiction:book,newspaper:pages+lines(2,290,245,210),
 fragrance:r(290,250,220,260,paper,45)+r(330,170,140,80,a)+r(330,345,140,80,b)+d('M340 130q-45-60 0-85M450 130q45-60 0-85'),stickers:toy+star(200,430,45),sketch:pen+building,comic:pages+star(400,310,90),fairytale:book+star(400,115,55),cottage:building+leaf(190,485,.6),flowers:plant+c(400,210,65,a)+c(345,230,42,b)+c(455,230,42,b),pottery:vessel+lines(2,300,430,200),
 food:r(200,200,400,325,paper,35)+r(225,225,150,270,b)+r(400,225,175,120,a)+r(400,370,175,125,b)+c(300,350,45,paper),homestay:building+star(560,160,35),travel:mountain,
 caves:d('M160 520l100-300 140-90 140 90 100 300Z',b)+d('M280 520l50-220 70-60 70 60 50 220Z',paper)+star(400,370,30),stars:planet+star(180,480,35),isometric:d('M220 250l180-100 180 100v230l-180 100-180-100Z',paper)+d('M220 250l180 100 180-100M400 350v230M310 200l180 100',b),
 hotel:building+c(400,335,35,a),vines:plant+leaf(260,460,.5),construct:building+`<g transform="rotate(-25 400 325)">${r(200,290,400,50,a,0)}</g>`,gothic:d('M250 520V300q0-130 150-200q150 70 150 200v220Z',b)+d('M280 520V310q0-100 120-170q120 70 120 170v210Z',paper)+d('M400 140v380M280 330h240'),dream:planet+`<g transform="rotate(12 400 325)">${r(290,230,220,230,paper,60)}</g>`,
 painting:r(215,170,370,350,paper)+d('M255 450q20-320 110-80t130-100q25-120 50-20','none')+c(325,250,55,a),workflow:grid+d('M315 275l65 0M440 385h65'),data: r(225,360,80,160,a)+r(355,270,80,250,b)+r(485,160,80,360,paper)+d('M190 525h420'),headphones,optics:lens,wayfinding:d('M390 160v370M240 190h320l65 65-65 65H240Z',paper)+d('M550 355H230l-65 65 65 65h320Z',a),
 cloud:d('M230 450q-100-40-45-130q20-40 90-45q30-150 160-110q85 20 100 115q140-10 110 100q-10 70-100 70Z',paper)+c(345,345,12,ink)+c(475,345,12,ink)+d('M380 385q30 30 60 0'),water:d('M400 140Q220 340 220 405a180 130 0 0 0 360 0Q580 340 400 140Z',b)+d('M290 420q110 100 220 0'),workshop:pen+vessel,herbs:plant,news:pages+pen,learning:grid+star(400,330,55),jazz:headphones+record,
 terminal:monitor+d('M260 260l65 50-65 50M360 360h100'),developer:monitor+d('M310 260l-50 50 50 50M490 260l50 50-50 50M425 240l-50 140'),finance:grid+ d('M220 475l110-100 95 35 150-220'),design:pages+star(400,310,65),components:grid,photo:camera+star(580,200,25),files:folder,knowledge:book+pen,security:d('M400 145l170 65v160q0 120-170 180q-170-60-170-180V210Z',paper)+d('M325 345l55 55 110-130'),
 pumpkin:d('M400 250q-150-90-190 70q-60 210 190 200q250 10 190-200q-40-160-190-70Z',a)+d('M400 250q-65-120 35-135')+d('M270 350l65-40 20 65ZM530 350l-65-40-20 65ZM300 430q100 100 200 0l-70 15-30-25-30 25Z',ink),gifts:gift,lunarnewyear:envelope+leaf(160,280,.6)+star(540,300,28),refurbished:monitor+d('M315 290q85-85 170 0l-15-50M485 330q-85 85-170 0l15 50')
 };
 if(!patterns[site.motif])throw Error('Missing subject illustration: '+site.motif);
 const esc=s=>s.replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
 const shift=index?((index%3)-1)*14:0;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 640" role="img" aria-labelledby="title"><title id="title">${esc(site.topic)} — ${esc(index?site.items[index-1].title:site.brand)}</title><rect width="800" height="640" fill="${p.background}"/><g fill="none" stroke="${ink}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M40 100H760M40 560H760" opacity=".2"/><circle cx="660" cy="170" r="65" fill="${a}" stroke="none" opacity=".25"/><g transform="translate(${shift} ${index%2*8})">${patterns[site.motif]}</g>${star(105,190,20)}${star(695,475,16)}</g><g font-family="ui-monospace,monospace" font-size="16" fill="${ink}"><text x="40" y="65">${esc(site.brand.toUpperCase())}</text><text x="40" y="601">${esc(site.topic.toUpperCase())}</text><text x="740" y="601" text-anchor="end">${String(index).padStart(2,'0')}</text></g></svg>\n`;
}
