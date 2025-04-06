import type { Horse } from "@/features/horses/types/horse"

export interface RaceRound {
    round: number
    distance: number
    horses: Horse[]
  }
  
  export interface RaceResult {
    round: number
    rankings: number[]
  }
  