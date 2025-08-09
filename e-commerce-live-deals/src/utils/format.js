export function currency(n){
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

export function timeLeft(expiresAt){
  const diff = new Date(expiresAt).getTime() - Date.now()
  if(diff<=0) return '00:00:00'
  const s = Math.floor(diff/1000)
  const hrs = String(Math.floor(s/3600)).padStart(2,'0')
  const mins = String(Math.floor((s%3600)/60)).padStart(2,'0')
  const secs = String(s%60).padStart(2,'0')
  return `${hrs}:${mins}:${secs}`
}