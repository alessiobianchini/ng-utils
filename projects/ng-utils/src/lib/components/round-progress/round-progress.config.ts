import { InjectionToken, Provider } from '@angular/core';

/**
 * Export default configs
 */
export const ROUND_PROGRESS_DEFAULTS =
  new InjectionToken<RoundProgressDefaults>('ROUND_PROGRESS_DEFAULTS');

/**
 * Default configs
 */
export const ROUND_PROGRESS_DEFAULTS_PROVIDER: Provider = {
  provide: ROUND_PROGRESS_DEFAULTS,
  useValue: {
    radius: 125,
    animation: 'easeOutElastic',
    animationDelay: null,
    duration: 500,
    stroke: 30,
    color: '#45CCCE',
    background: '#EAEAEA',
    responsive: false,
    clockwise: true,
    semicircle: false,
    rounded: false
  }
};

/**
 * Default configs interface
 */
export interface RoundProgressDefaults {
  /** Radius value */
  radius?: number;
  /** Animation type */
  animation?: string;
  /** Animation delay */
  animationDelay?: number;
  /** Duration value */
  duration?: number;
  /** Stroke value */
  stroke?: number;
  /** Progress color */
  color?: string;
  /** Background color */
  background?: string;
  /** Is responsive */
  responsive?: boolean;
  /** Is clockwise */
  clockwise?: boolean;
  /** Is semicircle */
  semicircle?: boolean;
  /** Is rounded */
  rounded?: boolean;
}
