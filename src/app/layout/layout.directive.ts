import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appAsideMenuToggler]"
})
export class AsideToggleDirective {
  constructor() {}

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector("body").classList.toggle("aside-menu-hidden");
  }
}

@Directive({
  selector: "[appSidebarToggler]"
})
export class SidebarToggleDirective {
  constructor() {}

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector("body").classList.toggle("sidebar-hidden");
  }
}

@Directive({
  selector: "[appSidebarMinimizer]"
})
export class SidebarMinimizeDirective {
  constructor() {}

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector("body").classList.toggle("sidebar-minimized");
  }
}

@Directive({
  selector: "[appBrandMinimizer]"
})
export class BrandMinimizeDirective {
  constructor() {}

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector("body").classList.toggle("brand-minimized");
  }
}

@Directive({
  selector: "[appMobileSidebarToggler]"
})
export class MobileSidebarToggleDirective {
  constructor() {}

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp("(\\s|^)" + elementClassName + "(\\s|$)").test(
      target.className
    );
  }

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector("body").classList.toggle("sidebar-mobile-show");
  }
}

@Directive({
  selector: "[appSidebarClose]"
})
export class SidebarOffCanvasCloseDirective {
  constructor() {}

  private hasClass(target: any, elementClassName: string) {
    return new RegExp("(\\s|^)" + elementClassName + "(\\s|$)").test(
      target.className
    );
  }

  private toggleClass(elem: any, elementClassName: string) {
    let newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
    if (this.hasClass(elem, elementClassName)) {
      while (newClass.indexOf(" " + elementClassName + " ") >= 0) {
        newClass = newClass.replace(" " + elementClassName + " ", " ");
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, "");
    } else {
      elem.className += " " + elementClassName;
    }
  }

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();

    if (this.hasClass(document.querySelector("body"), "sidebar-off-canvas")) {
      this.toggleClass(document.querySelector("body"), "sidebar-opened");
    }
  }
}

@Directive({
  selector: "[appNavDropdown]"
})
export class NavDropdownDirective {
  constructor(private el: ElementRef) {}

  toggle() {
    this.el.nativeElement.classList.toggle("open");
  }
}

@Directive({
  selector: "[appNavDropdownToggle]"
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener("click", ["$event"])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}

@Directive({
  // tslint:disable-next-line:max-line-length
  selector:
    "[appHostReplace], app-layout-aside, app-layout-footer, app-layout-header, app-layout-sidebar"
})
export class ReplaceDirective implements OnInit {
  constructor(private el: ElementRef) {}

  // wait for the component to render completely
  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
