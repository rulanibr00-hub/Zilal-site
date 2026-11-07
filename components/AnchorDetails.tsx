'use client';
import { useEffect } from 'react';
export default function AnchorDetails(){useEffect(()=>{const reveal=()=>{const id=window.location.hash.slice(1);const target=document.getElementById(id);if(target instanceof HTMLDetailsElement){target.open=true;target.scrollIntoView({block:'center'});}};reveal();window.addEventListener('hashchange',reveal);return()=>window.removeEventListener('hashchange',reveal)},[]);return null}
