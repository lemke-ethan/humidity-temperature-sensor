/**
 * Type definitions for onoff GPIO library
 * Project: https://github.com/fivdi/onoff
 *
 * Provides access and control of GPIO pins on Linux boards like the Raspberry Pi.
 *
 * @module onoff
 */
declare module "onoff" {
  /**
   * GPIO direction: 'in', 'out', 'high', or 'low'.
   * - 'in': configure as input
   * - 'out': configure as output
   * - 'high': configure as output and set high
   * - 'low': configure as output and set low
   */
  export type Direction = "in" | "out" | "high" | "low";

  /**
   * GPIO edge detection: 'none', 'rising', 'falling', or 'both'.
   * - 'none': no interrupts
   * - 'rising': interrupt on rising edge
   * - 'falling': interrupt on falling edge
   * - 'both': interrupt on both edges
   */
  export type Edge = "none" | "rising" | "falling" | "both";

  /**
   * Options for configuring a GPIO pin.
   * @property debounceTimeout - debounce timeout in ms
   * @property activeLow - if true, inverts the logical value
   * @property reconfigureDirection - if true, allows direction reconfiguration
   * @property edge - edge detection mode
   */
  export interface GpioOptions {
    debounceTimeout?: number;
    activeLow?: boolean;
    reconfigureDirection?: boolean;
    edge?: Edge;
  }

  /**
   * Represents a GPIO pin.
   * @class
   * @see {@link https://github.com/fivdi/onoff#class-gpio}
   */
  export class Gpio {
    /**
     * Creates a new GPIO object.
     * @param gpio - GPIO pin number
     * @param direction - pin direction
     * @param edge - edge detection
     * @param options - additional options
     */
    constructor(
      gpio: number,
      direction: Direction,
      edge?: Edge,
      options?: GpioOptions,
    );

    /**
     * Asynchronously reads the value of the GPIO pin.
     * @param callback - called with error or value (0 or 1)
     */
    read(callback: (err: Error | null, value: 0 | 1) => void): void;
    /**
     * Synchronously reads the value of the GPIO pin.
     * @returns 0 or 1
     */
    readSync(): 0 | 1;

    /**
     * Asynchronously writes a value to the GPIO pin.
     * @param value - 0 or 1
     * @param callback - called with error
     */
    write(value: 0 | 1, callback: (err: Error | null) => void): void;
    /**
     * Synchronously writes a value to the GPIO pin.
     * @param value - 0 or 1
     */
    writeSync(value: 0 | 1): void;

    /**
     * Watches for hardware interrupts on the GPIO pin.
     * @param callback - called on interrupt with error or value
     */
    watch(callback: (err: Error | null, value: 0 | 1) => void): void;
    /**
     * Removes a specific interrupt watcher.
     * @param callback - the callback to remove
     */
    unwatch(callback?: (err: Error | null, value: 0 | 1) => void): void;
    /**
     * Removes all interrupt watchers.
     */
    unwatchAll(): void;

    /**
     * Gets the direction of the GPIO pin.
     * @returns direction
     */
    direction(): Direction;
    /**
     * Sets the direction of the GPIO pin.
     * @param direction - new direction
     */
    setDirection(direction: Direction): void;

    /**
     * Gets the edge setting of the GPIO pin.
     * @returns edge
     */
    edge(): Edge;
    /**
     * Sets the edge setting of the GPIO pin.
     * @param edge - new edge
     */
    setEdge(edge: Edge): void;

    /**
     * Gets whether the pin is active low.
     * @returns true if active low
     */
    activeLow(): boolean;
    /**
     * Sets whether the pin is active low.
     * @param invert - true to invert
     */
    setActiveLow(invert: boolean): void;

    /**
     * Unexports the GPIO pin and frees resources (async).
     */
    unexport(): void;
    /**
     * Unexports the GPIO pin and frees resources (sync).
     */
    unexportSync(): void;
  }

  /**
   * Checks if GPIO access is available on this system.
   * @returns true if available
   */
  export function available(): boolean;
}
