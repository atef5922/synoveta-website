"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export function ConferenceVideo() {
  const dialog = useRef(null);
  const video = useRef(null);
  const close = () => { video.current?.pause(); dialog.current?.close(); };
  return <><button className="cs-video-link" onClick={() => dialog.current?.showModal()}><span><Play aria-hidden="true"/></span>Watch Video</button><dialog className="cs-video-dialog" ref={dialog} onCancel={() => video.current?.pause()} onClick={event => { if (event.target === event.currentTarget) close(); }}><div><strong>Synoveta Technology Overview</strong><button onClick={close} aria-label="Close video"><X/></button></div><video ref={video} controls playsInline preload="none" src="/Home page/hero/home page video.mp4"/></dialog></>;
}

export function ConferenceProductRail({children}) {
  const rail = useRef(null);
  const [position,setPosition]=useState({start:true,end:false});
  const update=()=>{const el=rail.current;if(el)setPosition({start:el.scrollLeft<5,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-5});};
  const scroll=(direction)=>rail.current?.scrollBy({left:direction*(rail.current.clientWidth*.8),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  return <div className="cs-product-rail"><button className="cs-rail-prev" aria-label="Previous products" disabled={position.start} onClick={()=>scroll(-1)}><ChevronLeft/></button><div className="cs-product-grid" ref={rail} onScroll={update}>{children}</div><button className="cs-rail-next" aria-label="Next products" disabled={position.end} onClick={()=>scroll(1)}><ChevronRight/></button></div>;
}
