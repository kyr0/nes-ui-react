
export type ClassToggledListener = (isActive: boolean) => void;

export const watchForClassChanges = (element: HTMLElement, className: string, onClassToggled: ClassToggledListener, initial = false) => {

  let lastClassState = false;

   const observer = new MutationObserver(mutationsList => {
      
    for (let mutation of mutationsList) {
        
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          
        let currentClassState = (mutation.target as HTMLElement).classList.contains(className)
        
        if (lastClassState !== currentClassState) {
          lastClassState = currentClassState
          onClassToggled(currentClassState)
        }
      }
    }
  })
  observer.observe(element, { attributes: true })

  if (initial) {
      onClassToggled(element.classList.contains(className))
  }
}