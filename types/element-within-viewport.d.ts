// File: element-within-viewport.d.ts

declare module "element-within-viewport" {
  interface Options {
    // Définissez ici les types pour les options du module si nécessaire
    // Par exemple :
    threshold?: number | number[];
    onEnter: () => void;
    // Ajoutez d'autres propriétés d'options au besoin
  }

  function elementWithinViewport(
    element: HTMLElement | null,
    options?: Options
  ): boolean;

  export = elementWithinViewport;
}
