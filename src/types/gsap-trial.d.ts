declare module "gsap-trial/SplitText" {
  export interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    absolute?: boolean;
  }

  export class SplitText {
    constructor(
      targets: string | Element | Element[] | NodeListOf<Element> | Array<string>,
      vars?: SplitTextOptions
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
