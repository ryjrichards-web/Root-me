export type Stage = 'Seed' | 'Germinating' | 'Seedling' | 'Vegetative' | 'Flowering/Fruiting' | 'Harvest';
export type Plant = { id:number; name:string; variety:string; emoji:string; garden:string; location:string; planted:string; stage:Stage; water:string; moisture:'Dry'|'Perfect'|'Wet'; sun:string; repot:string; note:string; photo:string };
export type Garden = { name:string; locations:string[]; count:number; emoji:string; location:string; locationConfigured:boolean };

export const gardens: Garden[] = [
  { name:'Home', locations:['Back yard','Patio','Sunny side'], count:8, emoji:'🏡', location:'Set your home location', locationConfigured:false },
  { name:"Mum’s House", locations:['Front yard','Shady side'], count:4, emoji:'🌻', location:'Set Mum’s location', locationConfigured:false },
];

export const plants: Plant[] = [
  { id:1, name:'Big Red', variety:'Beefsteak tomato', emoji:'🍅', garden:'Home', location:'Sunny side', planted:'12 May 2026', stage:'Flowering/Fruiting', water:'Today', moisture:'Dry', sun:'Full sun · 6–8 hrs', repot:'All settled', note:'First flowers are out. Give her a little shake for pollination.', photo:'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80' },
  { id:2, name:'Herb Robert', variety:'Sweet basil', emoji:'🌿', garden:'Home', location:'Patio', planted:'24 May 2026', stage:'Vegetative', water:'Tomorrow', moisture:'Perfect', sun:'Part sun · 4–6 hrs', repot:'Needs a bigger pot', note:'Pinch the tips. Bushier is better.', photo:'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=800&q=80' },
  { id:3, name:'Courgette Clooney', variety:'Black Beauty zucchini', emoji:'🥒', garden:"Mum’s House", location:'Front yard', planted:'2 June 2026', stage:'Seedling', water:'In 2 days', moisture:'Wet', sun:'Full sun · 6–8 hrs', repot:'Transplant this week', note:'Two true leaves. Absolutely thriving on attention.', photo:'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80' },
  { id:4, name:'Minty Python', variety:'Spearmint', emoji:'🌱', garden:'Home', location:'Shady side', planted:'8 April 2026', stage:'Vegetative', water:'Today', moisture:'Dry', sun:'Part shade', repot:'Contain this menace', note:'Do not let it escape the pot.', photo:'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=800&q=80' },
];

export const activity = [
  { garden:'Home', icon:'💧', text:'Watered Herb Robert', meta:'Patio · 2 hours ago' },
  { garden:'Home', icon:'📸', text:'Big Red showed off for a photo', meta:'Sunny side · Yesterday' },
  { garden:"Mum’s House", icon:'🌱', text:'Courgette Clooney popped up', meta:'Front yard · 2 days ago' },
];
