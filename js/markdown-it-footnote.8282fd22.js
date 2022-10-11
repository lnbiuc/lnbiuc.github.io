function g(u,r,s,d){var p=Number(u[r].meta.id+1).toString(),_="";return typeof d.docId=="string"&&(_="-"+d.docId+"-"),_+p}function S(u,r){var s=Number(u[r].meta.id+1).toString();return u[r].meta.subId>0&&(s+=":"+u[r].meta.subId),"["+s+"]"}function w(u,r,s,d,p){var _=p.rules.footnote_anchor_name(u,r,s,d,p),T=p.rules.footnote_caption(u,r,s,d,p),I=_;return u[r].meta.subId>0&&(I+=":"+u[r].meta.subId),'<sup class="footnote-ref"><a href="#fn'+_+'" id="fnref'+I+'">'+T+"</a></sup>"}function M(u,r,s){return(s.xhtmlOut?`<hr class="footnotes-sep" />
`:`<hr class="footnotes-sep">
`)+`<section class="footnotes">
<ol class="footnotes-list">
`}function y(){return`</ol>
</section>
`}function E(u,r,s,d,p){var _=p.rules.footnote_anchor_name(u,r,s,d,p);return u[r].meta.subId>0&&(_+=":"+u[r].meta.subId),'<li id="fn'+_+'" class="footnote-item">'}function B(){return`</li>
`}function D(u,r,s,d,p){var _=p.rules.footnote_anchor_name(u,r,s,d,p);return u[r].meta.subId>0&&(_+=":"+u[r].meta.subId),' <a href="#fnref'+_+'" class="footnote-backref">\u21A9\uFE0E</a>'}var F=function(r){var s=r.helpers.parseLinkLabel,d=r.utils.isSpace;r.renderer.rules.footnote_ref=w,r.renderer.rules.footnote_block_open=M,r.renderer.rules.footnote_block_close=y,r.renderer.rules.footnote_open=E,r.renderer.rules.footnote_close=B,r.renderer.rules.footnote_anchor=D,r.renderer.rules.footnote_caption=S,r.renderer.rules.footnote_anchor_name=g;function p(o,e,t,l){var c,h,i,f,n,v,b,m,k,a,x,C=o.bMarks[e]+o.tShift[e],A=o.eMarks[e];if(C+4>A||o.src.charCodeAt(C)!==91||o.src.charCodeAt(C+1)!==94)return!1;for(n=C+2;n<A;n++){if(o.src.charCodeAt(n)===32)return!1;if(o.src.charCodeAt(n)===93)break}if(n===C+2||n+1>=A||o.src.charCodeAt(++n)!==58)return!1;if(l)return!0;for(n++,o.env.footnotes||(o.env.footnotes={}),o.env.footnotes.refs||(o.env.footnotes.refs={}),v=o.src.slice(C+2,n-2),o.env.footnotes.refs[":"+v]=-1,b=new o.Token("footnote_reference_open","",1),b.meta={label:v},b.level=o.level++,o.tokens.push(b),c=o.bMarks[e],h=o.tShift[e],i=o.sCount[e],f=o.parentType,x=n,m=k=o.sCount[e]+n-(o.bMarks[e]+o.tShift[e]);n<A&&(a=o.src.charCodeAt(n),d(a));){a===9?k+=4-k%4:k++;n++}return o.tShift[e]=n-x,o.sCount[e]=k-m,o.bMarks[e]=x,o.blkIndent+=4,o.parentType="footnote",o.sCount[e]<o.blkIndent&&(o.sCount[e]+=o.blkIndent),o.md.block.tokenize(o,e,t,!0),o.parentType=f,o.blkIndent-=4,o.tShift[e]=h,o.sCount[e]=i,o.bMarks[e]=c,b=new o.Token("footnote_reference_close","",-1),b.level=--o.level,o.tokens.push(b),!0}function _(o,e){var t,l,c,h,i,f=o.posMax,n=o.pos;return n+2>=f||o.src.charCodeAt(n)!==94||o.src.charCodeAt(n+1)!==91||(t=n+2,l=s(o,n+1),l<0)?!1:(e||(o.env.footnotes||(o.env.footnotes={}),o.env.footnotes.list||(o.env.footnotes.list=[]),c=o.env.footnotes.list.length,o.md.inline.parse(o.src.slice(t,l),o.md,o.env,i=[]),h=o.push("footnote_ref","",0),h.meta={id:c},o.env.footnotes.list[c]={content:o.src.slice(t,l),tokens:i}),o.pos=l+1,o.posMax=f,!0)}function T(o,e){var t,l,c,h,i,f=o.posMax,n=o.pos;if(n+3>f||!o.env.footnotes||!o.env.footnotes.refs||o.src.charCodeAt(n)!==91||o.src.charCodeAt(n+1)!==94)return!1;for(l=n+2;l<f;l++){if(o.src.charCodeAt(l)===32||o.src.charCodeAt(l)===10)return!1;if(o.src.charCodeAt(l)===93)break}return l===n+2||l>=f||(l++,t=o.src.slice(n+2,l-1),typeof o.env.footnotes.refs[":"+t]=="undefined")?!1:(e||(o.env.footnotes.list||(o.env.footnotes.list=[]),o.env.footnotes.refs[":"+t]<0?(c=o.env.footnotes.list.length,o.env.footnotes.list[c]={label:t,count:0},o.env.footnotes.refs[":"+t]=c):c=o.env.footnotes.refs[":"+t],h=o.env.footnotes.list[c].count,o.env.footnotes.list[c].count++,i=o.push("footnote_ref","",0),i.meta={id:c,subId:h,label:t}),o.pos=l,o.posMax=f,!0)}function I(o){var e,t,l,c,h,i,f,n,v,b,m=!1,k={};if(!!o.env.footnotes&&(o.tokens=o.tokens.filter(function(a){return a.type==="footnote_reference_open"?(m=!0,v=[],b=a.meta.label,!1):a.type==="footnote_reference_close"?(m=!1,k[":"+b]=v,!1):(m&&v.push(a),!m)}),!!o.env.footnotes.list)){for(i=o.env.footnotes.list,f=new o.Token("footnote_block_open","",1),o.tokens.push(f),e=0,t=i.length;e<t;e++){for(f=new o.Token("footnote_open","",1),f.meta={id:e,label:i[e].label},o.tokens.push(f),i[e].tokens?(n=[],f=new o.Token("paragraph_open","p",1),f.block=!0,n.push(f),f=new o.Token("inline","",0),f.children=i[e].tokens,f.content=i[e].content,n.push(f),f=new o.Token("paragraph_close","p",-1),f.block=!0,n.push(f)):i[e].label&&(n=k[":"+i[e].label]),n&&(o.tokens=o.tokens.concat(n)),o.tokens[o.tokens.length-1].type==="paragraph_close"?h=o.tokens.pop():h=null,c=i[e].count>0?i[e].count:1,l=0;l<c;l++)f=new o.Token("footnote_anchor","",0),f.meta={id:e,subId:l,label:i[e].label},o.tokens.push(f);h&&o.tokens.push(h),f=new o.Token("footnote_close","",-1),o.tokens.push(f)}f=new o.Token("footnote_block_close","",-1),o.tokens.push(f)}}r.block.ruler.before("reference","footnote_def",p,{alt:["paragraph","reference"]}),r.inline.ruler.after("image","footnote_inline",_),r.inline.ruler.after("footnote_inline","footnote_ref",T),r.core.ruler.after("inline","footnote_tail",I)};export{F as m};
