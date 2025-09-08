'use client'

import { useBeep } from "@forestream/beep";

export function Beeper() {
  const {beep} = useBeep()
  return <input onInput={beep}/>
}
