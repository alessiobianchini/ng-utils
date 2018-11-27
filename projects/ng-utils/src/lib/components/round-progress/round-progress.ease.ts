import { Injectable } from '@angular/core';

/**
 * Service for round progressbar ease
 */
@Injectable()
export class RoundProgressEase {
  // t: current time (or position) of the neonate. This can be seconds or frames, steps,
  // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
  // b: beginning value of the property.
  // c: change between the beginning and destination value of the property.
  // d: total time of the neonate.

  /** Linear ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  linearEase(t: number, b: number, c: number, d: number): number {
    return c * t / d + b;
  }

  /** In quad ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInQuad(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t + b;
  }

  /** Out quad ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutQuad(t: number, b: number, c: number, d: number): number {
    return -c * (t /= d) * (t - 2) + b;
  }

  /** In out quad ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutQuad(t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }

    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  }

  /** In cubuc ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInCubic(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t * t + b;
  }

  /** Out ubic ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutCubic(t: number, b: number, c: number, d: number): number {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  /** In out cubic ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutCubic(t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    }

    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }

  /** In quart ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInQuart(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t * t * t + b;
  }

  /** Out quart ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutQuart(t: number, b: number, c: number, d: number): number {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  /** In out quart ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutQuart(t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    }

    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }

  /** In quint ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInQuint(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t * t * t * t + b;
  }

  /** Out quint ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutQuint(t: number, b: number, c: number, d: number): number {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  /** In out quint ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutQuint(t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }

    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }

  /** In sine ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInSine(t: number, b: number, c: number, d: number): number {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }

  /** Out sine ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutSine(t: number, b: number, c: number, d: number): number {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }

  /** In out sine ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutSine(t: number, b: number, c: number, d: number): number {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }

  /** In expo ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInExpo(t: number, b: number, c: number, d: number): number {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  /** Out expo ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutExpo(t: number, b: number, c: number, d: number): number {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }

  /** In out expo ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutExpo(t: number, b: number, c: number, d: number): number {
    if (t === 0) {
      return b;
    }

    if (t === d) {
      return b + c;
    }

    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  /** In circ ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInCirc(t: number, b: number, c: number, d: number): number {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  /** Out circ ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutCirc(t: number, b: number, c: number, d: number): number {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  /** In out circ ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutCirc(t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }

    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }

  /** In elastic ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInElastic(t: number, b: number, c: number, d: number): number {
    let s = 1.70158;
    const p = d * 0.3;
    let a = c;

    if (t === 0) {
      return b;
    }

    if ((t /= d) === 1) {
      return b + c;
    }

    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  }

  /** Out elastic ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutElastic(t: number, b: number, c: number, d: number): number {
    let s = 1.70158;
    const p = d * 0.3;
    let a = c;

    if (t === 0) {
      return b;
    }

    if ((t /= d) === 1) {
      return b + c;
    }

    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  }

  /** In out elastic ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutElastic(t: number, b: number, c: number, d: number): number {
    let s = 1.70158;
    const p = d * (0.3 * 1.5);
    let a = c;

    if (t === 0) {
      return b;
    }

    if ((t /= d / 2) === 2) {
      return b + c;
    }

    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }

    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
        Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }

    return a * Math.pow(2, -10 * (t -= 1)) *
      Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  }

  /** In back ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @param s s
   * @returns animation
   */
  easeInBack(t: number, b: number, c: number, d: number, s = 1.70158): number {
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }

  /** Out back ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @param s s
   * @returns animation
   */
  easeOutBack(t: number, b: number, c: number, d: number, s = 1.70158): number {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }

  /** In out back ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @param s s
   * @returns animation
   */
  easeInOutBack(t: number, b: number, c: number, d: number, s = 1.70158): number {
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }

    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }

  /**
   * In bounce ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInBounce(t: number, b: number, c: number, d: number): number {
    return c - this.easeOutBounce(d - t, 0, c, d) + b;
  }

  /** Out bounce ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeOutBounce(t: number, b: number, c: number, d: number): number {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    }

    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
  }

  /** In out bounce ease
   * @param t t
   * @param b b
   * @param c c
   * @param d d
   * @returns animation
   */
  easeInOutBounce(t: number, b: number, c: number, d: number): number {
    if (t < d / 2) {
      return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    }

    return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
}
