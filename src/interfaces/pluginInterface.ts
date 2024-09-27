import EventEmitter from "events";

export abstract class PluginInterface {
  constructor() {
    if (this.constructor === PluginInterface) {
      throw new Error("PluginInterface cannot be instantiated directly.");
    }
  }

  init(_coreApp: EventEmitter) {
    throw new Error("init() method must be implemented by subclasses.");
  }

  handleCommand(_command: string) {
    throw new Error(
      "handleCommand() method must be implemented by subclasses.",
    );
  }
}
